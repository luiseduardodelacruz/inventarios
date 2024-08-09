package rubertsdenim.inventarios.controller;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.multipart.MultipartFile;

import jakarta.servlet.http.HttpSession;

import java.io.IOException;
import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import rubertsdenim.inventarios.model.Categoria;
import rubertsdenim.inventarios.model.Producto;
import rubertsdenim.inventarios.model.User;
import rubertsdenim.inventarios.repository.CategoriaRepositorio;
import rubertsdenim.inventarios.service.ProductoServicio;

@Controller
public class InventarioControlador {

    @Autowired
    private ProductoServicio productoServicio;

    @Autowired
    private CategoriaRepositorio categoriaRepositorio;

    @Value("${imgbb.ApiKey}")
    private String imgbbApiKey;

    @GetMapping("/inventario")
    public String verInventario(Model model, HttpSession session, @RequestParam(name = "palabraClave", required = false) String palabraClave){
        User userAuth = (User) session.getAttribute("user");
        if (userAuth == null) {
            return "redirect:/inicio-sesion";
        }

        List<Producto> productos;
        List<Categoria> categorias = categoriaRepositorio.findAll();

        if (palabraClave != null && !palabraClave.isEmpty()) {
            productos = productoServicio.listarProductos(palabraClave);
        } else {
            productos = productoServicio.listarProductos(); // Lista todos si no hay palabra clave
        }

        model.addAttribute("categorias", categorias);
        model.addAttribute("productos", productos);
        model.addAttribute("producto", new Producto());
        model.addAttribute("usuario", userAuth);
        return "inventario";
    }

    @GetMapping("/inventario/create")
    public String agregarInventario(Model model, HttpSession session) {
        User userAuth = (User) session.getAttribute("user");
        if (userAuth == null) {
            return "redirect:/inicio-sesion";
        }
        if (!"ADMIN".equals(userAuth.getRole())){
            return "redirect:/inventario";
        }

        model.addAttribute("producto", new Producto());
        return "inventario";
    }
    
    @PostMapping("/inventario/create")
    public String agregarProducto(@ModelAttribute Producto producto, @RequestParam MultipartFile imagenArchivo) throws IOException {
        
        if (producto.getCantidad() <= 0) {
            producto.setCantidad(1);
        }

        if (!imagenArchivo.isEmpty() && formatoImagen(imagenArchivo)) {
            String imageUrl = subirImagenImgbb(imagenArchivo, producto.getNombre());
            producto.setImagen(imageUrl);
        }
        productoServicio.guardarProducto(producto);
        return "redirect:/inventario";
    }

    private String subirImagenImgbb(MultipartFile image, String nombreProducto) throws IOException {
        CloseableHttpClient client = HttpClients.createDefault();
        HttpPost post = new HttpPost("https://api.imgbb.com/1/upload?key=" + imgbbApiKey);
    
        MultipartEntityBuilder builder = MultipartEntityBuilder.create();
        builder.addBinaryBody("image", image.getBytes(), ContentType.MULTIPART_FORM_DATA, image.getOriginalFilename());
        builder.addTextBody("name", nombreProducto);
        builder.addTextBody("album", "Productos");
    
        HttpEntity entity = builder.build();
        post.setEntity(entity);
    
        HttpResponse response = client.execute(post);

        // Verifica el código de estado de la respuesta
        int statusCode = response.getStatusLine().getStatusCode();
        if (statusCode != 200) {
            throw new RuntimeException("Failed with HTTP error code : " + statusCode);
        }

        String json = EntityUtils.toString(response.getEntity());
    
        // Imprime o loguea la respuesta para debug
        System.out.println("Respuesta de ImgBB: " + json);

        try {
        JSONObject jsonObject = new JSONObject(json);
        JSONObject dataObject = jsonObject.getJSONObject("data");
            if (dataObject == null) {
                throw new RuntimeException("No se encontró el objeto 'data' en la respuesta JSON");
            }
            return dataObject.getString("url");
        } catch (JSONException e) {
            throw new RuntimeException("Error al parsear JSON: " + e.getMessage(), e);
        }
    }

    private boolean formatoImagen(MultipartFile archivo) {
        String contentType = archivo.getContentType();
        return contentType != null && (contentType.equals("image/jpeg") || contentType.equals("image/png"));
    }

    @GetMapping("/inventario/update/{id}")
    public String editarProducto(@PathVariable ObjectId id, Model model, HttpSession session) {
        User userAuth = (User) session.getAttribute("user");
        if (userAuth == null) {
            return "redirect:/inicio-sesion";
        }
        if (!"ADMIN".equals(userAuth.getRole())){
            return "redirect:/inventario";
        }

        List<Categoria> categorias = categoriaRepositorio.findAll();
        Producto producto = productoServicio.buscarProductoPorId(id);
        if (producto != null) {
            model.addAttribute("producto", producto);
            model.addAttribute("categorias", categorias);
            return "update";
        } else {
            return "redirect:/inventario";
        }
    }

    @PostMapping("/inventario/update")
    public String actualizarProducto(@ModelAttribute Producto producto, @RequestParam MultipartFile imagenArchivo) throws IOException {
        if (producto.getCantidad() < 0) {
            producto.setCantidad(0);
        }
        Producto productoExistente = productoServicio.buscarProductoPorId(producto.getIdProducto());
        if (productoExistente != null) {
            productoExistente.setNombre(producto.getNombre());
            productoExistente.setCategoria(producto.getCategoria());
            productoExistente.setCantidad(producto.getCantidad());
            productoExistente.setColor(producto.getColor());
            productoExistente.setAnchor(producto.getAnchor());
            productoExistente.setLongitud(producto.getLongitud());
            productoExistente.setCalibre(producto.getCalibre());
            productoExistente.setTipo(producto.getTipo());
            productoExistente.setTapa(producto.getTapa());
            productoExistente.setTamanio(producto.getTamanio());
            productoExistente.setMarca(producto.getMarca());
            productoExistente.setTalla(producto.getTalla());
            productoExistente.setDepartamento(producto.getDepartamento());
            productoExistente.setProceso(producto.getProceso());
            if (!imagenArchivo.isEmpty() && formatoImagen(imagenArchivo)) {
                String imageUrl = subirImagenImgbb(imagenArchivo, producto.getNombre());
                productoExistente.setImagen(imageUrl);
            }
            productoServicio.guardarProducto(productoExistente);
        }
        return "redirect:/inventario";
    }

    @GetMapping("/inventario/delete/{id}")
    public String eliminarProducto(@PathVariable ObjectId id, HttpSession session) {
        User userAuth = (User) session.getAttribute("user");
        if (userAuth == null) {
            return "redirect:/inicio-sesion";
        }
        if (!"ADMIN".equals(userAuth.getRole())){
            return "redirect:/inventario";
        }

        Producto producto = productoServicio.buscarProductoPorId(id);
        if (producto != null) {
            productoServicio.eliminarProductoPorId(id);
        }
        return "redirect:/inventario";
    }

}
