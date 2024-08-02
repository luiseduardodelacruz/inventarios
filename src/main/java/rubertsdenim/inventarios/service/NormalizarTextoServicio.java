package rubertsdenim.inventarios.service;

import java.text.Normalizer;

public class NormalizarTextoServicio {
    
    public static String normalizarTexto(String texto) {
        if (texto == null) {
            return null;
        }

        // Convertir a minúsculas
        texto = texto.toLowerCase().trim();

        // Reemplazar espacios con guiones bajos
        texto = texto.replaceAll("\\s+", "_");

        // Eliminar caracteres especiales (mantener solo letras y números)
        texto = Normalizer.normalize(texto, Normalizer.Form.NFD);
        
        // Eliminar acentos
        texto = texto.replaceAll("\\p{M}", "");
        
        // Eliminar caracteres no alfanuméricos excepto . y /
        texto = texto.replaceAll("[^a-zA-Z0-9._/]", "");

        return texto;
    }

}
