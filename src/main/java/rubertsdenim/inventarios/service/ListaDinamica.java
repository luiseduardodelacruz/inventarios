 package rubertsdenim.inventarios.service;

import rubertsdenim.inventarios.model.FichaHabilitacion;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;

import java.awt.Color;
import java.util.List;

public class ListaDinamica {

    // Método para generar la tabla según la etapa
    public static void generarTablaPorEtapa(Document document, FichaHabilitacion fichaHabilitacion,
            List<String> tallas, List<Double> bultos, double sumaDobleces,
            double sumaResultadosMultiplicados, int totalSum) throws Exception {

        String etapa = fichaHabilitacion.getEtapas().toLowerCase();
        String cadenaString = fichaHabilitacion.getCadena();

        if ("preparación".equals(etapa)) {
            generarTablaPreparacion(document, tallas, bultos, sumaDobleces, totalSum, cadenaString);
        } else if ("terminación".equals(etapa)) {
            generarTablaTerminacion(document, totalSum, sumaResultadosMultiplicados, cadenaString);
        } else if ("empaque".equals(etapa)) {
            generarTablaEmpaque(document, totalSum);
        } else {
            throw new IllegalArgumentException("Etapa no válida: " + etapa);
        }
    }

    public static  void generarTablaPreparacion(Document document, List<String> tallas, List<Double> bultos,
        double sumaDobleces, int totalSum, String cadenaString) throws Exception {


        PdfPTable cantidadDescripcionTable = new PdfPTable(2);
        cantidadDescripcionTable.setWidthPercentage(100);
        cantidadDescripcionTable.setSpacingBefore(0f);
        cantidadDescripcionTable.setSpacingAfter(0f);

        float[] columnWidths = new float[] { 2f, 4f };
        cantidadDescripcionTable.setWidths(columnWidths);

        addCell(cantidadDescripcionTable, "Cantidad", true);
        addCell(cantidadDescripcionTable, "DESCRIPCIÓN", true);

        for (String talla : tallas) {
            String cantidad = bultos.size() > 0
                    ? Long.toString(Math.round(bultos.get(tallas.indexOf(talla)) * sumaDobleces))
                    : "";
            addCell(cantidadDescripcionTable, cantidad, false);
            addCell(cantidadDescripcionTable, "Etiqueta Monarch (" + talla + ")", false);
        }

        addCell(cantidadDescripcionTable, Double.toString(totalSum), false);
        addCell(cantidadDescripcionTable, "Etiqueta Vinil de(" + cadenaString + ")", false);

        for (String talla : tallas) {
            String cantidad = bultos.size() > 0
                    ? Long.toString(Math.round(bultos.get(tallas.indexOf(talla)) * sumaDobleces))
                    : "";
            addCell(cantidadDescripcionTable, cantidad, false);
            addCell(cantidadDescripcionTable, "Etiqueta Pretina (" + talla + ") de (" + cadenaString + ")", false);
        }

        for (String talla : tallas) {
            String cantidad = bultos.size() > 0
                    ? Long.toString(Math.round(bultos.get(tallas.indexOf(talla)) * sumaDobleces))
                    : "";
            addCell(cantidadDescripcionTable, cantidad, false);
            addCell(cantidadDescripcionTable, "Etiqueta Monarch (" + talla + ")", false);
        }

        document.add(cantidadDescripcionTable);
    }

    public static void generarTablaTerminacion(Document document, int totalSum,
            double sumaResultadosMultiplicados, String cadenaString) throws Exception {
        PdfPTable cantidadDescripcionTable = new PdfPTable(2);
        cantidadDescripcionTable.setWidthPercentage(100);
        cantidadDescripcionTable.setSpacingBefore(0f);
        cantidadDescripcionTable.setSpacingAfter(0f);

        float[] columnWidths = new float[] { 2f, 4f };
        cantidadDescripcionTable.setWidths(columnWidths);

        addCell(cantidadDescripcionTable, "Cantidad", true);
        addCell(cantidadDescripcionTable, "DESCRIPCIÓN", true);

        addCell(cantidadDescripcionTable, Double.toString(totalSum), false);
        addCell(cantidadDescripcionTable, "Boton de Pasta", false);

        addCell(cantidadDescripcionTable, Double.toString(totalSum), false);
        addCell(cantidadDescripcionTable, "Boton Metalico", false);

        addCell(cantidadDescripcionTable, Double.toString(totalSum), false);
        addCell(cantidadDescripcionTable, "Etiqueta Vinil (" + cadenaString + ")", false);

        addCell(cantidadDescripcionTable, Double.toString(sumaResultadosMultiplicados), false);
        addCell(cantidadDescripcionTable, "Ajustador", false);

        addCell(cantidadDescripcionTable, Double.toString(sumaResultadosMultiplicados), false);
        addCell(cantidadDescripcionTable, "Jareta", false);

        document.add(cantidadDescripcionTable);
    }

    public static void generarTablaEmpaque(Document document, int totalSum) throws Exception {
        PdfPTable cantidadDescripcionTable = new PdfPTable(2);
        cantidadDescripcionTable.setWidthPercentage(100);
        cantidadDescripcionTable.setSpacingBefore(0f);
        cantidadDescripcionTable.setSpacingAfter(0f);

        float[] columnWidths = new float[] { 2f, 4f };
        cantidadDescripcionTable.setWidths(columnWidths);

        addCell(cantidadDescripcionTable, "Cantidad", true);
        addCell(cantidadDescripcionTable, "DESCRIPCIÓN", true);

        addCell(cantidadDescripcionTable, Double.toString(totalSum), false);
        addCell(cantidadDescripcionTable, "Colgante (Nombre del fit)", false);

        addCell(cantidadDescripcionTable, Double.toString(totalSum), false);
        addCell(cantidadDescripcionTable, "Sticker", false);

        addCell(cantidadDescripcionTable, Double.toString(totalSum), false);
        addCell(cantidadDescripcionTable, "Albanene", false);

        addCell(cantidadDescripcionTable, "", false);
        addCell(cantidadDescripcionTable, "Bolsas", false);

        addCell(cantidadDescripcionTable, "", false);
        addCell(cantidadDescripcionTable, "Cajas", false);

        document.add(cantidadDescripcionTable);
    }

    public static void addCell(PdfPTable table, String text, boolean isHeader) {
        PdfPCell cell = new PdfPCell(new Phrase(text, FontFactory.getFont(FontFactory.HELVETICA, isHeader ? 12 : 10)));
        if (isHeader) {
            cell.setBackgroundColor(Color.LIGHT_GRAY); // Azul pastel
            cell.setHorizontalAlignment(Element.ALIGN_CENTER);
            cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
        } else {
            cell.setHorizontalAlignment(Element.ALIGN_LEFT);
            cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
        }
        table.addCell(cell);
    }

}
