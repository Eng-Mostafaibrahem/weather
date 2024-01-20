let search = document.getElementById("SearchInput");
let cards = document.getElementById("cards");
let data = [];

function display(response) {
  let days = response.forecast.forecastday;
  let city = response.location.name;
  let cartona = ``;

  for (let i = 0; i < days.length; i++) {
    const element = days[i];
    console.log(element);
    let elementDate = new Date(element.date);
    let elementDate2=elementDate.toString();
    let elementDate3 = elementDate2.split(" ")
    let date= elementDate3[2];
    let month =elementDate3[1]
    let day= elementDate3[0]

    let tempreture = element.day.maxtemp_c;
    let tempText = element.day.condition.text;
    let img = element.day.condition.icon;
    
    cartona += `<div class= col-md-4 mt-5 mx-auto  shadow-lg border-3  my-5 text-light">
    <div class="card-header card1-header-bg text-white d-flex justify-content-between ">
        <p class="day">${day}</p>
        <p class="date">${date}${month}</p>
    </div>
    <div class="card-body card1-bg text-white text-center" >
      <h4>${city}</h4>

      <h2 class="card-title d-inline-block">${tempreture} C</h2>
      <img src = ${img}></img>
      <p class="card-text">
        ${tempText}
      </p>
      

    </div>
  </div>`;

  }

  cards.innerHTML = cartona;
}

async function getData() {
  let data = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=4c06365e62eb47a5b05213839240801&q=cairo&days=3`
  );

  let res = await data.json();
  console.log(res.location.name);

  display(res);
}

search.addEventListener("input", function (e) {
  searchCity(e.target.value);
});

async function searchCity(element) {
  let data = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=4c06365e62eb47a5b05213839240801&q=${element}&days=3`
  );

  let res = await data.json();

  display(res);
}

getData();
