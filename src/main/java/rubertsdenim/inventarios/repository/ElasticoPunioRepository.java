package rubertsdenim.inventarios.repository;

import rubertsdenim.inventarios.model.ElasticoPunio;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ElasticoPunioRepository extends MongoRepository<ElasticoPunio, String> {
    
    List<ElasticoPunio> findBySize(String size);
}