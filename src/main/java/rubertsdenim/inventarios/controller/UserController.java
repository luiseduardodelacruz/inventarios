package rubertsdenim.inventarios.controller;

import rubertsdenim.inventarios.model.User;
import rubertsdenim.inventarios.repository.UserRepository;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Controller
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @Value("${imgbb.ApiKey}")
    private String imgbbApiKey;

    @GetMapping("/usuarios")
    public String viewUsers(Model model, HttpSession session) {
        User user = (User) session.getAttribute("user");
        if (user == null) {
            return "redirect:/inicio-sesion";
        }
        if (!"ADMIN".equals(user.getRole())){
            return "redirect:/inventario";
        }

        List<User> users = userRepository.findByRoleNot("ADMIN");
        
        model.addAttribute("users", users);
        model.addAttribute("user", new User());
        return "users";
    }
    
    @GetMapping("/usuarios/create")
    public String showRegistrationForm(Model model) {
        model.addAttribute("user", new User());
        return "users"; // Nombre de la vista del formulario de registro
    }

    @PostMapping("/usuarios/create")
    public String registerUser(@ModelAttribute User user, @RequestParam MultipartFile imageFile) throws IOException {
        user.setName(user.getName().trim());
        user.setEmail(user.getEmail().toLowerCase().trim());
        user.setPassword(user.getPassword().trim());
        if (!imageFile.isEmpty() && isImageFile(imageFile)) {
            String imageUrl = uploadImage(imageFile, user.getName().toLowerCase().trim());
            user.setImage(imageUrl);
        }
        user.setRole("USER"); // Establece el rol de usuario
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword())); // Encripta la contraseña
        userRepository.save(user);
        return "redirect:/usuarios"; // Redirige a la página de usuarios después de un registro exitoso
    }

    private String uploadImage(MultipartFile image, String nameUser) throws IOException {
        CloseableHttpClient client = HttpClients.createDefault();
        HttpPost post = new HttpPost("https://api.imgbb.com/1/upload?key=" + imgbbApiKey);
    
        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        builder.addBinaryBody("image", image.getBytes(), ContentType.MULTIPART_FORM_DATA, image.getOriginalFilename());
        builder.addTextBody("name", nameUser);
        builder.addTextBody("album", "Usuarios");
    
        HttpEntity entity = builder.build();
        post.setEntity(entity);
    
        HttpResponse response = client.execute(post);
        String json = EntityUtils.toString(response.getEntity());
    
        JSONObject jsonObject = new JSONObject(json);
        return jsonObject.getJSONObject("data").getString("url");
    }

    private boolean isImageFile(MultipartFile file) {
        String contentType = file.getContentType();
        return contentType != null && (contentType.equals("image/jpeg") || contentType.equals("image/png"));
    }

    @GetMapping("/usuarios/details/{id}")
    @ResponseBody
    public ResponseEntity<User> getUserDetails(@PathVariable("id") String id) {
        User user = userRepository.findById(id).orElse(null);
        if (user == null) {
            return ResponseEntity.notFound().build();
        }
        return ResponseEntity.ok(user);
    }

    @GetMapping("/usuarios/update/{id}")
    public String showUpdateForm(@PathVariable String id, Model model) {
        User user = userRepository.findById(id).orElse(null);
        model.addAttribute("user", user);
        return "update-user"; // Vista para el formulario de actualización
    }

    @PostMapping("/usuarios/update/{id}") 
    public String updateUser(@PathVariable String id, @ModelAttribute User updatedUser, @RequestParam("imageFile") MultipartFile imageFile) throws IOException  {
        Optional<User> optionalUser = userRepository.findById(id);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setEmail(updatedUser.getEmail().toLowerCase().trim());
            user.setName(updatedUser.getName().trim());
            user.setRole("USER");
            if (!imageFile.isEmpty() && isImageFile(imageFile)) {
                String imageUrl = uploadImage(imageFile, updatedUser.getName().toLowerCase().trim());
                user.setImage(imageUrl);
            }
            userRepository.save(user);
        }
        return "redirect:/usuarios"; // Redirigir a la página de lista de usuarios después de actualizar
    }

    @GetMapping("/usuarios/delete/{id}")
    public String showDeleteConfirmation(@PathVariable String id, Model model) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null) {
            userRepository.deleteById(id);
        }
        return "redirect:/usuarios";
    }
}

