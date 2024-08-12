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
const categorias = [
  { id: 'btn_all_productos', categoria: '' },
  { id: 'btn_elasticos', categoria: 'elasticos' },
  { id: 'btn_hilos', categoria: 'hilos' },
  { id: 'btn_cordones', categoria: 'cordones' },
  { id: 'btn_botones', categoria: 'botones' },
  { id: 'btn_remaches', categoria: 'remaches' },
  { id: 'btn_ajustador', categoria: 'ajustador' },
  { id: 'btn_etiquetas', categoria: 'etiquetas' },
  { id: 'btn_cerilleras', categoria: 'cerilleras' },
  { id: 'btn_cierres', categoria: 'cierres' },
  { id: 'btn_hebillas', categoria: 'hebillas' },
  { id: 'btn_empaque', categoria: 'empaque'}
];

function removerClasesBackground() {
  categorias.forEach(item => {
    const btn = document.getElementById(item.id);
    btn.classList.remove('bg-[#ff5e3b]');
  });
}

function alternarFondo(btn) {
  if (!btn.classList.contains('bg-[#ff5e3b]')) {
    removerClasesBackground();
    btn.classList.add('bg-[#ff5e3b]');
    localStorage.setItem('categoriaSeleccionada', btn.id);
  } else {
    btn.classList.remove('bg-[#ff5e3b]');
    localStorage.removeItem('categoriaSeleccionada');
  }
}

function clickBotonFiltrar(categoria) {
  return function() {
    buscarPorCategoria(categoria);
    alternarFondo(this);
  };
}

function buscarPorCategoria(categoria) {
  const url = new URL(window.location.href);
  url.searchParams.set('palabraClave', categoria);

  window.location.href = url.toString();
}

document.addEventListener('DOMContentLoaded', function() {
  const categoriaGuardada = localStorage.getItem('categoriaSeleccionada');
  if (categoriaGuardada) {
    const btnGuardado = document.getElementById(categoriaGuardada);
    if (btnGuardado) {
      btnGuardado.classList.add('bg-[#ff5e3b]');
    }
  }
});

categorias.forEach(item => {
  const btn = document.getElementById(item.id);
  btn.addEventListener('click', clickBotonFiltrar(item.categoria));
});

// Funcionalidad Modal Detalles Producto
const cerrar_detalles_producto = document.getElementById('cerrar_detalles_producto');
const detalles_producto = document.getElementById('detalles_producto');

// Función para formatear el texto
function formatearTexto(texto) {
  // Traducción para valores especiales
  const TRADUCCIONES_ESPECIALES = {
    "nino": "Niño",
    "nina": "Niña",
    "generico": "Genérico",
    "metalico": "Metálico"
  };

  if (!texto) return '';

  // Reemplaza guiones bajos por espacios
  texto = texto.replace(/_/g, ' ');

  return texto
      .split(' ') // Divide el texto en palabras
      .map(palabra => TRADUCCIONES_ESPECIALES[palabra.toLowerCase()] || palabra) // Aplica traducción
      .join(' '); // Une las palabras en una cadena
}

