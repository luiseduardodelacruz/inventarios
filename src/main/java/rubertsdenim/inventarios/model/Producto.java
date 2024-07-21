package rubertsdenim.inventarios.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.ToString;

@Data
@ToString
@Document(collection = "Inventario")
public class Producto {

    @Id
    private ObjectId idProducto;

    private String nombre;
    private int cantidad;
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
