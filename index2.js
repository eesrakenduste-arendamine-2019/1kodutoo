/*jshint esversion:6*/
/*document.getElementByID("clockContainer").innerHTML = "";
document.querySelector('#clockContainer');
document.querySelectorAll('');*/

let changeColorButton;
let dayContainer;
let timeContainer;
let backgroundChange;
let changeSize;
let changeFontButton;
let fontChanged;

window.onload = function (){
  init();
  changeBackgroundColor();
  dayContainer = document.querySelector('#dayContainer');
  timeContainer = document.querySelector('#timeContainer');
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundColor);
  changeFontButton = document.querySelector('#change-text-font');
  changeFontButton.addEventListener('click', changeTextFont);
  fontChanged = 0;
};

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
  console.log(s);
  console.log(oString);
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
    dayContainer.style.fontFamily = "Times New Roman";;
    timeContainer.style.fontFamily = "Times New Roman";
    changeFontButton.innerHTML = "Arial";
    fontChanged = 0;
    
  }
}

