package rubertsdenim.inventarios.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Document(collection = "Inventario")
public class Producto {

    @Id
    private ObjectId idProducto;

    @Min(value = 0, message = "La Cantidad No Puede ser Negativa")
    @Max(value = 2140999999, message = "La Cantidad es Demasiado Grande")
    private int cantidad;

    private String nombre;
    private String imagen;
    private String categoria;
    private String color;
    private String anchor;
    private String longitud;
    private String calibre;
    private String tipo;
    private String tapa;
    private String tamanio;
    private String marca;
    private String talla;
    private String departamento;
    private String proceso;

    public Producto() {   
    }
}