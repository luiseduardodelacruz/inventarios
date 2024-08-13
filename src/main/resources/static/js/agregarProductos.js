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

  } else if (valor === 'remaches') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tipo:</p>
          <input type="text" value="niquelado" th:field="*{tipo}" name="tipo" readonly class="capitalize col-span-7 place-self-center justify-self-start fuente_3 bg-[#db4900] border border-[#db4900] text-white text-base md:text-base lg:text-base xl:text-lg rounded-3xl focus:ring-[#db4900] focus:border-[#db4900] block w-full p-1.5 px-2 md:p-2 md:px-3 lg:p-2 lg:px-3 xl:p-2 xl:px-3" required />
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Color:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_color_agregar_producto_remaches" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_color_agregar_producto_remaches" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="cobre">Cobre</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="niquel">Niquel</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="zinc">Zinc</div>
            </div>
            <select id="valores_color_agregar_producto_remaches" th:field="*{color}" name="color" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="cobre">Cobre</option>
              <option value="niquel">Niquel</option>
              <option value="zinc">Zinc</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tamaño:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_tamano_agregar_producto_remaches" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_tamano_agregar_producto_remaches" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="27_l">27 L</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="30_l">30 L</div>
            </div>
            <select id="valores_tamano_agregar_producto_remaches" th:field="*{tamanio}" name="tamanio" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="27_l">27 L</option>
              <option value="30_l">30 L</option>
            </select>
          </div>
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'remaches' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valor === 'ajustador') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Color:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_color_agregar_producto_ajustador" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_color_agregar_producto_ajustador" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="negro">Negro</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="azul_marino">Azul Marino</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="blanco">Blanco</div>
            </div>
            <select id="valores_color_agregar_producto_ajustador" th:field="*{color}" name="color" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="negro">Negro</option>
              <option value="azul_marino">Azul Marino</option>
              <option value="blanco">Blanco</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Longitud:</p>
          <input type="number" id="longitud_ajustador" th:field="*{longitud}" name="longitud" class="col-span-7 place-self-center justify-self-start fuente_3 bg-[#db4900] border border-[#db4900] text-white text-base md:text-lg rounded-3xl focus:ring-[#db4900] focus:border-[#db4900] block w-full p-1.5 px-3 md:p-1.5 md:px-3 lg:p-1.5 lg:px-3 xl:p-2 xl:px-3" required />
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'ajustador' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valor === 'etiquetas') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Marca:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_marca_agregar_producto_etiquetas" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_marca_agregar_producto_etiquetas" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="cuidado_con_el_perro">Cuidado con el Perro</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="optima">Optima</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="garcía">García</div>
            </div>
            <select id="valores_marca_agregar_producto_etiquetas" th:field="*{marca}" name="marca" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="cuidado_con_el_perro">Cuidado con el Perro</option>
              <option value="optima">Optima</option>
              <option value="garcía">García</option>
            </select>
          </div>
        </div>
      </div>
      
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tipo:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_tipo_agregar_producto_etiquetas" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span id="span_categoria_tipo_etiquetas" class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_tipo_agregar_producto_etiquetas" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="bordada">Bordada</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="vinil">Vinil</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="colgante">Colgante</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="pegatina">Pegatina</div>
            </div>
            <select id="valores_tipo_agregar_producto_etiquetas" onchange="tallaDinamica()" th:field="*{tipo}" name="tipo" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="bordada">Bordada</option>
              <option value="vinil">Vinil</option>
              <option value="colgante">Colgante</option>
              <option value="pegatina">Pegatina</option>
            </select>
          </div>
        </div>
      </div>

      <div id="campos_dinamicos_talla_etiquetas"></div>
    `;

    const opcionesCategoriaTipoEtiquetas = document.getElementById('opciones_tipo_agregar_producto_etiquetas');
    const spanCategoriaTipoEtiquetas = document.getElementById('span_categoria_tipo_etiquetas');
    const selectCategoriaTipoEtiquetas = document.getElementById('valores_tipo_agregar_producto_etiquetas');

    // Funcionalidad para detectar el onchange tipo de etiquetas
    opcionesCategoriaTipoEtiquetas.addEventListener('click', function(event) {
      const target = event.target;
      if (target.hasAttribute('data-value')) {
        const valueTipoEtiquetas = target.getAttribute('data-value');
        const textTipoEtiquetas = target.textContent.trim();
        spanCategoriaTipoEtiquetas.textContent = textTipoEtiquetas;
        selectCategoriaTipoEtiquetas.value = valueTipoEtiquetas;
        selectCategoriaTipoEtiquetas.dispatchEvent(new Event('change')); 
      }
    });

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'etiquetas' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valor === 'cerilleras') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Color:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_color_agregar_producto_cerilleras" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_color_agregar_producto_cerilleras" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="negro">Negro</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="azul_marino">Azul Marino</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="blanco">Blanco</div>
            </div>
            <select id="valores_color_agregar_producto_cerilleras" th:field="*{color}" name="color" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="negro">Negro</option>
              <option value="azul_marino">Azul Marino</option>
              <option value="blanco">Blanco</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Talla:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_talla_agregar_producto_cerilleras" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_talla_agregar_producto_cerilleras" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="9_12">9-12</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="18_M">18 M</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="2">2</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="3">3</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="4">4</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="5">5</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="6">6</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="8">8</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="10">10</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="12">12</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="14">14</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="16">16</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="18">18</div>
            </div>
            <select id="valores_talla_agregar_producto_cerilleras" th:field="*{talla}" name="talla" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="9_12">9-12</option>
              <option value="18_M">18 M</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="16">16</option>
              <option value="18">18</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Departamento:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_departamento_agregar_producto_cerilleras" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_departamento_agregar_producto_cerilleras" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="skinny">Skinny</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="slim">Slim</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="jogger">Jogger</div>
            </div>
            <select id="valores_departamento_agregar_producto_cerilleras" th:field="*{departamento}" name="departamento" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="skinny">Skinny</option>
              <option value="slim">Slim</option>
              <option value="jogger">Jogger</option>
            </select>
          </div>
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'cerilleras' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valor === 'cierres') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Color:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_color_agregar_producto_cierres" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_color_agregar_producto_cierres" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="gris_perla">Gris Perla</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="marino">Marino</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="negro">Negro</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="caqui">Caqui</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="rosa_dulce">Rosa Dulce</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="crudo">Crudo</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="blanco">Blanco</div>
            </div>
            <select id="valores_color_agregar_producto_cierres" th:field="*{color}" name="color" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="gris_perla">Gris Perla</option>
              <option value="marino">Marino</option>
              <option value="negro">Negro</option>
              <option value="caqui">Caqui</option>
              <option value="rosa_dulce">Rosa Dulce</option>
              <option value="crudo">Crudo</option>
              <option value="blanco">Blanco</option>
            </select>
          </div>
        </div>
      </div>

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Longitud:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_longitud_agregar_producto_cierres" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_longitud_agregar_producto_cierres" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="6_cm">6 cm</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="8_cm">8 cm</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="10_cm">10 cm</div>
            </div>
            <select id="valores_longitud_agregar_producto_cierres" th:field="*{longitud}" name="longitud" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="6_cm">6 cm</option>
              <option value="8_cm">8 cm</option>
              <option value="10_cm">10 cm</option>
            </select>
          </div>
        </div>
      </div>
      
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Proceso:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_proceso_agregar_producto_cierres" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_proceso_agregar_producto_cierres" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="blich">Blich</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="stone_medio">Stone Medio</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="stone_alto">Stone Alto</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="suavizado">Suavizado</div>
            </div>
            <select id="valores_proceso_agregar_producto_cierres" th:field="*{proceso}" name="proceso" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="blich">Blich</option>
              <option value="stone_medio">Stone Medio</option>
              <option value="stone_alto">Stone Alto</option>
              <option value="suavizado">Suavizado</option>
            </select>
          </div>
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'cierres' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valor === 'hebillas') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tipo:</p>
          <input type="text" value="Genérico" th:field="*{tipo}" name="tipo" readonly class="col-span-7 place-self-center justify-self-start fuente_3 bg-[#db4900] border border-[#db4900] text-white text-base md:text-base lg:text-base xl:text-lg rounded-3xl focus:ring-[#db4900] focus:border-[#db4900] block w-full p-1.5 px-2 md:p-2 md:px-3 lg:p-2 lg:px-3 xl:p-2 xl:px-3" required />
        </div>
      </div>  

      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Color:</p>
          <input type="text" value="Metálico" th:field="*{color}" name="color" readonly class="col-span-7 place-self-center justify-self-start fuente_3 bg-[#db4900] border border-[#db4900] text-white text-base md:text-base lg:text-base xl:text-lg rounded-3xl focus:ring-[#db4900] focus:border-[#db4900] w-full p-1.5 px-2 md:p-2 md:px-3 lg:p-2 lg:px-3 xl:p-2 xl:px-3" required />
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'hebillas' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valor === 'empaque') {
    contenedor.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tipo:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_tipo_agregar_producto_empaque" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_tipo_agregar_producto_empaque" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="bolsa">Bolsa</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="caja">Caja</div>
            </div>
            <select id="valores_tipo_agregar_producto_empaque" th:field="*{tipo}" name="tipo" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="bolsa">Bolsa</option>
              <option value="caja">Caja</option>
            </select>
          </div>
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'empaque' } });
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

// Campos Dinamicos Talla Etiquetas
function tallaDinamica() {
  const contenedorTallaDinamico = document.getElementById('campos_dinamicos_talla_etiquetas');
  const selectTipoEtiquetas = document.getElementById('valores_tipo_agregar_producto_etiquetas');
  const valorTipoEtiquetas = selectTipoEtiquetas.value;

  if (valorTipoEtiquetas === 'bordada' || valorTipoEtiquetas === 'colgante') {
    contenedorTallaDinamico.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Talla:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_talla_agregar_producto_etiquetas" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_talla_agregar_producto_etiquetas" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="9_12">9-12</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="18_M">18 M</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="2">2</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="3">3</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="4">4</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="5">5</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="6">6</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="8">8</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="10">10</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="12">12</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="14">14</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="16">16</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="18">18</div>
            </div>
            <select id="valores_talla_agregar_producto_etiquetas" th:field="*{talla}" name="talla" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="9_12">9-12</option>
              <option value="18_M">18 M</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="8">8</option>
              <option value="10">10</option>
              <option value="12">12</option>
              <option value="14">14</option>
              <option value="16">16</option>
              <option value="18">18</option>
            </select>
          </div>
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'etiquetasTallaDinamicoOpcion1' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valorTipoEtiquetas === 'vinil') {
    contenedorTallaDinamico.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Departamento:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_departamento_agregar_producto_etiquetas" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_departamento_agregar_producto_etiquetas" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="nino">Niño</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="nina">Niña</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="juvenil">Juvenil</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="bebos">Bebos</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="bebas">Bebas</div>
            </div>
            <select id="valores_departamento_agregar_producto_etiquetas" th:field="*{departamento}" name="departamento" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="nino">Niño</option>
              <option value="nina">Niña</option>
              <option value="juvenil">Juvenil</option>
              <option value="bebos">Bebos</option>
              <option value="bebas">Bebas</option>
            </select>
          </div>
        </div>
      </div>
      
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Proceso:</p>
          <div class="relative col-span-7 place-self-center justify-self-start fuente_3 w-full">
            <div id="opcion_seleccionada_proceso_agregar_producto_etiquetas" class="bg-[#db4900] text-white border border-[#da6930] focus:ring-[#da6930] focus:border-[#da6930] font-medium rounded-3xl text-sm md:text-base lg:text-base xl:text-lg fuente_2 w-full p-1.5 md:p-1.5 lg:p-1.5 xl:p-2 text-left cursor-pointer flex justify-between items-center">
              <span id="span_categoria_proceso_etiquetas" class="px-1">Seleccionar:</span>
              <svg class="w-6 h-6 md:w-7 md:h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m7 10l5 5l5-5"/></svg>
            </div>
            <div id="opciones_proceso_agregar_producto_etiquetas" class="absolute hidden bg-[#db4900] border border-[#da6930] w-full text-sm md:text-base lg:text-base xl:text-base fuente_2 mt-1 z-10 max-h-48 overflow-y-auto">
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="blich">Blich</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="stone_medio">Stone Medio</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="stone_alto">Stone Alto</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="suavizado">Suavizado</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="tenido">Teñido</div>
              <div class="px-4 py-2 text-white hover:bg-[#da6930] cursor-pointer" data-value="destroyer">Destroyer</div>
            </div>
            <select id="valores_proceso_agregar_producto_etiquetas" onchange="tonalidadDinamica()" th:field="*{proceso}" name="proceso" class="hidden" required>
              <option value="" selected>Seleccionar:</option>
              <option value="blich">Blich</option>
              <option value="stone_medio">Stone Medio</option>
              <option value="stone_alto">Stone Alto</option>
              <option value="suavizado">Suavizado</option>
              <option value="tenido">Teñido</option>
              <option value="destroyer">Destroyer</option>
            </select>
          </div>
        </div>
      </div>

      <div id="campos_dinamicos_tonalidad_etiquetas"></div>
    `;

    const opcionesCategoriaProcesoEtiquetas = document.getElementById('opciones_proceso_agregar_producto_etiquetas');
    const spanCategoriaProcesoEtiquetas = document.getElementById('span_categoria_proceso_etiquetas');
    const selectCategoriaProcesoEtiquetas = document.getElementById('valores_proceso_agregar_producto_etiquetas');

    // Funcionalidad para detectar el onchange proceso de etiquetas
    opcionesCategoriaProcesoEtiquetas.addEventListener('click', function(event) {
      const target = event.target;
      if (target.hasAttribute('data-value')) {
        const valueProcesoEtiquetas = target.getAttribute('data-value');
        const textProcesoEtiquetas = target.textContent.trim();
        spanCategoriaProcesoEtiquetas.textContent = textProcesoEtiquetas;
        selectCategoriaProcesoEtiquetas.value = valueProcesoEtiquetas;
        selectCategoriaProcesoEtiquetas.dispatchEvent(new Event('change')); 
      }
    });

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'etiquetasTallaDinamicoOpcion2' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else {
    contenedorTallaDinamico.innerHTML = ``;
  }
}

