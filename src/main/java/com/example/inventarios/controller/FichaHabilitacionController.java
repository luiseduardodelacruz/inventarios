package com.example.inventarios.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import com.example.inventarios.model.*;
import com.example.inventarios.repository.CadenaRepository;
import com.example.inventarios.repository.DepartamentoRepository;
import com.example.inventarios.repository.ProcesoRepository;

@Controller
@SessionAttributes("fichaHabilitacion")
public class FichaHabilitacionController {

    @Autowired
    private DepartamentoRepository departamentoRepository;

    @Autowired
    private CadenaRepository cadenaRepository;

    @Autowired
    private ProcesoRepository procesoRepository;


    @ModelAttribute("fichaHabilitacion")
    public FichaHabilitacion fichaHabilitacion() {
        return new FichaHabilitacion();
    }

    @GetMapping("/")
    public String mostrarFormulario(Model model) {
        List<Departamento> departamentos = departamentoRepository.findAll();
        List<Cadena> cadenas = cadenaRepository.findAll();
        List<Procesos> procesos = procesoRepository.findAll();

        model.addAttribute("departamentos", departamentos);
        model.addAttribute("cadenas", cadenas);
        model.addAttribute("procesos", procesos);
        model.addAttribute("fichaHabilitacion", new FichaHabilitacion());
        return "ficha-habilitacion";
    }

    @PostMapping("/guardar-ficha-parte1")
    public String guardarFichaParte1(@ModelAttribute("fichaHabilitacion") FichaHabilitacion fichaHabilitacion) {
        // Aquí la información se guarda temporalmente en la sesión
        return "redirect:/detalles-corte";  // Redirige al segundo formulario
    }

    @GetMapping("/detalles-corte")
    public String mostrarFormulario2(Model model) {
        // Aquí se mostrará el segundo formulario
        return "detalles-corte";  // Nombre del archivo HTML del segundo formulario
    }

    @PostMapping("/guardar-ficha-parte2")
    public String guardarFichaParte2(@ModelAttribute("fichaHabilitacion") FichaHabilitacion fichaHabilitacion) {
        // Aquí se guarda toda la información en la base de datos
        // fichaHabilitacionRepository.save(fichaHabilitacion);  // Guarda en la base de datos
        return "redirect:/exito";  // Redirige a una vista de éxito
    }
}

