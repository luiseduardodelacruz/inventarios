package rubertsdenim.inventarios.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "departamentos")
public class Departamento {
    @Id
    private String id;
    private String name_departament;
}
