// Carrusel de imagenes del select
document.getElementById('numImagesSelect').addEventListener('change', function() {
    const dropzoneContainer = document.getElementById('dropzoneContainer');
    dropzoneContainer.innerHTML = '';  // Clear previous dropzones
    const numberOfDropzones = this.value;

    for (let i = 0; i < numberOfDropzones; i++) {
        const dropzone = document.createElement('div');
        dropzone.classList.add('flex', 'items-center', 'justify-center', 'w-[18vh]', 'h-[18vh]', 'sm:w-[48vh]', 'md:w-full', 'mt-4');
        dropzone.innerHTML = `
            <label for="dropzone-file-${i}" class="flex flex-col items-center justify-center w-full h-full h-64 border-2 border-orange-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 relative overflow-hidden">
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                    <svg class="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                    </svg>
                    <p class="mb-2 text-sm text-gray-500 text-center font-normal"><span class="font-semibold text-[#db4900]">Click para subir</span> o arrastra la imagen</p>
                    <p class="mb-2 text-[12px] text-gray-500 text-center font-normal">PNG, JPG menor a 1 MB</p>
                </div>
                <input id="dropzone-file-${i}" name="dropzoneFilesEtiquetas" type="file" accept="image/jpeg, image/png" onchange="validarTamanioImagen(this)" class="hidden dropzone-input" />
                <div id="preview-${i}" class="absolute inset-0 flex items-center justify-center overflow-hidden pointer-events-none rounded-lg overflow-auto"></div>
            </label>
        `;
        dropzoneContainer.appendChild(dropzone);
    }

    // Re-bind event listeners for newly created dropzone inputs
    bindDropzoneEventListeners();
});

function bindDropzoneEventListeners() {
    const dropzoneInputs = document.querySelectorAll('.dropzone-input');

    dropzoneInputs.forEach(dropzoneInput => {
        dropzoneInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const imageUrl = event.target.result;
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    imgElement.style.width = '100%';
                    imgElement.style.height = '100%';
                    imgElement.style.objectFit = 'cover';
                    imgElement.classList.add(dropzoneInput.id); // Asignar clase con el id del input
                    const previewContainer1 = document.getElementById(`preview-${dropzoneInput.id.split('-')[2]}`);
                    previewContainer1.innerHTML = ''; 
                    previewContainer1.appendChild(imgElement);
                };
                reader.readAsDataURL(file);
            }
        });
    });
}

// Initial bind for existing elements
bindDropzoneEventListeners();

/* Mostrar imagenes tanto cental como superio derecha */ 
document.addEventListener('DOMContentLoaded', function() {
    const dropzoneInputs = document.querySelectorAll('#dropzone-file, #dropzone-imagenE');

    dropzoneInputs.forEach(dropzoneInput => {
        const previewContainer1 = dropzoneInput.id === 'dropzone-file' ? document.getElementById('preview') : document.getElementById('vistaEmpresa');

        dropzoneInput.addEventListener('change', function() {
            const file = this.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(event) {
                    const imageUrl = event.target.result;
                    const imgElement = document.createElement('img');
                    imgElement.src = imageUrl;
                    imgElement.style.width = '100%';
                    imgElement.style.height = '100%';
                    imgElement.style.objectFit = 'cover';
                    imgElement.classList.add(dropzoneInput.id); // Asignar clase con el id del input
                    previewContainer1.innerHTML = ''; 
                    previewContainer1.appendChild(imgElement);
                };
                reader.readAsDataURL(file);
            }
        });
    });
});

function mostrarDatos() {
    const datos = {};
    const dropzoneInputs = document.querySelectorAll('#dropzone-file, #dropzone-imagenE');

    dropzoneInputs.forEach(dropzoneInput => {
        const previewContainer1 = dropzoneInput.id === 'dropzone-file' ? document.getElementById('preview') : document.getElementById('vistaEmpresa');
        const imgElement = previewContainer1.querySelector('img');
        if (imgElement) {
            const imageUrl = imgElement.src;
            const imageClass = imgElement.className;
            datos[dropzoneInput.id] = {
                class: imageClass,
                url: imageUrl
            };
        }
    });
    console.log(datos);
}

