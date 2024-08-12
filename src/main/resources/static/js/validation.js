document.addEventListener('DOMContentLoaded', () => {
    const estiloInput = document.getElementById('estilo');
    const corteInput = document.getElementById('corte');
    const totalInput = document.getElementById('total');

    // Función para eliminar espacios en blanco al principio y al final
    function trimSpaces(inputElement) {
        inputElement.addEventListener('input', function() {
            this.value = this.value.trim();
        });
    }

    // Verifica si los elementos fueron encontrados y aplica la función de eliminación de espacios a los campos de texto
    if (estiloInput) {
        trimSpaces(estiloInput);
    }

    if (corteInput) {
        trimSpaces(corteInput);
    }

    // Validación para asegurar que el valor del campo total no sea negativo
    if (totalInput) {
        totalInput.addEventListener('input', function() {
            // Asegúrar que el valor sea al menos 0
            if (parseFloat(this.value) < 0 || isNaN(this.value)) {
                this.value = 0;
            }
        });
    }
});
