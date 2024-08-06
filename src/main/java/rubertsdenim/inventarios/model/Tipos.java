package rubertsdenim.inventarios.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "tipo_corte")
public class Tipos {
    @Id
    private String id;
    private String guy;
}