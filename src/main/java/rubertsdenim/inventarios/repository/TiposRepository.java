package rubertsdenim.inventarios.repository;

import rubertsdenim.inventarios.model.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TiposRepository extends MongoRepository<Tipos, String> {
    
}