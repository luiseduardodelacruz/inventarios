let alertCount = 0;

// Funcion Alerta
function showAlert(message) {
    const alertContainer = document.getElementById('alertContainer');

    // Crear la Alerta
    const alert = document.createElement('div');
    alert.className = 'alert flex flex-col w-full bg-[#e8763d] text-white rounded-xl shadow-xl';
    alert.style.opacity = 1;

    // Crear el Mensaje
    const alertMessage = document.createElement('span');
    alertMessage.textContent = message;
    alertMessage.className = 'px-4 py-4 md:px-5 md:py-6 fuente_alerta text-sm md:text-lg lg:text-lg';
    alert.appendChild(alertMessage);

    // Crear la Barra de Progreso
    const progressBarContainer = document.createElement('div');
    progressBarContainer.className = 'w-full bg-white rounded-b-xl h-2 overflow-hidden';
    
    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar bg-[#db4900] rounded-bl-xl h-full';
    progressBar.style.width = '100%';
    progressBarContainer.appendChild(progressBar);

    alert.appendChild(progressBarContainer);

    // Agregar la Alerta al Contenedor
    alertContainer.appendChild(alert);

    // Administrar el Tiempo de la Alerta
    let alertDuration = 5000;
    let startTime = Date.now();

    const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = (elapsedTime / alertDuration) * 100;
        progressBar.style.width = `${0 + progress}%`;

        if (elapsedTime >= alertDuration) {
            clearInterval(interval);
            fadeOutAlert(alert);
        }
    }, 50);
}

// Funcion Desaparecer Alerta
function fadeOutAlert(alert) {
    const fadeInterval = setInterval(() => {
        if (alert.style.opacity > 0) {
            alert.style.opacity -= 0.1;
        } else {
            clearInterval(fadeInterval);
            alert.remove();
        }
    }, 50);
}