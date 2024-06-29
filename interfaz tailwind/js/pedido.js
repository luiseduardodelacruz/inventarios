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


/* mostrar imag */ 

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
                previewContainer.innerHTML = ''; // Limpiar cualquier contenido previo
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
                imgElement.classList.add('max-h-full', 'max-w-full', 'object-contain');
                previewContainer.innerHTML = ''; 
                previewContainer.appendChild(imgElement);
            };
            reader.readAsDataURL(file);
        }
    });
});

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


