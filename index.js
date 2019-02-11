/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainerElement;

window.onload = function(){
  init();
};

function init(){
  changeColorButton = document.querySelector("#clockButton");
  clockContainer = document.querySelector("#clockContainer");

  dayContainerElement = document.querySelector("#dayContainer");
  //changeColorButton.addEventListener("click", changeBackroundColor);
  window.addEventListener("mousemove", changeBackroundColor);

  startClock();
}



function changeBackroundColor(){
  console.log("Muudan värvi");
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);

  clockContainer.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
  //document.body.style.backgroundColor =  'rgb('+r+','+g+','+b+')';
}

function startClock(){
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);
}

function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date;
  let day;

  function getDay() {
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
/*const a = 6;
let short = 5;
function doMath(){
  var short = document.getElementById('math');
  //short.innerHTML = Math.round(4.4);
  //short.innerHTML = Math.ceil(4.1);
  //short.innerHTML = Math.floor(4.6);
  //short.innerHTML = Math.pow(4, 3);
  short.innerHTML = Math.round(Math.random()*100);
}
window.onload = function(){
  doMath();
};

console.log(short);*/
