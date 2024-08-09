package rubertsdenim.inventarios.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Font;
import com.lowagie.text.Image;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.BaseFont;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import rubertsdenim.inventarios.model.PdfPedido;

@Service
public class PdfPedidoServicio {
    
    private static final long MAX_FILE_SIZE = 1 * 1024 * 1024; // 1 MB
    private static final String[] ALLOWED_CONTENT_TYPES = {"image/jpeg", "image/png"};

    public byte[] generarPDF(PdfPedido pedido) throws IOException{
        Document document  = new Document(PageSize.LETTER.rotate());
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        try{
            PdfWriter.getInstance(document, baos);
            document.open();

            // Cargar la fuente Poppins desde un archivo local
            BaseFont baseFont = BaseFont.createFont("src/main/resources/fonts/Poppins-Regular.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED);
            BaseFont baseFontBold = BaseFont.createFont("src/main/resources/fonts/Poppins-Bold.ttf", BaseFont.IDENTITY_H, BaseFont.EMBEDDED);

            // Crear fuentes para negrita y normal
            Font boldFont = new Font(baseFontBold, 11);
            Font normalFont = new Font(baseFont, 11);

            // Crear la tabla con 3 columnas
            PdfPTable table = new PdfPTable(3);
            table.setWidthPercentage(100);

            // Agregar la imagen a la celda combinada
            if (pedido.getDropzoneImagenE() != null && !pedido.getDropzoneImagenE().isEmpty()) {
                MultipartFile imagenMarca = pedido.getDropzoneImagenE();
                if (isValidImage(imagenMarca)) {
                    try {
                        byte[] imageBytesMarca = imagenMarca.getBytes();
                        Image imageMarca = Image.getInstance(imageBytesMarca);
                        imageMarca.scaleToFit(160, 80);
                        // Crear la celda combinada para la columna 1 y agregar la imagen
                        PdfPCell cellImage = new PdfPCell(imageMarca);
                        cellImage.setRowspan(2); // Combina las celdas en las dos filas
                        cellImage.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
                        cellImage.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
                        cellImage.setPadding(5); // Espaciado alrededor de la imagen
                        table.addCell(cellImage);

                    } catch (IOException | DocumentException e) {
                        e.printStackTrace();
                        PdfPCell errorCell = new PdfPCell(new Paragraph("Error al procesar la imagen de marca: " + e.getMessage()));
                        errorCell.setRowspan(2);
                        errorCell.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
                        errorCell.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
                        table.addCell(errorCell);
                    }
                } else {
                    PdfPCell errorCell = new PdfPCell(new Paragraph("La imagen de marca no es válida."));
                    errorCell.setRowspan(2);
                    errorCell.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
                    errorCell.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
                    table.addCell(errorCell);
                }
            } else {
                // Agregar una celda vacía si no hay imagen
                PdfPCell emptyCell = new PdfPCell(new Paragraph("Imagen"));
                emptyCell.setRowspan(2);
                emptyCell.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
                emptyCell.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
                table.addCell(emptyCell);
            }

            // Celdas de la primera fila
            Phrase phraseDpto = new Phrase("Departamento: ", boldFont);
            phraseDpto.add(new Phrase(pedido.getDepartamento().trim(), normalFont));
            PdfPCell cellDpto = new PdfPCell(phraseDpto);
            cellDpto.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            cellDpto.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            table.addCell(cellDpto);

            Phrase phraseFecha = new Phrase("Fecha: ", boldFont);
            phraseFecha.add(new Phrase(pedido.getFecha().trim(), normalFont));
            PdfPCell cellFecha = new PdfPCell(phraseFecha);
            cellFecha.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            cellFecha.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            table.addCell(cellFecha);

            // Celdas de la segunda fila
            String tallas = (pedido.getListaTallas() != null) 
                ? String.join(", ", pedido.getListaTallas()) 
                : "No seleccionadas";
            Phrase phraseTalla = new Phrase("Tallas: ", boldFont);
            phraseTalla.add(new Phrase(tallas, normalFont));
            PdfPCell cellTalla = new PdfPCell(phraseTalla);
            cellTalla.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            cellTalla.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            table.addCell(cellTalla);

            Phrase phraseTemporada = new Phrase("Temporada: ", boldFont);
            phraseTemporada.add(new Phrase(pedido.getTemporada().trim(), normalFont));
            PdfPCell cellTemporada = new PdfPCell(phraseTemporada);
            cellTemporada.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            cellTemporada.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            table.addCell(cellTemporada);

            // Agregar la tabla al documento
            document.add(table);

            document.add(new Paragraph(" "));
            document.add(createStyledParagraph("Estilos: ", pedido.getEstilos().trim(), boldFont, normalFont));
            document.add(createStyledParagraph("Tipo de Corte: ", pedido.getCategoria().trim(), boldFont, normalFont));
            document.add(createStyledParagraph("Proveedor: ", pedido.getProvedor().trim(), boldFont, normalFont));
            document.add(createStyledParagraph("Talla de la Muestra: ", pedido.getTallas().trim(), boldFont, normalFont));
            String tipoCorte = pedido.getCategoria().equals("Moda") ? "Fit: " + pedido.getFit().trim() : "";
            if (!tipoCorte.isEmpty()) {
                String fitLabel = "Fit: ";
                String fitValue = pedido.getFit().trim();
                
                Paragraph fitParagraph = createStyledParagraph(fitLabel, fitValue, boldFont, normalFont);
                document.add(fitParagraph);
            }
            document.add(new Paragraph(" "));

            // Crear la tabla con 4 columnas
            PdfPTable tabla2 = new PdfPTable(4);
            tabla2.setWidthPercentage(100);

            // Establecer el ancho para cada columna
            float[] anchoColumnas = {2f, 3f, 1f, 1f};
            tabla2.setWidths(anchoColumnas);

            // Configurar bordes de la tabla
            tabla2.getDefaultCell().setBorderWidth(0);

            // Agregar imágenes de las Etiquetas
            List<byte[]> imageFiles = pedido.getImageFiles();

            // Celdas para la Fila 1
            Phrase phraseDescripcion = new Phrase("Descripción: ", boldFont);
            phraseDescripcion.add(new Phrase(pedido.getDescripcion().trim(), normalFont));
            PdfPCell cellDescript = new PdfPCell(phraseDescripcion);
            cellDescript.setRowspan(2);
            tabla2.addCell(cellDescript);

            PdfPCell cellProd;
            MultipartFile imagenProducto = pedido.getDropzoneFile();
            if (imagenProducto != null && !imagenProducto.isEmpty()) {
                if (isValidImage(imagenProducto)) {
                    try {
                        byte[] imageBytesProducto = imagenProducto.getBytes();
                        Image imageProducto = Image.getInstance(imageBytesProducto);
                        imageProducto.scaleToFit(299, 305);
                        cellProd = new PdfPCell(imageProducto);
                        cellProd.setPadding(5);
                        cellProd.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
                        cellProd.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
                    } catch (IOException | DocumentException e) {
                        e.printStackTrace();
                        cellProd = new PdfPCell(new Paragraph("Error al procesar la imagen de producto: " + e.getMessage()));
                    }
                } else {
                    cellProd = new PdfPCell(new Paragraph("La imagen de producto no es válida."));
                }
            } else {
                cellProd = new PdfPCell(new Paragraph("No hay imagen de producto."));
            }
            cellProd.setRowspan(7);
            tabla2.addCell(cellProd);

            Phrase phraseCantidadEtiquetas = new Phrase("Cantidad de Etiquetas: ", boldFont);
            phraseCantidadEtiquetas.add(new Phrase(String.valueOf(pedido.getNumImagesSelect().trim()), normalFont));
            PdfPCell cellCantEtiquetas = new PdfPCell(phraseCantidadEtiquetas);
            cellCantEtiquetas.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            cellCantEtiquetas.setColspan(2);
            tabla2.addCell(cellCantEtiquetas);

            // Celdas para la Fila 2
            PdfPCell cellEtiqueta1 = new PdfPCell();
            if (imageFiles.size() > 0) {
                Image image1 = Image.getInstance(imageFiles.get(0));
                image1.scaleToFit(95, 85);
                cellEtiqueta1 = new PdfPCell(image1);
            } else {
                cellEtiqueta1 = new PdfPCell(new Paragraph("No hay imagen"));
            }
            cellEtiqueta1.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            cellEtiqueta1.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            cellEtiqueta1.setRowspan(2);
            tabla2.addCell(cellEtiqueta1);

            PdfPCell cellEtiqueta2 = new PdfPCell();
            if (imageFiles.size() > 1) {
                Image image2 = Image.getInstance(imageFiles.get(1));
                image2.scaleToFit(95, 85);
                cellEtiqueta2 = new PdfPCell(image2);
            } else {
                cellEtiqueta2 = new PdfPCell(new Paragraph("No hay imagen"));
            }
            cellEtiqueta2.setRowspan(2);
            cellEtiqueta2.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            cellEtiqueta2.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            tabla2.addCell(cellEtiqueta2);

            // Celdas para la Fila 3
            Phrase phrase = new Phrase("Tela: ", boldFont);
            phrase.add(new Phrase(pedido.getTela().trim(), normalFont));
            PdfPCell cellTela = new PdfPCell(phrase);
            cellTela.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            tabla2.addCell(cellTela);
            
            // Celdas para la Fila 4
            Phrase phraseLavadoProceso = new Phrase("Lavado/Procesado: ", boldFont);
            phraseLavadoProceso.add(new Phrase(pedido.getLavado_procesado().trim(), normalFont));
            PdfPCell cellLavadoProceso = new PdfPCell(phraseLavadoProceso);
            cellLavadoProceso.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            tabla2.addCell(cellLavadoProceso);

            PdfPCell cellEtiqueta3 = new PdfPCell();
            if (imageFiles.size() > 2) {
                Image image3 = Image.getInstance(imageFiles.get(2));
                image3.scaleToFit(95, 85);
                cellEtiqueta3 = new PdfPCell(image3);
            } else {
                cellEtiqueta3 = new PdfPCell(new Paragraph("No hay imagen"));
            }
            cellEtiqueta3.setRowspan(2);
            cellEtiqueta3.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            cellEtiqueta3.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            tabla2.addCell(cellEtiqueta3);
            
            PdfPCell cellEtiqueta4 = new PdfPCell();
            if (imageFiles.size() > 3) {
                Image image4 = Image.getInstance(imageFiles.get(3));
                image4.scaleToFit(95, 85);
                cellEtiqueta4 = new PdfPCell(image4);
            } else {
                cellEtiqueta4 = new PdfPCell(new Paragraph("No hay imagen"));
            }
            cellEtiqueta4.setRowspan(2);
            cellEtiqueta4.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            cellEtiqueta4.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            tabla2.addCell(cellEtiqueta4);

            // Celdas para la Fila 5
            Phrase phraseBotonHeb = new Phrase("Botón/Hebilla: ", boldFont);
            phraseBotonHeb.add(new Phrase(pedido.getBotonHebilla().trim(), normalFont));
            PdfPCell cellBotonHeb = new PdfPCell(phraseBotonHeb);
            cellBotonHeb.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            tabla2.addCell(cellBotonHeb);

            // Celdas para la Fila 6
            Phrase phraseHilo = new Phrase("Hilo: ", boldFont);
            phraseHilo.add(new Phrase(pedido.getHilo().trim(), normalFont));
            PdfPCell cellHilo = new PdfPCell(phraseHilo);
            cellHilo.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            tabla2.addCell(cellHilo);
            
            PdfPCell cellEtiqueta5 = new PdfPCell();
            if (imageFiles.size() > 4) {
                Image image5 = Image.getInstance(imageFiles.get(4));
                image5.scaleToFit(95, 85);
                cellEtiqueta5 = new PdfPCell(image5);
            } else {
                cellEtiqueta5 = new PdfPCell(new Paragraph("No hay imagen"));
            }
            cellEtiqueta5.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            cellEtiqueta5.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            cellEtiqueta5.setRowspan(2);
            tabla2.addCell(cellEtiqueta5);

            Phrase phraseAutor = new Phrase("Autorizado por: ", boldFont);
            PdfPCell cellAutor = new PdfPCell(phraseAutor);
            cellAutor.setRowspan(2);
            tabla2.addCell(cellAutor);

            Phrase phraseNotas = new Phrase("Notas: ", boldFont);
            PdfPCell cellNotas = new PdfPCell(phraseNotas);
            tabla2.addCell(cellNotas);

            // Añadir tabla al documento
            document.add(tabla2);
            
        } catch (DocumentException e) {
            e.printStackTrace();
        } finally {
            document.close();
        }

        return baos.toByteArray();
    }

    private boolean isValidImage(MultipartFile file) {
        if (file.getSize() > MAX_FILE_SIZE) {
            return false;
        }

        for (String allowedType : ALLOWED_CONTENT_TYPES) {
            if (allowedType.equals(file.getContentType())) {
                return true;
            }
        }
        return false;
    }

    private static Paragraph createStyledParagraph(String label, String content, Font boldFont, Font normalFont) {
        Phrase phrase = new Phrase(label, boldFont);
        phrase.add(new Phrase(content, normalFont));
        return new Paragraph(phrase);
    }
}