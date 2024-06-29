let productIdToDelete;

function confirmDelete(productId) {
    productIdToDelete = productId;
    document.getElementById('deleteModal').style.display = 'block';
}

function closeModal() {
    document.getElementById('deleteModal').style.display = 'none';
}

document.getElementById('confirmDeleteBtn').addEventListener('click', function() {
    window.location.href = '/inventario/delete/' + productIdToDelete;
});