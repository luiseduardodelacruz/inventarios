package rubertsdenim.inventarios.controller;

import org.springframework.ui.Model;

import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

import rubertsdenim.inventarios.exception.AccesoDenegado;
import rubertsdenim.inventarios.exception.CampoInvalido;
import rubertsdenim.inventarios.exception.ImagenNoValida;

public class ExcepcionesGlobales {

    @ExceptionHandler(ImagenNoValida.class)
    public String handleImagenNoValida(ImagenNoValida ex, Model model) {
        model.addAttribute("message", ex.getMessage());
        return "error";
    }

    @ExceptionHandler(CampoInvalido.class)
    public String handleCampoInvalido(CampoInvalido ex, Model model) {
        model.addAttribute("message", ex.getMessage());
        return "error";
    }

    @ExceptionHandler(AccesoDenegado.class)
    public String handleAccesoDenegado(AccesoDenegado ex, Model model) {
        model.addAttribute("message", ex.getMessage());
        return "error";
    }

    @ExceptionHandler(NoHandlerFoundException.class)
    public String handleNoHandlerFoundException(NoHandlerFoundException ex, Model model) {
        model.addAttribute("message", "La página que estás buscando no está disponible o ha sido movida. Verifica la URL para asegurarte de que sea correcta.");
        return "error";
    }

    @ExceptionHandler(Exception.class)
    public String handleException(Exception ex, Model model) {
        model.addAttribute("message", "Hemos encontrado un problema inesperado. Por favor, intente nuevamente más tarde.");
        return "error";
    }
}
