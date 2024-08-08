// Modal para Mostrar los Detalles del Usuario
const cerrar_detalles_usuario = document.getElementById('cerrar_detalles_usuario');
const detalles_usuario = document.getElementById('detalles_usuario');


function openModalDetailsUser(userId) {
  // Realiza la solicitud fetch para obtener los detalles del producto
  fetch(`/usuarios/details/${userId}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('La Respuesta de la Red No fue Correcta: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      // Asignar datos básicos al modal
      document.getElementById('usuario-imagen').src = data.image || '/img/producto-sin-imagen.png';
      document.getElementById('usuario-nombre').textContent = data.name || 'Nombre no disponible';
      document.getElementById('usuario-email').textContent = data.email || 'Email no disponible';
      document.getElementById('usuario-rol').textContent = data.role || 'Rol no disponible';

      // Mostrar el modal
      detalles_usuario.classList.remove('hidden');
    })
    .catch(error => console.error('Error:', error));
}

cerrar_detalles_usuario.addEventListener('click', () => {
  detalles_usuario.classList.add('hidden');
});

window.addEventListener('click', function(event) {
  if (event.target == detalles_usuario) {
      detalles_usuario.classList.add('hidden');
  }
});

// Modal para Agregar Usuarios
const btnAgregar = document.querySelector('#abrir_agregar_usuario');
const modalAgregar = document.querySelector('#agregar_usuario');
const btnCerrarAgregar = modalAgregar.querySelector('#cerrar_agregar_usuario');

btnAgregar.addEventListener('click', function() {
    modalAgregar.classList.remove('hidden');
});

btnCerrarAgregar.addEventListener('click', function() {
    modalAgregar.classList.add('hidden');
});

window.addEventListener('click', function(event) {
    if (event.target == modalAgregar) {
        modalAgregar.classList.add('hidden');
    }
});

function closeModalUsuarioAdd(){
    document.getElementById('agregar_usuario').classList.add('hidden');
    const previewContainer = document.getElementById('imagen-previa');

    // Lipiar datos campos personalizados
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';

    // Limpiar campo de Imagen y restablecer icono
    document.getElementById('archivo').value = '';
    document.getElementById('nombre_archivo').textContent = 'Seleccione un Archivo';
    previewContainer.innerHTML = `<svg class="w-7 h-7 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"><g fill="none"><path fill="white" d="M44 24C44 22.8954 43.1046 22 42 22C40.8954 22 40 22.8954 40 24H44ZM24 8C25.1046 8 26 7.10457 26 6C26 4.89543 25.1046 4 24 4V8ZM39 40H9V44H39V40ZM8 39V9H4V39H8ZM40 24V39H44V24H40ZM9 8H24V4H9V8ZM9 40C8.44772 40 8 39.5523 8 39H4C4 41.7614 6.23857 44 9 44V40ZM39 44C41.7614 44 44 41.7614 44 39H40C40 39.5523 39.5523 40 39 40V44ZM8 9C8 8.44772 8.44771 8 9 8V4C6.23858 4 4 6.23857 4 9H8Z"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M6 35L16.6931 25.198C17.4389 24.5143 18.5779 24.4953 19.3461 25.1538L32 36"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M28 31L32.7735 26.2265C33.4772 25.5228 34.5914 25.4436 35.3877 26.0408L42 31"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 18L37 6"/><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M32 11L37 6L42 11"/></g></svg>`;
}

// Modal para Eliminar Usuarios
const modalEliminar = document.querySelector('#eliminar_usuario');
const btnCerrarEliminar = modalEliminar.querySelector('#cerrar_eliminar_usuario');

let userIdToDelete;

function openModalUsuarioDelete(userId, name, image) {
  userIdToDelete = userId;
  modalEliminar.classList.remove('hidden');

  document.getElementById('name_user').textContent = name;
  // Verificar si la imagen está definida y no es null
  if (image && image.trim() !== '' && image !== 'null') {
    document.getElementById('image_user').src = image;
  } else {
      document.getElementById('image_user').src = '/img/producto-sin-imagen.png';
  }
}

document.getElementById('confirmDeleteUserBtn').addEventListener('click', function() {
  window.location.href = '/usuarios/delete/' + userIdToDelete;
});

function closeModalUsuarioDelete(){
  modalEliminar.classList.add('hidden');
}

btnCerrarEliminar.addEventListener('click', function() {
  modalEliminar.classList.add('hidden');
});

window.addEventListener('click', function(event) {
  if (event.target == modalEliminar) {
    modalEliminar.classList.add('hidden');
  }
});

// Funcionalidad Subir Archivos
const imagenSelect = document.getElementById('archivo');
const nombre_archivo = document.getElementById('nombre_archivo');
                
imagenSelect.addEventListener('change', function() {
  if (imagenSelect.files.length > 0) {
    nombre_archivo.textContent = imagenSelect.files[0].name;
  } else {
    nombre_archivo.textContent = 'Seleccione un Archivo';
  }
});