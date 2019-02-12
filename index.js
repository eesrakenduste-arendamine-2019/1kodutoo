/*jshint esversion:6*/
let clockContainer;
let changeColorButton;
let dayContainer;

window.onload = function (){
  init();
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundColor);

};

function init (){

  startClock();
}

function startClock(){
  clockContainer = document.querySelector('#clockContainer');
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);
}

function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date;
  dayContainer = document.querySelector('#dayContainer');
  let day;
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
  const green = Math.round(Math.random()*255);
  const red =  Math.round(Math.random()*255);
  const blue =  Math.round(Math.random()*255);
  //console.log(green);
  //document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
  document.body.style.backgroundColor = `rgb(${red},${blue},${green})`;
}
