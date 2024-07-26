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

//Funcionalidad Botones Drawer
const categorias = [
  { id: 'btn_all_productos', categoria: '' },
  { id: 'btn_elasticos', categoria: 'elasticos' },
  { id: 'btn_hilos', categoria: 'hilos' },
  { id: 'btn_cordones', categoria: 'cordones' },
  { id: 'btn_botones', categoria: 'botones' },
  { id: 'btn_remaches', categoria: 'remaches' },
  { id: 'btn_ajustador', categoria: 'ajustador' },
  { id: 'btn_etiquetas', categoria: 'etiquetas' },
  { id: 'btn_serilleras', categoria: 'serilleras' },
  { id: 'btn_cierres', categoria: 'cierres' }
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

function openModalDetails(){
  detalles_producto.classList.remove('hidden');
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
    
    document.getElementById('nombre_producto').textContent = nombre;
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

//Funcionalidad Select Categoria Agregar Productos
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

//Funcionalidad Select Color Agregar Productos
document.addEventListener('DOMContentLoaded', function() {
  const opcion_seleccionada_color_agregar_producto = document.getElementById('opcion_seleccionada_color_agregar_producto');
  const opciones_color_agregar_producto = document.getElementById('opciones_color_agregar_producto');
  const valores_color_agregar_producto = document.getElementById('valores_color_agregar_producto');
  const selector_color_agregar_producto= document.querySelectorAll('#opciones_color_agregar_producto div');
      
  opcion_seleccionada_color_agregar_producto.addEventListener('click', function() {
    opciones_color_agregar_producto.classList.toggle('hidden');
  });
      
  selector_color_agregar_producto.forEach(option => {
    option.addEventListener('click', function() {
      const value = option.getAttribute('data-value');
      valores_color_agregar_producto.value = value;
      opcion_seleccionada_color_agregar_producto.querySelector('span').textContent = option.textContent;
      opciones_color_agregar_producto.classList.add('hidden');
    });
  });
      
  document.addEventListener('click', function(event) {
    if (!opcion_seleccionada_color_agregar_producto.contains(event.target) && !opciones_color_agregar_producto.contains(event.target)) {
      opciones_color_agregar_producto.classList.add('hidden');
    }
  });
});

//Funcionalidad Subir Archivos
const archivo = document.getElementById('archivo');
const nombre_archivo = document.getElementById('nombre_archivo');
                
archivo.addEventListener('change', function() {
  if (archivo.files.length > 0) {
    nombre_archivo.textContent = archivo.files[0].name;
  } else {
    nombre_archivo.textContent = 'Seleccione un Archivo';
  }
});