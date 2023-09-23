// Prevent the HTML form from storing state from the previous sessions
if (window.history.replaceState) {
  window.history.replaceState(null, null, window.location.href);
}

// Append <option> with countries to the select element
const countries = "../static/countries.json";
const select = document.getElementById("country");

fetch(countries)
  .then((res) => res.json())
  .then((data) => {
    let option;
    for (let i = 0; i < data.length; i++) {
      option = document.createElement("option");
      option.text = data[i].en_short_name;
      option.value = data[i].nationality;
      select.add(option);
    }
  })
  .catch((err) => console.log(err));
