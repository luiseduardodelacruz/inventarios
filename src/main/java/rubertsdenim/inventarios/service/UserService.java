package rubertsdenim.inventarios.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rubertsdenim.inventarios.model.User;
import rubertsdenim.inventarios.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public boolean isEmailTaken(String email) {
        return userRepository.findByEmail(email) != null; //.isPresent();
    }

    public String getUserRole(String email ) {
        User user = userRepository.findByEmail(email);

        if (user != null) {
            String role = user.getRole();
            if ("ADMIN".equals(role)) {
                return "ADMIN";
            } else if ("USER".equals(role)) {
                return "USER";
            }
        }
        return null; // Si el usuario no se encuentra o el rol no es válido, retornamos null
    }
    public String getPasswordByEmail(String email) {
        User user = userRepository.findByEmail(email);
        if (user != null) {
            return user.getPassword();
        }
        return null; // Si el usuario no se encuentra, retorna null
    }
}
