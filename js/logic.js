const firstCardBody = document.querySelector("#firstCardTitle");
console.log(firstCardTitle, "HELLO");

async function getData() {
 let data = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=4c06365e62eb47a5b05213839240801&q=07112&days=3"
  );

  let res = data.json();
  console.log(res);
}

getData()