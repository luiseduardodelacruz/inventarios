package rubertsdenim.inventarios.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import rubertsdenim.inventarios.model.Tallas;
import rubertsdenim.inventarios.repository.TallasRepository;
import java.util.List;

@RestController
@RequestMapping("/api")
public class TallasRestController {

    private final TallasRepository tallasRepository;

    public TallasRestController(TallasRepository tallasRepository) {
        this.tallasRepository = tallasRepository;
    }

    @GetMapping("/tallas")
    public List<Tallas> obtenerTallas() {
        return tallasRepository.findAll();
    }
}
