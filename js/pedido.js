//carrusel de imagenes del select 
const container = document.getElementById('imageContainer');
const numImagesSelect = document.getElementById('numImagesSelect');

numImagesSelect.addEventListener('change', function(event) {
    event.preventDefault();
    const numImages = parseInt(event.target.value);
    
    container.innerHTML = '';

    for (let i = 0; i < numImages; i++) {
        createFileInput();
    }
});

function createFileInput() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.name = 'numImagesSelect';
    fileInput.classList.add('my-2');
    fileInput.style.display = 'none'; // Oculta el input
    
    fileInput.addEventListener('change', handleFileSelect);
    
    const fileInputLabel = document.createElement('label');
    fileInputLabel.classList.add('file-input-label');
    fileInputLabel.style.cursor = 'pointer'; // Cambia el cursor para indicar que es clickeable
    fileInputLabel.classList.add('block', 'my-2', 'p-2', 'border', 'border-orange-300', 'rounded-lg', 'shadow-md');
    fileInputLabel.textContent = 'Haz clic para seleccionar una imagen';

    // Asocia el input con la etiqueta
    fileInputLabel.appendChild(fileInput);

    container.appendChild(fileInputLabel);
}

function handleFileSelect(event) {
    const file = event.target.files[0];
    
    if (!file || !file.type.startsWith('image/')) {
        return;
    }

    const fileInput = event.target;
    const fileInputLabel = fileInput.parentElement;

    const img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    img.classList.add('w-full', 'max-w-xs', 'p-2', 'border', 'border-orange-300', 'rounded-lg', 'shadow-md', 'my-2');
    
    fileInputLabel.innerHTML = ''; // Limpia la etiqueta para reemplazar el contenido con la imagen
    fileInputLabel.appendChild(img);
    fileInputLabel.style.cursor = 'pointer'; // Asegura que el cursor siga siendo clickeable

    // Reinicia el archivo input al estado original para permitir la selección de nuevas imágenes
    fileInput.value = ''; // Esto es importante para permitir la selección de la misma imagen de nuevo
    fileInput.addEventListener('click', () => fileInput.click());
    
    fileInputLabel.addEventListener('click', () => fileInput.click());
}





//funcion para obtener url de img carrusel
function mostrarDatos() {
    // Buscar el contenedor de imágenes
    const container = document.getElementById('imageContainer');
    // Obtener la imagen dentro del contenedor
    const img = container.querySelector('img');
    
    if (img) {
        // Obtener la URL de la imagen
        const imageUrl = img.src;
        
        // Mostrar la URL de la imagen en la consola
        console.log('URL de la imagen:', imageUrl);
    } else {
        // Si no hay imagen seleccionada, mostrar un mensaje en la consola
        console.log('No hay imagen seleccionada');
    }
}


/* const container = document.getElementById('imageContainer');
const numImagesSelect = document.getElementById('numImagesSelect');

numImagesSelect.addEventListener('change', function(event) {
    event.preventDefault();
    const numImages = parseInt(event.target.value);
   
    container.innerHTML = '';
    
    for (let i = 0; i < numImages; i++) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
        fileInput.name = 'numImagesSelect';
        fileInput.classList.add('my-2');
        fileInput.addEventListener('change', function(event) {
            const file = event.target.files[0];
            
            if (!file.type.startsWith('image/')) {
                return;
            }
          
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.classList.add('w-full', 'max-w-xs', 'p-2', 'border', 'border-orange-300', 'rounded-lg', 'shadow-md', 'my-2');
            
            container.replaceChild(img, fileInput);
            container.scrollTop = container.scrollHeight;
        });
        container.appendChild(fileInput);
    }

    // Agregar botón de guardar al final del contenedor
    const guardarButton = document.createElement('button');
    guardarButton.textContent = 'Guardar';
    guardarButton.classList.add('my-4', 'py-2', 'px-4', 'bg-blue-500', 'text-white', 'rounded', 'shadow');
    guardarButton.addEventListener('click', guardarImagenes);
    container.appendChild(guardarButton);
});

function guardarImagenes() {
    // Obtener todas las imágenes dentro del contenedor
    const imagenes = container.querySelectorAll('img');
    
    // Aquí podrías hacer algo con las imágenes, por ejemplo:
    imagenes.forEach(img => {
        // Puedes acceder a img.src para obtener la URL de cada imagen
        // Por ejemplo, enviarlas a un servidor con fetch o almacenarlas localmente
        console.log(img.src);
    });
} */


