function updateTime() {
  let losAngelesElement = document.querySelector("#los-angeles");
  let losAngelesTimeElement = document.querySelector(".time");
  let losAngelesDateElement = document.querySelector(".date");
  let losAngelesTime = moment().tz("America/Los_Angeles");

  losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
  losAngelesTimeElement.innerHTML = losAngelesTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  let sydneyElement = document.querySelector("#sydney");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
