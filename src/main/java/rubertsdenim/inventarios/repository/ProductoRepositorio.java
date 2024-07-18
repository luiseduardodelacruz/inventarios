package rubertsdenim.inventarios.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import rubertsdenim.inventarios.model.Producto;

public interface ProductoRepositorio extends MongoRepository<Producto, ObjectId>{
    List<Producto> findByNombreRegexOrCategoriaRegexOrColorRegex(String nombre, String categoria, String color);
    List<Producto> findByCantidad(int cantidad);
    List<Producto> findByCategoria(String categoria);
}
