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

//Funcionalidad de los elementos <select>
document.addEventListener('DOMContentLoaded', function () {
    // Array con los detalles de cada conjunto de elementos
    const elementos = [
        {
            idSeleccionado: 'opcion_seleccionada_color_editar_producto',
            idOpciones: 'opciones_color_editar_producto',
            idValores: 'valores_color_editar_producto'
        },
        {
            idSeleccionado: 'opcion_seleccionada_anchor_editar_producto_elasticos',
            idOpciones: 'opciones_anchor_editar_producto_elasticos',
            idValores: 'valores_anchor_editar_producto_elasticos'
        },
        {
            idSeleccionado: 'opcion_seleccionada_calibre_editar_producto_hilos',
            idOpciones: 'opciones_calibre_editar_producto_hilos',
            idValores: 'valores_calibre_editar_producto_hilos'
        },
        {
            idSeleccionado: 'opcion_seleccionada_tapa_editar_producto_hilos',
            idOpciones: 'opciones_tapa_editar_producto_hilos',
            idValores: 'valores_tapa_editar_producto_hilos'
        },
        {
            idSeleccionado: 'opcion_seleccionada_tipo_editar_producto_botones',
            idOpciones: 'opciones_tipo_editar_producto_botones',
            idValores: 'valores_tipo_editar_producto_botones'
        },
        {
            idSeleccionado: 'opcion_seleccionada_tamano_editar_producto_botones',
            idOpciones: 'opciones_tamano_editar_producto_botones',
            idValores: 'valores_tamano_editar_producto_botones'
        }
    ];

    // Función para manejar el evento de clic en las opciones
    function manejarSeleccion(elemento) {
        const opcionSeleccionada = document.getElementById(elemento.idSeleccionado);
        const opciones = document.getElementById(elemento.idOpciones);
        const valores = document.getElementById(elemento.idValores);
        const selector = document.querySelectorAll(`#${elemento.idOpciones} div`);

        if (opcionSeleccionada != null) {
            opcionSeleccionada.addEventListener('click', function () {
                opciones.classList.toggle('hidden');
            });

            selector.forEach(option => {
                option.addEventListener('click', function () {
                    const value = option.getAttribute('data-value');
                    valores.value = value;
                    opcionSeleccionada.querySelector('span').textContent = option.textContent;
                    opciones.classList.add('hidden');
                });
            });

            document.addEventListener('click', function (event) {
                if (!opcionSeleccionada.contains(event.target) && !opciones.contains(event.target)) {
                    opciones.classList.add('hidden');
                }
            });
        }
    }

    // Iterar cada elemento y aplicar la función
    elementos.forEach(elemento => {
        manejarSeleccion(elemento);
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