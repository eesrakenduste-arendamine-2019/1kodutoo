/*jshint esversion:6 */
let months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
"juuli", "august", "september", "oktoober", "november", "detsember"];
let weekDays = ["puhapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
let weekDaysEng = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let monthsEng = ["january", "february", "march", "april", "may",
"june", "july", "august", "september", "october", "november", "december"];

let hr;
let min;
let sec;
let day;
let weekDay;
let month;
let year;
let clock;
let date;

let buttonColor;
let buttonLang;
let switchLang;
let buttonRadio;
let turnAudio;
let audio = document.createElement("AUDIO");


window.onload = function() {
  main();
  date.innerHTML = weekDays[weekDay] + " " + day + "." + " " + months[month] + " " + year;

  switchLang = 0;
  turnAudio = 0;
  window.setInterval(function() {
    main();
  }, 1000);
};

function main() {
  date = new Date();
  hr = date.getHours();
  min = date.getMinutes();
  sec = date.getSeconds();
  weekDay = date.getDay(); //den nedeli
  month = date.getMonth();
  year = date.getYear() - 100;
  day = date.getDate(); //4islo

  clock = document.querySelector('#Clock');
  date = document.querySelector('#Date');
  clock.innerHTML = '<span>' + hr + '</span>' + '<span>' + min + '</span>' + '<span>' + sec + '</span>';

  let spans = clock.getElementsByTagName("span");
  animateClock(spans[2]);
  if(sec == 0) animateClock(spans[1]);
  if(min == 0 && sec == 0) animateClock(spans[0]);

  buttonColor = document.querySelector('#Color');
  buttonColor.addEventListener('click', changeColor);
  buttonLang = document.querySelector('#Language');
  buttonLang.addEventListener('click', changeLang);
  buttonRadio = document.querySelector('#Radio');
  buttonRadio.addEventListener('click', playRadio);
}

function changeColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  //document.getElementById("test").style.color = `rgb(${red}, ${green}, ${blue})`;
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function changeLang() {
  switch (switchLang) {
    case 0:
      date.innerHTML = weekDaysEng[weekDay] + " " + day + "." + " " + monthsEng[month] + " " + year;
      switchLang = 1;
      break;
    case 1:
      date.innerHTML = weekDays[weekDay] + " " + day + "." + " " + months[month] + " " + year;
      switchLang = 0;
      break;
    default:
      console.log("error with lang");

  }

}

function animateClock(span) {
  span.className = "turn";
  setTimeout(function() {
    span.className = "";
  }, 700);
}

function playRadio() {
  audio.setAttribute("src","http://blobfolio.com/codepenfiles/atc-flip-clock/390917_AhWilderness.mp3");
  audio.setAttribute("loop", "true");
  switch (turnAudio) {
    case 0:
      audio.play();
      audio.muted = false;
      turnAudio = 1;
      break;
    case 1:
      audio.muted = true;
      turnAudio = 0;
      break;
    default:
      console.log("Error with audio");
  }
  audio.play();
}
