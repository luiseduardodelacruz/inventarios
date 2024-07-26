package com.example.inventarios.service;

import com.example.inventarios.model.Ajustador;
import com.example.inventarios.model.FichaHabilitacion;
import com.example.inventarios.repository.AjustadorRepository;
import com.lowagie.text.*;
import com.lowagie.text.pdf.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.awt.Color;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

@Service
public class PdfService {


    @Autowired
    private AjustadorRepository ajustadorRepository;

    public byte[] generateFichaHabilitacionPdf(FichaHabilitacion fichaHabilitacion) throws IOException {
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        Document document = new Document(PageSize.A4);

        try {
            PdfWriter.getInstance(document, baos);
            document.open();

            Font titleFont = new Font(Font.HELVETICA, 16, Font.BOLD);
            Paragraph title = new Paragraph("Ficha de Habilitación", titleFont);
            title.setAlignment(Element.ALIGN_CENTER);
            document.add(title);
            document.add(Chunk.NEWLINE);

            List<String> tallas = fichaHabilitacion.getTallas();
            List<Integer> dobleces = fichaHabilitacion.getDobleces();
            List<Double> bultos = fichaHabilitacion.getBultos();

            PdfPTable table1 = new PdfPTable(2);
            table1.setWidthPercentage(100);

            float[] columnWidths1 = new float[] { 2f, 2f };
            table1.setWidths(columnWidths1);

            addCell(table1, "Fecha de Habilitación", true);
            addCell(table1, "Maquilero", true);

            addCell(table1, fichaHabilitacion.getFecha(), false);
            addCell(table1, fichaHabilitacion.getMaquilero(), false);

            document.add(table1);

            PdfPTable table2 = new PdfPTable(4);
            table2.setWidthPercentage(100);

            float[] columnWidths2 = new float[] { 2f, 2f, 2f, 2f };
            table2.setWidths(columnWidths2);

            addCell(table2, "Estilo", true);
            addCell(table2, "Corte", true);
            addCell(table2, "Total", true);
            addCell(table2, "Tipo de corte", true);

            addCell(table2, fichaHabilitacion.getEstilo(), false);
            addCell(table2, fichaHabilitacion.getCorte(), false);
            addCell(table2, fichaHabilitacion.getTipos(), false);
            addCell(table2, Integer.toString(fichaHabilitacion.getTotal()), false);

            document.add(table2);

            PdfPTable table3 = new PdfPTable(4);
            table3.setWidthPercentage(100);

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

            // Crear la tabla secundaria
            PdfPTable secondaryTable = new PdfPTable(5); // Cambiar a 5 columnas
            secondaryTable.setWidthPercentage(100);

            float[] columnWidths4 = new float[] { 2f, 2f, 2f, 2f, 2f };
            secondaryTable.setWidths(columnWidths4);

            addCell(secondaryTable, "Dobleces", true);
            addCell(secondaryTable, "Suma Dobleces", true);
            addCell(secondaryTable, "Tallas", true);
            addCell(secondaryTable, "Bultos", true);
            addCell(secondaryTable, "Multiplicación (Bultos * Suma Dobleces)", true); // Nueva columna

            int maxSize = Math.max(tallas.size(), Math.max(dobleces.size(), bultos.size()));
            int sumaDobleces = fichaHabilitacion.getSumaDobleces();

            // Añadir las filas de la tabla
            for (int i = 0; i < maxSize; i++) {
                addCell(secondaryTable, i < dobleces.size() ? dobleces.get(i).toString() : "", false);

                // Añadir la suma de dobleces en cada fila
                addCell(secondaryTable, Integer.toString(sumaDobleces), false);

                addCell(secondaryTable, i < tallas.size() ? tallas.get(i) : "", false);
                addCell(secondaryTable, i < bultos.size() ? bultos.get(i).toString() : "", false);

                // Calcular y añadir la multiplicación redondeada en la nueva columna
                if (i < bultos.size()) {
                    double multiplicacion = bultos.get(i) * sumaDobleces;
                    long multiplicacionRedondeada = Math.round(multiplicacion);
                    addCell(secondaryTable, Long.toString(multiplicacionRedondeada), false);
                } else {
                    addCell(secondaryTable, "", false);
                }
            }
            document.add(secondaryTable);
            document.add(Chunk.NEWLINE);

            // Crear la tabla con datos por talla
            PdfPTable tallaDataTable = new PdfPTable(tallas.size() + 1); // Columnas por cada talla + columna de encabezado
            tallaDataTable.setWidthPercentage(100);

            float[] columnWidths5 = new float[tallas.size() + 1];
            for (int i = 0; i < columnWidths5.length; i++) {
                columnWidths5[i] = 2f; // Ajusta el ancho de columna según sea necesario
            }
            tallaDataTable.setWidths(columnWidths5);

            // Encabezados de la nueva tabla
            addCell(tallaDataTable, "Talla", true);
            for (String talla : tallas) {
                addCell(tallaDataTable, talla, true);
            }

            // Añadir las filas de la nueva tabla con datos por talla
            for (String talla : tallas) {
                addCell(tallaDataTable, talla, false);

                // Filtrar los datos por talla
                List<Ajustador> ajustadores = ajustadorRepository.findAll(); // Asumiendo que tienes un método para obtener los ajustadores

                int totalTalla = 0;
                for (Ajustador ajustador : ajustadores) {
                    if (ajustador.getSize().equals(talla)) {
                        totalTalla += ajustador.getSize_tall();
                    }
                }
                addCell(tallaDataTable, Integer.toString(totalTalla), false);
            }
            document.add(tallaDataTable);
            document.add(Chunk.NEWLINE);

            PdfPTable receiptTable = new PdfPTable(3);
            receiptTable.setWidthPercentage(100);
            addCell(receiptTable, "Dpto", true);
            addCell(receiptTable, "Nombre, Firma y Fecha de quien recibe", true);
            addCell(receiptTable, "Fecha", true);

            document.add(receiptTable);
            document.add(Chunk.NEWLINE);

            Paragraph observations = new Paragraph("Observaciones:", new Font(Font.HELVETICA, 12, Font.BOLD));
            document.add(observations);
            document.add(new Paragraph(" "));

        } catch (DocumentException e) {
            e.printStackTrace();
        } finally {
            document.close();
        }

        return baos.toByteArray();
    }

    private void addCell(PdfPTable table, String content, boolean isHeader) {
        Font font = new Font(Font.HELVETICA, isHeader ? 12 : 10, isHeader ? Font.BOLD : Font.NORMAL);
        PdfPCell cell = new PdfPCell(new Phrase(content, font));
        cell.setHorizontalAlignment(Element.ALIGN_CENTER);
        cell.setVerticalAlignment(Element.ALIGN_MIDDLE);
        cell.setPadding(5f); // Ajuste el espaciado de las celdas
        if (isHeader) {
            cell.setBackgroundColor(Color.LIGHT_GRAY);
        }
        table.addCell(cell);
    }
}
