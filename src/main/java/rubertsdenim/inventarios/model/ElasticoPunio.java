package rubertsdenim.inventarios.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "elasticoPuño_Medida")
public class ElasticoPunio {
    @Id
    private String Id;
    private String name_Departament;
    private String size;
    private double size_tall;
}
