/*jshint esversion: 6*/
let changeColorButton;
let changeTextColorButton;
let monthContainer;
let dateContainer;
let dayContainer;
let clockContainer;
let d;
let days;
let months;

window.onload = function () {
  init();
};

function init() {
  changeColorButton = document.querySelector('#colorButton');
  changeTextColorButton = document.querySelector('#textColorButton');
  

  changeColorButton.addEventListener('click', changeBackgroundColor);
  changeTextColorButton.addEventListener('click', changeTextColor);


  monthContainer = document.getElementById("monthContainer");
  dateContainer = document.getElementById("dateContainer");
  dayContainer= document.getElementById("dayContainer");
  clockContainer= document.getElementById("clockContainer");

  days = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"];

  months = ["January", "February", "March","April", "May", "June", "July", 
    "August", "September","October", "November", "December"];

  window.setInterval(function () {
    d = new Date();
    clockContainer.innerHTML = clock();
    dateContainer.innerHTML = d.getDate() + ". " + months[d.getMonth()];
    dayContainer.innerHTML = days[d.getDay()];
  }, 1000);

}


function changeBackgroundColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}

function changeTextColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.color = `rgb(${r}, ${g}, ${b})`;
}

function clock() {
  let h = d.getHours(); // 0 - 23
  let m = d.getMinutes(); // 0 - 59
  let s = d.getSeconds(); // 0 - 59


  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  let time = h + ":" + m + ":" + s;
  return time;
} 

function playSong(){
const audio = new Audio('song.mp3');
audio.play();}
