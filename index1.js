/*jshint esversion:6*/

window.onload = function(){
	tictac();
    document.getElementById("animController").addEventListener("click", toggleAnimation);
    let surpriseNumber = Math.round(10 *(Math.random())) + 2 ;
    console.log(surpriseNumber);
};


function tictac(){
	let timeNow = new Date();

	let secondNow = timeNow.getSeconds();
	let secAngle = secondNow * 6;
	let minuteNow = timeNow.getMinutes();
	let minAngle = minuteNow * 6 + secondNow / 10;
	let hourNow = timeNow.getHours();
	let hourAngle = hourNow * 30 + minuteNow / 2;

	document.getElementById("secondhand").style.transform = "rotate(" + secAngle +"deg)";
	document.getElementById("minutehand").style.transform = "rotate(" + minAngle +"deg)";
	document.getElementById("hourhand").style.transform = "rotate(" + hourAngle +"deg)";

	requestAnimationFrame(tictac);
}


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

  var today = new Date();
  var hr = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();

  clockContainer = document.querySelector('#clockContainer');
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);

}

function updateClock(){
  const date = new Date();
  var hr = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  hr = (hr < 10) ? "0" + hr : hr;
  min = (min < 10) ? "0" + min : min;
  sec = (sec < 10) ? "0" + sec : sec;

  clockContainer.innerHTML = hr+":"+min+":"+sec;
  dayContainer = document.querySelector('#dayContainer');
  let day;
  var audio = new Audio('tick.mp3');
    audio.play();
  function getDay(){
    switch(new Date().getDay()){
      case 0:
        day = "PÜHAPÄEV";
        break;
      case 1:
        day = "ESMASPÄEV";
        break;
      case 2:
        day = "TEISIPÄEV";
        break;
      case 3:
        day = "KOLMAPÄEV";
        break;
      case 4:
        day = "NELJAPÄEV";
        break;
      case 5:
        day = "REEDE";
        break;
      case 6:
        day = "LAUPÄEV";
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
