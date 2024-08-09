document.addEventListener('DOMContentLoaded', (event) => {
    const colores = document.getElementById('procesos');
    colores.addEventListener('change', actualizarColores);
});

function actualizarColores() {
    var proceso = document.getElementById('procesos').value;
    var contenedorColores = document.getElementById('contenedorColores');
    contenedorColores.innerHTML = ''; // Limpiar el contenedor

    if (proceso === 'teñido' || proceso === 'suavizado') {
        // Crear un nuevo select para colores
        var selectColores = document.createElement('select');
        selectColores.name = 'colores';
        selectColores.id = 'colores';
        selectColores.className = 'bg-[#db4900] border-orange-300 text-gray-900 text-sm rounded-3xl focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-orange-600 border-orange-500 placeholder-white-400 text-white';

        var optionDefault = document.createElement('option');
        optionDefault.value = '';
        optionDefault.text = 'Seleccione un color';
        optionDefault.disabled = true;
        optionDefault.selected = true;
        selectColores.appendChild(optionDefault);

        // Opciones de colores
        var coloresOpciones = ['kaky', 'rosa dulce', 'blanco'];
        coloresOpciones.forEach(color => {
            var option = document.createElement('option');
            option.value = color;
            option.textContent = color;
            selectColores.appendChild(option);
        });

        contenedorColores.appendChild(selectColores);

    } else if (proceso === 'blench') {
        // Mostrar el color como gris
        mostrarColor('gris');
    } else if (proceso === 'stone medio') {
        // Mostrar el color como marino
        mostrarColor('marino');
    }else if (proceso === 'stone alto') {
        // Mostrar el color como marino
        mostrarColor('negro');
    }
}


function mostrarColor(color) {
    var contenedorColores = document.getElementById('contenedorColores');
    contenedorColores.innerHTML = `<p class="text-white">Color seleccionado: ${color}</p>`;
}
