package com.example.inventarios.service;

import com.example.inventarios.model.ElasticoCintura;
import com.example.inventarios.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ElasticoCinturaService{

    @Autowired
    private ElasticoCinturaRepository elasticoCinturaRepository;

    public List<ElasticoCintura> getAjustadoresBySize(String size) {
        return elasticoCinturaRepository.findBySize(size);
    }
}
