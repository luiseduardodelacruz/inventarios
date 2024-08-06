package rubertsdenim.inventarios.repository;

import rubertsdenim.inventarios.model.*;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AjustadorRepository extends MongoRepository<Ajustador, String> {

    List<Ajustador> findBySize(String size);
}