package rubertsdenim.inventarios.repository;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import rubertsdenim.inventarios.model.Producto;

public interface ProductoRepositorio extends MongoRepository<Producto, ObjectId>{
    @Query("{ $or: [ " +
            "{ 'nombre': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'categoria': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'color': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'marca': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'anchor': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'longitud': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'calibre': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'tipo': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'tapa': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'tamanio': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'talla': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'departamento': { '$regex': ?0, '$options': 'i' } }, " +
            "{ 'proceso': { '$regex': ?0, '$options': 'i' } } " +
            "] }")
    List<Producto> findByNombreOrCategoriaOrColorOrMarca(String palabraClave);

    @Query("{ 'cantidad' : ?0 }")
    List<Producto> findByCantidad(int cantidad);

    @Query("{ 'categoria': { '$regex': ?0, '$options': 'i' } }")
    List<Producto> findByCategoria(String categoria);
}
