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

function validarTamanioImagen(input) {
    const archivo = input.files[0];
    const limiteMB = 1;
    const limiteBytes = (limiteMB * 1024) * 1024;

    if (archivo.size > limiteBytes) {
        showAlert(`El archivo seleccionado supera el límite de ${limiteMB} MB.`);

        input.value = '';
        if(document.getElementById('imagen-previa') != null){
            document.getElementById('imagen-previa').innerHTML = `<svg class="w-6 h-6 md:w-7 md:h-7 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none"><path fill="white" d="M44 24C44 22.8954 43.1046 22 42 22C40.8954 22 40 22.8954 40 24H44ZM24 8C25.1046 8 26 7.10457 26 6C26 4.89543 25.1046 4 24 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 24V39H44V24H40ZM9 8H24V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 18L37 6"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 11L37 6L42 11"/></g></svg>`;
        }
    } else {
        if(document.getElementById('imagen-previa') != null){
            mostrarImagenPrevia(input);
        }
    }
}

function mostrarImagenPrevia(input) {
    const previewContainer = document.getElementById('imagen-previa');
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
        previewContainer.innerHTML = `<img src="${e.target.result}" class="w-full h-full object-cover">`;
        };
        reader.readAsDataURL(input.files[0]);

    } else {
        previewContainer.innerHTML = '';
    }
}