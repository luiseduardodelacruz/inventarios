package rubertsdenim.inventarios.controller;

import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.http.entity.ContentType;
import org.apache.http.entity.mime.MultipartEntityBuilder;
import org.json.JSONObject;
import org.springframework.web.multipart.MultipartFile;

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

import rubertsdenim.inventarios.model.Producto;
import rubertsdenim.inventarios.service.ProductoServicio;

@Controller
public class ControladorInicio {

    @Autowired
    private ProductoServicio productoServicio;

    @Value("${imgbb.ApiKey}")
    private String imgbbApiKey;

    @GetMapping("/inventario")
    public String verInventario(Model model){
        List<Producto> productos = productoServicio.listarProductos();
        model.addAttribute("productos", productos);
        model.addAttribute("producto", new Producto());
        return "inventario";
    }

    @GetMapping("/inventario/create")
    public String agregarInventario(Model model) {
        model.addAttribute("producto", new Producto());
        return "inventario";
    }
    
    @PostMapping("/inventario/create")
    public String agregarProducto(@ModelAttribute Producto producto, @RequestParam MultipartFile imagenArchivo) throws IOException {
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
        String json = EntityUtils.toString(response.getEntity());
    
        JSONObject jsonObject = new JSONObject(json);
        return jsonObject.getJSONObject("data").getString("url");
    }

    private boolean formatoImagen(MultipartFile archivo) {
        String contentType = archivo.getContentType();
        return contentType != null && (contentType.equals("image/jpeg") || contentType.equals("image/png"));
    }

    @GetMapping("/inventario/update/{id}")
    public String editarProducto(@PathVariable ObjectId id, Model model) {
        Producto producto = productoServicio.buscarProductoPorId(id);
        if (producto != null) {
            model.addAttribute("producto", producto);
            return "update";
        } else {
            return "redirect:/inventario";
        }
    }

    @PostMapping("/inventario/update")
    public String actualizarProducto(@ModelAttribute Producto producto, @RequestParam MultipartFile imagenArchivo) throws IOException {
        Producto productoExistente = productoServicio.buscarProductoPorId(producto.getIdProducto());
        if (productoExistente != null) {
            productoExistente.setNombre(producto.getNombre());
            productoExistente.setCategoria(producto.getCategoria());
            productoExistente.setCantidad(producto.getCantidad());
            productoExistente.setColor(producto.getColor());
            if (!imagenArchivo.isEmpty() && formatoImagen(imagenArchivo)) {
                String imageUrl = subirImagenImgbb(imagenArchivo, producto.getNombre());
                productoExistente.setImagen(imageUrl);
            }
            productoServicio.guardarProducto(productoExistente);
        }
        return "redirect:/inventario";
    }

    @GetMapping("/inventario/delete/{id}")
    public String eliminarProducto(@PathVariable ObjectId id) {
        Producto producto = productoServicio.buscarProductoPorId(id);
        if (producto != null) {
            productoServicio.eliminarProductoPorId(id);
        }
        return "redirect:/inventario";
    }

}
