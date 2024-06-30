let productIdToDelete;

function confirmDelete(productId, nombre, imagen) {
    productIdToDelete = productId;
    document.getElementById('eliminar_producto').classList.remove('hidden');
    document.getElementById('nombre_producto').textContent = nombre;
    document.getElementById('imagen_producto').src = imagen;
}

function closeModal() {
    document.getElementById('eliminar_producto').classList.add('hidden');
}

document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
    window.location.href = '/inventario/delete/' + productIdToDelete;
});