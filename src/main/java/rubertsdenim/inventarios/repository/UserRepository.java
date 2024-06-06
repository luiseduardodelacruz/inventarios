package rubertsdenim.inventarios.repository;

import rubertsdenim.inventarios.model.User;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    User findByEmail(String email);

    List<User> findByRoleNot(String role);
}
