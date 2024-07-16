//Funcionalidad Subir Archivos
const imagenSelect = document.getElementById('imageFile');
const nombre_archivo = document.getElementById('nombre_archivo');
                
imagenSelect.addEventListener('change', function() {
  if (imagenSelect.files.length > 0) {
    nombre_archivo.textContent = imagenSelect.files[0].name;
  } else {
    nombre_archivo.textContent = 'Seleccione otro Archivo';
  }
});