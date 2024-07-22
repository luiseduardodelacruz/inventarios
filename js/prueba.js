function mostrarDatos() {
    // Obtener el formulario por su ID
    var formulario = document.getElementById("fichaPantalon");
  
    // Obtener todos los elementos del formulario
    var elementos = formulario.elements;
  
    // Crear un objeto para almacenar los valores
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
  
    // Mostrar los datos
    console.log(datos);
}  