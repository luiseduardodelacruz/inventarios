package rubertsdenim.inventarios.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Image;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;

import rubertsdenim.inventarios.model.PdfPedido;

@Service
public class PdfPedidoServicio {

    private static final long MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB
    private static final String[] ALLOWED_CONTENT_TYPES = {"image/jpeg", "image/png"};

    public byte[] generarPDF(PdfPedido pedido) throws IOException{
        Document document  = new Document();
        ByteArrayOutputStream baos = new ByteArrayOutputStream();

        try{
            PdfWriter.getInstance(document, baos);
            document.open();

            document.add(new Paragraph("Departamento: " + pedido.getDepartamento()));
            document.add(new Paragraph("Fecha: " + pedido.getFecha()));
            document.add(new Paragraph("Temporada: " + pedido.getTemporada()));
            
            String tallas = (pedido.getListaTallas() != null) 
                ? String.join(", ", pedido.getListaTallas()) 
                : "No seleccionadas";
            document.add(new Paragraph("Tallas: " + tallas));
            
            document.add(new Paragraph("Descripción: " + pedido.getDescripcion()));
            document.add(new Paragraph("Estilos: " + pedido.getEstilos()));
            document.add(new Paragraph("Categoría: " + pedido.getCategoria()));
            document.add(new Paragraph("Fit: " + pedido.getFit()));
            document.add(new Paragraph("Tallas adicionales: " + pedido.getTallas()));
            document.add(new Paragraph("Proveedor: " + pedido.getProvedor()));
            document.add(new Paragraph("Tela: " + pedido.getTela()));
            document.add(new Paragraph("Lavado/Procesado: " + pedido.getLavado_procesado()));
            document.add(new Paragraph("Botón/Hebilla: " + pedido.getBotonHebilla()));
            document.add(new Paragraph("Hilo: " + pedido.getHilo()));
            document.add(new Paragraph("Número de Imágenes Seleccionadas: " + pedido.getNumImagesSelect()));

            if (pedido.getDropzoneImagenE() != null && !pedido.getDropzoneImagenE().isEmpty()) {
                MultipartFile imagenMarca = pedido.getDropzoneImagenE();
                if (isValidImage(imagenMarca)) {
                    try {
                        byte[] imageBytesMarca = imagenMarca.getBytes();
                        Image imageMarca = Image.getInstance(imageBytesMarca);
                        imageMarca.scaleToFit(125, 125);
                        document.add(new Paragraph("Imagen Marca: " + imagenMarca.getOriginalFilename()));
                        document.add(imageMarca);
                    } catch (IOException | DocumentException e) {
                        e.printStackTrace();
                        document.add(new Paragraph("Error al procesar la imagen de marca: " + e.getMessage()));
                    }
                } else {
                    document.add(new Paragraph("La imagen de marca no es válida."));
                }
            }
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
