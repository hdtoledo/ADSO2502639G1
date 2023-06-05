const apiUrl = 'https://rickandmortyapi.com/api/character/';

// Obtener un número aleatorio dentro de un rango
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Cargar información del personaje
function loadCharacterInfo(characterId) {
  fetch(apiUrl + characterId)
    .then(response => response.json())
    .then(data => {
      // Actualizar la información del personaje en la página
      document.getElementById('character-image').src = data.image;
      document.getElementById('character-name').textContent = data.name;
      document.getElementById('character-id').textContent = 'Id: ' + data.id;
      document.getElementById('character-status').textContent = 'Estado: ' + data.status;
      document.getElementById('character-species').textContent = 'Especie: ' + data.species;
      document.getElementById('character-origin').textContent = 'Origen: ' + data.origin.name;
      document.getElementById('character-location').textContent = 'Ubicacion: ' + data.location.name;
      document.getElementById('character-gender').textContent = 'genero: ' + data.gender;
      document.getElementById('character-status-color').style.display = 'block';
      if (data.status === 'Alive') {
        document.getElementById('character-status-color').style.background = 'green';
      } else {
        document.getElementById('character-status-color').style.background = 'red';
      }
      if(data.status === 'unknown'){
        document.getElementById('character-status-color').style.background = 'grey';
      }
    })
    .catch(error => {
      console.log('Error al cargar el personaje:', error);
    });
}

// Manejar el evento clic del botón
document.getElementById('random-character-button').addEventListener('click', function () {
  const randomCharacterId = getRandomNumber(1, 671); // Rango de IDs disponibles
  loadCharacterInfo(randomCharacterId);
});