function openModalDetails(productId) {
  // Función auxiliar para construir la información adicional del producto
  const buildExtraInfo = (data) => {

    // Campos para los que no se debe aplicar la clase "capitalize"
    const noCapitalizar = ['anchor', 'longitud', 'calibre'];

    const fields = [
      { key: 'color', label: 'Color' },
      { key: 'anchor', label: 'Anchor' },
      { key: 'longitud', label: 'Longitud' },
      { key: 'calibre', label: 'Calibre' },
      { key: 'tapa', label: 'Tapa' },
      { key: 'tamanio', label: 'Tamaño' },
      { key: 'tipo', label: 'Tipo' },
      { key: 'marca', label: 'Marca' },
      { key: 'talla', label: 'Talla' },
      { key: 'departamento', label: 'Departamento' },
      { key: 'proceso', label: 'Proceso' },
    ];
    
    return fields.reduce((info, field) => {
      if (data[field.key]) {
        const formateado = formatearTexto(data[field.key]);
        const claseTexto = noCapitalizar.includes(field.key) ? '' : 'capitalize ';
        info += `<p class="fuente_2 text-sm md:text-base lg:text-base xl:text-lg text-white px-5 md:px-10">${field.label}: <span class="${claseTexto}ml-1 md:ml-3 text-justify fuente_5 text-white break-words">${formateado}</span></p>`;
      }
      return info;
    }, '');
  };

  // Realiza la solicitud fetch para obtener los detalles del producto
  fetch(`/inventario/productos/${productId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('La Respuesta de la Red No fue Correcta: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      // Asignar datos básicos al modal
      document.getElementById('producto-imagen').src = data.imagen || '/img/producto-sin-imagen.png';
      document.getElementById('producto-nombre').textContent = formatearTexto(data.nombre) || 'Nombre no disponible';
      document.getElementById('producto-cantidad').textContent = data.cantidad || 'Cantidad no disponible';
      document.getElementById('producto-categoria').textContent = data.categoria || 'Categoría no disponible';

      // Asignar datos adicionales al modal
      document.getElementById('producto-extra').innerHTML = buildExtraInfo(data);

      // Mostrar el modal
      detalles_producto.classList.remove('hidden');
    })
    .catch(error => console.error('Error:', error));
}

cerrar_detalles_producto.addEventListener('click', () => {
  detalles_producto.classList.add('hidden');
});

window.addEventListener('click', function(event) {
  if (event.target == detalles_producto) {
      detalles_producto.classList.add('hidden');
  }
});

// Funcionalidad Modal Agregar Productos
const cerrar_agregar_producto = document.getElementById('cerrar_agregar_producto');
const agregar_producto = document.getElementById('agregar_producto');

function openModalProductAdd(){
  agregar_producto.classList.remove('hidden');
}

cerrar_agregar_producto.addEventListener('click', () => {
  agregar_producto.classList.add('hidden');
});

window.addEventListener('click', function(event) {
  if (event.target == agregar_producto) {
      agregar_producto.classList.add('hidden');
  }
});

// Funcionalidad Modal Eliminar Productos
const cerrar_eliminar_producto = document.getElementById('cerrar_eliminar_producto');
const eliminar_producto = document.getElementById('eliminar_producto');

let productIdToDelete;

function openModalProductDelete(productId, nombre, imagen) {
    productIdToDelete = productId;
    eliminar_producto.classList.remove('hidden');
    
    document.getElementById('nombre_producto').textContent = formatearTexto(nombre);
    // Verificar si la imagen está definida y no es null
    if (imagen && imagen.trim() !== '' && imagen !== 'null') {
        document.getElementById('imagen_producto').src = imagen;
    } else {
        document.getElementById('imagen_producto').src = '/img/producto-sin-imagen.png';
    }
}

document.getElementById('confirmDeleteProductBtn').addEventListener('click', function() {
  fetch('/inventario/productos/' + productIdToDelete, {
    method: 'DELETE'
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Error al eliminar el producto');
      }
      return response.json();
  })
  .then(data => {
      console.log('Producto eliminado:', data);
      
      // Eliminar el producto de la lista en el frontend
      const productos = document.querySelectorAll('.producto');
      productos.forEach(producto => {
          if (producto.dataset.productId === productIdToDelete) {
              producto.remove();
          }
      });
  })
  .catch(error => {
      console.error('Error:', error);
      // Manejar el error, mostrar un mensaje al usuario
  });
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
    } else if (categoria == 'remaches'){
      selectColorAgregarProductosRemaches();
      selectTamanoAgregarProductosRemaches();
    } else if (categoria == 'ajustador'){
      selectColorAgregarProductosAjustador();
    } else if (categoria == 'etiquetas'){
      selectMarcaAgregarProductosEtiquetas();
      selectTipoAgregarProductosEtiquetas();
    } else if (categoria == 'etiquetasTallaDinamicoOpcion1'){
      selectTallaAgregarProductosEtiquetas();
    } else if (categoria == 'etiquetasTallaDinamicoOpcion2'){
      selectDepartamentoAgregarProductosEtiquetas();
      selectProcesoAgregarProductosEtiquetas();
    } else if (categoria == 'cerilleras'){
      selectDepartamentoAgregarProductosCerilleras();
      selectTallaAgregarProductosCerilleras();
      selectColorAgregarProductosCerilleras();
    } else if (categoria == 'cierres'){
      selectLongitudAgregarProductosCierres();
      selectColorAgregarProductosCierres();
      selectProcesoAgregarProductosCierres();
    } else if (categoria == 'empaque'){
      selectTipoAgregarProductosEmpaque();
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

  // Funcionalidad Select Color Agregar Productos Remaches
  function selectColorAgregarProductosRemaches() {
    const opcion_seleccionada_color_agregar_producto_remaches = document.getElementById('opcion_seleccionada_color_agregar_producto_remaches');
    const opciones_color_agregar_producto_remaches = document.getElementById('opciones_color_agregar_producto_remaches');
    const valores_color_agregar_producto_remaches = document.getElementById('valores_color_agregar_producto_remaches');
    const selector_color_agregar_producto_remaches = document.querySelectorAll('#opciones_color_agregar_producto_remaches div');

    opcion_seleccionada_color_agregar_producto_remaches.addEventListener('click', function() {
      opciones_color_agregar_producto_remaches.classList.toggle('hidden');
    });

    selector_color_agregar_producto_remaches.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_color_agregar_producto_remaches.value = value;
        opcion_seleccionada_color_agregar_producto_remaches.querySelector('span').textContent = option.textContent;
        opciones_color_agregar_producto_remaches.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_color_agregar_producto_remaches.contains(event.target) && !opciones_color_agregar_producto_remaches.contains(event.target)) {
        opciones_color_agregar_producto_remaches.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Tamaño Agregar Productos Remaches
  function selectTamanoAgregarProductosRemaches() {
    const opcion_seleccionada_tamano_agregar_producto_remaches = document.getElementById('opcion_seleccionada_tamano_agregar_producto_remaches');
    const opciones_tamano_agregar_producto_remaches = document.getElementById('opciones_tamano_agregar_producto_remaches');
    const valores_tamano_agregar_producto_remaches = document.getElementById('valores_tamano_agregar_producto_remaches');
    const selector_tamano_agregar_producto_remaches = document.querySelectorAll('#opciones_tamano_agregar_producto_remaches div');

    opcion_seleccionada_tamano_agregar_producto_remaches.addEventListener('click', function() {
      opciones_tamano_agregar_producto_remaches.classList.toggle('hidden');
    });

    selector_tamano_agregar_producto_remaches.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_tamano_agregar_producto_remaches.value = value;
        opcion_seleccionada_tamano_agregar_producto_remaches.querySelector('span').textContent = option.textContent;
        opciones_tamano_agregar_producto_remaches.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_tamano_agregar_producto_remaches.contains(event.target) && !opciones_tamano_agregar_producto_remaches.contains(event.target)) {
        opciones_tamano_agregar_producto_remaches.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Color Agregar Productos Ajustador
  function selectColorAgregarProductosAjustador() {
    const opcion_seleccionada_color_agregar_producto_ajustador = document.getElementById('opcion_seleccionada_color_agregar_producto_ajustador');
    const opciones_color_agregar_producto_ajustador = document.getElementById('opciones_color_agregar_producto_ajustador');
    const valores_color_agregar_producto_ajustador = document.getElementById('valores_color_agregar_producto_ajustador');
    const selector_color_agregar_producto_ajustador = document.querySelectorAll('#opciones_color_agregar_producto_ajustador div');

    opcion_seleccionada_color_agregar_producto_ajustador.addEventListener('click', function() {
      opciones_color_agregar_producto_ajustador.classList.toggle('hidden');
    });

    selector_color_agregar_producto_ajustador.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_color_agregar_producto_ajustador.value = value;
        opcion_seleccionada_color_agregar_producto_ajustador.querySelector('span').textContent = option.textContent;
        opciones_color_agregar_producto_ajustador.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_color_agregar_producto_ajustador.contains(event.target) && !opciones_color_agregar_producto_ajustador.contains(event.target)) {
        opciones_color_agregar_producto_ajustador.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Marca Agregar Productos Etiquetas
  function selectMarcaAgregarProductosEtiquetas() {
    const opcion_seleccionada_marca_agregar_producto_etiquetas = document.getElementById('opcion_seleccionada_marca_agregar_producto_etiquetas');
    const opciones_marca_agregar_producto_etiquetas = document.getElementById('opciones_marca_agregar_producto_etiquetas');
    const valores_marca_agregar_producto_etiquetas = document.getElementById('valores_marca_agregar_producto_etiquetas');
    const selector_marca_agregar_producto_etiquetas = document.querySelectorAll('#opciones_marca_agregar_producto_etiquetas div');

    opcion_seleccionada_marca_agregar_producto_etiquetas.addEventListener('click', function() {
      opciones_marca_agregar_producto_etiquetas.classList.toggle('hidden');
    });

    selector_marca_agregar_producto_etiquetas.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_marca_agregar_producto_etiquetas.value = value;
        opcion_seleccionada_marca_agregar_producto_etiquetas.querySelector('span').textContent = option.textContent;
        opciones_marca_agregar_producto_etiquetas.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_marca_agregar_producto_etiquetas.contains(event.target) && !opciones_marca_agregar_producto_etiquetas.contains(event.target)) {
        opciones_marca_agregar_producto_etiquetas.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Tipo Agregar Productos Etiquetas
  function selectTipoAgregarProductosEtiquetas() {
    const opcion_seleccionada_tipo_agregar_producto_etiquetas = document.getElementById('opcion_seleccionada_tipo_agregar_producto_etiquetas');
    const opciones_tipo_agregar_producto_etiquetas = document.getElementById('opciones_tipo_agregar_producto_etiquetas');
    const valores_tipo_agregar_producto_etiquetas = document.getElementById('valores_tipo_agregar_producto_etiquetas');
    const selector_tipo_agregar_producto_etiquetas = document.querySelectorAll('#opciones_tipo_agregar_producto_etiquetas div');

    opcion_seleccionada_tipo_agregar_producto_etiquetas.addEventListener('click', function() {
      opciones_tipo_agregar_producto_etiquetas.classList.toggle('hidden');
    });

    selector_tipo_agregar_producto_etiquetas.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_tipo_agregar_producto_etiquetas.value = value;
        opcion_seleccionada_tipo_agregar_producto_etiquetas.querySelector('span').textContent = option.textContent;
        opciones_tipo_agregar_producto_etiquetas.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_tipo_agregar_producto_etiquetas.contains(event.target) && !opciones_tipo_agregar_producto_etiquetas.contains(event.target)) {
        opciones_tipo_agregar_producto_etiquetas.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Talla Agregar Productos Etiquetas
  function selectTallaAgregarProductosEtiquetas() {
    const opcion_seleccionada_talla_agregar_producto_etiquetas = document.getElementById('opcion_seleccionada_talla_agregar_producto_etiquetas');
    const opciones_talla_agregar_producto_etiquetas = document.getElementById('opciones_talla_agregar_producto_etiquetas');
    const valores_talla_agregar_producto_etiquetas = document.getElementById('valores_talla_agregar_producto_etiquetas');
    const selector_talla_agregar_producto_etiquetas = document.querySelectorAll('#opciones_talla_agregar_producto_etiquetas div');

    opcion_seleccionada_talla_agregar_producto_etiquetas.addEventListener('click', function() {
      opciones_talla_agregar_producto_etiquetas.classList.toggle('hidden');
    });

    selector_talla_agregar_producto_etiquetas.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_talla_agregar_producto_etiquetas.value = value;
        opcion_seleccionada_talla_agregar_producto_etiquetas.querySelector('span').textContent = option.textContent;
        opciones_talla_agregar_producto_etiquetas.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_talla_agregar_producto_etiquetas.contains(event.target) && !opciones_talla_agregar_producto_etiquetas.contains(event.target)) {
        opciones_talla_agregar_producto_etiquetas.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Departamento Agregar Productos Etiquetas
  function selectDepartamentoAgregarProductosEtiquetas() {
    const opcion_seleccionada_departamento_agregar_producto_etiquetas = document.getElementById('opcion_seleccionada_departamento_agregar_producto_etiquetas');
    const opciones_departamento_agregar_producto_etiquetas = document.getElementById('opciones_departamento_agregar_producto_etiquetas');
    const valores_departamento_agregar_producto_etiquetas = document.getElementById('valores_departamento_agregar_producto_etiquetas');
    const selector_departamento_agregar_producto_etiquetas = document.querySelectorAll('#opciones_departamento_agregar_producto_etiquetas div');

    opcion_seleccionada_departamento_agregar_producto_etiquetas.addEventListener('click', function() {
      opciones_departamento_agregar_producto_etiquetas.classList.toggle('hidden');
    });

    selector_departamento_agregar_producto_etiquetas.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_departamento_agregar_producto_etiquetas.value = value;
        opcion_seleccionada_departamento_agregar_producto_etiquetas.querySelector('span').textContent = option.textContent;
        opciones_departamento_agregar_producto_etiquetas.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_departamento_agregar_producto_etiquetas.contains(event.target) && !opciones_departamento_agregar_producto_etiquetas.contains(event.target)) {
        opciones_departamento_agregar_producto_etiquetas.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Proceso Agregar Productos Etiquetas
  function selectProcesoAgregarProductosEtiquetas() {
    const opcion_seleccionada_proceso_agregar_producto_etiquetas = document.getElementById('opcion_seleccionada_proceso_agregar_producto_etiquetas');
    const opciones_proceso_agregar_producto_etiquetas = document.getElementById('opciones_proceso_agregar_producto_etiquetas');
    const valores_proceso_agregar_producto_etiquetas = document.getElementById('valores_proceso_agregar_producto_etiquetas');
    const selector_proceso_agregar_producto_etiquetas = document.querySelectorAll('#opciones_proceso_agregar_producto_etiquetas div');

    opcion_seleccionada_proceso_agregar_producto_etiquetas.addEventListener('click', function() {
      opciones_proceso_agregar_producto_etiquetas.classList.toggle('hidden');
    });

    selector_proceso_agregar_producto_etiquetas.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_proceso_agregar_producto_etiquetas.value = value;
        opcion_seleccionada_proceso_agregar_producto_etiquetas.querySelector('span').textContent = option.textContent;
        opciones_proceso_agregar_producto_etiquetas.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_proceso_agregar_producto_etiquetas.contains(event.target) && !opciones_proceso_agregar_producto_etiquetas.contains(event.target)) {
        opciones_proceso_agregar_producto_etiquetas.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Departamento Agregar Productos Cerilleras
  function selectDepartamentoAgregarProductosCerilleras() {
    const opcion_seleccionada_departamento_agregar_producto_cerilleras = document.getElementById('opcion_seleccionada_departamento_agregar_producto_cerilleras');
    const opciones_departamento_agregar_producto_cerilleras = document.getElementById('opciones_departamento_agregar_producto_cerilleras');
    const valores_departamento_agregar_producto_cerilleras = document.getElementById('valores_departamento_agregar_producto_cerilleras');
    const selector_departamento_agregar_producto_cerilleras = document.querySelectorAll('#opciones_departamento_agregar_producto_cerilleras div');

    opcion_seleccionada_departamento_agregar_producto_cerilleras.addEventListener('click', function() {
      opciones_departamento_agregar_producto_cerilleras.classList.toggle('hidden');
    });

    selector_departamento_agregar_producto_cerilleras.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_departamento_agregar_producto_cerilleras.value = value;
        opcion_seleccionada_departamento_agregar_producto_cerilleras.querySelector('span').textContent = option.textContent;
        opciones_departamento_agregar_producto_cerilleras.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_departamento_agregar_producto_cerilleras.contains(event.target) && !opciones_departamento_agregar_producto_cerilleras.contains(event.target)) {
        opciones_departamento_agregar_producto_cerilleras.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Talla Agregar Productos Cerilleras
  function selectTallaAgregarProductosCerilleras() {
    const opcion_seleccionada_talla_agregar_producto_cerilleras = document.getElementById('opcion_seleccionada_talla_agregar_producto_cerilleras');
    const opciones_talla_agregar_producto_cerilleras = document.getElementById('opciones_talla_agregar_producto_cerilleras');
    const valores_talla_agregar_producto_cerilleras = document.getElementById('valores_talla_agregar_producto_cerilleras');
    const selector_talla_agregar_producto_cerilleras = document.querySelectorAll('#opciones_talla_agregar_producto_cerilleras div');

    opcion_seleccionada_talla_agregar_producto_cerilleras.addEventListener('click', function() {
      opciones_talla_agregar_producto_cerilleras.classList.toggle('hidden');
    });

    selector_talla_agregar_producto_cerilleras.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_talla_agregar_producto_cerilleras.value = value;
        opcion_seleccionada_talla_agregar_producto_cerilleras.querySelector('span').textContent = option.textContent;
        opciones_talla_agregar_producto_cerilleras.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_talla_agregar_producto_cerilleras.contains(event.target) && !opciones_talla_agregar_producto_cerilleras.contains(event.target)) {
        opciones_talla_agregar_producto_cerilleras.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Color Agregar Productos Cerilleras
  function selectColorAgregarProductosCerilleras() {
    const opcion_seleccionada_color_agregar_producto_cerilleras = document.getElementById('opcion_seleccionada_color_agregar_producto_cerilleras');
    const opciones_color_agregar_producto_cerilleras = document.getElementById('opciones_color_agregar_producto_cerilleras');
    const valores_color_agregar_producto_cerilleras = document.getElementById('valores_color_agregar_producto_cerilleras');
    const selector_color_agregar_producto_cerilleras = document.querySelectorAll('#opciones_color_agregar_producto_cerilleras div');

    opcion_seleccionada_color_agregar_producto_cerilleras.addEventListener('click', function() {
      opciones_color_agregar_producto_cerilleras.classList.toggle('hidden');
    });

    selector_color_agregar_producto_cerilleras.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_color_agregar_producto_cerilleras.value = value;
        opcion_seleccionada_color_agregar_producto_cerilleras.querySelector('span').textContent = option.textContent;
        opciones_color_agregar_producto_cerilleras.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_color_agregar_producto_cerilleras.contains(event.target) && !opciones_color_agregar_producto_cerilleras.contains(event.target)) {
        opciones_color_agregar_producto_cerilleras.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Longitud Agregar Productos Cierres
  function selectLongitudAgregarProductosCierres() {
    const opcion_seleccionada_longitud_agregar_producto_cierres = document.getElementById('opcion_seleccionada_longitud_agregar_producto_cierres');
    const opciones_longitud_agregar_producto_cierres = document.getElementById('opciones_longitud_agregar_producto_cierres');
    const valores_longitud_agregar_producto_cierres = document.getElementById('valores_longitud_agregar_producto_cierres');
    const selector_longitud_agregar_producto_cierres = document.querySelectorAll('#opciones_longitud_agregar_producto_cierres div');

    opcion_seleccionada_longitud_agregar_producto_cierres.addEventListener('click', function() {
      opciones_longitud_agregar_producto_cierres.classList.toggle('hidden');
    });

    selector_longitud_agregar_producto_cierres.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_longitud_agregar_producto_cierres.value = value;
        opcion_seleccionada_longitud_agregar_producto_cierres.querySelector('span').textContent = option.textContent;
        opciones_longitud_agregar_producto_cierres.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_longitud_agregar_producto_cierres.contains(event.target) && !opciones_longitud_agregar_producto_cierres.contains(event.target)) {
        opciones_longitud_agregar_producto_cierres.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Color Agregar Productos Cierres
  function selectColorAgregarProductosCierres() {
    const opcion_seleccionada_color_agregar_producto_cierres = document.getElementById('opcion_seleccionada_color_agregar_producto_cierres');
    const opciones_color_agregar_producto_cierres = document.getElementById('opciones_color_agregar_producto_cierres');
    const valores_color_agregar_producto_cierres = document.getElementById('valores_color_agregar_producto_cierres');
    const selector_color_agregar_producto_cierres = document.querySelectorAll('#opciones_color_agregar_producto_cierres div');

    opcion_seleccionada_color_agregar_producto_cierres.addEventListener('click', function() {
      opciones_color_agregar_producto_cierres.classList.toggle('hidden');
    });

    selector_color_agregar_producto_cierres.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_color_agregar_producto_cierres.value = value;
        opcion_seleccionada_color_agregar_producto_cierres.querySelector('span').textContent = option.textContent;
        opciones_color_agregar_producto_cierres.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_color_agregar_producto_cierres.contains(event.target) && !opciones_color_agregar_producto_cierres.contains(event.target)) {
        opciones_color_agregar_producto_cierres.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Proceso Agregar Productos Cierres
  function selectProcesoAgregarProductosCierres() {
    const opcion_seleccionada_proceso_agregar_producto_cierres = document.getElementById('opcion_seleccionada_proceso_agregar_producto_cierres');
    const opciones_proceso_agregar_producto_cierres = document.getElementById('opciones_proceso_agregar_producto_cierres');
    const valores_proceso_agregar_producto_cierres = document.getElementById('valores_proceso_agregar_producto_cierres');
    const selector_proceso_agregar_producto_cierres = document.querySelectorAll('#opciones_proceso_agregar_producto_cierres div');

    opcion_seleccionada_proceso_agregar_producto_cierres.addEventListener('click', function() {
      opciones_proceso_agregar_producto_cierres.classList.toggle('hidden');
    });

    selector_proceso_agregar_producto_cierres.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_proceso_agregar_producto_cierres.value = value;
        opcion_seleccionada_proceso_agregar_producto_cierres.querySelector('span').textContent = option.textContent;
        opciones_proceso_agregar_producto_cierres.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_proceso_agregar_producto_cierres.contains(event.target) && !opciones_proceso_agregar_producto_cierres.contains(event.target)) {
        opciones_proceso_agregar_producto_cierres.classList.add('hidden');
      }
    });
  }

  // Funcionalidad Select Tipo Agregar Productos Empaque
  function selectTipoAgregarProductosEmpaque() {
    const opcion_seleccionada_tipo_agregar_producto_empaque = document.getElementById('opcion_seleccionada_tipo_agregar_producto_empaque');
    const opciones_tipo_agregar_producto_empaque = document.getElementById('opciones_tipo_agregar_producto_empaque');
    const valores_tipo_agregar_producto_empaque = document.getElementById('valores_tipo_agregar_producto_empaque');
    const selector_tipo_agregar_producto_empaque = document.querySelectorAll('#opciones_tipo_agregar_producto_empaque div');

    opcion_seleccionada_tipo_agregar_producto_empaque.addEventListener('click', function() {
      opciones_tipo_agregar_producto_empaque.classList.toggle('hidden');
    });

    selector_tipo_agregar_producto_empaque.forEach(option => {
      option.addEventListener('click', function() {
        const value = option.getAttribute('data-value');
        valores_tipo_agregar_producto_empaque.value = value;
        opcion_seleccionada_tipo_agregar_producto_empaque.querySelector('span').textContent = option.textContent;
        opciones_tipo_agregar_producto_empaque.classList.add('hidden');
      });
    });

    document.addEventListener('click', function(event) {
      if (!opcion_seleccionada_tipo_agregar_producto_empaque.contains(event.target) && !opciones_tipo_agregar_producto_empaque.contains(event.target)) {
        opciones_tipo_agregar_producto_empaque.classList.add('hidden');
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