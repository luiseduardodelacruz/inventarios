package com.example.inventarios.repository;

import com.example.inventarios.model.*;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FichaRepository extends MongoRepository<FichaHabilitacion, String> {
}