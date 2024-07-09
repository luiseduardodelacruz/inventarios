let productIdToDelete;

function confirmDelete(productId, nombre, imagen) {
    console.log('Valor de imagen:', imagen); // Verificar qué valor tiene imagen

    productIdToDelete = productId;
    document.getElementById('eliminar_producto').classList.remove('hidden');
    document.getElementById('nombre_producto').textContent = nombre;
    // Verificar si la imagen está definida y no es null
    if (imagen && imagen.trim() !== '' && imagen !== 'null') {
        document.getElementById('imagen_producto').src = imagen;
    } else {
        document.getElementById('imagen_producto').src = '/img/producto-sin-imagen.png';
    }
}

document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
    window.location.href = '/inventario/delete/' + productIdToDelete;
});