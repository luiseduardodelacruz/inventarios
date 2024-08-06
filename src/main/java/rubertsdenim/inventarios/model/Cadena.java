package rubertsdenim.inventarios.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "cadenas")
public class Cadena {
    @Id
    private String id;
    private String name_chain;
}
