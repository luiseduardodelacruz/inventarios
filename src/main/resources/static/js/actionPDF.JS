function handleButtonClick() {
    // Encuentra el formulario
    const form = document.getElementById('formulario2');
    
    // Crear un FormData para el formulario
    const formData = new FormData(form);

    // Enviar el formulario y obtener el PDF
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        /* Crear un enlace de descarga temporal
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.click();
        window.URL.revokeObjectURL(url);
        */

        /* Redirigir a la página de índice después de la descarga
        window.location.href = '/habilitacion';*/
    })
    .catch(error => {
        console.error('Error al generar el PDF:', error);
        alert('Hubo un problema al generar el PDF. Por favor, intente de nuevo.');
    });
}