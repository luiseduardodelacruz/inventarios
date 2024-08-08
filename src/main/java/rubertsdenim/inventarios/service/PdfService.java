package rubertsdenim.inventarios.service;

import rubertsdenim.inventarios.model.Ajustador;
import rubertsdenim.inventarios.model.ElasticoCintura;
import rubertsdenim.inventarios.model.ElasticoPunio;
import rubertsdenim.inventarios.model.FichaHabilitacion;
import rubertsdenim.inventarios.repository.AjustadorRepository;
import rubertsdenim.inventarios.repository.ElasticoCinturaRepository;
import rubertsdenim.inventarios.repository.ElasticoPunioRepository;

import com.lowagie.text.*;
import com.lowagie.text.pdf.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.text.DecimalFormat;
import java.util.List;

@Service
public class PdfService {

    @Autowired
    private AjustadorRepository ajustadorRepository;

    @Autowired
    private ElasticoCinturaRepository elasticoCinturaRepository;

    @Autowired
    private ElasticoPunioRepository elasticoPuñoRepository;

    public byte[] generateFichaHabilitacionPdf(FichaHabilitacion fichaHabilitacion) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        Document document = new Document(PageSize.A4);

        try {
            PdfWriter.getInstance(document, baos);
            document.open();

            // Ajustar márgenes del documento
            document.setMargins(30, 30, 20, 20);

            Font titleFont = new Font(Font.HELVETICA, 16, Font.BOLD);
            Paragraph title = new Paragraph("Ficha de Habilitación", titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);
            document.add(Chunk.NEWLINE);

            List<String> tallas = fichaHabilitacion.getTallas();
            List<Integer> dobleces = fichaHabilitacion.getDobleces();
            List<Double> bultos = fichaHabilitacion.getBultos();
            int sumaDobleces = fichaHabilitacion.getSumaDobleces();

            PdfPTable table1 = new PdfPTable(2);
            table1.setWidthPercentage(100);
            table1.setSpacingBefore(0f);
            table1.setSpacingAfter(0f);

            float[] columnWidths1 = new float[] { 2f, 2f };
            table1.setWidths(columnWidths1);

            addCell(table1, "Fecha de Habilitación", true);
            addCell(table1, "Maquilero", true);

            addCell(table1, fichaHabilitacion.getFecha(), false);
            addCell(table1, fichaHabilitacion.getMaquilero(), false);

            document.add(table1);

            PdfPTable table2 = new PdfPTable(4);
            table2.setWidthPercentage(100);
            table2.setSpacingBefore(0f);
            table2.setSpacingAfter(0f);

            float[] columnWidths2 = new float[] { 2f, 2f, 2f, 2f };
            table2.setWidths(columnWidths2);

            addCell(table2, "Estilo", true);
            addCell(table2, "Corte", true);
            addCell(table2, "Etapa del corte", true);
            addCell(table2, "Tipo de corte", true);

            addCell(table2, fichaHabilitacion.getEstilo(), false);
            addCell(table2, fichaHabilitacion.getCorte(), false);
            addCell(table2, fichaHabilitacion.getEtapas(), false);
            addCell(table2, fichaHabilitacion.getTipos(), false);

            document.add(table2);

            PdfPTable table3 = new PdfPTable(4);
            table3.setWidthPercentage(100);
            table3.setSpacingBefore(0f);
            table3.setSpacingAfter(0f);

            float[] columnWidths3 = new float[] { 1.5f, 1.5f, 1.5f, 1.5f };
            table3.setWidths(columnWidths3);

            addCell(table3, "Departamento", true);
            addCell(table3, "Cadena", true);
            addCell(table3, "Proceso", true);
            addCell(table3, "Fecha de Entrega", true);

            addCell(table3, fichaHabilitacion.getDepartamentos(), false);
            addCell(table3, fichaHabilitacion.getCadena(), false);
            addCell(table3, fichaHabilitacion.getProcesos(), false);
            addCell(table3, fichaHabilitacion.getFechaEntrega(), false);

            document.add(table3);

            PdfPTable secondaryTable = new PdfPTable(5);
            secondaryTable.setWidthPercentage(100);
            secondaryTable.setSpacingBefore(0f);
            secondaryTable.setSpacingAfter(0f);

            float[] columnWidths4 = new float[] { 2f, 2f, 2f, 2f, 2f };
            secondaryTable.setWidths(columnWidths4);

            addCell(secondaryTable, "Dobleces", true);
            addCell(secondaryTable, "Suma Dobleces", true);
            addCell(secondaryTable, "Tallas", true);
            addCell(secondaryTable, "Bultos", true);
            addCell(secondaryTable, "Total/talla", true);

            int maxSize = Math.max(tallas.size(), Math.max(dobleces.size(), bultos.size()));
            int totalSum = 0;
            for (int i = 0; i < maxSize; i++) {
                addCell(secondaryTable, i < dobleces.size() ? dobleces.get(i).toString() : "", false);
                addCell(secondaryTable, Integer.toString(sumaDobleces), false);
                addCell(secondaryTable, i < tallas.size() ? tallas.get(i) : "", false);
                addCell(secondaryTable, i < bultos.size() ? bultos.get(i).toString() : "", false);

                if (i < bultos.size()) {
                    double multiplicacion = bultos.get(i) * sumaDobleces;
                    long multiplicacionRedondeada = Math.round(multiplicacion);
                    addCell(secondaryTable, Long.toString(multiplicacionRedondeada), false);
                    totalSum += multiplicacionRedondeada; // Guardar el resultado en la variable global
                } else {
                    addCell(secondaryTable, "", false);
                }
            }

            document.add(secondaryTable);

            // Crear la tabla de resumen con una sola fila
            PdfPTable Totaltable = new PdfPTable(2);
            Totaltable.setWidthPercentage(100); // Ajustar el porcentaje de ancho según tus necesidades
            Totaltable.setSpacingBefore(0f); // Espacio antes de la tabla
            Totaltable.setSpacingAfter(0f); // Espacio después de la tabla

            float[] columnWidths6 = new float[] { 2f, 2f };
            Totaltable.setWidths(columnWidths6);

            addCell(Totaltable, "Total del corte", true);
            addCell(Totaltable, Integer.toString(totalSum), false); // Mostrar totalSum

            document.add(Totaltable);
            document.add(new Paragraph(""));


if (ValidacionPdf.esValidoParaEtapas(fichaHabilitacion)) {
    PdfPTable cantidadDescripcionTable = new PdfPTable(2);
    cantidadDescripcionTable.setWidthPercentage(100);
    cantidadDescripcionTable.setSpacingBefore(0f);
    cantidadDescripcionTable.setSpacingAfter(0f);

    float[] columnWidths = new float[]{2f, 4f};
    cantidadDescripcionTable.setWidths(columnWidths);

    addCell(cantidadDescripcionTable, "Cantidad", true);
    addCell(cantidadDescripcionTable, "DESCRIPCIÓN", true);

    String etapaActual = fichaHabilitacion.getEtapas().toLowerCase();

    switch (etapaActual) {
        case "preparacion":
            // Generar la tabla específica para "preparacion"
            addCell(cantidadDescripcionTable, Integer.toString(totalSum), false);
            addCell(cantidadDescripcionTable, "Materiales de Preparación", false);
            break;

        case "terminacion":
            // Generar la tabla específica para "terminacion"
            for (String talla : tallas) {
                String cantidad = bultos.size() > 0
                        ? Long.toString(Math.round(bultos.get(tallas.indexOf(talla)) * sumaDobleces))
                        : "";
                addCell(cantidadDescripcionTable, cantidad, false);
                addCell(cantidadDescripcionTable, "Materiales de Terminación (" + talla + ")", false);
            }
            break;

        case "empaque":
            // Generar la tabla específica para "empaque"
            addCell(cantidadDescripcionTable, Integer.toString(totalSum), false);
            addCell(cantidadDescripcionTable, "Materiales de Empaque", false);
            break;

        default:
            // Caso para una etapa no prevista (aunque esto no debería ocurrir)
            break;
    }

    document.add(cantidadDescripcionTable);
} else {
    // Manejar el caso cuando la etapa no es válida
    // Puedes mostrar un mensaje de error o manejarlo como creas conveniente
}

            
            document.add(Chunk.NEWLINE);

            boolean esValidoParaAjustador = ValidacionPdf.esValidoParaAjustador(fichaHabilitacion);
            boolean esTipoJogger = ValidacionPdf.esTipoJogger(fichaHabilitacion);

            if (esValidoParaAjustador && !esTipoJogger) {
                // Caso 1: Válido para ajustador y no tipo jogger
                PdfPTable tallaDataTable = new PdfPTable(tallas.size() + 1);
                tallaDataTable.setWidthPercentage(100);

                float[] columnWidths5 = new float[tallas.size() + 1];
                for (int i = 0; i < columnWidths5.length; i++) {
                    columnWidths5[i] = 2f; // Ajusta el tamaño de las columnas
                }
                tallaDataTable.setWidths(columnWidths5);

                // Encabezados de la tabla
                addCell(tallaDataTable, "Talla", true);
                for (String talla : tallas) {
                    addCell(tallaDataTable, talla, true);
                }
                addCell(tallaDataTable, "PZS/TALLA", true);

                for (int i = 0; i < tallas.size(); i++) {
                    if (i < bultos.size()) {
                        double multiplicacion = bultos.get(i) * sumaDobleces;
                        long multiplicacionRedondeada = Math.round(multiplicacion);
                        addCell(tallaDataTable, Long.toString(multiplicacionRedondeada), false);
                    } else {
                        addCell(tallaDataTable, "", false);
                    }
                }

                addCell(tallaDataTable, "Medida", true);
                for (String talla : tallas) {
                    List<Ajustador> ajustadores = ajustadorRepository.findBySize(talla);
                    String medida = ajustadores.isEmpty() ? "" : Double.toString(ajustadores.get(0).getSize_tall());
                    addCell(tallaDataTable, medida, false);
                }

                addCell(tallaDataTable, "MTRS/TALLA", true);
                DecimalFormat decimalFormat = new DecimalFormat("#.##"); // Formatear con dos decimales
                double sumaResultadosMultiplicados = 0;
                for (int i = 0; i < tallas.size(); i++) {
                    double resultadoMultiplicado = 0;
                    if (i < bultos.size()) {
                        double multiplicacion = bultos.get(i) * sumaDobleces;
                        double medida = ajustadorRepository.findBySize(tallas.get(i)).stream()
                                .findFirst()
                                .map(Ajustador::getSize_tall)
                                .orElse(0.0);
                        resultadoMultiplicado = multiplicacion * medida;
                    }
                    String resultadoMultiplicadoFormateado = decimalFormat.format(resultadoMultiplicado);
                    addCell(tallaDataTable, resultadoMultiplicadoFormateado, false);

                    sumaResultadosMultiplicados += resultadoMultiplicado;
                }

                document.add(tallaDataTable);

                PdfPTable totalTable = new PdfPTable(2);
                totalTable.setWidthPercentage(100);
                totalTable.setSpacingBefore(0f);
                totalTable.setSpacingAfter(0f);

                float[] columnWidths7 = new float[] { 2f, 2f };
                Totaltable.setWidths(columnWidths7);

                // Encabezado de la tabla de total
                addCell(totalTable, "Total Acumulado", true);

                // Mostrar el total acumulado en la siguiente celda
                String sumaTotalFormateada = decimalFormat.format(sumaResultadosMultiplicados);
                addCell(totalTable, sumaTotalFormateada, false);

                // Añadir la tabla de total al documento
                document.add(totalTable);

            } else if (esTipoJogger) {
                // Caso 2: Tipo jogger (y puede ser o no válido para ajustador)
                PdfPTable tallaDataTable = new PdfPTable(tallas.size() + 1);
                tallaDataTable.setWidthPercentage(100);

                float[] columnWidths5 = new float[tallas.size() + 1];
                for (int i = 0; i < columnWidths5.length; i++) {
                    columnWidths5[i] = 2f; // Ajusta el tamaño de las columnas
                }
                tallaDataTable.setWidths(columnWidths5);

                // Encabezados de la tabla
                addCell(tallaDataTable, "Talla", true);
                for (String talla : tallas) {
                    addCell(tallaDataTable, talla, true);
                }
                addCell(tallaDataTable, "PZS/TALLA", true);

                for (int i = 0; i < tallas.size(); i++) {
                    if (i < bultos.size()) {
                        double multiplicacion = bultos.get(i) * sumaDobleces;
                        long multiplicacionRedondeada = Math.round(multiplicacion);
                        addCell(tallaDataTable, Long.toString(multiplicacionRedondeada), false);
                    } else {
                        addCell(tallaDataTable, "", false);
                    }
                }

                // Fila para Medida Cintura
                addCell(tallaDataTable, "Medida Cintura", true);
                for (String talla : tallas) {
                    List<ElasticoCintura> elasticoCinturaList = elasticoCinturaRepository.findBySize(talla);
                    String medidaCintura = elasticoCinturaList.isEmpty() ? ""
                            : new DecimalFormat("#.00").format(elasticoCinturaList.get(0).getSize_tall());
                    addCell(tallaDataTable, medidaCintura, false);
                }

                // Fila para Medida Puño
                addCell(tallaDataTable, "Medida Puño", true);
                for (String talla : tallas) {
                    List<ElasticoPunio> elasticoPuñoList = elasticoPuñoRepository.findBySize(talla);
                    String medidaPuño = elasticoPuñoList.isEmpty() ? ""
                            : new DecimalFormat("#.00").format(elasticoPuñoList.get(0).getSize_tall());
                    addCell(tallaDataTable, medidaPuño, false);
                }

                // Agregar fila de MTRS/TALLA
                addCell(tallaDataTable, "MTRS/TALLA", true);

                // Formateo decimal
                DecimalFormat decimalFormat = new DecimalFormat("#.##");

                // Cálculo de MTRS/TALLA para Medida Cintura
                for (int i = 0; i < tallas.size(); i++) {
                    double resultadoMultiplicado = 0;
                    if (i < bultos.size()) {
                        double multiplicacion = bultos.get(i) * sumaDobleces;
                        double medidaCintura = elasticoCinturaRepository.findBySize(tallas.get(i)).stream()
                                .findFirst()
                                .map(ElasticoCintura::getSize_tall)
                                .orElse(0.0);
                        resultadoMultiplicado = multiplicacion * medidaCintura;
                    }
                    String resultadoCinturaFormateado = decimalFormat.format(resultadoMultiplicado);
                    addCell(tallaDataTable, resultadoCinturaFormateado, false);
                }

                // Agregar fila de MTRS/TALLA para Medida Puño
                addCell(tallaDataTable, "MTRS/TALLA PUÑO", true);

                for (int i = 0; i < tallas.size(); i++) {
                    double resultadoMultiplicado = 0;
                    if (i < bultos.size()) {
                        double multiplicacion = bultos.get(i) * sumaDobleces;
                        double medidaPuño = elasticoPuñoRepository.findBySize(tallas.get(i)).stream()
                                .findFirst()
                                .map(ElasticoPunio::getSize_tall)
                                .orElse(0.0);
                        resultadoMultiplicado = multiplicacion * medidaPuño;
                    }
                    String resultadoPuñoFormateado = decimalFormat.format(resultadoMultiplicado);
                    addCell(tallaDataTable, resultadoPuñoFormateado, false);
                }

                document.add(tallaDataTable);

            } else {
                // Caso 4: No válido para ajustador ni tipo jogger
                // No generar ninguna tabla
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            document.close();
        }

        return baos.toByteArray();
    }

    private void addCell(PdfPTable table, String text, boolean isHeader) {
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
