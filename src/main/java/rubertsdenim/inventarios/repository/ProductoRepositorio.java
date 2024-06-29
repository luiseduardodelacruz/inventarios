package rubertsdenim.inventarios.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import rubertsdenim.inventarios.model.Producto;

public interface ProductoRepositorio extends MongoRepository<Producto, ObjectId>{

}
