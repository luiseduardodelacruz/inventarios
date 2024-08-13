// Funcionalidad de los elementos <select> (Las listas Desplegables)
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
            idSeleccionado: 'opcion_seleccionada_tamano_editar_producto_botones',
            idOpciones: 'opciones_tamano_editar_producto_botones',
            idValores: 'valores_tamano_editar_producto_botones'
        },
        {
            idSeleccionado: 'opcion_seleccionada_tamano_editar_producto_remaches',
            idOpciones: 'opciones_tamano_editar_producto_remaches',
            idValores: 'valores_tamano_editar_producto_remaches'
        },
        {
            idSeleccionado: 'opcion_seleccionada_marca_editar_producto_etiquetas',
            idOpciones: 'opciones_marca_editar_producto_etiquetas',
            idValores: 'valores_marca_editar_producto_etiquetas'
        },
        {
            idSeleccionado: 'opcion_seleccionada_talla_editar_producto_etiquetas',
            idOpciones: 'opciones_talla_editar_producto_etiquetas',
            idValores: 'valores_talla_editar_producto_etiquetas'
        },
        {
            idSeleccionado: 'opcion_seleccionada_departamento_editar_producto_etiquetas',
            idOpciones: 'opciones_departamento_editar_producto_etiquetas',
            idValores: 'valores_departamento_editar_producto_etiquetas'
        },
        {
            idSeleccionado: 'opcion_seleccionada_proceso_editar_producto_etiquetas',
            idOpciones: 'opciones_proceso_editar_producto_etiquetas',
            idValores: 'valores_proceso_editar_producto_etiquetas'
        },
        {
            idSeleccionado: 'opcion_seleccionada_talla_editar_producto_cerilleras',
            idOpciones: 'opciones_talla_editar_producto_cerilleras',
            idValores: 'valores_talla_editar_producto_cerilleras'
        },
        {
            idSeleccionado: 'opcion_seleccionada_departamento_editar_producto_cerilleras',
            idOpciones: 'opciones_departamento_editar_producto_cerilleras',
            idValores: 'valores_departamento_editar_producto_cerilleras'
        },
        {
            idSeleccionado: 'opcion_seleccionada_longitud_editar_producto_cierres',
            idOpciones: 'opciones_longitud_editar_producto_cierres',
            idValores: 'valores_longitud_editar_producto_cierres'
        },
        {
            idSeleccionado: 'opcion_seleccionada_proceso_editar_producto_cierres',
            idOpciones: 'opciones_proceso_editar_producto_cierres',
            idValores: 'valores_proceso_editar_producto_cierres'
        },
        {
            idSeleccionado: 'opcion_seleccionada_tipo_agregar_producto_empaque',
            idOpciones: 'opciones_tipo_agregar_producto_empaque',
            idValores: 'valores_tipo_agregar_producto_empaque'
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