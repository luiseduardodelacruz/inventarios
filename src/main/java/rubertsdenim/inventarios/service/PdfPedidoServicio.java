package rubertsdenim.inventarios.service;

import java.io.ByteArrayOutputStream;
import java.io.IOException;

import org.springframework.stereotype.Service;

import com.lowagie.text.Document;
import com.lowagie.text.DocumentException;
import com.lowagie.text.Paragraph;
import com.lowagie.text.pdf.PdfWriter;

import rubertsdenim.inventarios.model.PdfPedido;

@Service
public class PdfPedidoServicio {

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
                document.add(new Paragraph("Imagen Marca: " + pedido.getDropzoneImagenE().getOriginalFilename()));
            }
            if (pedido.getDropzoneFile() != null && !pedido.getDropzoneFile().isEmpty()) {
                document.add(new Paragraph("Archivo Producto: " + pedido.getDropzoneFile().getOriginalFilename()));
            }

        } catch (DocumentException e) {
            e.printStackTrace();
        } finally {
            document.close();
        }

        return baos.toByteArray();
    }
}
