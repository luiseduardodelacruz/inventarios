//Funcionalidad Drawer
const btn_mostrar = document.getElementById('btn_mostrar');
const btn_ocultar = document.getElementById('btn_ocultar');
const drawer = document.getElementById('drawer');

function mostrar() {
  btn_mostrar.classList.add('hidden');
  btn_ocultar.classList.remove('hidden');
  drawer.classList.remove('lg:-translate-x-[82.5%]');
  drawer.classList.remove('md:-translate-x-[82.5%]');
  drawer.classList.remove('-translate-x-[82.5%]');
}

function ocultar() {
  btn_ocultar.classList.add('hidden');
  btn_mostrar.classList.remove('hidden');
  drawer.classList.add('lg:-translate-x-[82.5%]');
  drawer.classList.add('md:-translate-x-[82.5%]');
  drawer.classList.add('-translate-x-[82.5%]');
}

btn_mostrar.addEventListener('click', mostrar);
btn_ocultar.addEventListener('click', ocultar);

// Funcionalidad Botones Drawer
const btn_elasticos = document.getElementById('btn_elasticos');
const btn_hilos = document.getElementById('btn_hilos');
const btn_cordones = document.getElementById('btn_cordones');
const btn_botones = document.getElementById('btn_botones');
const btn_sujetador = document.getElementById('btn_sujetador');
const btn_ajustador = document.getElementById('btn_ajustador');
const btn_etiquetas = document.getElementById('btn_etiquetas');

function elasticos() {
  if(!btn_elasticos.classList.contains('bg-[#ff5e3b]')){
    btn_hilos.classList.remove('bg-[#ff5e3b]');
    btn_cordones.classList.remove('bg-[#ff5e3b]');
    btn_botones.classList.remove('bg-[#ff5e3b]');
    btn_sujetador.classList.remove('bg-[#ff5e3b]');
    btn_ajustador.classList.remove('bg-[#ff5e3b]');
    btn_etiquetas.classList.remove('bg-[#ff5e3b]');
    btn_elasticos.classList.add('bg-[#ff5e3b]');
  } else{
    btn_elasticos.classList.remove('bg-[#ff5e3b]');
  }
}

function hilos() {
  if(!btn_hilos.classList.contains('bg-[#ff5e3b]')){
    btn_elasticos.classList.remove('bg-[#ff5e3b]');
    btn_cordones.classList.remove('bg-[#ff5e3b]');
    btn_botones.classList.remove('bg-[#ff5e3b]');
    btn_sujetador.classList.remove('bg-[#ff5e3b]');
    btn_ajustador.classList.remove('bg-[#ff5e3b]');
    btn_etiquetas.classList.remove('bg-[#ff5e3b]');
    btn_hilos.classList.add('bg-[#ff5e3b]');
  } else{
    btn_hilos.classList.remove('bg-[#ff5e3b]');
  }
}

function cordones() {
  if(!btn_cordones.classList.contains('bg-[#ff5e3b]')){
    btn_elasticos.classList.remove('bg-[#ff5e3b]');
    btn_hilos.classList.remove('bg-[#ff5e3b]');
    btn_botones.classList.remove('bg-[#ff5e3b]');
    btn_sujetador.classList.remove('bg-[#ff5e3b]');
    btn_ajustador.classList.remove('bg-[#ff5e3b]');
    btn_etiquetas.classList.remove('bg-[#ff5e3b]');
    btn_cordones.classList.add('bg-[#ff5e3b]');
  } else{
    btn_cordones.classList.remove('bg-[#ff5e3b]');
  }
}

function botones() {
  if(!btn_botones.classList.contains('bg-[#ff5e3b]')){
    btn_elasticos.classList.remove('bg-[#ff5e3b]');
    btn_hilos.classList.remove('bg-[#ff5e3b]');
    btn_cordones.classList.remove('bg-[#ff5e3b]');
    btn_sujetador.classList.remove('bg-[#ff5e3b]');
    btn_ajustador.classList.remove('bg-[#ff5e3b]');
    btn_etiquetas.classList.remove('bg-[#ff5e3b]');
    btn_botones.classList.add('bg-[#ff5e3b]');
  } else{
    btn_botones.classList.remove('bg-[#ff5e3b]');
  }
}

