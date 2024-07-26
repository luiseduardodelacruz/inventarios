package rubertsdenim.inventarios.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import com.lowagie.text.DocumentException;

import rubertsdenim.inventarios.service.PdfPedidoServicio;
import rubertsdenim.inventarios.model.PdfPedido;

@Controller
public class PdfPedidoControlador {

    @Autowired 
    private PdfPedidoServicio pdfpedidoservicio;

    @GetMapping("/pedido")
    public String generarPedidoPDF(Model model) {
        model.addAttribute("pedido", new PdfPedido());
        return "pedido";
    }

    @PostMapping("/generar-pdf")
    public ResponseEntity<byte[]> generarPdf(@ModelAttribute PdfPedido pedido) throws DocumentException, IOException {
        byte[] pdfBytes = pdfpedidoservicio.generarPDF(pedido);

        HttpHeaders headers = new HttpHeaders();
        /* Descargar el archivo PDF Directamente
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=pedido.pdf");
        */
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=pedido.pdf");
        headers.add(HttpHeaders.CONTENT_TYPE, "application/pdf");

        return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
    }
}