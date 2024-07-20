let search = document.getElementById("search");
const ul = document.getElementById("auto-complete");
const favarray = [];

search.onkeyup = function () {
  var searchname = search.value;
  if (searchname !== "") {
    fetch(
      "https://superheroapi.com/api.php/3580926752143021/search/" +
        searchname.trim()
    )
      .then((response) => response.json())
      .then((data) => {
        ul.innerText = "";
        for (var i of data.results) {
          var li = document.createElement("li");
          li.innerHTML = i.name;
          li.id = i.id;

          li.addEventListener("click", function () {
            var heroid = this.id;
            loadDetails(heroid);
            ul.innerText = "";

            var container = document.getElementById("container");
            container.style.display = "block";
          });

          li.style.display = "block";
          ul.appendChild(li);
        }
      })
      .catch((err) => console.log(err));
  }
};

function loadDetails(heroid) {
  fetch(`https://superheroapi.com/api.php/3580926752143021/${heroid}`)
    .then((response) => response.json())
    .then((data) => {
      var details = document.getElementById("details");

      var img = document.getElementById("img");
      img.src = data.image.url;

      var name = document.getElementById("name");
      name.innerHTML = data.name;

      var bio = document.getElementById("bio");

      var nature = document.getElementById("nature");

      var base = document.getElementById("base");

      var occ = document.getElementById("occupation");

      var powestat = document.getElementById("powerstats");
      var favv = document.getElementById("favbtn");
      favv.value = data.id;
    })
    .catch((error) => console.log(error));
}

function favpush(favid) {
  if (favarray.includes(favid)) {
    alert("Already Added to the Favourite List");
    return;
  }

  favarray.push(favid);
  console.log(favarray);
  localStorage.setItem("favlistarr", JSON.stringify(favarray));
}
