package rubertsdenim.inventarios.model;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.Data;

@Data
public class PdfPedido {
    private String departamento;
    private String fecha;
    private String temporada;
    private List<String> listaTallas;
    private String descripcion;
    private String estilos;
    private String categoria;
    private String fit;
    private String tallas;
    private String provedor;
    private String tela;
    private String lavado_procesado;
    private String botonHebilla;
    private String hilo;
    private String numImagesSelect;
    private List<byte[]> imageFiles;
    private MultipartFile dropzoneImagenE;
    private MultipartFile dropzoneFile;
}