// Dom de checklist de tallas
document.addEventListener('DOMContentLoaded', function () {
const button = document.getElementById('dropdownSearchButton');
const menu = document.getElementById('dropdownSearch');
const iconOpen = document.getElementById('dropdownIconOpen');
const iconClosed = document.getElementById('dropdownIconClosed');

    // Toggle dropdown visibility on button click
    button.addEventListener('click', function () {
        const isOpen = menu.classList.contains('hidden');
        menu.classList.toggle('hidden');
        iconOpen.classList.toggle('hidden', !isOpen);
        iconClosed.classList.toggle('hidden', isOpen);
        button.setAttribute('aria-expanded', !isOpen);
    });

    // Close dropdown when clicking outside of it
    document.addEventListener('click', function (event) {
        if (!button.contains(event.target) && !menu.contains(event.target)) {
            menu.classList.add('hidden');
            iconOpen.classList.add('hidden');
            iconClosed.classList.remove('hidden');
            button.setAttribute('aria-expanded', 'false');
        }
    });
});

// Dom de los campos categoria, fit y botones/hebilla
const categoriaSelect = document.getElementById('categoria');
const fitSelectContainer = document.getElementById('fitSelectContainer');
const botonSelect = document.getElementById('botonHebilla');
const botonLabel = document.getElementById('botonLabel');
const botonSelectContainer = document.getElementById('botonSelect');

categoriaSelect.addEventListener('change', function() {
    const selectedCategoria = categoriaSelect.value;

    // Elimina el contenedor fitSelect si ya existe
    const existingFitSelect = document.getElementById('fitSelect');
    if (existingFitSelect) {
        existingFitSelect.remove();
    }
    
    // Crear y agregar el contenedor fitSelect si la categoría es "moda"
    if (selectedCategoria === 'Moda') {
        createFitSelect();
    } else {
        botonSelectContainer.classList.add('hidden');
    }

    if (selectedCategoria === 'Moda') {
        // Cambiar el título y opciones del select de Botón para Moda
        botonLabel.textContent = 'Botón / Hebilla';
        botonSelect.innerHTML = `
            <option value="Botón">Botón</option>
            <option value="Hebilla">Hebilla</option>
        `;
        botonSelectContainer.classList.remove('hidden');
    } else if (selectedCategoria === 'Básico' || selectedCategoria === 'Bermudas' || selectedCategoria === 'Shorts') {
        // Restaurar título y opciones originales para otras categorías
        botonLabel.textContent = 'Botón';
        botonSelect.innerHTML = `
            <option value="Botón">Botón</option>
        `;
        botonSelectContainer.classList.remove('hidden');
    } else {
        // Ocultar el select de Botón si no hay selección válida
        botonSelectContainer.classList.add('hidden');
    }
});

function createFitSelect() {
    // Crear el contenedor fitSelect
    const fitSelectContainer = document.createElement('div');
    fitSelectContainer.id = 'fitSelect';
    fitSelectContainer.classList.add('block', 'mb-1', 'text-sm', 'font-medium', 'text-white-900');

    const fitLabel = document.createElement('label');
    fitLabel.htmlFor = 'fitSelectElement';
    fitLabel.classList.add('block', 'mb-1', 'text-sm', 'font-medium', 'text-white-900', 'text-white');
    fitLabel.textContent = 'Fit';

    const fitSelect = document.createElement('select');
    fitSelect.id = 'fitSelectElement';
    fitSelect.name = 'fit';
    fitSelect.classList.add('border', 'border-orange-300', 'text-white-900', 'text-sm', 'rounded-3xl', 'focus:ring-orange-500', 'focus:border-orange-500', 'block', 'w-full', 'p-2.5', 'text-white', 'placeholder-white', 'h-10', 'bg-[#db4900]', 'mb-2');
    
    // Agregar el atributo th:field
    fitSelect.setAttribute('th:field', '*{fit}');

    // Agregar opciones para "moda"
    fitSelect.innerHTML = `
        <option value="Overol">Overol</option>
        <option value="Pesquero">Pesquero</option>
    `;

    fitSelectContainer.appendChild(fitLabel);
    fitSelectContainer.appendChild(fitSelect);

    // Insertar el contenedor fitSelect justo después del campo de tipo de corte
    const categoriaDiv = document.querySelector('#categoria').closest('div');
    categoriaDiv.insertAdjacentElement('afterend', fitSelectContainer);
}


