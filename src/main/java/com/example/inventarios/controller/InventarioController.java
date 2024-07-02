package com.example.inventarios.controller;

import com.example.inventarios.model.Departamento;
import com.example.inventarios.model.Cadena;
import com.example.inventarios.model.Procesos;
import com.example.inventarios.model.FichaHabilitacion;
import com.example.inventarios.repository.DepartamentoRepository;
import com.example.inventarios.repository.CadenaRepository;
import com.example.inventarios.repository.ProcesoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;

import java.util.List;

@Controller
@SessionAttributes("fichaHabilitacion")
public class InventarioController {

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

        return "ficha-habilitacion";
    }

    @PostMapping("/guardar-ficha")
    public String guardarFicha(@ModelAttribute("fichaHabilitacion") FichaHabilitacion fichaHabilitacion) {
        // Los datos del formulario se almacenan en la sesión
        return "redirect:/detalles-corte";
    }

    @GetMapping("/detalles-corte")
    public String mostrarDetallesCorte(@ModelAttribute("fichaHabilitacion") FichaHabilitacion fichaHabilitacion, Model model) {
        // Aquí se puede usar el objeto fichaHabilitacion que está en la sesión
        model.addAttribute("fichaHabilitacion", fichaHabilitacion);
        return "detalles-corte";
    }

    @PostMapping("/guardar-detalles-corte")
    public String guardarDetallesCorte(@ModelAttribute("fichaHabilitacion") FichaHabilitacion fichaHabilitacion, SessionStatus status) {
        // Guardar los detalles adicionales y completar el proceso
        // Aquí se puede añadir lógica para persistir fichaHabilitacion en la base de datos
        status.setComplete(); // Limpiar la sesión
        return "redirect:/formulario-completado";
    }
}
