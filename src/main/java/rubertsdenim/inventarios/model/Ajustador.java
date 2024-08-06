package rubertsdenim.inventarios.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Ajustador_Medida")
public class Ajustador {
    @Id
    private String id;
    private String name_departament;
    private String size;
    private double size_tall;
}
