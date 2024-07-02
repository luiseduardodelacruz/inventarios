//Funcionalidad Select Categoria Editar Productos
document.addEventListener('DOMContentLoaded', function () {
    const opcion_seleccionada_categoria_editar_producto = document.getElementById('opcion_seleccionada_categoria_editar_producto');
    const opciones_categoria_editar_producto = document.getElementById('opciones_categoria_editar_producto');
    const valores_categoria_editar_producto = document.getElementById('valores_categoria_editar_producto');
    const selector_categoria_editar_producto = document.querySelectorAll('#opciones_categoria_editar_producto div');

    opcion_seleccionada_categoria_editar_producto.addEventListener('click', function () {
        opciones_categoria_editar_producto.classList.toggle('hidden');
    });

    selector_categoria_editar_producto.forEach(option => {
        option.addEventListener('click', function () {
            const value = option.getAttribute('data-value');
            valores_categoria_editar_producto.value = value;
            opcion_seleccionada_categoria_editar_producto.querySelector('span').textContent = option.textContent;
            opciones_categoria_editar_producto.classList.add('hidden');
        });
    });

    document.addEventListener('click', function (event) {
        if (!opcion_seleccionada_categoria_editar_producto.contains(event.target) && !opciones_categoria_editar_producto.contains(event.target)) {
            opciones_categoria_editar_producto.classList.add('hidden');
        }
    });
});

//Funcionalidad Select Color Editar Productos
document.addEventListener('DOMContentLoaded', function () {
    const opcion_seleccionada_color_editar_producto = document.getElementById('opcion_seleccionada_color_editar_producto');
    const opciones_color_editar_producto = document.getElementById('opciones_color_editar_producto');
    const valores_color_editar_producto = document.getElementById('valores_color_editar_producto');
    const selector_color_editar_producto = document.querySelectorAll('#opciones_color_editar_producto div');

    opcion_seleccionada_color_editar_producto.addEventListener('click', function () {
        opciones_color_editar_producto.classList.toggle('hidden');
    });

    selector_color_editar_producto.forEach(option => {
        option.addEventListener('click', function () {
            const value = option.getAttribute('data-value');
            valores_color_editar_producto.value = value;
            opcion_seleccionada_color_editar_producto.querySelector('span').textContent = option.textContent;
            opciones_color_editar_producto.classList.add('hidden');
        });
    });

    document.addEventListener('click', function (event) {
        if (!opcion_seleccionada_color_editar_producto.contains(event.target) && !opciones_color_editar_producto.contains(event.target)) {
            opciones_color_editar_producto.classList.add('hidden');
        }
    });
});

//Funcionalidad Subir Archivos
const archivo = document.getElementById('imagenArchivo');
const nombre_archivo = document.getElementById('nombre_archivo');
                
archivo.addEventListener('change', function() {
  if (archivo.files.length > 0) {
    nombre_archivo.textContent = archivo.files[0].name;
  } else {
    nombre_archivo.textContent = 'Seleccione un Archivo';
  }
});