/* mostrar imagenes tanto cental como superio derecha */ 
document.addEventListener('DOMContentLoaded', function() {
    const dropzoneInputs = document.querySelectorAll('#dropzone-file, #dropzone-imagenE');
    
    dropzoneInputs.forEach(dropzoneInput => {
        const previewContainer = dropzoneInput.id === 'dropzone-file' ? document.getElementById('preview') : document.getElementById('vistaEmpresa');
        
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
                    previewContainer.innerHTML = ''; 
                    previewContainer.appendChild(imgElement);
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
        const previewContainer = dropzoneInput.id === 'dropzone-file' ? document.getElementById('preview') : document.getElementById('vistaEmpresa');
        const imgElement = previewContainer.querySelector('img');
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



/* document.addEventListener('DOMContentLoaded', function() {
    const dropzoneInput = document.getElementById('dropzone-imagenE');
    const previewContainer = document.getElementById('vistaEmpresa');
    const dropzoneLabel = document.querySelector('label[for="dropzone-imagenE"]');

    dropzoneInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageUrl = event.target.result;
                const imgElement = new Image();
                imgElement.src = imageUrl;
                imgElement.onload = function() {
                    const imgWidth = this.width;
                    const imgHeight = this.height;

                    // Ajustar el tamaño del dropzone al tamaño de la imagen
                    dropzoneLabel.style.width = imgWidth + '10px';
                    dropzoneLabel.style.height = imgHeight + '10px';

                    // Mostrar la imagen dentro del dropzone
                    previewContainer.innerHTML = '';
                    previewContainer.appendChild(imgElement);
                };
            };
            reader.readAsDataURL(file);
        }
    });
}); */

/* js select imagen izquierda */

/* document.addEventListener('DOMContentLoaded', function() {
    const opcion_seleccionada_categoria_agregar_producto = document.getElementById('opcion_seleccionada_categoria_agregar_producto');
    const opciones_categoria_agregar_producto = document.getElementById('opciones_categoria_agregar_producto');
    const valores_categoria_agregar_producto= document.getElementById('valores_categoria_agregar_producto');
    const selector_categoria_agregar_producto = document.querySelectorAll('#opciones_categoria_agregar_producto div');
        
    opcion_seleccionada_categoria_agregar_producto.addEventListener('click', function() {
      opciones_categoria_agregar_producto.classList.toggle('hidden');
    });
        
    selector_categoria_agregar_producto.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_categoria_agregar_producto.value = value;
        opcion_seleccionada_categoria_agregar_producto.querySelector('span').textContent = option.textContent;
        opciones_categoria_agregar_producto.classList.add('hidden');
      });
    });
        
    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_categoria_agregar_producto.contains(event.target) && !opciones_categoria_agregar_producto.contains(event.target)) {
        opciones_categoria_agregar_producto.classList.add('hidden');
      }
    });
  }); */

//Dom de checklist de tallas
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
const fitSelect = document.getElementById('fit');
const fitSelectContainer = document.getElementById('fitSelect');
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
    if (selectedCategoria === 'moda') {
        createFitSelect();
    } else {
        // Ocultar el contenedor de botón si la categoría no es válida
        botonSelectContainer.classList.add('hidden');
    }

    if (selectedCategoria === 'moda') {
        // Cambiar el título y opciones del select de Botón para Moda
        botonLabel.textContent = 'Botón / Hebilla';
        botonSelect.innerHTML = `
            <option value="boton">Botón</option>
            <option value="hebilla">Hebilla</option>
        `;
        botonSelectContainer.classList.remove('hidden');
    } else if (selectedCategoria === 'basico' || selectedCategoria === 'bermuda' || selectedCategoria === 'short') {
        // Restaurar título y opciones originales para otras categorías
        botonLabel.textContent = 'Botón';
        botonSelect.innerHTML = `
            <option value="boton">Botón</option>
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
    fitLabel.htmlFor = 'fit';
    fitLabel.classList.add('block', 'mb-1', 'text-sm', 'font-medium', 'text-white-900', 'text-white');
    fitLabel.textContent = 'Fit';
    
    const fitSelect = document.createElement('select');
    fitSelect.id = 'fit';
    fitSelect.name = 'fit';
    fitSelect.classList.add('border', 'border-orange-300', 'text-gray-900', 'text-sm', 'rounded-3xl', 'focus:ring-orange-500', 'focus:border-orange-500', 'block', 'w-full', 'p-2.5', 'text-white', 'placeholder-white', 'h-10', 'bg-[#db4900]', 'mb-2');
    
    // Agregar opciones para "moda"
    fitSelect.innerHTML = `
        <option value="overol">Overol</option>
        <option value="pesquero">Pesquero</option>
    `;
    
    fitSelectContainer.appendChild(fitLabel);
    fitSelectContainer.appendChild(fitSelect);
    
    // Insertar el contenedor fitSelect justo después del campo de tipo de corte
    const categoriaDiv = document.querySelector('#categoria').closest('div');
    categoriaDiv.insertAdjacentElement('afterend', fitSelectContainer);
}




//mostrar las tallas en cosola
document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const checkedCheckboxes = []; // Arreglo para almacenar los checkboxes marcados

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const isChecked = this.checked;
            const inputValue = this.value; // Obtener el valor del checkbox

            if (isChecked) {
                // Verificar si el checkbox ya está en el arreglo de checkboxes marcados
                if (!checkedCheckboxes.includes(inputValue)) {
                    checkedCheckboxes.push(inputValue); // Agregar el valor al arreglo
                }

                // Generar un nombre único para el grupo de checkboxes marcados
                const name = 'checkbox-active-' + inputValue;

                // Obtener todos los checkboxes con el mismo valor y asignarles el mismo nombre
                const sameValueCheckboxes = document.querySelectorAll('input[type="checkbox"][value="' + inputValue + '"]');

                sameValueCheckboxes.forEach(function(checkbox) {
                    checkbox.setAttribute('name', name); // Agregar el atributo 'name' al checkbox
                });
            } else {
                // Remover el valor del arreglo de checkboxes marcados
                const index = checkedCheckboxes.indexOf(inputValue);
                if (index !== -1) {
                    checkedCheckboxes.splice(index, 1);
                }

                // Quitar el atributo 'name' de todos los checkboxes con el mismo valor
                const sameValueCheckboxes = document.querySelectorAll('input[type="checkbox"][value="' + inputValue + '"]');

                sameValueCheckboxes.forEach(function(checkbox) {
                    checkbox.removeAttribute('name'); // Quitar el atributo 'name' del checkbox
                });
            }
        });
    });
});