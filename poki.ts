// Replace with the Pokemon name you want to fetch data for
const pokemonName = "pikachu";

// API endpoint for fetching Pokemon data
const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

const response = await fetch(endpoint);
const pokemon = await response.json();

console.log(pokemon);
