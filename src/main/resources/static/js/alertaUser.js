// Función para mostrar alertas
function showAlert() {
    // Selecciona la alerta y la barra de progreso
    const alert = document.querySelector('.alert');
    const progressBar = document.querySelector('.progress-bar');
    const agregarUsuario = document.querySelector('#agregar_usuario');
    
    if (!alert || !progressBar) {
        console.error('Alert or progress bar not found');
        return;
    }
    
    // Eliminar la clase 'hidden' para mostrar el Modal
    agregarUsuario.classList.remove('hidden');

    // Administrar el Tiempo de la Alerta
    const alertDuration = 4000; // Duración total en ms
    let startTime = Date.now();

    const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = (elapsedTime / alertDuration) * 100;
        progressBar.style.width = `${progress}%`; // Ajustar el progreso

        if (elapsedTime >= alertDuration) {
            clearInterval(interval);
            fadeOutAlert(alert);
        }
    }, 50);
}

// Función para desvanecer la alerta
function fadeOutAlert(alert) {
    const fadeInterval = setInterval(() => {
        let opacity = parseFloat(alert.style.opacity);
        if (opacity > 0) {
            opacity -= 0.05; // Ajusta la velocidad de desvanecimiento
            alert.style.opacity = opacity;
        } else {
            clearInterval(fadeInterval);
            alert.remove();
        }
    }, 50);
}

// Llama a la función `showAlert` para mostrar la alerta
showAlert();