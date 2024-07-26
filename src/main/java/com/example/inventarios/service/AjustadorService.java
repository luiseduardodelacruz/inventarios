package com.example.inventarios.service;

import com.example.inventarios.model.Ajustador;
import com.example.inventarios.repository.AjustadorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AjustadorService {

    @Autowired
    private AjustadorRepository ajustadorRepository;

    public List<Ajustador> getAjustadoresBySize(String size) {
        return ajustadorRepository.findBySize(size);
    }
}

