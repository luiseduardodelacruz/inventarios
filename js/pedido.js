//carrusel de imagenes del select 
const container = document.getElementById('imageContainer');
const numImagesSelect = document.getElementById('numImagesSelect');

numImagesSelect.addEventListener('change', function(event) {
    event.preventDefault();
    const numImages = parseInt(event.target.value);
   
    container.innerHTML = '';
    
   
    for (let i = 0; i < numImages; i++) {
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';
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
});


/* mostrar imagenes tanto cental como superio derecha */ 
document.addEventListener('DOMContentLoaded', function() {
const dropzoneInput = document.getElementById('dropzone-file');
const previewContainer = document.getElementById('preview');

    dropzoneInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageUrl = event.target.result;
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.classList.add('max-h-full', 'max-w-full');
                previewContainer.innerHTML = ''; 
                previewContainer.appendChild(imgElement);
            };
            reader.readAsDataURL(file);
        }
    });
});
 

document.addEventListener('DOMContentLoaded', function() {
const dropzoneInput = document.getElementById('dropzone-imagenE');
const previewContainer = document.getElementById('vistaEmpresa');

    dropzoneInput.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const imageUrl = event.target.result;
                const imgElement = document.createElement('img');
                imgElement.src = imageUrl;
                imgElement.classList.add('max-h-full', 'max-w-full');
                previewContainer.innerHTML = ''; 
                previewContainer.appendChild(imgElement);
            };
            reader.readAsDataURL(file);
        }
    });
}); 

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
const categoriaSelect = document.getElementById('Categoria');
const fitSelect = document.getElementById('Fit');
const fitSelectContainer = document.getElementById('fitSelect');
const botonSelect = document.getElementById('Boton');
const botonLabel = document.getElementById('botonLabel');
const botonSelectContainer = document.getElementById('botonSelect');

categoriaSelect.addEventListener('change', function() {
const selectedCategoria = categoriaSelect.value;

    if (selectedCategoria === 'moda') {
        // Mostrar el select de Fit para Moda y llenar opciones
        fitSelect.innerHTML = `
            <option value="overol">Overol</option>
            <option value="pesquero">Pesquero</option>
            <option value="skinny">Skinny</option>
        `;
        fitSelectContainer.classList.remove('hidden');
    } else if (selectedCategoria === 'pantalon') {
        // Mostrar el select de Fit para Pantalón y llenar opciones
        fitSelect.innerHTML = `
            <option value="slim">Slim</option>
                <option value="jogger">Jogger</option>
                <option value="skinny">Skinny</option>
        `;
        fitSelectContainer.classList.remove('hidden');
    } else {
        // Ocultar el select de Fit si no hay selección válida
        fitSelectContainer.classList.add('hidden');
    }
});

categoriaSelect.addEventListener('change', function() {
const selectedCategoria = categoriaSelect.value;
    
    if (selectedCategoria === 'moda') {
        // Cambiar el título y opciones del select de Botón para Moda
        botonLabel.textContent = 'Botón/Hebilla';
        botonSelect.innerHTML = `
            <option value="boton">Botón</option>
            <option value="hebilla">Hebilla</option>
        `;
        botonSelectContainer.classList.remove('hidden');
    } else if (selectedCategoria === 'pantalon') {
        // Restaurar título y opciones originales para Pantalón
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


function resetearRemoverCampos(){
    const campoFit = document.getElementById('fitSelect');
    if(campoFit !== null){
        campoFit.remove();
    }
}