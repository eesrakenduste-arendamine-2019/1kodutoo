/*jshint esversion:6*/
let clockContainer;
let changeColor;
let dayContainer;
window.onload = function(){
  init();
};

function init(){
  startClock();
  changeColor = document.querySelector('#change-color');

  changeColor.addEventListener('click', changeBackgroundColor);
  window.addEventListener("wheel", changeBackgroundColor)
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
  dayContainer = document.querySelector("#dayContainer");
  let day;
  switch(new Date().getDay()){
    case 0:
      day = "p[hapaev";
      break;
    case 1:
      day = "esmaspäev";
      break;
    case 2:
      day = "teisipäev";
      break;
    case 3:
      day = "kolmapäev";
      break;
    case 4:
      day = "neljapäev";
      break;
    case 5:
      day = "reede";
      break;
    case 6:
      day = "laupäev";
      break;
  }
  dayContainer.innerHTML = day;
}

function changeBackgroundColor(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);
  console.log(red);
  //document.body.style.backgroundColor = "rgb(" + red + "," + green + ","+ blue+")";
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}
