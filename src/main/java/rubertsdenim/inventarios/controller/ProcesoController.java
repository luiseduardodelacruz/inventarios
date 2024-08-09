package rubertsdenim.inventarios.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.HashMap;
import java.util.Map;

@Controller
public class ProcesoController {

    @GetMapping("/obtener-colores")
    @ResponseBody
    public String[] obtenerColores(@RequestParam String proceso) {
        Map<String, String[]> colores = new HashMap<>();
        
        colores.put("teñido", new String[]{"kaky", "rosa dulce", "blanco"});
        colores.put("Suavizado", new String[]{"kaky", "rosa dulce", "blanco"});
        
        return colores.getOrDefault(proceso, new String[]{});
    }
}
