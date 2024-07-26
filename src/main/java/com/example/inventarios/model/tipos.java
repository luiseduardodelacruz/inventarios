package com.example.inventarios.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "tipo_corte")
public class tipos {
    @Id
    private String id;
    private String guy;
}