function sujetador() {
  if(!btn_sujetador.classList.contains('bg-[#ff5e3b]')){
    btn_elasticos.classList.remove('bg-[#ff5e3b]');
    btn_hilos.classList.remove('bg-[#ff5e3b]');
    btn_cordones.classList.remove('bg-[#ff5e3b]');
    btn_botones.classList.remove('bg-[#ff5e3b]');
    btn_ajustador.classList.remove('bg-[#ff5e3b]');
    btn_etiquetas.classList.remove('bg-[#ff5e3b]');
    btn_sujetador.classList.add('bg-[#ff5e3b]');
  } else{
    btn_sujetador.classList.remove('bg-[#ff5e3b]');
  }
}

function ajustador() {
  if(!btn_ajustador.classList.contains('bg-[#ff5e3b]')){
    btn_elasticos.classList.remove('bg-[#ff5e3b]');
    btn_hilos.classList.remove('bg-[#ff5e3b]');
    btn_cordones.classList.remove('bg-[#ff5e3b]');
    btn_botones.classList.remove('bg-[#ff5e3b]');
    btn_sujetador.classList.remove('bg-[#ff5e3b]');
    btn_etiquetas.classList.remove('bg-[#ff5e3b]');
    btn_ajustador.classList.add('bg-[#ff5e3b]');
  } else{
    btn_ajustador.classList.remove('bg-[#ff5e3b]');
  }
}

function etiquetas() {
  if(!btn_etiquetas.classList.contains('bg-[#ff5e3b]')){
    btn_elasticos.classList.remove('bg-[#ff5e3b]');
    btn_hilos.classList.remove('bg-[#ff5e3b]');
    btn_cordones.classList.remove('bg-[#ff5e3b]');
    btn_botones.classList.remove('bg-[#ff5e3b]');
    btn_sujetador.classList.remove('bg-[#ff5e3b]');
    btn_ajustador.classList.remove('bg-[#ff5e3b]');
    btn_etiquetas.classList.add('bg-[#ff5e3b]');
  } else{
    btn_etiquetas.classList.remove('bg-[#ff5e3b]');
  }
}

btn_elasticos.addEventListener('click', elasticos);
btn_hilos.addEventListener('click', hilos);
btn_cordones.addEventListener('click', cordones);
btn_botones.addEventListener('click', botones);
btn_sujetador.addEventListener('click', sujetador);
btn_ajustador.addEventListener('click', ajustador);
btn_etiquetas.addEventListener('click', etiquetas);

// Funcionalidad Modal Agregar Productos
const abrir_agregar_producto = document.getElementById('abrir_agregar_producto');
const cerrar_agregar_producto = document.getElementById('cerrar_agregar_producto');
const agregar_producto = document.getElementById('agregar_producto');

abrir_agregar_producto.addEventListener('click', () => {
  agregar_producto.classList.remove('hidden');
});

cerrar_agregar_producto.addEventListener('click', () => {
  agregar_producto.classList.add('hidden');
});

window.addEventListener('click', function(event) {
  if (event.target == agregar_producto) {
      agregar_producto.classList.add('hidden');
  }
});

// Funcionalidad Modal Eliminar Productos
const abrir_eliminar_producto = document.getElementById('abrir_eliminar_producto');
const cerrar_eliminar_producto = document.getElementById('cerrar_eliminar_producto');
const eliminar_producto = document.getElementById('eliminar_producto');

abrir_eliminar_producto.addEventListener('click', () => {
  eliminar_producto.classList.remove('hidden');
});

cerrar_eliminar_producto.addEventListener('click', () => {
  eliminar_producto.classList.add('hidden');
});

window.addEventListener('click', function(event) {
  if (event.target == eliminar_producto) {
    eliminar_producto.classList.add('hidden');
  }
});

// Funcionalidad Select Categoria Agregar Productos
document.addEventListener('DOMContentLoaded', function() {
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
});

