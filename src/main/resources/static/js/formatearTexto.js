// Traducción para valores especiales
const TRADUCCIONES_ESPECIALES = {
    "nino": "Niño",
    "nina": "Niña",
    "generico": "Genérico",
    "metalico": "Metálico"
};

// Función para formatear el texto
function formatearTexto(texto) {
    if (!texto) return '';

    // Reemplaza guiones bajos por espacios
    texto = texto.replace(/_/g, ' ');

    return texto
        .split(' ') // Divide el texto en palabras
        .map(palabra => TRADUCCIONES_ESPECIALES[palabra.toLowerCase()] || palabra) // Aplica traducción o capitaliza
        .join(' '); // Une las palabras en una cadena
}

// Función para inicializar los elementos con texto formateado
function inicializarTextos() {
    // Formatear el texto en elementos <input>
    document.querySelectorAll('input[data-format]').forEach(function (input) {
        const valorOriginal = input.value;
        input.value = formatearTexto(valorOriginal);
    });

    // Formatear el texto en elementos <span>
    document.querySelectorAll('span[data-format]').forEach(function (span) {
        const textoOriginal = span.textContent;
        span.textContent = formatearTexto(textoOriginal);
    });

    // Formatear el texto en elementos <p>
        document.querySelectorAll('p[data-format]').forEach(function (span) {
        const textoOriginal = span.textContent;
        span.textContent = formatearTexto(textoOriginal);
    });
}

// Inicializar los textos al cargar la página
window.onload = inicializarTextos;