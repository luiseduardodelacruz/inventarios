package rubertsdenim.inventarios.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.bson.types.ObjectId;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpSession;
import rubertsdenim.inventarios.exception.RecursoNoEncontrado;
import rubertsdenim.inventarios.model.Producto;
import rubertsdenim.inventarios.model.User;
import rubertsdenim.inventarios.service.ProductoServicio;

@RestController
@RequestMapping("/inventario")
public class ProductoControlador {

    private static final Logger logger = LoggerFactory.getLogger(ProductoControlador.class);
    
    @Autowired
    private ProductoServicio productoServicio;

    @GetMapping("/productos")
    public ResponseEntity<?> obteneProductos(@RequestParam(required = false) String palabraClave, HttpSession session){
        User userAuth = (User) session.getAttribute("user");
        if (userAuth == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario no autenticado");
        }

        // Si el usuario está autenticado, obtén la lista de productos
        List<Producto> productos = this.productoServicio.listarProductos(palabraClave);

        logger.info("Productos Obtenidos: ");
        productos.forEach((producto -> logger.info(producto.toString())));
        return ResponseEntity.ok(productos);
    }
    
    @PostMapping("/productos")
    public Producto agregarProducto(@RequestBody Producto producto){
        logger.info("Producto a Agregar" + producto);
        return this.productoServicio.guardarProducto(producto);
    }
    
    @GetMapping("/productos/{id}")
    public ResponseEntity<?> obtenerProductoPorId(@PathVariable ObjectId id, HttpSession session){
        User userAuth = (User) session.getAttribute("user");
        if (userAuth == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Usuario no autenticado");
        }

        Producto producto = this.productoServicio.buscarProductoPorId(id);
        
        if(producto != null)
            return ResponseEntity.ok(producto);
        else
            throw new RecursoNoEncontrado("No se encontro el Producto con ID: " + id);
    }

    @PutMapping("/productos/{id}")
    public ResponseEntity<Producto> actualizarProducto(@PathVariable ObjectId id, @RequestBody Producto productoRecibido){
        Producto producto = this.productoServicio.buscarProductoPorId(id);
        if (producto == null)
            throw new RecursoNoEncontrado("No se encontro el Id" + id); 
        producto.setNombre(productoRecibido.getNombre());
        producto.setColor(productoRecibido.getColor());
        producto.setCantidad(productoRecibido.getCantidad());
        producto.setCategoria(productoRecibido.getCategoria());
        this.productoServicio.guardarProducto(producto);
        return ResponseEntity.ok(producto);
    }

    @DeleteMapping("/productos/{id}")
    public ResponseEntity<Map<String, Boolean>> eliminarProducto(@PathVariable ObjectId id){
        Producto producto = productoServicio.buscarProductoPorId(id);
        if (producto == null)
            throw new RecursoNoEncontrado("No se encontró el producto con Id: " + id);
        productoServicio.eliminarProductoPorId(id);
        Map<String, Boolean> respuesta = new HashMap<>();
        respuesta.put("Eliminado", Boolean.TRUE);
        return ResponseEntity.ok(respuesta);
    }
}
