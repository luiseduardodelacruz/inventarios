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

