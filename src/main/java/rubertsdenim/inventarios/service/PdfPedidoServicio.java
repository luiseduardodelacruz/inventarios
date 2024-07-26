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
            document.add(new Paragraph("Tallas: " + pedido.getTallas()));
        } catch (DocumentException e) {
            e.printStackTrace();
        } finally {
            document.close();
        }

        return baos.toByteArray();
    }
}
