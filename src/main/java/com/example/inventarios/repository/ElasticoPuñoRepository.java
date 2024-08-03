package com.example.inventarios.repository;

import com.example.inventarios.model.ElasticoPuño;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ElasticoPuñoRepository extends MongoRepository<ElasticoPuño, String> {
    // Puedes agregar consultas personalizadas si es necesario
    List<ElasticoPuño> findBySize(String size);
}
