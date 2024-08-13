let alertCount = 0;

// Funcion Alerta
function showAlert(message) {
    const alertContainer = document.getElementById('alertContainer');
        
    // Crear la Alerta
    const alert = document.createElement('div');
    alert.className = 'alert flex flex-col w-full bg-[#e8763d] text-white rounded-xl shadow-xl';
    alert.style.opacity = 1;
        
    // Crear el Mensaje
    const alertMessage = document.createElement('span');
    alertMessage.textContent = message;
    alertMessage.className = 'px-4 py-4 md:px-5 md:py-6 fuente_alerta text-sm md:text-lg lg:text-lg';
    alert.appendChild(alertMessage);
        
    // Crear la Barra de Progreso
    const progressBarContainer = document.createElement('div');
    progressBarContainer.className = 'w-full bg-white rounded-b-xl h-2 overflow-hidden';

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar bg-[#db4900] rounded-bl-xl h-full';
    progressBar.style.width = '100%';
    progressBarContainer.appendChild(progressBar);
        
    alert.appendChild(progressBarContainer);
        
    // Agregar la Alerta al Contenedor
    alertContainer.appendChild(alert);
        
    // Administrar el Tiempo de la Alerta
    let alertDuration = 5000;
    let startTime = Date.now();
        
    const interval = setInterval(() => {
        const elapsedTime = Date.now() - startTime;
        const progress = (elapsedTime / alertDuration) * 100;
        progressBar.style.width = `${0 + progress}%`;
    
        if (elapsedTime >= alertDuration) {
            clearInterval(interval);
            fadeOutAlert(alert);
        }
    }, 50);
}

// Funcion Desaparecer Alerta
function fadeOutAlert(alert) {
    const fadeInterval = setInterval(() => {
        if (alert.style.opacity > 0) {
            alert.style.opacity -= 0.1;
        } else {
            clearInterval(fadeInterval);
            alert.remove();
        }
    }, 50);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const cantidadTallas = document.getElementById('cantidadTallas');
    const cantidadDobleces = document.getElementById('cantidadDobleces');
    const contenedorListas = document.getElementById('contenedorListas');
    const contenedorDobleces = document.getElementById('contenedorDobleces');
    const contenedorBultos = document.getElementById('contenedorBultos');
    const sumaDoblecesDiv = document.createElement('div');
    sumaDoblecesDiv.id = 'sumaDobleces';
    sumaDoblecesDiv.className = 'text-white mt-4';
    contenedorDobleces.parentNode.insertBefore(sumaDoblecesDiv, contenedorDobleces.nextSibling);

    cantidadTallas.addEventListener('change', function () {
        mostrarListas();
        mostrarListasBultos();
    });

    cantidadDobleces.addEventListener('change', function () {
        mostrarListasDobleces(this.value);
    });

    function mostrarListas() {
        var cantidad = cantidadTallas.value;

        contenedorListas.innerHTML = '';

        fetch('/api/tallas')
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < cantidad; i++) {
                    var divLista = document.createElement('div');
                    divLista.className = 'flex items-center mt-3';

                    var label = document.createElement('label');
                    label.htmlFor = 'talla' + (i + 1);
                    label.className = 'text-sm font-medium text-gray-900 text-white mr-2 w-[38%] sm:w-[62%]';
                    label.innerText = 'Talla ' + (i + 1) + ':';

                    var select = document.createElement('select');
                    select.name = 'tallas[]';
                    select.id = 'talla' + (i + 1);
                    select.className = 'bg-[#db4900] border-orange-300 text-gray-900 text-sm rounded-3xl focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-orange-600 border-orange-500 placeholder-white-400 text-white';
                    select.addEventListener('change', actualizarOpciones)


                    var optionDefault = document.createElement('option');
                    optionDefault.value = '';
                    optionDefault.text = 'Seleccionar Talla';
                    optionDefault.disabled = true;
                    optionDefault.selected = true;
                    select.appendChild(optionDefault);

                    data.forEach(talla => {
                        var option = document.createElement('option');
                        option.value = talla.size;
                        option.text = talla.size;
                        select.appendChild(option);
                    });

                    divLista.appendChild(label);
                    divLista.appendChild(select);

                    contenedorListas.appendChild(divLista);
                }

                mostrarListasBultos(cantidad);
            })
            .catch(error => {
                console.error('Error al obtener tallas:', error);
            });
    }

    function mostrarListasDobleces(cantidad) {
        contenedorDobleces.innerHTML = '';

        for (let i = 0; i < cantidad; i++) {
            const div = document.createElement('div');
            div.className = 'flex items-center mt-3';

            const label = document.createElement('label');
            label.htmlFor = `dobleces${i + 1}`;
            label.className = 'text-sm font-medium text-gray-900 text-white mr-2 w-[37%] sm:w-[50%]';
            label.textContent = `Dobleces ${i + 1}:`;

            const input = document.createElement('input');
            input.type = 'number';
            input.min = 0;
            input.max = 2140999999;
            input.name = `dobleces[]`;
            input.id = `dobleces${i + 1}`;
            input.className = 'bg-[#db4900] border-orange-300 text-gray-900 text-sm rounded-3xl focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-orange-600 border-orange-500 placeholder-white-400 text-white';
            input.addEventListener('input', validarNumeroEnteroNoNegativo);
            input.addEventListener('input', calcularSumaDobleces);

            div.appendChild(label);
            div.appendChild(input);

            contenedorDobleces.appendChild(div);
        }
    }

    function mostrarListasBultos(cantidad) {
        contenedorBultos.innerHTML = '';

        for (var i = 0; i < cantidad; i++) {
            var divLista = document.createElement('div');
            divLista.className = 'flex items-center mt-3';

            var label = document.createElement('label');
            label.htmlFor = 'bulto' + (i + 1);
            label.className = 'text-sm font-medium text-gray-900 text-white mr-2 w-[37%] sm:w-[58%]';
            label.innerText = 'Bulto ' + (i + 1) + ':';

            var input = document.createElement('input');
            input.type = 'number';
            input.step = '0.01';
            input.name = 'bultos[]';
            input.id = 'bulto' + (i + 1);
            input.className = 'bg-[#db4900] border-orange-300 text-gray-900 text-sm rounded-3xl focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 dark:bg-orange-600 border-orange-500 placeholder-white-400 text-white';
            input.addEventListener('input', validarNumeroNoNegativo);

            divLista.appendChild(label);
            divLista.appendChild(input);

            contenedorBultos.appendChild(divLista);
        }
    }

    function validarNumeroNoNegativo(event) {
        const input = event.target;
        if (parseFloat(input.value) <= 0) {
            input.value = '';
            showAlert(`El valor no puede ser un numero negativo ni igual a 0.`);
        }
    }

    function validarNumeroEnteroNoNegativo(event) {
        const input = event.target;
        const valor = input.value;
        if (!/^\d+$/.test(valor) || parseFloat(valor) <= 0) {
            input.value = '';
            showAlert(`El valor debe ser un número entero no negativo y mayor a 0.`);
        }
    }

    function actualizarOpciones() {
        const selects = contenedorListas.querySelectorAll('select');
        const seleccionados = Array.from(selects).map(select => select.value);

        selects.forEach(select => {
            const opciones = select.querySelectorAll('option');
            opciones.forEach(opcion => {
                if (opcion.value && seleccionados.includes(opcion.value) && opcion.value !== select.value) {
                    opcion.disabled = true;
                } else {
                    opcion.disabled = false;
                }
            });
        });
    }


    function calcularSumaDobleces() {
        const inputs = contenedorDobleces.querySelectorAll('input[type="number"]');
        let suma = 0;

        inputs.forEach(input => {
            const valor = parseFloat(input.value);
            if (!isNaN(valor)) {
                suma += valor;
            }
        });

        sumaDoblecesDiv.textContent = `Suma de Dobleces: ${suma}`;
        document.getElementById('sumaDobleces').value = suma;
    }

    document.getElementById('formulario2').addEventListener('submit', function (event) {
        const sumaDobleces = document.getElementById('sumaDobleces').value;
        const inputSumaDobleces = document.createElement('input');
        inputSumaDobleces.type = 'hidden';
        inputSumaDobleces.name = 'sumaDobleces';
        inputSumaDobleces.value = sumaDobleces;
        this.appendChild(inputSumaDobleces);
    });

    function borrarFormulario() {
        document.getElementById('formulario2').reset();
        contenedorListas.innerHTML = '';
        contenedorDobleces.innerHTML = '';
        contenedorBultos.innerHTML = '';
        sumaDoblecesDiv.textContent = 'Suma de Dobleces: 0';
    }

    document.getElementById('borrarButton').addEventListener('click', borrarFormulario);
});
