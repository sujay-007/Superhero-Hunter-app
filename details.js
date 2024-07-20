// Function to get the query parameter from the URL
function getQueryParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

// Function to fetch and display hero details
async function fetchHeroDetails(heroid) {
  const URL = `https://www.superheroapi.com/api.php/3580926752143021/${heroid}`;
  const res = await fetch(URL);
  const hero = await res.json();
  displayHeroDetails(hero);
}

// Function to display hero details in the HTML
function displayHeroDetails(hero) {
  const heroDetails = document.getElementById('hero-details');
  heroDetails.innerHTML = `
      <img src="${hero.image.url}" id="hero-image" alt="${hero.name}">
      <h2 class="details-title">${hero.name}</h2>
      <div class="details-section">
          <h3>Biography</h3>
          <p class="details-content">Full Name: ${hero.biography['full-name']}</p>
          <p class="details-content">Alter Egos: ${hero.biography['alter-egos']}</p>
          <p class="details-content">Place of Birth: ${hero.biography['place-of-birth']}</p>
          <p class="details-content">First Appearance: ${hero.biography['first-appearance']}</p>
          <p class="details-content">Publisher: ${hero.biography.publisher}</p>
          <p class="details-content">Alignment: ${hero.biography.alignment}</p>
      </div>
      <div class="details-section">
          <h3>Power Stats</h3>
          <p class="details-content">Intelligence: ${hero.powerstats.intelligence}</p>
          <p class="details-content">Strength: ${hero.powerstats.strength}</p>
          <p class="details-content">Speed: ${hero.powerstats.speed}</p>
          <p class="details-content">Durability: ${hero.powerstats.durability}</p>
          <p class="details-content">Power: ${hero.powerstats.power}</p>
          <p class="details-content">Combat: ${hero.powerstats.combat}</p>
      </div>
      <div class="details-section">
          <h3>Appearance</h3>
          <p class="details-content">Gender: ${hero.appearance.gender}</p>
          <p class="details-content">Race: ${hero.appearance.race}</p>
          <p class="details-content">Height: ${hero.appearance.height.join(', ')}</p>
          <p class="details-content">Weight: ${hero.appearance.weight.join(', ')}</p>
          <p class="details-content">Eye Color: ${hero.appearance['eye-color']}</p>
          <p class="details-content">Hair Color: ${hero.appearance['hair-color']}</p>
      </div>
      <div class="details-section">
          <h3>Work</h3>
          <p class="details-content">Occupation: ${hero.work.occupation}</p>
          <p class="details-content">Base: ${hero.work.base}</p>
      </div>
      <div class="details-section">
          <h3>Connections</h3>
          <p class="details-content">Group Affiliation: ${hero.connections['group-affiliation']}</p>
          <p class="details-content">Relatives: ${hero.connections.relatives}</p>
      </div>
  `;
}

// Get the hero ID from the URL and fetch the hero details
const heroid = getQueryParameter('id');
fetchHeroDetails(heroid);
