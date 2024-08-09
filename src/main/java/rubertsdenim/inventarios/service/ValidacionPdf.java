package rubertsdenim.inventarios.service;

import rubertsdenim.inventarios.model.*;

import java.util.Arrays;
import java.util.List;


public class ValidacionPdf {
    private static final List<String> VALORES_VALIDOS = Arrays.asList("niñas", "niños", "bebas", "bebos");


    public static boolean esValidoParaAjustador(FichaHabilitacion fichaHabilitacion) {
        String departamento = fichaHabilitacion.getDepartamentos().toLowerCase();
        return VALORES_VALIDOS.contains(departamento);
    }

    public static boolean esTipoJogger(FichaHabilitacion fichaHabilitacion) {
        return "jogger".equalsIgnoreCase(fichaHabilitacion.getTipos());
    }

}
