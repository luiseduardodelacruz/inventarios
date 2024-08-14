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

function capitalizarPrimeraLetra() {
    // Obtener todos los elementos select
    const selects = document.querySelectorAll('select');
    
    // Iterar sobre cada select
    selects.forEach(select => {
        // Iterar sobre cada opción del select
        Array.from(select.options).forEach(option => {
            // Convertir la primera letra a mayúsculas y el resto a minúsculas
            option.text = option.text.charAt(0).toUpperCase() + option.text.slice(1).toLowerCase();
        });
    });
}

// Llamar a la función para capitalizar la primera letra de las opciones al cargar la página
window.onload = capitalizarPrimeraLetra;
