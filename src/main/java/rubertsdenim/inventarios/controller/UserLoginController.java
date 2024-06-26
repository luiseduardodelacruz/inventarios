package rubertsdenim.inventarios.controller;

import rubertsdenim.inventarios.model.User;
import rubertsdenim.inventarios.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import jakarta.servlet.http.HttpSession;


@Controller
public class UserLoginController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/inicio-sesion")
    public String showLoginForm(Model model) {
        model.addAttribute("user", new User());
        return "login";
    }

    @PostMapping("/inicio-sesion")
    public String loginUser(@ModelAttribute("user") User user, Model model, jakarta.servlet.http.HttpSession session) {
        User existingUser = userRepository.findByEmail(user.getEmail());

        if (existingUser != null) {
            BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
            if (encoder.matches(user.getPassword(), existingUser.getPassword())) {
                // La contraseña coincide
                session.setAttribute("user", existingUser); // Guardar usuario en sesión
                if ("ADMIN".equals(existingUser.getRole())) {
                    return "admin-dashboard";
                } else {
                    return "user-dashboard";
                }
            } else {
                // La contraseña no coincide
                model.addAttribute("error", "Contraseña incorrecta.");
                return "login";
            }
        } else {
            // El usuario no existe
            model.addAttribute("error", "El usuario no existe.");
            return "login";
        }
    }

    @GetMapping("/cerrar-sesion")
    public String logout(HttpSession session) {
        session.invalidate(); // Invalidar la sesión
        return "redirect:/inicio-sesion"; // Redirigir a la página de inicio de sesión
    }
}
