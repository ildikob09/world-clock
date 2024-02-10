function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  if (losAngelesElement) {
    let losAngelesTimeElement = document.querySelector(".time");
    let losAngelesDateElement = document.querySelector(".date");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities-list");
  citiesElement.innerHTML = `
   <div class="city" >
          <div>
            <h2>${cityName}</h2>
            <div class="date" id="">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <class class="time">${cityTime.format(
            "h:mm:ss [<small>]A[</small>]"
          )} 
        </div>     
  `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
