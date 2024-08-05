package com.example.inventarios.model;

import lombok.Data;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "etapas_proceso")
public class Etapa {
 private String id;
 private String etapa;
}