// Funcionalidades Selects
document.addEventListener('DOMContentLoaded', function() {
  // Espera a que se dispare el evento de elementos generados
  document.addEventListener('elementosGenerados', function(event) {
    const categoria = event.detail.categoria;

    if (categoria === 'elasticos') {
      selectAnchorAgregarProductosElasticos();
      selectColorAgregarProductosElasticos();
    } else if (categoria === 'hilos') {
      selectCalibreAgregarProductosHilos();
      selectColorAgregarProductosHilos();
      selectTapaAgregarProductosHilos();
    } else if (categoria === 'cordones') {
      selectColorAgregarProductosCordones();
    } else if (categoria === 'botones') {
      selectTipoAgregarProductosBotones();
    } else if (categoria == 'botonesColorDinamicoOpcion1'){
      selectColorAgregarProductosBotones();
      selectTamanoAgregarProductosBotones();
    } else if (categoria == 'botonesColorDinamicoOpcion2'){
      selectTamanoAgregarProductosBotones();
    }
  });

  // Funcionalidad Select Anchor Agregar Productos Elasticos
  function selectAnchorAgregarProductosElasticos() {
    const opcion_seleccionada_anchor_agregar_producto_elasticos = document.getElementById('opcion_seleccionada_anchor_agregar_producto_elasticos');
    const opciones_anchor_agregar_producto_elasticos = document.getElementById('opciones_anchor_agregar_producto_elasticos');
    const valores_anchor_agregar_producto_elasticos = document.getElementById('valores_anchor_agregar_producto_elasticos');
    const selector_anchor_agregar_producto_elasticos = document.querySelectorAll('#opciones_anchor_agregar_producto_elasticos div');

    opcion_seleccionada_anchor_agregar_producto_elasticos.addEventListener('click', function() {
      opciones_anchor_agregar_producto_elasticos.classList.toggle('hidden');
    });

    selector_anchor_agregar_producto_elasticos.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_anchor_agregar_producto_elasticos.value = value;
        opcion_seleccionada_anchor_agregar_producto_elasticos.querySelector('span').textContent = option.textContent;
        opciones_anchor_agregar_producto_elasticos.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_anchor_agregar_producto_elasticos.contains(event.target) && !opciones_anchor_agregar_producto_elasticos.contains(event.target)) {
        opciones_anchor_agregar_producto_elasticos.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Color Agregar Productos Elasticos
  function selectColorAgregarProductosElasticos() {
    const opcion_seleccionada_color_agregar_producto_elasticos = document.getElementById('opcion_seleccionada_color_agregar_producto_elasticos');
    const opciones_color_agregar_producto_elasticos = document.getElementById('opciones_color_agregar_producto_elasticos');
    const valores_color_agregar_producto_elasticos = document.getElementById('valores_color_agregar_producto_elasticos');
    const selector_color_agregar_producto_elasticos = document.querySelectorAll('#opciones_color_agregar_producto_elasticos div');

    opcion_seleccionada_color_agregar_producto_elasticos.addEventListener('click', function() {
      opciones_color_agregar_producto_elasticos.classList.toggle('hidden');
    });

    selector_color_agregar_producto_elasticos.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_color_agregar_producto_elasticos.value = value;
        opcion_seleccionada_color_agregar_producto_elasticos.querySelector('span').textContent = option.textContent;
        opciones_color_agregar_producto_elasticos.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_color_agregar_producto_elasticos.contains(event.target) && !opciones_color_agregar_producto_elasticos.contains(event.target)) {
        opciones_color_agregar_producto_elasticos.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Calibre Agregar Productos Hilos
  function selectCalibreAgregarProductosHilos() {
    const opcion_seleccionada_calibre_agregar_producto_hilos = document.getElementById('opcion_seleccionada_calibre_agregar_producto_hilos');
    const opciones_calibre_agregar_producto_hilos = document.getElementById('opciones_calibre_agregar_producto_hilos');
    const valores_calibre_agregar_producto_hilos = document.getElementById('valores_calibre_agregar_producto_hilos');
    const selector_calibre_agregar_producto_hilos = document.querySelectorAll('#opciones_calibre_agregar_producto_hilos div');

    opcion_seleccionada_calibre_agregar_producto_hilos.addEventListener('click', function() {
      opciones_calibre_agregar_producto_hilos.classList.toggle('hidden');
    });

    selector_calibre_agregar_producto_hilos.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_calibre_agregar_producto_hilos.value = value;
        opcion_seleccionada_calibre_agregar_producto_hilos.querySelector('span').textContent = option.textContent;
        opciones_calibre_agregar_producto_hilos.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_calibre_agregar_producto_hilos.contains(event.target) && !opciones_calibre_agregar_producto_hilos.contains(event.target)) {
        opciones_calibre_agregar_producto_hilos.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Color Agregar Productos Hilos
  function selectColorAgregarProductosHilos() {
    const opcion_seleccionada_color_agregar_producto_hilos = document.getElementById('opcion_seleccionada_color_agregar_producto_hilos');
    const opciones_color_agregar_producto_hilos = document.getElementById('opciones_color_agregar_producto_hilos');
    const valores_color_agregar_producto_hilos = document.getElementById('valores_color_agregar_producto_hilos');
    const selector_color_agregar_producto_hilos = document.querySelectorAll('#opciones_color_agregar_producto_hilos div');

    opcion_seleccionada_color_agregar_producto_hilos.addEventListener('click', function() {
      opciones_color_agregar_producto_hilos.classList.toggle('hidden');
    });

    selector_color_agregar_producto_hilos.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_color_agregar_producto_hilos.value = value;
        opcion_seleccionada_color_agregar_producto_hilos.querySelector('span').textContent = option.textContent;
        opciones_color_agregar_producto_hilos.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_color_agregar_producto_hilos.contains(event.target) && !opciones_color_agregar_producto_hilos.contains(event.target)) {
        opciones_color_agregar_producto_hilos.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Tapa Agregar Productos Hilos
  function selectTapaAgregarProductosHilos() {
    const opcion_seleccionada_tapa_agregar_producto_hilos = document.getElementById('opcion_seleccionada_tapa_agregar_producto_hilos');
    const opciones_tapa_agregar_producto_hilos = document.getElementById('opciones_tapa_agregar_producto_hilos');
    const valores_tapa_agregar_producto_hilos = document.getElementById('valores_tapa_agregar_producto_hilos');
    const selector_tapa_agregar_producto_hilos = document.querySelectorAll('#opciones_tapa_agregar_producto_hilos div');

    opcion_seleccionada_tapa_agregar_producto_hilos.addEventListener('click', function() {
      opciones_tapa_agregar_producto_hilos.classList.toggle('hidden');
    });

    selector_tapa_agregar_producto_hilos.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_tapa_agregar_producto_hilos.value = value;
        opcion_seleccionada_tapa_agregar_producto_hilos.querySelector('span').textContent = option.textContent;
        opciones_tapa_agregar_producto_hilos.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_tapa_agregar_producto_hilos.contains(event.target) && !opciones_tapa_agregar_producto_hilos.contains(event.target)) {
        opciones_tapa_agregar_producto_hilos.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Color Agregar Productos Cordones
  function selectColorAgregarProductosCordones() {
    const opcion_seleccionada_color_agregar_producto_cordones = document.getElementById('opcion_seleccionada_color_agregar_producto_cordones');
    const opciones_color_agregar_producto_cordones = document.getElementById('opciones_color_agregar_producto_cordones');
    const valores_color_agregar_producto_cordones = document.getElementById('valores_color_agregar_producto_cordones');
    const selector_color_agregar_producto_cordones = document.querySelectorAll('#opciones_color_agregar_producto_cordones div');
        
    opcion_seleccionada_color_agregar_producto_cordones.addEventListener('click', function() {
      opciones_color_agregar_producto_cordones.classList.toggle('hidden');
    });
        
    selector_color_agregar_producto_cordones.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_color_agregar_producto_cordones.value = value;
        opcion_seleccionada_color_agregar_producto_cordones.querySelector('span').textContent = option.textContent;
        opciones_color_agregar_producto_cordones.classList.add('hidden');
      });
    });
        
    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_color_agregar_producto_cordones.contains(event.target) && !opciones_color_agregar_producto_cordones.contains(event.target)) {
        opciones_color_agregar_producto_cordones.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Tipo Agregar Productos Botones
  function selectTipoAgregarProductosBotones() {
    const opcion_seleccionada_tipo_agregar_producto_botones = document.getElementById('opcion_seleccionada_tipo_agregar_producto_botones');
    const opciones_tipo_agregar_producto_botones = document.getElementById('opciones_tipo_agregar_producto_botones');
    const valores_tipo_agregar_producto_botones = document.getElementById('valores_tipo_agregar_producto_botones');
    const selector_tipo_agregar_producto_botones = document.querySelectorAll('#opciones_tipo_agregar_producto_botones div');
        
    opcion_seleccionada_tipo_agregar_producto_botones.addEventListener('click', function() {
      opciones_tipo_agregar_producto_botones.classList.toggle('hidden');
    });
        
    selector_tipo_agregar_producto_botones.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_tipo_agregar_producto_botones.value = value;
        opcion_seleccionada_tipo_agregar_producto_botones.querySelector('span').textContent = option.textContent;
        opciones_tipo_agregar_producto_botones.classList.add('hidden');
      });
    });
        
    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_tipo_agregar_producto_botones.contains(event.target) && !opciones_tipo_agregar_producto_botones.contains(event.target)) {
        opciones_tipo_agregar_producto_botones.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Color Agregar Productos Botones
  function selectColorAgregarProductosBotones() {
    const opcion_seleccionada_color_agregar_producto_botones = document.getElementById('opcion_seleccionada_color_agregar_producto_botones');
    const opciones_color_agregar_producto_botones = document.getElementById('opciones_color_agregar_producto_botones');
    const valores_color_agregar_producto_botones = document.getElementById('valores_color_agregar_producto_botones');
    const selector_color_agregar_producto_botones = document.querySelectorAll('#opciones_color_agregar_producto_botones div');
        
    opcion_seleccionada_color_agregar_producto_botones.addEventListener('click', function() {
      opciones_color_agregar_producto_botones.classList.toggle('hidden');
    });
        
    selector_color_agregar_producto_botones.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_color_agregar_producto_botones.value = value;
        opcion_seleccionada_color_agregar_producto_botones.querySelector('span').textContent = option.textContent;
        opciones_color_agregar_producto_botones.classList.add('hidden');
      });
    });
        
    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_color_agregar_producto_botones.contains(event.target) && !opciones_color_agregar_producto_botones.contains(event.target)) {
        opciones_color_agregar_producto_botones.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Tamaño Agregar Productos Botones
  function selectTamanoAgregarProductosBotones() {
    const opcion_seleccionada_tamano_agregar_producto_botones = document.getElementById('opcion_seleccionada_tamano_agregar_producto_botones');
    const opciones_tamano_agregar_producto_botones = document.getElementById('opciones_tamano_agregar_producto_botones');
    const valores_tamano_agregar_producto_botones = document.getElementById('valores_tamano_agregar_producto_botones');
    const selector_tamano_agregar_producto_botones = document.querySelectorAll('#opciones_tamano_agregar_producto_botones div');
        
    opcion_seleccionada_tamano_agregar_producto_botones.addEventListener('click', function() {
      opciones_tamano_agregar_producto_botones.classList.toggle('hidden');
    });
        
    selector_tamano_agregar_producto_botones.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_tamano_agregar_producto_botones.value = value;
        opcion_seleccionada_tamano_agregar_producto_botones.querySelector('span').textContent = option.textContent;
        opciones_tamano_agregar_producto_botones.classList.add('hidden');
      });
    });
        
    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_tamano_agregar_producto_botones.contains(event.target) && !opciones_tamano_agregar_producto_botones.contains(event.target)) {
        opciones_tamano_agregar_producto_botones.classList.add('hidden');
      }
    });
  }
});

// Funcionalidad Subir Archivos
const archivo = document.getElementById('archivo');
const nombre_archivo = document.getElementById('nombre_archivo');
                
archivo.addEventListener('change', function() {
  if (archivo.files.length > 0) {
    nombre_archivo.textContent = archivo.files[0].name;
  } else {
    nombre_archivo.textContent = 'Seleccione un Archivo';
  }
});