document.addEventListener('DOMContentLoaded', () => {
    const estiloInput = document.getElementById('estilo');
    const corteInput = document.getElementById('corte');
    const totalInput = document.getElementById('total');
    const maquileroInput = document.getElementById('maquilero');

    // Función para eliminar espacios en blanco al principio y al final
    function trimSpaces(inputElement) {
        inputElement.addEventListener('input', function() {
            this.value = this.value.trim();
        });
    }

    // Aplicar la función de eliminación de espacios a los campos de texto
    trimSpaces(estiloInput);
    trimSpaces(corteInput);
    trimSpaces(maquileroInput);

    // Validación para asegurar que el valor del campo total no sea negativo
    totalInput.addEventListener('input', function() {
        // Asegúrate de que el valor sea al menos 0
        if (parseFloat(this.value) < 0) {
            this.value = 0;
        }
    });
});
