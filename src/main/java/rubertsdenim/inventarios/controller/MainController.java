package rubertsdenim.inventarios.controller;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class MainController {

    @GetMapping("/")
    public String home() {
        return "redirect:/inicio-sesion"; // Página de inicio
    }
}
