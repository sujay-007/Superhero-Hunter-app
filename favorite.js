const favouriteList = document.getElementById('fevList');
let list = JSON.parse(localStorage.getItem('favlistarr')) || [];

function fetching(list) {
  list.forEach((heroid) => {
    loadhero(heroid);
  });
}

async function loadhero(heroid) {
  const URL = `https://www.superheroapi.com/api.php/3580926752143021/${heroid.trim()}`;
  const res = await fetch(URL);
  const data = await res.json();
  if (data) {
    heroslist(data);
  }
}

function heroslist(hero) {
  const herosdata = document.createElement('div');
  herosdata.innerHTML = `
    <div id="outerbox" class="card mb-3">
      <div class="row g-0">
        <div class="col-md-4">
          <img src="${hero.image.url}" id="favlistimg" class="img-fluid rounded-start" alt="${hero.name}">
        </div>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title">${hero.name}</h5>
            <button class="btn btn-primary" id="more-info" type="button" onclick="moreInfo(${hero.id})">More Info</button>
            <button class="btn btn-danger" id="remove" type="button" onclick="remove(${hero.id})">Remove</button>
          </div>
        </div>
      </div>
    </div>
  `;
  favouriteList.appendChild(herosdata);
}

function remove(value) {
  list = list.filter((heroid) => heroid !== value.toString());
  localStorage.setItem('favlistarr', JSON.stringify(list));
  favouriteList.innerHTML = '';
  fetching(list);
}

function moreInfo(heroid) {
  window.location.href = `details.html?id=${heroid}`;
}

fetching(list);
