function mostrarDatos() {
  // Obtener el formulario por su ID
  var formulario = document.getElementById("fichaPantalon");

  // Obtener todos los elementos del formulario
  var elementos = formulario.elements;

  // Crear un objeto para almacenar los valores del formulario y las URLs de las imágenes
  var datos = {};

  // Iterar sobre los elementos del formulario
  for (var i = 0; i < elementos.length; i++) {
      var elemento = elementos[i];
      // Verificar si el elemento es un campo de entrada que tiene un nombre
      if (elemento.name) {
          // Agregar el valor del campo al objeto de datos
          datos[elemento.name] = elemento.value;
      }
  }

  // Obtener todas las imágenes dentro del contenedor de imágenes
  const container = document.getElementById('imageContainer');
  const imgs = container.querySelectorAll('img');

  // Crear un array para almacenar las URLs de las imágenes
  datos['imageUrls'] = [];

  // Iterar sobre cada imagen para obtener su URL y asignar un nombre único
  imgs.forEach(function(img, index) {
      // Obtener la URL de la imagen
      var imageUrl = img.src;
      // Agregar la URL al array de imageUrls
      datos['imageUrls'].push(imageUrl);
      // Asignar un nombre único basado en el índice
      img.name = 'imagen-' + (index + 1); // Por ejemplo: imagen-1, imagen-2, etc.
  });

  // Mostrar los datos en la consola
  console.log(datos);
}



//codigo de carrucel por modificar
const container = document.getElementById('imageContainer');
const numImagesSelect = document.getElementById('numImagesSelect');

// Listener para cambiar el número de inputs de archivo
numImagesSelect.addEventListener('change', function(event) {
    event.preventDefault();
    const numImages = parseInt(event.target.value);
    
    container.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos inputs

    for (let i = 0; i < numImages; i++) {
        createFileInput();
    }
});

// Crear un nuevo input de archivo
function createFileInput() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
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

    container.appendChild(fileInputLabel);
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

