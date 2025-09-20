/*
  File: app.js
  Student: Robert Dalmacio
  Student ID: 200606074
  Date: 2025-09-20

  Handles fetching Pokémon from the API and rendering details on user click.
*/

/**
 * Helper function to capitalize the first letter and the first letter after each space or hyphen.
 * @param {string} str
 * @returns {string}
 */
function capitalizeAbilityName(str) {
  return str
    .split(/[\s-]/) // Split by space or hyphen
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(' '); // Join back with spaces
}

/**
 * Fetch a list of Pokémon and render them with images.
 */
async function fetchPokemonList() {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
  const data = await response.json();
  const list = document.getElementById('pokemon-list');
  list.innerHTML = '';
  for (const pokemon of data.results) {
    const li = document.createElement('li');
    li.classList.add('pokemon-item');

    // Fetch Pokémon details to get the image
    const pokeResponse = await fetch(pokemon.url);
    const pokeData = await pokeResponse.json();

    // Capitalize the first letter of the Pokémon name
    const capitalizedName = pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1);

    li.innerHTML = `
      <img src="${pokeData.sprites.front_default}" alt="${capitalizedName}" />
      <span class="pokemon-info">${capitalizedName}</span>
    `;
    li.onclick = () => {
      // Remove 'selected' class from all items
      document.querySelectorAll('.pokemon-item').forEach(item => item.classList.remove('selected'));
      // Add 'selected' class to the clicked item
      li.classList.add('selected');
      showPokemonDetail(pokemon.url);
    };
    list.appendChild(li);
  }
}

/**
 * Fetch and display Pokémon details.
 * @param {string} url
 */
async function showPokemonDetail(url) {
  const response = await fetch(url);
  const poke = await response.json();

  // Capitalize the first letter of the Pokémon name
  const capitalizedName = poke.name.charAt(0).toUpperCase() + poke.name.slice(1);

  // Clear the abilities section
  const abilityDetail = document.getElementById('ability-detail');
  abilityDetail.innerHTML = '<h2>Abilities</h2>';
  abilityDetail.innerHTML += '<p>Click on an ability to see details.</p>';  
  
  const detail = document.getElementById('pokemon-detail');
  detail.innerHTML = `
    <h2>Specs</h2>
    <h4>Name: <span class="pokemon-info">${capitalizedName}</span></h4>
    <h4>Height: <span class="pokemon-info">${poke.height}</span></h4>
    <h4>Base Experience: <span class="pokemon-info">${poke.base_experience}</span></h4>
    <h4>Abilities: 
        ${poke.abilities.map(ab => `
          <span class="pokemon-info pokemon-ability" onclick="showAbilityDetail('${ab.ability.url}')">${capitalizeAbilityName(ab.ability.name)}</span>
        `)}
    </h4>
  `;
}

/**
 * Fetch and show ability details.
 * @param {string} url
 */
async function showAbilityDetail(url) {
  const response = await fetch(url);
  const ability = await response.json();
  
  const detail = document.getElementById('ability-detail');
  const effectEntry = ability.effect_entries.find(e => e.language.name === 'en');
  detail.innerHTML = `
    <h2>Abilities</h2>
    <h4>Ability Name: <span class="pokemon-info">${capitalizeAbilityName(ability.name)}</span></h4>
    <h4>Ability Effect: <span class="pokemon-info">${effectEntry ? effectEntry.effect : 'No effect info.'}</span></h4>
    <h4>Short Effect: <span class="pokemon-info">${effectEntry ? effectEntry.short_effect : ''}</span></h4>
    <h4>Flavour Text: <span class="pokemon-info">${ability.flavor_text_entries?.find(ft => ft.language.name === 'en')?.flavor_text || ''}</span></h4>
  `;
}

// Load Pokémon list on page startup.
fetchPokemonList();
