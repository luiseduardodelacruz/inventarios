package rubertsdenim.inventarios.service;

import java.util.List;
import org.bson.types.ObjectId;
import rubertsdenim.inventarios.model.Producto;

public interface IProductoServicio {

    public List<Producto> listarProductos();
    
    public List<Producto> listarProductos(String palabraClave);

    public Producto buscarProductoPorId(ObjectId idProducto);

    public Producto guardarProducto(Producto producto);

    public void eliminarProductoPorId(ObjectId idProducto);
}
