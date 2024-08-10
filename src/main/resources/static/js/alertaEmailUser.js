// Función para mostrar alertas
function showAlert() {
    // Selecciona el contenedor de la alerta
    const alertContainer = document.querySelector('#alertEmailUser');
    const agregarUsuario = document.querySelector('#agregar_usuario');

    // Selecciona la alerta y la barra de progreso
    if(alertContainer != null){
        const alert = alertContainer.querySelector('.alert');
        const progressBar = alert.querySelector('.progress-bar');
        
        // Eliminar la clase 'hidden' para mostrar el Modal
        if (agregarUsuario) {
            agregarUsuario.classList.remove('hidden');
        }

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
}

// Función para desvanecer la alerta
function fadeOutAlert(alert) {
    const fadeInterval = setInterval(() => {
        let opacity = parseFloat(alert.style.opacity);
        if (opacity > 0) {
            opacity -= 0.1; // Ajusta la velocidad de desvanecimiento
            alert.style.opacity = opacity;
        } else {
            clearInterval(fadeInterval);
            alert.remove();
        }
    }, 50);
}

// Llama a la función `showAlert` para mostrar la alerta si existe
document.addEventListener('DOMContentLoaded', showAlert);