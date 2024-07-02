package rubertsdenim.inventarios.controller;

import rubertsdenim.inventarios.model.User;
import rubertsdenim.inventarios.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/usuarios")
    public String viewUsers(Model model) {
        List<User> users = userRepository.findByRoleNot("ADMIN");
        model.addAttribute("users", users);
        return "users";
    }
    @GetMapping("/nuevo-usuario")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new User());
        return "register"; // Nombre de la vista del formulario de registro
    }

    @PostMapping("/registro")
    public String registerUser(@ModelAttribute User user) {
        user.setRole("USER"); // Establece el rol de usuario
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword())); // Encripta la contraseña
        userRepository.save(user);
        // Redirige a la página de usuarios después de un registro exitoso
        return "redirect:/usuarios";
    }
       @GetMapping("/editar-usuario/{id}")
    public String showUpdateForm(@PathVariable String id, Model model) {
        User user = userRepository.findById(id).orElse(null);
        model.addAttribute("user", user);
        return "update-user"; // Vista para el formulario de actualización
    }

    @PostMapping("/editar-usuario/{id}")
    public String updateUser(@PathVariable String id, User user) {
        if (user != null) {
            user.setEmail(user.getEmail());
            user.setName(user.getName());
            user.setRole("USER");
            userRepository.save(user);
        }
        return "redirect:/usuarios"; // Redirigir a la página de lista de usuarios después de actualizar
    }


    @GetMapping("/eliminar-usuario/{id}")
    public String showDeleteConfirmation(@PathVariable String id, Model model) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            model.addAttribute("user", user);
            return "delete-user"; // Vista para la confirmación de eliminación
        } else {
            // Manejar el caso cuando el usuario no existe
            return "redirect:/usuarios";
        }
    }

    @PostMapping("/eliminar-usuario/{id}")
    public String deleteUser(@PathVariable String id) {
        userRepository.deleteById(id);
        return "redirect:/usuarios"; // Redirigir a la lista de usuarios después de eliminar
    }
}

