/*jshint esversion:6*/

let changeColorButton,backgroundChange;
let dayContainer, timeContainer;
let changeSize;
let changeFontButton, fontChanged;
let change;
let allHands, hourHand, minuteHand, secondHand;
let changeClock;

window.onload = function (){
  init();
  changeBackgroundColor();
  dayContainer = document.querySelector('#dayContainer');
  timeContainer = document.querySelector('#timeContainer');
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundColor);
  changeClockType = document.querySelector('#changeClockType');
  changeClockType.addEventListener('click', changeClockT);
  changeFontButton = document.querySelector('#change-text-font');
  changeFontButton.addEventListener('click', changeTextFont);
  fontChanged = 0; changeClock = 0;
};
function moveHands() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  const hour = now.getHours();
  const hourDegrees = ((hour/12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

  if(secondsDegrees === 90) {
    allHands.forEach(hand => hand.style.transition = 'none') 
  } else {
    allHands.forEach(hand => hand.style.transition = '') 
  }
}
function init(){
  startClock();
}
function startClock(){
    updateClock();
    window.setInterval(function(){
      updateClock();
    }, 500);
}


function updateClock() {
  if(changeClock == 0) {
  const date = new Date();
  dayContainer = document.querySelector('#dayContainer');
  let day;
  function getDay(){
    switch(new Date().getDay()){
      case 0:
        day = "pühapäev";
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
  }
  getDay();
  let month = new Array();
  month[0] = "jaanuar";
  month[1] = "veebruar";
  month[2] = "märts";
  month[3] = "aprill";
  month[4] = "mai";
  month[5] = "juuni";
  month[6] = "juuli";
  month[7] = "august";
  month[8] = "september";
  month[9] = "oktoober";
  month[10] = "november";
  month[11] = "detsember";
  let n = month[date.getMonth()];
  let a = date.getDate();
  dayContainer.innerHTML = day + ", " + a + ". " + n;

  let time = document.querySelector('#timeContainer');
  let h = addZero(date.getHours());
  let m = addZero(date.getMinutes());
  let s = addZero(date.getSeconds());
  time.innerHTML = h + ":" + m + ":" + s;
  } else {
    return;
  }
}

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function changeBackgroundColor(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);
  document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
}
function changeSizeClock(){
  document.querySelector('#container').style.width = "10%";
}
function setZoom(zoom,el) {
      
  transformOrigin = [0,0];
  el = el || instance.getContainer();
  let p = ["webkit", "moz", "ms", "o"],
        s = "scale(" + zoom + ")",
        oString = (transformOrigin[0] * 100) + "% " + (transformOrigin[1] * 100) + "%";

  for (let i = 0; i < p.length; i++) {
      el.style[p[i] + "Transform"] = s;
      el.style[p[i] + "TransformOrigin"] = oString;
  }
  el.style["transform"] = s;
  //el.style["transformOrigin"] = oString;
  el.style.transformOrigin = "center center 0";
  
}

function showVal(a){
  let zoomScale = Number(a)/10;
  setZoom(zoomScale,document.getElementsByClassName('container')[0]);
}

function changeColor(colorValue){
  document.body.style.backgroundColor = colorValue;
}
function changeTextColor(colorValue){
  dayContainer.style.color = colorValue;
  timeContainer.style.color = colorValue;
}
function changeTextFont(){
  if(fontChanged == 0) {
    dayContainer.style.fontFamily = "Arial";
    timeContainer.style.fontFamily = "Arial";
    changeFontButton.innerHTML = "Times New Roman";
    fontChanged = 1;
    
  } else {
    dayContainer.style.fontFamily = "Times New Roman";
    timeContainer.style.fontFamily = "Times New Roman";
    changeFontButton.innerHTML = "Arial";
    fontChanged = 0;
    
  }
}

function changeClockT() { 
  if(changeClock == 0){
    removeElement("timeContainer");
    removeElement("dayContainer");
    document.getElementById("change-text-font").disabled = true;
    document.getElementById("textColorChange").disabled = true;
    let clock = document.createElement("div");
    clock.setAttribute('class', 'clock');
    clock.setAttribute('id', 'clock');
    document.querySelector('#container').appendChild(clock);

    let clock_face = document.createElement("div");
    clock_face.setAttribute('class', 'clock-face');
    clock.appendChild(clock_face);
    document.querySelector('.clock').appendChild(clock_face);

    let backg = document.createElement("img");
    backg.setAttribute('class', 'analogBack');  
    backg.setAttribute('src', 'numberplate.png'); 

    let hour_hand = document.createElement("div");
    hour_hand.setAttribute('class', 'hand hour-hand');  

    let minute_hand = document.createElement("div");
    minute_hand.setAttribute('class', 'hand min-hand'); 

    let second_hand = document.createElement("div");
    second_hand.setAttribute('class', 'hand second-hand');

    document.querySelector('.clock-face').appendChild(backg);
    document.querySelector('.clock-face').appendChild(hour_hand);
    document.querySelector('.clock-face').appendChild(minute_hand);
    document.querySelector('.clock-face').appendChild(second_hand);
    secondHand = document.querySelector('.second-hand');
    minuteHand = document.querySelector('.min-hand');
    hourHand = document.querySelector('.hour-hand');
    allHands = document.querySelectorAll('.hand');
    setInterval(moveHands, 1000);
    changeClockType.innerHTML = "Digitaal kell";
    changeClock = 1;
  } else {
    removeElement("clock");
    let timeCont = document.createElement("div");
    timeCont.setAttribute('class', 'timeContainer');
    timeCont.setAttribute('id', 'timeContainer');
    document.getElementById("change-text-font").disabled = false;
    document.getElementById("textColorChange").disabled = false;
    let dayCont = document.createElement("div");
    dayCont.setAttribute('class', 'dayContainer');
    dayCont.setAttribute('id', 'dayContainer');
    document.querySelector('#container').appendChild(timeCont);
    document.querySelector('#container').appendChild(dayCont);
    dayContainer = document.querySelector('#dayContainer');
    timeContainer = document.querySelector('#timeContainer');
    changeClockType.innerHTML = "Analoog kell";
    changeClock = 0;
  }
}
function removeElement(elementId) {
  let element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}