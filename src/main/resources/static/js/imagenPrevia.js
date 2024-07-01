function validarTamanioImagen(input) {
    const archivo = input.files[0];
    const limiteMB = 1;
    const limiteBytes = (limiteMB * 1024) * 1024;
    console.log(archivo.size);
    console.log(limiteBytes);

    if (archivo.size > limiteBytes) {
        document.getElementById('mensaje-error').textContent = `El archivo seleccionado supera el límite de ${limiteMB} MB`;
        input.value = '';
        document.getElementById('imagen-previa').innerHTML = `<svg class="w-7 h-7 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none"><path fill="white" d="M44 24C44 22.8954 43.1046 22 42 22C40.8954 22 40 22.8954 40 24H44ZM24 8C25.1046 8 26 7.10457 26 6C26 4.89543 25.1046 4 24 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 24V39H44V24H40ZM9 8H24V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 18L37 6"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 11L37 6L42 11"/></g></svg>`;
    } else {
        document.getElementById('mensaje-error').textContent = '';
        mostrarImagenPrevia(input);
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