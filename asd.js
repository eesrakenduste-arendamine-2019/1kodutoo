/*jshint esversion:6*/



document.getElementById('clockContainer');
let clockContainer;
let changeColorButton;
let dayContainer;

var today = new Date();
var hr = today.getHours();
var min = today.getMinutes();
var sec = today.getSeconds();

window.onload = function (){
  init();
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundColor);
};

function init (){

  startClock();
}

function startClock(){

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  document.getElementById('clockContainer').innerHTML = h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);


}

function updateClock(){
  const date = new Date();

  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  clockContainer.innerHTML = date;

  dayContainer = document.querySelector('#dayContainer');
  let day;
  var audio = new Audio('tick.mp3');
    audio.play();
  function getDay(){
    switch(new Date().getDay()){
      case 0:
        day = "Pühapäev";
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
  }

  getDay();
  dayContainer.innerHTML = day;
}

function changeBackgroundColor(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);

  document.getElementById("clockContainer").style.color = `rgb(${red},${green},${blue})`;
  document.getElementById("dayContainer").style.color = `rgb(${red},${green},${blue})`;
}

window.alert = function (){
  init();
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundColor);
};
