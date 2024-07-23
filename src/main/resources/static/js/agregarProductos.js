document.addEventListener('DOMContentLoaded', function () {
  const opcionesCategoria = document.getElementById('opciones_categoria_agregar_producto');
  const spanCategoria = document.getElementById('span_categoria');
  const selectCategoria = document.getElementById('valores_categoria_agregar_producto');

  // Funcionalidad para detectar el onchange
  opcionesCategoria.addEventListener('click', function (event) {
    const target = event.target;
    if (target.hasAttribute('data-value')) {
      const value = target.getAttribute('data-value');
      const text = target.textContent.trim();
      spanCategoria.textContent = text;
      selectCategoria.value = value;
      selectCategoria.dispatchEvent(new Event('change'));
    }
  });
});

// Campos Dinamicos
function categoriaDinamica() {
  const contenedor = document.getElementById('campos_dinamicos_agregar_productos');
  const selectCategoria = document.getElementById('valores_categoria_agregar_producto');
  const valor = selectCategoria.value;

  if (valor === 'elasticos') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Color:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_color_agregar_producto_elasticos" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_color_agregar_producto_elasticos" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="negro">Negro</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="azul_marino">Azul Marino</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="gris_oxford">Gris Oxford</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="blanco">Blanco</div>
            </div>
            <select id="valores_color_agregar_producto_elasticos" th:field="*{color}" name="color" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="negro">Negro</option>
              <option value="azul_marino">Azul Marino</option>
              <option value="gris_oxford">Gris Oxford</option>
              <option value="blanco">Blanco</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Longitud:</p>
          <input type="number" id="longitud_elasticos" th:field="*{longitud}" name="longitud" class="col-span-7 place-self-center justify-self-start fuente_3 bg-[#db4900] border border-[#db4900] text-white text-base md:text-lg rounded-3xl focus:ring-[#db4900] focus:border-[#db4900] block w-full p-1.5 px-3 md:p-1.5 md:px-3 lg:p-1.5 lg:px-3 xl:p-2 xl:px-3" required />
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Anchor:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_anchor_agregar_producto_elasticos" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_anchor_agregar_producto_elasticos" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="28_mm">28 mm</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="32_mm">32 mm</div>
            </div>
            <select id="valores_anchor_agregar_producto_elasticos" th:field="*{anchor}" name="anchor" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="28_mm">28 mm</option>
              <option value="32_mm">32 mm</option>
            </select>
          </div>
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'elasticos' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valor === 'hilos') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Color:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_color_agregar_producto_hilos" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_color_agregar_producto_hilos" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="blanco">Blanco</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="negro">Negro</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="verde">Verde</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="azul_marino">Azul Marino</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="rosa">Rosa</div>
            </div>
            <select id="valores_color_agregar_producto_hilos" th:field="*{color}" name="color" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="blanco">Blanco</option>
              <option value="negro">Negro</option>
              <option value="verde">Verde</option>
              <option value="azul_marino">Azul Marino</option>
              <option value="rosa">Rosa</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Calibre:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_calibre_agregar_producto_hilos" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_calibre_agregar_producto_hilos" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="0.30_mm">0.30 mm</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="30/4_mm">30/4 mm</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="0.80_mm">0.80 mm</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="30/2_mm">30/2 mm</div>
            </div>
            <select id="valores_calibre_agregar_producto_hilos" th:field="*{calibre}" name="calibre" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="0.30_mm">0.30 mm</option>
              <option value="30/4_mm">30/4 mm</option>
              <option value="0.80_mm">0.80 mm</option>
              <option value="30/2_mm">30/2 mm</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tapa:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_tapa_agregar_producto_hilos" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_tapa_agregar_producto_hilos" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="rojo">Rojo</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="cafe">Café</div>
            </div>
            <select id="valores_tapa_agregar_producto_hilos" th:field="*{tapa}" name="tapa" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="rojo">Rojo</option>
              <option value="cafe">Café</option>
            </select>
          </div>
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'hilos' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valor === 'cordones') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Color:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_color_agregar_producto_cordones" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_color_agregar_producto_cordones" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="negro">Negro</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="azul_marino">Azul Marino</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="crudo">Crudo</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="blanco">Blanco</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="gris_oxford">Gris Oxford</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="kaki">Kaki</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="rosa_dulce">Rosa Dulce</div>
            </div>
            <select id="valores_color_agregar_producto_cordones" th:field="*{color}" name="color" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="negro">Negro</option>
              <option value="azul_marino">Azul Marino</option>
              <option value="crudo">Crudo</option>
              <option value="blanco">Blanco</option>
              <option value="gris_oxford">Gris Oxford</option>
              <option value="kaki">Kaki</option>
              <option value="rosa_dulce">Rosa Dulce</option>
            </select>
          </div>
        </div>
      </div>
      
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Longitud:</p>
          <input type="number" id="longitud_cordones" th:field="*{longitud}" name="longitud" class="col-span-7 place-self-center justify-self-start fuente_3 bg-[#db4900] border border-[#db4900] text-white text-base md:text-lg rounded-3xl focus:ring-[#db4900] focus:border-[#db4900] block w-full p-1.5 px-3 md:p-1.5 md:px-3 lg:p-1.5 lg:px-3 xl:p-2 xl:px-3" required />
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'cordones' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valor === 'botones') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tipo:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_tipo_agregar_producto_botones" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span id="span_categoria_tipo_botones" class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_tipo_agregar_producto_botones" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="niquelado">Niquelado</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="pasta">Pasta</div>
            </div>
            <select id="valores_tipo_agregar_producto_botones" onchange="colorDinamico()" th:field="*{tipo}" name="tipo" class="hidden" required>
                <option value="" selected>Seleccionar:</option>
                <option value="niquelado">Niquelado</option>
                <option value="pasta">Pasta</option>
            </select>
          </div>
        </div>
      </div>

      <div id="campos_dinamicos_color_botones"></div>
    `;

    const opcionesCategoriaTipoBotones = document.getElementById('opciones_tipo_agregar_producto_botones');
    const spanCategoriaTipoBotones = document.getElementById('span_categoria_tipo_botones');
    const selectCategoriaTipoBotones = document.getElementById('valores_tipo_agregar_producto_botones');

    // Funcionalidad para detectar el onchange tipo de botones
    opcionesCategoriaTipoBotones.addEventListener('click', function (event) {
      const target = event.target;
      if (target.hasAttribute('data-value')) {
        const valueTipoBotones = target.getAttribute('data-value');
        const textTipoBotones = target.textContent.trim();
        spanCategoriaTipoBotones.textContent = textTipoBotones;
        selectCategoriaTipoBotones.value = valueTipoBotones;
        selectCategoriaTipoBotones.dispatchEvent(new Event('change'));
      }
    });

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'botones' } });
    document.dispatchEvent(eventoCamposGenerados);
  }
}

// Campos Dinamicos Color Botones
function colorDinamico() {
  const contenedorColorDinamico = document.getElementById('campos_dinamicos_color_botones');
  const selectTipoBotones = document.getElementById('valores_tipo_agregar_producto_botones');
  const valorTipoBotones = selectTipoBotones.value;

  if (valorTipoBotones === 'niquelado') {
    contenedorColorDinamico.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
          <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
            <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Color:</p>
            <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
              <div id="opcion_seleccionada_color_agregar_producto_botones" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
                <span class="px-1">Seleccionar:</span>
                <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
              </div>
              <div id="opciones_color_agregar_producto_botones" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
                <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="zinc_viejo">Zinc Viejo</div>
                <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="niquelado_viejo">Niquelado Viejo</div>
              </div>
              <select id="valores_color_agregar_producto_botones" th:field="*{color}" name="color" class="hidden" required>
                <option value="" selected>Seleccionar:</option>
                <option value="zinc_viejo">Zinc Viejo</option>
                <option value="niquelado_viejo">Niquelado Viejo</option>
              </select>
            </div>
          </div>
        </div>

        <div class="px-4 md:px-12 flex justify-center">
          <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
            <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tamaño:</p>
            <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
              <div id="opcion_seleccionada_tamano_agregar_producto_botones" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
             <div id="opciones_tamano_agregar_producto_botones" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="27_l">27 L</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="30_l">30 L</div>
            </div>
            <select id="valores_tamano_agregar_producto_botones" th:field="*{tamanio}" name="tamanio" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="27_l">27 L</option>
              <option value="30_l">30 L</option>
            </select>
          </div>
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'botonesColorDinamicoOpcion1' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valorTipoBotones === 'pasta') {
    contenedorColorDinamico.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Color:</p>
          <input type="text" value="transparente" th:field="*{color}" name="color" readonly class="capitalize col-span-7 place-self-center justify-self-start fuente_3 bg-[#db4900] border border-[#db4900] text-white text-base md:text-base lg:text-base xl:text-lg rounded-3xl focus:ring-[#db4900] focus:border-[#db4900] block w-full p-1.5 px-2 md:p-2 md:px-3 lg:p-2 lg:px-3 xl:p-2 xl:px-3" required />
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tamaño:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_tamano_agregar_producto_botones" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_tamano_agregar_producto_botones" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="27_l">27 L</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="30_l">30 L</div>
            </div>
            <select id="valores_tamano_agregar_producto_botones" th:field="*{tamanio}" name="tamanio" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="27_l">27 L</option>
              <option value="30_l">30 L</option>
            </select>
          </div>
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'botonesColorDinamicoOpcion2' } });
    document.dispatchEvent(eventoCamposGenerados);
  }
}