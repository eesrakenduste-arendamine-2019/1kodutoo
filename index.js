//jshint esversion:6

let clockContainer;
let dayContainerElement;
let changeClockColorButton;
let changeBackgroundColorButton;
let changeColorButton;
let changeSizeButton;
let biggerClockSizeButton;
let smallerClockSizeButton;
let darkModeButton;

window.onload=function(){
  init();
  showClock();
  getWeekDay();
  getMonth();
  getDay();
  dayContainerElement.innerHTML=weekDay+", "+day+". "+month;
};

function init(){
  changeBackgroundColorButton=document.querySelector("#clockBackgroundColorButton");
  changeClockColorButton=document.querySelector("#clockColorButton");
  clockContainer=document.querySelector("#clockContainer");
  dayContainerElement=document.querySelector("#dayContainer");
  darkModeButton=document.querySelector("#darkModeButton");

  biggerClockSizeButton=document.querySelector("#biggerClockButton");
  smallerClockSizeButton=document.querySelector("#smallerClockButton");

  changeBackgroundColorButton.addEventListener("click", changeBackgroundColor);
  changeClockColorButton.addEventListener("click", changeClockColor);
  biggerClockSizeButton.addEventListener("click", biggerClockSize);
  smallerClockSizeButton.addEventListener("click", smallerClockSize);
  darkModeButton.addEventListener("click", darkMode);
}

function darkMode() {
  if(clockContainer.style.color=="rgb(255, 255, 255)"){
    document.body.style.backgroundColor="rgb("+255+","+255+","+255+")";
    clockContainer.style.color="rgb("+0+","+0+","+0+")";
    dayContainerElement.style.color="rgb("+0+","+0+","+0+")";
    document.getElementById("clockBackgroundColorButton").style.backgroundColor="rgb("+255+","+255+","+255+")";
    document.getElementById("clockBackgroundColorButton").style.color="rgb("+0+","+0+","+0+")";

    document.getElementById("clockColorButton").style.backgroundColor="rgb("+255+","+255+","+255+")";
    document.getElementById("clockColorButton").style.color="rgb("+0+","+0+","+0+")";

    document.getElementById("biggerClockButton").style.backgroundColor="rgb("+255+","+255+","+255+")";
    document.getElementById("biggerClockButton").style.color="rgb("+0+","+0+","+0+")";

    document.getElementById("smallerClockButton").style.backgroundColor="rgb("+255+","+255+","+255+")";
    document.getElementById("smallerClockButton").style.color="rgb("+0+","+0+","+0+")";

    document.getElementById("darkModeButton").style.backgroundColor="rgb("+255+","+255+","+255+")";
    document.getElementById("darkModeButton").style.color="rgb("+0+","+0+","+0+")";

    document.getElementById("github").style.color="rgb("+0+","+0+","+0+")";
  }else{
    document.body.style.backgroundColor="rgb("+0+","+0+","+0+")";
    clockContainer.style.color="rgb("+255+","+255+","+255+")";
    dayContainerElement.style.color="rgb("+160+","+160+","+160+")";
    document.getElementById("clockBackgroundColorButton").style.backgroundColor="rgb("+0+","+0+","+0+")";
    document.getElementById("clockBackgroundColorButton").style.color="rgb("+255+","+255+","+255+")";

    document.getElementById("clockColorButton").style.backgroundColor="rgb("+0+","+0+","+0+")";
    document.getElementById("clockColorButton").style.color="rgb("+255+","+255+","+255+")";

    document.getElementById("biggerClockButton").style.backgroundColor="rgb("+0+","+0+","+0+")";
    document.getElementById("biggerClockButton").style.color="rgb("+255+","+255+","+255+")";

    document.getElementById("smallerClockButton").style.backgroundColor="rgb("+0+","+0+","+0+")";
    document.getElementById("smallerClockButton").style.color="rgb("+255+","+255+","+255+")";

    document.getElementById("darkModeButton").style.backgroundColor="rgb("+0+","+0+","+0+")";
    document.getElementById("darkModeButton").style.color="rgb("+255+","+255+","+255+")";

    document.getElementById("github").style.color="rgb("+160+","+160+","+160+")";
  }
}

function biggerClockSize() {
  txt=document.getElementById("clockContainer");
  style=window.getComputedStyle(txt, null).getPropertyValue("font-size");
  currentSize=parseFloat(style);
  txt.style.fontSize=(currentSize+20)+"px";
  if (currentSize>=300) {
    txt.style.fontSize="300px";
    console.log("asd");
  }
}

function smallerClockSize() {
  txt=document.getElementById("clockContainer");
  style=window.getComputedStyle(txt, null).getPropertyValue("font-size");
  currentSize=parseFloat(style);
  txt.style.fontSize=(currentSize-20)+"px";
  if (currentSize<=20) {
    txt.style.fontSize="15px";
  }
}

function showClock(){
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    h=checkClock(h);
    m=checkClock(m);
    s=checkClock(s);
    let time = h + ":" + m + ":" + s;
    document.getElementById("clockContainer").innerText =time;
    setTimeout(showClock, 500);
}

function checkClock(i) {
  if(i<10){
    i="0"+i;
  }
  return i;
}

function changeBackgroundColor() {
  console.log("muudan tausta värvi");
  const r=Math.round(Math.random()*255);
  const g=Math.round(Math.random()*255);
  const b=Math.round(Math.random()*255);
  document.body.style.backgroundColor="rgb("+r+","+g+","+b+")";
  // `rgb(${r},${g},${b})` - sama asi
}

function changeClockColor() {
  console.log("muudan kella värvi");
  const r=Math.round(Math.random()*255);
  const g=Math.round(Math.random()*255);
  const b=Math.round(Math.random()*255);
  clockContainer.style.color="rgb("+r+","+g+","+b+")";
}

function getWeekDay() {
  switch(new Date().getDay()){
    case 0:
      weekDay="Pühapäev";
      break;
    case 1:
      weekDay="Esmaspäev";
      break;
    case 2:
      weekDay="Teisipäev";
      break;
    case 3:
      weekDay="Kolmapäev";
      break;
    case 4:
      weekDay="Neljapäev";
      break;
    case 5:
      weekDay="Reede";
      break;
    case 6:
      weekDay="Laupäev";
      break;
  }
}

function getMonth() {
  switch(new Date().getMonth()){
    case 0:
      month="jaanuar";
      break;
    case 1:
      month="veebruar";
      break;
    case 2:
      month="märts";
      break;
    case 3:
      month="aprill";
      break;
    case 4:
      month="mai";
      break;
    case 5:
      month="juuni";
      break;
    case 6:
      month="juuli";
      break;
    case 7:
      month="august";
      break;
    case 8:
      month="september";
      break;
    case 9:
      month="oktoober";
      break;
    case 10:
      month="november";
      break;
    case 11:
      month="detsember";
      break;
  }
}

function getDay() {
  day=new Date().getDate();
}
