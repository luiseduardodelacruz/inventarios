package rubertsdenim.inventarios.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.lowagie.text.DocumentException;

import jakarta.servlet.http.HttpSession;

import rubertsdenim.inventarios.service.PdfPedidoServicio;
import rubertsdenim.inventarios.exception.ImagenNoValida;
import rubertsdenim.inventarios.exception.RecursoNoEncontrado;
import rubertsdenim.inventarios.model.PdfPedido;
import rubertsdenim.inventarios.model.User;

@Controller
public class PdfPedidoControlador {
    
    @Autowired 
    private PdfPedidoServicio pdfpedidoservicio;

    @GetMapping("/pedido")
    public String generarPedidoPDF(Model model, HttpSession session) {
        User userAuth = (User) session.getAttribute("user");
        if (userAuth == null) {
            return "redirect:/inicio-sesion";
        }
        model.addAttribute("pedido", new PdfPedido());
        model.addAttribute("usuario", userAuth);
        return "pedido";
    }

    @PostMapping("/generar-pdf")
    public ResponseEntity<byte[]> generarPdf(@ModelAttribute PdfPedido pedido, @RequestParam(value = "dropzoneImagenE", required = false) MultipartFile imagenMarca, @RequestParam(value = "dropzoneFile", required = false) MultipartFile imagenProducto, @RequestParam("dropzoneFilesEtiquetas") MultipartFile[] files, RedirectAttributes redirectAttributes) throws DocumentException, IOException {

        // Verificar imágenes antes de procesar
        if (imagenMarca != null && !isValidImage(imagenMarca)) {
            throw new ImagenNoValida("La imagen cargada en el campo Marca no es válida. Asegúrate de que la imagen sea de máximo 1 MB y esté en formato JPG, JPEG, PNG o GIF. Ajusta la imagen y vuelve a intentarlo.");
        }

        if (imagenProducto != null && !isValidImage(imagenProducto)) {
            throw new ImagenNoValida("La imagen cargada en el campo Producto no es válida. Asegúrate de que la imagen sea de máximo 1 MB y esté en formato JPG, JPEG, PNG o GIF. Ajusta la imagen y vuelve a intentarlo.");
        }

        // Configurar imágenes en el objeto PdfPedido
        pedido.setDropzoneImagenE(imagenMarca);
        pedido.setDropzoneFile(imagenProducto);

        // Procesar las imágenes
        List<byte[]> imageFiles = new ArrayList<>();
        for (MultipartFile file : files) {
            if (file != null && isValidImage(file)) {
                imageFiles.add(file.getBytes());
            } else {
                throw new ImagenNoValida("Una o más imágenes en el campo de Etiquetas no cumplen con los requisitos. Asegúrate de que cada imagen sea de máximo 1 MB y esté en formato JPG, JPEG, PNG o GIF. Ajusta las imágenes y vuelve a intentarlo.");
            }
        }
        pedido.setImageFiles(imageFiles);
    
        byte[] pdfBytes;
        try {
            pdfBytes = pdfpedidoservicio.generarPDF(pedido);
        } catch (Exception e) {
            throw new RecursoNoEncontrado("Ocurrió un problema al crear el archivo PDF: " + e.getMessage() + ". Por favor, asegúrese de que todos los campos estén completos y en el formato correcto.");
        }

        HttpHeaders headers = new HttpHeaders();
        /* Descargar el archivo PDF Directamente
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=pedido.pdf");
        */
        headers.add(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=pedido.pdf");
        headers.add(HttpHeaders.CONTENT_TYPE, "application/pdf");

        return new ResponseEntity<>(pdfBytes, headers, HttpStatus.OK);
    }

    private boolean isValidImage(MultipartFile file) {
        // Verificar el tamaño del archivo (máximo 1 MB)
        if (file.getSize() > 1 * 1024 * 1024) {
            return false;
        }

        // Verificar el tipo de contenido
        String contentType = file.getContentType();
        return contentType != null && (contentType.equals("image/jpeg") || contentType.equals("image/png") || contentType.equals("image/gif"));
    }
}
