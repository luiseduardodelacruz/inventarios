package rubertsdenim.inventarios.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "tallas")
public class Tallas {
    @Id
    private Object _id;
    private String id;
    private String size;
}