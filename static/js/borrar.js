var btnEliminar = document.querySelector('#abrir_eliminar_usuario');
var modalEliminar = document.querySelector('#eliminar_usuario');
var btnCerrarEliminar = modalEliminar.querySelector('#cerrar_eliminar_usuario');
var btnCancelarEliminar = modalEliminar.querySelector('#cancelar_eliminar');

// Cuando se haga clic en el botón "Eliminar", mostrar el modal
btnEliminar.addEventListener('click', function() {
  modalEliminar.classList.remove('hidden');
});

// Cuando se haga clic en el botón de cerrar (×), cerrar el modal
btnCerrarEliminar.addEventListener('click', function() {
  modalEliminar.classList.add('hidden');
});

// Cerrar modal al hacer clic en el botón "NO"
btnCancelarEliminar.addEventListener('click', function() {
  modalEliminar.classList.add('hidden');
});

// Opcional: cerrar el modal si se hace clic fuera de él (en el fondo oscuro)
window.addEventListener('click', function(event) {
  if (event.target == modalEliminar) {
    modalEliminar.classList.add('hidden');
  }
});


var btnEditar = document.querySelector('#abrir_editar_usuario');
var modalEditar = document.querySelector('#editar_usuario');
var btnCerrarEditar = modalEditar.querySelector('#cerrar_editar_usuario');

btnEditar.addEventListener('click', function() {
  modalEditar.classList.remove('hidden');
});

btnCerrarEditar.addEventListener('click', function() {
  modalEditar.classList.add('hidden');
});


var btnAgregar = document.querySelector('#abrir_agregar_usuario');
var modalAgregar = document.querySelector('#agregar_usuario');
var btnCerrarAgregar = modalAgregar.querySelector('#cerrar_agregar_usuario');

btnAgregar.addEventListener('click', function() {
  modalAgregar.classList.remove('hidden');
});

btnCerrarAgregar.addEventListener('click', function() {
  modalAgregar.classList.add('hidden');
});