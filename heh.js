/*jshint esversion: 6*/
/* let a = 6;
const short = 5;

function doMath(){
  const short = document.getElementById('math');
  let number = 5;
  var number2 = 2;
  //short.innerHTML = Math.round(4.4);
  //short.innerHTML = Math.cell(4.1);
  //short.innerHTML = Math.floor(4.9);
  //short.innerHTML = Math.pow(4, 1);
  short.innerHTML = Math.round(Math.random()*100);
  //short.innerHTML = Math.sqrt(25);
}
window.onload = function {
  doMath();
  console.log(short + " " + number2);
};
konstanti ei saa funktisoonist väljaspool kutsuda välja
tegime lihtsalt proove erineva asjaga*/


let clockContainer;
let changeColorButton;
let dayContainer;

window.onload = function(){
  init();
};

function init(){
  clockContainer = document.querySelector("#clockContainer");
  changeColorButton = document.querySelector("#clockButton");
  dayContainerElement = document.querySelector("#dayContainer");

  changeColorButton.addEventListener('click', changeBackgroundColor);
  /*window.addEventListener('mousemove', changeBackgroundColor);*/

  startClock();
}

function changeBackgroundColor(){
  console.log('Muudan värvi');
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);

  /*window.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';*/
  document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
}


function startClock(){
  updateClock();
  window.setInterval(function(){
    updateClock();
    const date = new Date();
    clockContainer.innerHTML = date;
  }, 1000);
}

function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date;
  let day;
  dayContainerElement = document.querySelector("#dayContainer");
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
  dayContainerElement.innerHTML = day;
}
