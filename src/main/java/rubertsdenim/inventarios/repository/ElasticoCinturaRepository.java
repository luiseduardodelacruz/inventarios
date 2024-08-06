package rubertsdenim.inventarios.repository;

import rubertsdenim.inventarios.model.ElasticoCintura;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ElasticoCinturaRepository extends MongoRepository<ElasticoCintura, String> {
    
    List<ElasticoCintura> findBySize(String size);
}