package rubertsdenim.inventarios.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AdminDashboardController {

    @GetMapping("/admin-dashboard")
    public String viewDashboard() {
        return "admin-dashboard";
    }
}
