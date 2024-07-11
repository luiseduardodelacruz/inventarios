//Modal para Agregar Usuarios
var btnAgregar = document.querySelector('#abrir_agregar_usuario');
var modalAgregar = document.querySelector('#agregar_usuario');
var btnCerrarAgregar = modalAgregar.querySelector('#cerrar_agregar_usuario');

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
}

/*Modal para Editar Usuarios
var btnEditar = document.querySelector('.abrir_editar_usuario');
var modalEditar = document.querySelector('#editar_usuario');
var btnCerrarEditar = modalEditar.querySelector('#cerrar_editar_usuario');

btnEditar.addEventListener('click', function() {
    modalEditar.classList.remove('hidden');
});

btnCerrarEditar.addEventListener('click', function() {
    modalEditar.classList.add('hidden');
});

window.addEventListener('click', function(event) {
    if (event.target == modalEditar) {
        modalEditar.classList.add('hidden');
    }
});

function closeModalUsuarioEdit(){
    document.getElementById('editar_usuario').classList.add('hidden');
}
*/

/*Funcionalidad Subir Archivos
const archivo = document.getElementById('imageFile');
const nombre_archivo = document.getElementById('nombre_archivo');
                
archivo.addEventListener('change', function() {
  if (archivo.files.length > 0) {
    nombre_archivo.textContent = archivo.files[0].name;
  } else {
    nombre_archivo.textContent = 'Seleccione un Archivo';
  }
});
*/