//Agregar el atributo Name para procesar las Tallas
document.addEventListener("DOMContentLoaded", function() {
    // Obtenemos el formulario
    const form = document.querySelector('form');

    // Añadimos el listener para el evento 'submit'
    form.addEventListener('submit', function() {
        // Obtener todos los checkboxes
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');

        // Eliminar atributos 'name' existentes
        checkboxes.forEach(function(checkbox) {
            checkbox.removeAttribute('name');
        });

        // Añadir atributos 'name' solo a los seleccionados
        checkboxes.forEach(function(checkbox) {
            if (checkbox.checked) {
                checkbox.name = 'listaTallas';
            }
        });
    });
});

// Listener para cambiar el número de inputs de archivo
numImagesSelect.addEventListener('change', function(event) {
    event.preventDefault();
    const numImages = parseInt(event.target.value);

    for (let i = 0; i < numImages; i++) {
        createFileInput();
    }
});

// Crear un nuevo input de archivo
function createFileInput() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/jpeg, image/png';
    fileInput.classList.add('hidden'); // Ocultar el input

    // Listener para manejar la selección de archivo
    fileInput.addEventListener('change', handleFileSelect);

    const fileInputLabel = document.createElement('label');
    fileInputLabel.classList.add('file-input-label');
    fileInputLabel.style.cursor = 'pointer'; // Indica que es clickeable
    fileInputLabel.classList.add('block', 'my-2', 'p-2', 'border', 'border-orange-300', 'rounded-lg', 'shadow-md');
    fileInputLabel.textContent = 'Haz clic para seleccionar una imagen';

    // Asocia el input con la etiqueta
    fileInputLabel.appendChild(fileInput);

    // Agrega el listener para permitir que el click en la etiqueta active el input
    fileInputLabel.addEventListener('click', (e) => {
        e.preventDefault();
        fileInput.click();
    });
}

// Manejar la selección de archivo
function handleFileSelect(event) {
    const file = event.target.files[0];

    if (!file || !file.type.startsWith('image/')) {
        return;
    }

    const fileInput = event.target;
    const fileInputLabel = fileInput.parentElement;

    // Crear la imagen
    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.classList.add('w-full', 'max-w-xs', 'p-2', 'border', 'border-orange-300', 'rounded-lg', 'shadow-md', 'my-2');

    // Limpia la etiqueta para reemplazar el contenido con la imagen
    fileInputLabel.innerHTML = '';
    fileInputLabel.appendChild(img);

    // Asegurarse de que el cursor siga siendo clickeable
    fileInputLabel.style.cursor = 'pointer';

    // Reestablece el input para permitir la selección de la misma imagen nuevamente
    fileInput.value = ''; // Importante para permitir seleccionar la misma imagen de nuevo

    // Reconfigura el evento click para permitir cambiar la imagen
    fileInput.addEventListener('click', (e) => {
        e.preventDefault();
        fileInput.click();
    });

    fileInputLabel.addEventListener('click', (e) => {
        e.preventDefault();
        fileInput.click();
    });
}



function resetearRemoverCampos() {
    // Limpiar el contenido del input de archivo
    const dropzoneFileInputE = document.getElementById('dropzone-imagenE');
    const vistaEmpresa = document.getElementById('vistaEmpresa');
    
    const dropzoneFileInput = document.getElementById('dropzone-file');
    const preview = document.getElementById('preview');

    const carruselImg = document.getElementById('numImagesSelect');
    const dropzoneContainer = document.getElementById('dropzoneContainer');

    const borrarSelect = document.getElementById('fitSelectContainer')


    dropzoneFileInputE.value = ''; 
    preview.innerHTML = '';
    dropzoneFileInput.value = ''; 
    vistaEmpresa.innerHTML = '';
    carruselImg.value = ''; 
    dropzoneContainer.innerHTML = ''; 

    borrarSelect.innerHTML='';

    
}

function resetearRemoverCampos() {
    // Obtén el div por su ID
    var div = document.getElementById('fitSelect');
    
    // Elimina el div del DOM
    if (div) {
        div.remove();
    }
}
