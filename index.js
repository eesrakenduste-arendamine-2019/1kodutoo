/*jshint esversion:6*/
/* document.getElementById('clockContainer'); - valib esimese selle id'ga */
/* document.querySelector('#clockContainer'); - sama mis eelmine */
/* document.querySelectorAll('#clockContainer'); - valib kõik selle id'ga*/
/*let clockContainer = document.querySelector('#clockContainer');*/
let cockContainer;
let changeColorButton;
let dayContainer;
let minuteContainer;
let circleSize = 2;
let opacity = 1;
let opacityChange;

window.onload = function(){
  init();
  changeColorButton = document.querySelector('#change-color');
  changeColorButton1 = document.querySelector('#color1');
  changeColorButton2 = document.querySelector('#color2');
  changeColorButton3 = document.querySelector('#color3');
  changeColorButton4 = document.querySelector('#color4');
  colon = document.querySelector('#colon');

  changeColorButton.addEventListener('click', changeBackgroundColor);
  changeColorButton1.addEventListener('click', changeBG1);
  changeColorButton2.addEventListener('click', changeBG2);
  changeColorButton3.addEventListener('click', changeBG3);
  changeColorButton4.addEventListener('click', changeBG4);

};

function init(){
  startClock();
}

function startClock(){
  clockContainer = document.querySelector('#clockContainer');
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 10);
}

function changeBackgroundColor(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);

  document.body.style.backgroundColor='rgb('+red+','+green+','+blue+')';
  changeColorButton.style.backgroundColor='rgb('+red+','+green+','+blue+')';
}

function changeBG1() {
  color = "#4c4c4c";
  document.body.style.backgroundColor= color;
  changeColorButton.style.backgroundColor= color;
}

function changeBG2() {
  color = "#cf35ff";
  document.body.style.backgroundColor= color;
  changeColorButton.style.backgroundColor= color;
}

function changeBG3() {
  color = "#0be8dd";
  document.body.style.backgroundColor= color;
  changeColorButton.style.backgroundColor= color;
}

function changeBG4() {
  color = "#ffb600";
  document.body.style.backgroundColor= color;
  changeColorButton.style.backgroundColor= color;
}

function updateClock(){
  hourContainer = document.querySelector('#hours-div');
  minuteContainer = document.querySelector('#minutes-div');
  dateContainer = document.querySelector('#dateContainer');
  secondBar = document.querySelector('#secondBar');
  const date = new Date();
  const hours = date.getHours();
  let minutes = date.getMinutes();

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  hourContainer.innerHTML = hours;
  minuteContainer.innerHTML = minutes;

  let secondBarHeight;
  function secondBarHeightSet() {
      const seconds = date.getSeconds();
      secondBarHeight = (seconds * 94 / 60) + "%";
      secondBar.style.height = secondBarHeight;
  }
  secondBarHeightSet();

  // tausta-ringi suurus
  secondCircle = document.querySelector('#backgroundCircle');
  function circleSizeSet() {
    const seconds = date.getSeconds();
    if ((seconds % 5) == 0) {
      circleSize = 2;
    }
    secondCircle.style.height = circleSize +'px';
    secondCircle.style.width = circleSize +'px';
    circleSize *= 1.08;
  }
  circleSizeSet();

  function colonTransparency() {
    ms = date.getMilliseconds();
    if (ms > 500) {
      opacityChange = 0.02;
    } else {
      opacityChange = -0.02;
    }
    opacity += opacityChange;
    colon.style.opacity = opacity;
  }
  colonTransparency();

  dayContainer = document.querySelector('#dayContainer');
  let day;
  function getDay(){
    switch(new Date().getDay()) {
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

  let monthDate = date.getDate();

  let month;
  function getMonth(){
    switch(new Date().getMonth()) {
      case 0:
        month = "Jaanuar";
        break;
      case 1:
        month = "Veebruar";
        break;
      case 2:
        month = "Märts";
        break;
      case 3:
        month = "Aprill";
        break;
      case 4:
        month = "Mai";
        break;
      case 5:
        month = "Juuni";
        break;
      case 6:
        month = "Juuli";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "Oktoober";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "Detsember";
        break;
    }
  }
  getMonth();

  dateContainer.innerHTML = monthDate + ". " + month;

}
