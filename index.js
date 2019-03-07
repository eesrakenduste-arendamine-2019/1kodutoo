/*jshint esversion: 6*/
let clockClass;
let timeContainer;
let dateContainer;
let dayContainer;
let changeClockColorBtn;
let changeBackgroundColorBtn;
let changeClockLocationBtn;
let days;
let clock;
let confirmMusic;
let check = 0;
let placement = "center";
let audio = new Audio('music.mp3');

window.onload = function(){
  init();
};

function init(){
  timeContainer = document.querySelector("#time");
  dateContainer = document.querySelector("#date");
  dayContainer = document.querySelector("#day");
  clockClass = document.querySelector('.clockClass');
  clock = document.querySelector('#clock');
  changeClockColorBtn = document.getElementById("changeClockColor");
  changeBackgroundColorBtn = document.getElementById("changeBackgroundColor");
  changeClockLocationBtn = document.getElementById("changeClockLocation");
  confirmMusic = document.getElementById('confirm');
  changeClockColorBtn.addEventListener('click', changeClockColor);
  changeBackgroundColorBtn.addEventListener('click', changeBackgroundColor);
  changeClockLocationBtn.addEventListener('click', changeClockLocation);
  confirmMusic.addEventListener('click', playMusic);
  startClock();
}

function changeClockColor(){
  timeContainer.style.color = randomColor();
  dateContainer.style.color = randomColor();
  dayContainer.style.color = randomColor();
}

function changeBackgroundColor(){
  clock.style.border = "5px solid " + randomColor();
  clock.style.backgroundColor = randomColor();
  timeContainer.style.border = "2px solid " + randomColor();
  timeContainer.style.backgroundColor = randomColor();
  dateContainer.style.border = "2px solid " + randomColor();
  dateContainer.style.backgroundColor = randomColor();
  dayContainer.style.border = "2px solid " + randomColor();
  dayContainer.style.backgroundColor = randomColor();
}

function changeClockLocation(){
  let randomNum = Math.floor(Math.random() * 3);
  if (randomNum == 0 && placement != "left"){
    clockClass.style.marginLeft = "400px";
    clockClass.style.marginRight = "";
    placement = "left";
  } else if (randomNum == 1 && placement != "right"){
    clockClass.style.marginLeft = "";
    clockClass.style.marginRight = "400px";
    placement = "right";
  } else if (randomNum == 2 && placement != "center"){
    clockClass.style.marginLeft = "";
    clockClass.style.marginRight = "";
    placement = "center";
  }
}

function checkBgPic(hours){
  if (hours > 18 || hours <= 7){
    clock.style.backgroundImage = 'url("moon.png")';
  } else if (hours > 7 || hours <= 18){
    clock.style.backgroundImage = 'url("sun.png")';
  }
}

function startClock(){
  updateClock();
  window.setInterval(function(){ updateClock(); }, 1000);
}

function randomColor(){
  return "#"+Math.floor(Math.random() * 0x1000000).toString(16);
}

function readDate(date){
  day = date.getDate();
  month = date.getMonth() + 1;
  year = date.getFullYear();
  if (day < 10){
    day = "0" + day;
  }
  if (month < 10){
    month = "0" + month;
  }
    dateContainer.innerHTML = day + "." + month + "." + year;
}

function updateClock(){
  const date = new Date();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  if (hours < 10){
    hours = "0" + hours;
  }
  if (minutes < 10){
    minutes = "0" + minutes;
  }
  if (seconds < 10){
    seconds = "0" + seconds;
  }
  timeContainer.innerHTML = hours + " : " + minutes + " : " + seconds;

  readDate(date);
  getDay();
  checkBgPic(hours);
}

function getDay(){
  switch(new Date().getDay()){
  default:
    days = "See ei ole päev!";
    break;
  case 0:
    days = "Pühapäev";
    break;
  case 1:
    days = "Esmaspäev";
    break;
  case 2:
    days = "Teisipäev";
    break;
  case 3:
    days = "Kolmapäev";
    break;
  case 4:
    days = "Neljapäev";
    break;
  case 5:
    days = "Reede";
    break;
  case 6:
    days = "Laupäev";
    break;
  }
  dayContainer.innerHTML = days;
}

function playMusic(){
  if(check % 2 == 0){
    check = 1;
    audio.play();
    audio.volume = 0.1;
    audio.loop = true;
    confirmMusic.innerHTML = "Pane muusika kinni";
  } else if (check % 2 != 0){
    check = 0;
    audio.currentTime = 0;
    audio.pause();
    confirmMusic.innerHTML = "Pane muusika mängima";
  }
}
