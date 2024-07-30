package rubertsdenim.inventarios.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Image;
import com.lowagie.text.PageSize;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

import rubertsdenim.inventarios.model.PdfPedido;

@Service
public class PdfPedidoServicio {

    private static final long MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
    private static final String[] ALLOWED_CONTENT_TYPES = {"image/jpeg", "image/png"};

    public byte[] generarPDF(PdfPedido pedido) throws IOException{
        Document document  = new Document(PageSize.LETTER.rotate());
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        try{
            PdfWriter.getInstance(document, baos);
            document.open();

            // Crear la tabla con 3 columnas
            PdfPTable table = new PdfPTable(3);
            table.setWidthPercentage(100); // Ancho de la tabla en porcentaje del ancho de la página

            // Agregar la imagen a la celda combinada
            if (pedido.getDropzoneImagenE() != null && !pedido.getDropzoneImagenE().isEmpty()) {
                MultipartFile imagenMarca = pedido.getDropzoneImagenE();
                if (isValidImage(imagenMarca)) {
                    try {
                        byte[] imageBytesMarca = imagenMarca.getBytes();
                        Image imageMarca = Image.getInstance(imageBytesMarca);
                        imageMarca.scaleToFit(80, 80); // Ajustar el tamaño de la imagen

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
                        table.addCell(errorCell);
                    }
                } else {
                    PdfPCell errorCell = new PdfPCell(new Paragraph("La imagen de marca no es válida."));
                    errorCell.setRowspan(2);
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
            PdfPCell cellDpto = new PdfPCell(new Paragraph("Departamento: " + pedido.getDepartamento()));
            cellDpto.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            cellDpto.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            table.addCell(cellDpto);

            PdfPCell cellFecha = new PdfPCell(new Paragraph("Fecha: " + pedido.getFecha()));
            cellFecha.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            cellFecha.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            table.addCell(cellFecha);

            // Celdas de la segunda fila
            String tallas = (pedido.getListaTallas() != null) 
                ? String.join(", ", pedido.getListaTallas()) 
                : "No seleccionadas";
            PdfPCell cellTalla = new PdfPCell(new Paragraph("Tallas: " + tallas));
            cellTalla.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            cellTalla.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            table.addCell(cellTalla);

            PdfPCell cellTemporada = new PdfPCell(new Paragraph("Temporada: " + pedido.getTemporada()));
            cellTemporada.setHorizontalAlignment(PdfPCell.ALIGN_CENTER);
            cellTemporada.setVerticalAlignment(PdfPCell.ALIGN_MIDDLE);
            table.addCell(cellTemporada);

            // Agregar la tabla al documento
            document.add(table);
            
            document.add(new Paragraph("Estilos: " + pedido.getEstilos()));
            document.add(new Paragraph("Tipo de Corte: " + pedido.getCategoria()));
            document.add(new Paragraph("Proveedor: " + pedido.getProvedor()));
            document.add(new Paragraph("Talla de la Muestra: " + pedido.getTallas()));
            
            String tipoCorte = pedido.getCategoria().equals("moda") ? "Fit: " + pedido.getFit() : "";
            if (!tipoCorte.isEmpty()) {
                document.add(new Paragraph(tipoCorte));
            }
            
            document.add(new Paragraph("Descripción: " + pedido.getDescripcion()));
            document.add(new Paragraph("Tela: " + pedido.getTela()));
            document.add(new Paragraph("Lavado/Procesado: " + pedido.getLavado_procesado()));
            document.add(new Paragraph("Botón/Hebilla: " + pedido.getBotonHebilla()));
            document.add(new Paragraph("Hilo: " + pedido.getHilo()));
            
            document.add(new Paragraph("Número de Imágenes Seleccionadas: " + pedido.getNumImagesSelect()));

            if (pedido.getDropzoneFile() != null && !pedido.getDropzoneFile().isEmpty()) {
                MultipartFile imagenProducto = pedido.getDropzoneFile();
                if (isValidImage(imagenProducto)) {
                    try {
                        byte[] imageBytesProducto = imagenProducto.getBytes();
                        Image imageProducto = Image.getInstance(imageBytesProducto);
                        imageProducto.scaleToFit(250, 250);
                        document.add(new Paragraph("Imagen Producto: " + imagenProducto.getOriginalFilename()));
                        document.add(imageProducto);
                    } catch (IOException | DocumentException e) {
                        e.printStackTrace();
                        document.add(new Paragraph("Error al procesar la imagen de producto: " + e.getMessage()));
                    }
                } else {
                    document.add(new Paragraph("La imagen de producto no es válida."));
                }
            }

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
}
