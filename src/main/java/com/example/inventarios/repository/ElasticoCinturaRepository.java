package com.example.inventarios.repository;

import com.example.inventarios.model.ElasticoCintura;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ElasticoCinturaRepository extends MongoRepository<ElasticoCintura, String> {
    // Puedes agregar consultas personalizadas si es necesario
    List<ElasticoCintura> findBySize(String size);
}
