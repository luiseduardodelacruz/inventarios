package rubertsdenim.inventarios.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

@Controller
public class ErrorControlador{

    @RequestMapping(value = "/error", method = RequestMethod.GET)
    public String handleError(RedirectAttributes redirectAttributes) {
        return "error";
    }
}