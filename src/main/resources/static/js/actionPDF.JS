function handleButtonClick() {
    // Encuentra el formulario
    const form = document.getElementById('formulario2');
    
    // Crear un FormData para el formulario
    const formData = new FormData(form);

    // Obtener la fecha actual en formato YYYY-MM-DD
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mes es 0-indexado
    const day = String(now.getDate()).padStart(2, '0');
    const fecha = `${year}-${month}-${day}`;

    // Enviar el formulario y obtener el PDF
    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.blob())
    .then(blob => {
        // Crear un enlace de descarga temporal
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        // Asignar el nombre del archivo basado en la fecha actual
        a.download = 'ficha_habilitacion' + fecha + '.pdf';
        a.click();
        window.URL.revokeObjectURL(url);

        // Redirigir a la página de índice después de la descarga
        window.location.href = '/'; // Ajusta la ruta según la ubicación de tu archivo
    })
    .catch(error => {
        console.error('Error al generar el PDF:', error);
        alert('Hubo un problema al generar el PDF. Por favor, intente de nuevo.');
    });
}
