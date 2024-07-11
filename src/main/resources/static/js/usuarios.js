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

// Opcional: cerrar el modal si se hace clic fuera de él (en el fondo oscuro)
window.addEventListener('click', function(event) {
    if (event.target == modalAgregar) {
        modalAgregar.classList.add('hidden');
    }
});

function closeModalUsuarioAdd(){
    document.getElementById('agregar_usuario').classList.add('hidden');
}