const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';

    const formularioBusqueda = document.getElementById('formulario-busqueda');
    const inputBusqueda = document.getElementById('busqueda');
    const listaCocteles = document.getElementById('lista-cocteles');

    formularioBusqueda.addEventListener('submit', e => {
      e.preventDefault();
      buscarCocteles(inputBusqueda.value);
    });

    async function buscarCocteles(palabra) {
      try {
        const response = await fetch(`${API_URL}?s=${palabra}`);
        const data = await response.json();
        listaCocteles.innerHTML = '';
        if (data.drinks) {
          data.drinks.forEach(co)}}};