/*jshint esversion:6*/
//document.getElementById('clockContainer');
let clockContainer;
let changeColorButton;
let dayContainer;
//document.querySelectorAll('')
window.onload = function(){
  init();
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundClolor);
};



function init(){
  startClock();

}

function startClock() {
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
        day = "Esamspäev";
        break;
      case 2:
        day = "Teisipäev";
    }

  }
  getDay();
  dayContainer.innerHTML = day;

}
function changeBackgroundClolor(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);
  //console.log(red);
  //document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
