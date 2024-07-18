package rubertsdenim.inventarios.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import rubertsdenim.inventarios.model.Producto;

public interface ProductoRepositorio extends MongoRepository<Producto, ObjectId>{
    List<Producto> findByNombreRegexOrCategoriaRegexOrColorRegexOrCantidadRegex(String nombre, String categoria, String color, String cantidad);
}
