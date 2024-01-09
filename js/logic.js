const firstCardTitle = document.querySelector("#firstCardTitle");
const firstCardText = document.querySelector("#firstCardText");
const firstCardDate = document.querySelector("#firstCardDate");
const firstCardDay = document.querySelector("#firstCardDay");
const cards= document.querySelector("#cards")
// "firstCardText"
// "firstCardTitle"
// "firstCardDate"
// "firstCardDay"
console.log(firstCardTitle, "HELLO");

async function getData() {
  let data = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=4c06365e62eb47a5b05213839240801&q=07112&days=3"
  );


  let res = await data.json();
  console.log(res.location.name);
  
  let cartona = ``;
  let days = res.forecast.forecastday;
  
  for (let i = 0; i < days.length; i++) {
    const element = days[i];
    console.log(element);
    let date = new Date(element.date);
    //console.log(element.date);
    let tempreture=element.day.maxtemp_c
      //console.log(element.day.maxtemp_c);
    let tempText=element.day.condition.text
    // console.log(element.day.condition.text);
    let img = element.day.condition.icon
    //console.log(element.day.condition.icon);
    let city=res.location.name
    cartona += `<div class="card border-success mb-3" style="max-width: 18rem">
    <div class="card-header card1-header-bg text-white d-flex justify-content-between ">
        <p class="day">day</p>
        <p class="date">${date}</p>
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
  //console.log(res.forecast.forecastday[0].date
  //);
  cards.innerHTML=cartona;
}

getData();
