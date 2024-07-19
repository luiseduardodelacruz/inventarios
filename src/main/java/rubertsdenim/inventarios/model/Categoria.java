package rubertsdenim.inventarios.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Document(collection = "categoria")
public class Categoria {

    @Id
    private ObjectId idCategoria;

    private String nombre;

    public Categoria() {
    }
}
