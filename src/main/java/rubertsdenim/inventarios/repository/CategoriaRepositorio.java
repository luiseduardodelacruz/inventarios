package rubertsdenim.inventarios.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import rubertsdenim.inventarios.model.Categoria;

public interface CategoriaRepositorio extends MongoRepository<Categoria, ObjectId>{

}