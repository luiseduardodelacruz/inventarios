package rubertsdenim.inventarios.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import rubertsdenim.inventarios.model.EtapasProceso;

@Repository
public interface EtapaRepository extends MongoRepository<EtapasProceso, String>{

}
