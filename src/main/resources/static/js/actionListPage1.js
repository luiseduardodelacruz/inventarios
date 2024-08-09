document.addEventListener('DOMContentLoad', (event) => {
    const contenedorColores = document.getElementById ('contenedorColores')
    const colores = document.getElementById('procesos')

colores.addEventListener('change', function(){
    actualizarColores();
})


    function actualizarColores() {
        var proceso = document.getElementById('procesos').value;
        var contenedorColores = document.getElementById('contenedorColores');

        if (proceso) {
            fetch(`/obtener-colores?proceso=${proceso}`)
                .then(response => response.json())
                .then(data => {
                    contenedorColores.innerHTML = ''; // Limpiar el contenedor
                    data.colores.forEach(color => {
                        var colorOption = document.createElement('option');
                        colorOption.value = color;
                        colorOption.textContent = color;
                        contenedorColores.appendChild(colorOption);
                    });
                });
        } else {
            contenedorColores.innerHTML = '';
        }
    }
});