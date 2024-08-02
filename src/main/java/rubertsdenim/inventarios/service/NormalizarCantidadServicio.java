package rubertsdenim.inventarios.service;

public class NormalizarCantidadServicio {

    public static int normalizarCantidad(int cantidad) {
        int MIN_CANTIDAD = 0;
        int MAX_CANTIDAD = 2140999999;

        if (cantidad < MIN_CANTIDAD) {
            return MIN_CANTIDAD;
        } else if (cantidad > MAX_CANTIDAD) {
            return MAX_CANTIDAD;
        }
        
        return cantidad;
    }
}