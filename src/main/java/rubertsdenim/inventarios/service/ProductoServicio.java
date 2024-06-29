package rubertsdenim.inventarios.service;

import java.util.List;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import rubertsdenim.inventarios.model.Producto;
import rubertsdenim.inventarios.repository.ProductoRepositorio;

@Service
public class ProductoServicio implements IProductoServicio{

    @Autowired
    private ProductoRepositorio productoRepositorio;

    @Override
    public List<Producto> listarProductos() {
        return this.productoRepositorio.findAll();
    }

    @Override
    public Producto buscarProductoPorId(ObjectId idProducto) {
        Producto producto = this.productoRepositorio.findById(idProducto).orElse(null);
        return producto;
    }

    @Override
    public Producto guardarProducto(Producto producto) {
        return this.productoRepositorio.save(producto);
    }

    @Override
    public void eliminarProductoPorId(ObjectId idProducto) {
        this.productoRepositorio.deleteById(idProducto);
    }

}
