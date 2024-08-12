package rubertsdenim.inventarios.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import rubertsdenim.inventarios.model.*;
import rubertsdenim.inventarios.repository.CadenaRepository;
import rubertsdenim.inventarios.repository.DepartamentoRepository;
import rubertsdenim.inventarios.repository.EtapaRepository;
import rubertsdenim.inventarios.repository.FichaRepository;
import rubertsdenim.inventarios.repository.TallasRepository;
import rubertsdenim.inventarios.repository.TiposRepository;
import rubertsdenim.inventarios.service.PdfService;

import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;

@Controller
@SessionAttributes("fichaHabilitacion")
public class FichaHabilitacionController {

    @Autowired
    private DepartamentoRepository departamentoRepository;

    @Autowired
    private CadenaRepository cadenaRepository;

    @Autowired
    private TallasRepository tallasRepository;

    @Autowired
    private FichaRepository fichaRepository;

    @Autowired
    private TiposRepository tiposRepository;

    @Autowired
    private EtapaRepository etapaRepository;
    @Autowired
    private PdfService pdfService;

    @ModelAttribute("fichaHabilitacion")
    public FichaHabilitacion fichaHabilitacion() {
        return new FichaHabilitacion();
    }

    @GetMapping("/habilitacion")
    public String mostrarFormulario(Model model, HttpSession session) {
        User userAuth = (User) session.getAttribute("user");
        if (userAuth == null) {
            return "redirect:/inicio-sesion";
        }

        List<Departamento> departamentos = departamentoRepository.findAll();
        List<Cadena> cadenas = cadenaRepository.findAll();
        List<Tipos> tipos = tiposRepository.findAll();
        List<EtapasProceso> etapas = etapaRepository.findAll();

        model.addAttribute("departamentos", departamentos);
        model.addAttribute("cadenas", cadenas);
        model.addAttribute("tipos", tipos);
        model.addAttribute("etapas", etapas);
        model.addAttribute("fichaHabilitacion", new FichaHabilitacion());
        model.addAttribute("usuario", userAuth);
        return "ficha-habilitacion";
    }

    @PostMapping("/guardar-ficha-parte1")
    public String guardarFichaParte1(@ModelAttribute("fichaHabilitacion") FichaHabilitacion fichaHabilitacion) {
        // Aquí la información se guarda temporalmente en la sesión
        return "redirect:/detalles-corte"; // Redirige al segundo formulario
    }

    @GetMapping("/detalles-corte")
    public String obtenerDatos(Model model, HttpSession session) {
        User userAuth = (User) session.getAttribute("user");
        if (userAuth == null) {
            return "redirect:/inicio-sesion";
        }

        List<Tallas> tallas = tallasRepository.findAll();
        model.addAttribute("tallas", tallas);
        return "detalles-corte";
    }

    @PostMapping("/guardar-ficha-parte2")
    @ResponseBody
    public void guardarFichaParte2(
            @RequestParam List<String> tallas,
            @RequestParam List<Integer> dobleces,
            @RequestParam List<Double> bultos,
            @RequestParam Integer sumaDobleces,
            @ModelAttribute FichaHabilitacion fichaHabilitacion,
            HttpServletResponse response) throws IOException {

        fichaHabilitacion.setTallas(tallas);
        fichaHabilitacion.setDobleces(dobleces);
        fichaHabilitacion.setBultos(bultos);

        // Guardar la suma de dobleces en el modelo (si es necesario)
        fichaHabilitacion.setSumaDobleces(sumaDobleces);

        // Guardar en la base de datos
        fichaRepository.save(fichaHabilitacion);

        // Generar el PDF
        byte[] pdfContent = pdfService.generateFichaHabilitacionPdf(fichaHabilitacion);

        // Configurar la respuesta para descargar el archivo PDF
        response.setContentType("application/pdf");
        response.setHeader("Content-Disposition", "inline; filename=fichahabilitacion.pdf");
        response.setContentLength(pdfContent.length);

        response.getOutputStream().write(pdfContent);
        response.getOutputStream().flush();
    }
}