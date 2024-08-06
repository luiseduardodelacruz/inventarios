package rubertsdenim.inventarios.service;

import rubertsdenim.inventarios.model.ElasticoCintura;
import rubertsdenim.inventarios.repository.*;
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