// Campos Dinamicos Tonalidad Etiquetas
function tonalidadDinamica() {
  const contenedorTonalidadDinamico = document.getElementById('campos_dinamicos_tonalidad_etiquetas');
  const selectTonalidadEtiquetas = document.getElementById('valores_proceso_agregar_producto_etiquetas');
  const valorTonalidadEtiquetas = selectTonalidadEtiquetas.value;

  if (valorTonalidadEtiquetas === 'blich' || valorTonalidadEtiquetas === 'suavizado' || valorTonalidadEtiquetas === 'destroyer') {
    contenedorTonalidadDinamico.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tonalidad:</p>
          <input type="text" value="clara" th:field="*{color}" name="color" readonly class="capitalize col-span-7 place-self-center justify-self-start fuente_3 bg-[#db4900] border border-[#db4900] text-white text-base md:text-base lg:text-base xl:text-lg rounded-3xl focus:ring-[#db4900] focus:border-[#db4900] block w-full p-1.5 px-2 md:p-2 md:px-3 lg:p-2 lg:px-3 xl:p-2 xl:px-3" required />
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'etiquetasTonalidadDinamicoOpcion1' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else if (valorTonalidadEtiquetas === 'stone_medio' || valorTonalidadEtiquetas === 'stone_alto' || valorTonalidadEtiquetas === 'tenido') {
    contenedorTonalidadDinamico.innerHTML = `
      <div class="px-4 md:px-12 flex justify-center">
        <div class="grid grid-cols-12 start-0 flex items-stretch mt-4 md:mt-4 lg:mt-4 xl:mt-5 px-4 w-full">
          <p class="col-span-5 text-center fuente_2 text-lg md:text-xl lg:text-xl xl:text-2xl text-white pr-6 place-self-center justify-self-end">Tonalidad:</p>
          <input type="text" value="oscura" th:field="*{color}" name="color" readonly class="capitalize col-span-7 place-self-center justify-self-start fuente_3 bg-[#db4900] border border-[#db4900] text-white text-base md:text-base lg:text-base xl:text-lg rounded-3xl focus:ring-[#db4900] focus:border-[#db4900] block w-full p-1.5 px-2 md:p-2 md:px-3 lg:p-2 lg:px-3 xl:p-2 xl:px-3" required />
        </div>
      </div>
    `;

    // Lanza un evento global para indicar que se han generado elementos
    const eventoCamposGenerados = new CustomEvent('elementosGenerados', { detail: { categoria: 'etiquetasTonalidadDinamicoOpcion2' } });
    document.dispatchEvent(eventoCamposGenerados);

  } else {
    contenedorTonalidadDinamico.innerHTML = ``;
  }
}