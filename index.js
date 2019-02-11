/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainerElement;
window.onload = function(){
  init();
};

function init(){
  changeColorButton = document.querySelector('#clockButton');
  clockContainer = document.querySelector('#clockContainer');
  //changeColorButton.addEventListener('click', changeBackgroundColor);
  window.addEventListener('mousemove', changeBackgroundColor);
  startClock();
}


function changeBackgroundColor(){
  console.log("Muudan värvi");
  var r = Math.round(Math.random()*255);
  var g = Math.round(Math.random()*255);
  var b = Math.round(Math.random()*255);

  clockContainer.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

function startClock(){
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);
}


function updateClock(){
  dayContainerElement = document.querySelector('#dayContainer');
  const date = new Date();
  clockContainer.innerHTML = date;
  let day;
  function getDay(){
    switch(date.getDay()){
      case 0:
        day = "Pühapäev";
        break;
      case 1:
        day = "Esmaspäev";
        break;
      default:
        day ="See pole päev";
        break;
    }
  }
  getDay();
  dayContainerElement.innerHTML = day;
}

















/*const a = 6;
let short = 5;
function doMath(){
    short = document.getElementById("math");
   //short.innerHTML = Math.round(4.4);
   //short.innerHTML = Math.ceil(4.1);
   //short.innerHTML = Math.floor(4.9);
   //short.innerHTML = Math.pow(4.3);
   //short.innerHTML = Math.round(Math.random()*100);
   short.innerHTML = Math.sqrt(16);
}*/
