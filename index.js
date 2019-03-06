/*jshint esversion: 6*/
let clock;
let day;
let timeContainer;
let dateContainer;
let clockElementClass;
let changeColorButton;
let changeSizeButton;
let changeLocationButton;
window.onload = function (){ init(); };

function init(){
  clockContainer = document.querySelector('#clock');
  dateContainer = document.querySelector("#date");
  timeContainer = document.querySelector("#time");
  dayContainer = document.querySelector("#day");
  clockElementClass = document.querySelector('.clockElementClass');
  clockContainer = document.querySelector("#clock");
  startClock();
  readDate(date);
  getDay();
}

function toggleColor(item){
   if(item.className == "on") {
      item.className="off";
      clockElementClass.style.color = "#FFF";
   } else {
      item.className="on";
      clockElementClass.style.color = "#84dcc6";
   }
}

function toggleSize(item){
   if(item.className == "on") {
      item.className="off";
      clockContainer.style.fontSize = "100%";
   } else {
      item.className="on";
      clockContainer.style.fontSize = "250%";

   }
}

function toggleLoc(item){
   if(item.className == "on") {
      item.className="off";
      document.body.style.backgroundColor = "#664147";
   } else {
      item.className="on";
      document.body.style.backgroundColor = "#31263e";

   }
}

function startClock(){
  updateClock();
  window.setInterval(function(){ updateClock(); }, 1000);
}

function updateClock(){
  const date = new Date();
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  if (h < 10){
    h = "0" + h;
  }
  if (m < 10){
    m = "0" + m;
  }
  if (s < 10){
    s = "0" + s;
  }
  clockContainer.innerHTML = h + " : " + m + " : " + s;
}

function readDate(){
  const date = new Date();
  d = date.getDate();
  m = date.getMonth() + 1;
  y = date.getYear() - 100;
  if (d < 10){
    d = "0" + d;
  }
  if (m < 10){
    m = "0" + m;
  }
    dateContainer.innerHTML = d + "." + m + "." + y;
}

function getDay(){
  switch(new Date().getDay()){
  default:
    day = "Viga! See pole päev!";
    break;
  case 0:
    day ="Pühapäev";
    break;
  case 1:
    day = "Esmaspäev";
    break;
  case 2:
    day = "Teisipäev";
    break;
  case 3:
    day = "Kolmapäev";
    break;
  case 4:
    day = "Neljapäev";
    break;
  case 5:
    day = "Reede";
    break;
  case 6:
    day = "Laupäev";
    break;
  }
  dayContainer.innerHTML = day;
}
