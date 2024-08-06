package rubertsdenim.inventarios.service;

import rubertsdenim.inventarios.model.ElasticoPunio;
import rubertsdenim.inventarios.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ElasticoPuñoService{

    @Autowired
    private ElasticoPunioRepository elasticoPuñoRepository;

    public List<ElasticoPunio> getAjustadoresBySize(String size) {
        return elasticoPuñoRepository.findBySize(size);
    }
}
