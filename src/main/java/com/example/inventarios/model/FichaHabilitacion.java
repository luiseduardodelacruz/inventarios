package com.example.inventarios.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "Datos_Form" )
public class FichaHabilitacion {
    @Id
    private String fecha;
    private String estilo;
    private String corte;
    private int total;
    private String cadena;
    private String departamentos;
    private String procesos;
    private String fechaEntrega;
}
