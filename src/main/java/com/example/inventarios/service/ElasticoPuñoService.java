package com.example.inventarios.service;


import com.example.inventarios.model.ElasticoPuño;
import com.example.inventarios.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ElasticoPuñoService{

    @Autowired
    private ElasticoPuñoRepository elasticoPuñoRepository;

    public List<ElasticoPuño> getAjustadoresBySize(String size) {
        return elasticoPuñoRepository.findBySize(size);
    }
}
