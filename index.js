/*jshint esversion:6 */
let months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni",
"juuli", "august", "september", "oktoober", "november", "detsember"];
let weekDays = ["puhapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
let weekDaysEng = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
let monthsEng = ["january", "february", "march", "april", "may",
"june", "july", "august", "september", "october", "november", "december"];
let day;
let weekDay;
let month;
let year;
let date;
let buttonColor;
let buttonLang;
let switchLang;
let buttonSize;

window.onload = function() {
  main();
  date.innerHTML =  day + "." + " " + monthsEng[month] + " " + 20 + year + " " + weekDaysEng[weekDay];
  switchLang = 0;
};

function main() {
  date = new Date();
  weekDay = date.getDay(); //den nedeli
  month = date.getMonth();
  year = date.getYear() - 100;
  day = date.getDate(); //4islo

  clock = document.querySelector('#Clock');
  date = document.querySelector('#Date');

  buttonColor = document.querySelector('#Color');
  buttonColor.addEventListener('click', changeColor);
  buttonLang = document.querySelector('#Language');
  buttonLang.addEventListener('click', changeLang);
  buttonSize = document.querySelector('#Size');
  buttonSize.addEventListener('click', changeSize);
}

function changeColor() {
  const blue = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const red = Math.round(Math.random() * 255);
  document.getElementById('Date').style.color = `rgb(${red}, ${green}, ${blue})`;
}

function changeSize(){
document.getElementById("Date").style.width = '5px';
}

function changeLang() {
  switch (switchLang) {
    case 0:
      date.innerHTML =day + "." + " " + months[month] + " " + 20 + year + " " + weekDays[weekDay];
      switchLang = 1;
      break;
    case 1:
      date.innerHTML =day + "." + " " + monthsEng[month] + " " + 20 + year + " " + weekDaysEng[weekDay];
      switchLang = 0;
      break;
  }
}

let Сlock = document.getElementById('Сlock');

function СlockTime(){
  let
    time = new Date(),
    h = time.getHours().toString(),
    m = time.getMinutes().toString(),
    s = time.getSeconds().toString();

 if(h.length < 2){h = '0' + h;}
 if(m.length < 2){m = '0' + m;}
 if(s.length < 2){s = '0' + s;}

 let СlockString = h + ':' + m + ':' + s;
 Сlock.textContent = СlockString;
}

setInterval(СlockTime, 1000);
