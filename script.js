const filterForm = document.querySelector("#filterForm");

filterForm.addEventListener("submit", function (event) {
  event.preventDefault();
  fetchData();
});

function fetchData() {
  const name = document.querySelector("#name").value;
  let URL = `https://rickandmortyapi.com/api/character`;
  const species = document.querySelector("#species");
  let params = [];
  if (name !== "") params.push(`name=${name}`);
  if (species !== "") {
    params.push(`species=${species}`);
  }
  if (params.length > 0) {
    if (params.length > 0) URL += "?" + params.join("&");
    fetch(URL).then(function (response) {
      return response.json().then(data);
    });
  }
}
