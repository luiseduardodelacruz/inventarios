package rubertsdenim.inventarios.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;

@Data
@Document(collection = "etapas_proceso")
public class EtapasProceso {
    @Id
    private String id;
    private String etapa;
}
