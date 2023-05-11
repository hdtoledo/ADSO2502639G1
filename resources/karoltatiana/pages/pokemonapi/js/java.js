document.querySelector("#button").addEventListener("click", getPokemon);

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
  return string.toLowerCase();
}

function getPokemon(pokemon) {
  const name = document.querySelector("#pokemonName").value;
  const pokemonName = lowerCaseName(name);

  fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".pokemonInfo").innerHTML = `
      <div>
        <img
          src="${data.sprites.other["official-artwork"].front_default}"
          alt="Pokemon name"
        />
      </div>
      <div class="pokemonInfos">
        <h2>${capitalizeFirstLetter(data.name)}</h2>
      </div>`;
    })
    .catch((error) => {
      document.querySelector(".pokemonInfo").innerHTML = `
      <h3>❌ Pokémon no encontrado ❌</h3>
      `;
      console.log("Pokemon no encontrado", error);
    });
}