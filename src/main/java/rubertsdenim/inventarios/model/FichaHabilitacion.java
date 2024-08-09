package rubertsdenim.inventarios.model;

import lombok.Data;
import java.util.List;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Datos_Form")
public class FichaHabilitacion {
    private String fecha;
    private String estilo;
    private String corte;
    private String etapas;
    private String cadena;
    private String departamentos;
    private String procesos;
    private String fechaEntrega;
    private String maquilero;
    private Integer sumaDobleces;
    private String tipos; 
    private List<String> tallas; // Agregado para tallas
    private List<Integer> dobleces; // Agregado para dobleces
    private List<Double> bultos;
    private String color; // Agregado para bultos
}
