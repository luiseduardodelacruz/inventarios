package rubertsdenim.inventarios.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document(collection = "procesos")
public class Procesos {
    @Id
    private String id;
    private String name_process;
}
