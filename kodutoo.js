/*jshint esversion:6*/
let textColor;
let changeColorButton;
let defaultSettings;
let clockSmall;
let clockMedium
let clockBig;
let dayContainer;
let dateContainer;
let clockContainer;

window.onload = function (){
  init();
  changeColorButton = document.querySelector('#changeColorButton');
  changeColorButton.addEventListener('click', changeBackgroundColor);
  textColor = document.querySelector('#textColor');
  textColor.addEventListener('click', textColorChange);
  defaultSettings = document.querySelector('#defaultSettings');
  defaultSettings.addEventListener('click', defaultSettingsFunction);
  clockSmall = document.querySelector('#clockSmall');
  clockSmall.addEventListener('click', clockSmallFunction);
  clockMedium = document.querySelector('#clockMedium');
  clockMedium.addEventListener('click', clockMediumFunction);
  clockBig = document.querySelector('#clockBig');
  clockBig.addEventListener('click', clockBigFunction);
};

function init (){

  startClock();
}

function startClock(){
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);
}

function updateClock(){

  // clockContainer
  clockContainer = document.querySelector('#clockContainer');
  var clock = new Date();
  var hour = clock.getHours();
  var minute = clock.getMinutes();
  var second = clock.getSeconds();

  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }

  clock = hour + ' : ' + minute + ' : ' + second;
  clockContainer.innerHTML = clock;

  // dateContainer
  dateContainer = document.querySelector('#dateContainer');
  var date = new Date();
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  date = day + ' / ' + month + ' / ' + year;
  dateContainer.innerHTML = date;
  dateContainer.textContent = date;

  //dayContainer
  dayContainer = document.querySelector('#dayContainer');
  let weekDay;
  function getDay(){
    switch(new Date().getDay()){
      case 0:
        weekDay = "Pühapäev";
        break;
      case 1:
        weekDay = "Esmaspäev";
        break;
      case 2:
        weekDay = "Teisipäev";
        break;
      case 3:
        weekDay = "Kolmapäev";
        break;
      case 4:
        weekDay = "Neljapäev";
        break;
      case 5:
        weekDay = "Reede";
        break;
      case 6:
        weekDay = "Laupäev";
        break;
      default:
        weekDay = "Oled sa kindel, et see on päev? ";
    }
  }
  getDay();
  dayContainer.innerHTML = weekDay;
}

function changeBackgroundColor(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
function textColorChange(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);

  dayContainer = document.getElementById("dayContainer");
  dayContainer.style.color = `rgb(${red},${green},${blue})`;
  dateContainer = document.getElementById("dateContainer");
  dateContainer.style.color = `rgb(${red},${green},${blue})`;
  clockContainer = document.getElementById("clockContainer");
  clockContainer.style.color = `rgb(${red},${green},${blue})`;
}
function clockSmallFunction(){
    document.getElementById("dayContainer").style.fontSize = '100%';
    document.getElementById("dateContainer").style.fontSize = '100%';
    document.getElementById("clockContainer").style.fontSize = '100%';
}
function clockMediumFunction(){
    document.getElementById("dayContainer").style.fontSize = '500%';
    document.getElementById("dateContainer").style.fontSize = '500%';
    document.getElementById("clockContainer").style.fontSize = '500%';
  }
function clockBigFunction(){
    document.getElementById("dayContainer").style.fontSize = '1000%';
    document.getElementById("dateContainer").style.fontSize = '1000%';
    document.getElementById("clockContainer").style.fontSize = '1000%';
}
function defaultSettingsFunction(){
  document.body.style.backgroundColor = `rgb(255,255,255)`;
  dayContainer.style.color = `rgb(0,0,0)`;
  dateContainer.style.color = `rgb(0,0,0)`;
  clockContainer.style.color = `rgb(0,0,0)`;
  clockSmallFunction();
}
