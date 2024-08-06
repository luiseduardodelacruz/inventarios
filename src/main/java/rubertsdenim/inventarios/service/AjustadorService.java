package rubertsdenim.inventarios.service;

import rubertsdenim.inventarios.model.Ajustador;
import rubertsdenim.inventarios.repository.AjustadorRepository;
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

