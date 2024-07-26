package com.example.inventarios.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;;;


@Data
@Document(collection = "elasticoPuño_Medida")
public class ElasticoPuño {
    @Id
    private String Id;
    private String name_Departament;
    private String size;
    private int size_tall;
}
