/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainer;
let dateContainer;
let timeContainer;
let textColorButton;
let normaliseButton;
let background1;
let background2;
let font1;
let font2;
let small;
let medium;
let big;

window.onload = function() {
  init();
  dayContainer = document.getElementById("dayContainer");
  dayContainer.style.color = 'black';
  dateContainer = document.getElementById("dateContainer");
  dateContainer.style.color = 'black';
  timeContainer = document.getElementById("timeContainer");
  timeContainer.style.color = 'black';
};

function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " ";


    setTimeout(showTime, 1000);
    document.getElementById("timeContainer").innerHTML = time;
    document.getElementById("timeContainer").textContent = time;

}


function init() {
  changeColorButton = document.querySelector('#clockButton');
  normaliseButton = document.querySelector('#default');
  clockContainer = document.querySelector('#clockContainer');
  dayContainer = document.querySelector('#dayContainer');
  textColorButton = document.querySelector('#text');
  textColorButton.addEventListener('click', textColorChange);
  normaliseButton = document.querySelector('#default');
  normaliseButton.addEventListener('click', normaliseFunction);
  theme1 = document.querySelector('#background1');
  theme1.addEventListener('click', backgroundChange1);
  theme2 = document.querySelector('#background2');
  theme2.addEventListener('click', backgroundChange2);
  font1 = document.querySelector('#font1');
  font1.addEventListener('click', fontChange1);
  font2 = document.querySelector('#font2');
  font2.addEventListener('click', fontChange2);
  small = document.querySelector('#small');
  small.addEventListener('click', textChange1);
  normal = document.querySelector('#normal');
  normal.addEventListener('click', textChange2);
  big = document.querySelector('#big');
  big.addEventListener('click', textChange3);
  document.body.style.backgroundColor = "rgba(129,43,43,255)";
  showDate();
  closeNav();
}

function showDate(){
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1;
  var year = today.getFullYear();

today = day + '/' + month + '/' + year;
document.getElementById("dateContainer").innerHTML = today;
document.getElementById("dateContainer").textContent = today;
showDay();
}


function showDay(){
  const date = new Date();
  dayContainer = document.querySelector('#dayContainer');
  function getDay() {
    switch (new Date().getDay()){
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
        break;
      default:
        day = "Not a day, mate. Chill :)";
    }
  }
  getDay();
  dayContainer.innerHTML = day;
  showTime();
}

function openNav() {
  document.getElementById("mySidenav").style.width = "225px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(129,43,43,255)";
  changeColorButton.addEventListener('click', changeBackgroundColor);
  function changeBackgroundColor(){
    console.log("Change color");
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    clockContainer.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
  }
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function normaliseFunction(){
  console.log("Normalize");
  document.body.style.backgroundImage = 'none';
  clockContainer.style.backgroundColor = 'rgba(0,0,0,255)';
  document.body.style.backgroundColor = "rgba(129,43,43,255)";
  document.getElementById("timeContainer").style.fontFamily = 'times';
  document.getElementById("dateContainer").style.fontFamily = 'times';
  document.getElementById("dayContainer").style.fontFamily = 'times';
  dayContainer = document.getElementById("dayContainer");
  dayContainer.style.color = 'black';
  dateContainer = document.getElementById("dateContainer");
  dateContainer.style.color = 'black';
  timeContainer = document.getElementById("timeContainer");
  timeContainer.style.color = 'black';
  document.getElementById("timeContainer").style.fontSize = '250%';
  document.getElementById("dateContainer").style.fontSize = '200%';
  document.getElementById("dayContainer").style.fontSize = '200%';
}

function textColorChange(){
  console.log("Change text color");
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);

  dayContainer = document.getElementById("dayContainer");
  dayContainer.style.color = 'rgb('+r+', '+g+', '+b+')';
  dateContainer = document.getElementById("dateContainer");
  dateContainer.style.color = 'rgb('+r+', '+g+', '+b+')';
  timeContainer = document.getElementById("timeContainer");
  timeContainer.style.color = 'rgb('+r+', '+g+', '+b+')';
}

function backgroundChange1(){
    document.body.style.backgroundImage = "url('Background/mountain.jpg')";
}

function backgroundChange2(){
    document.body.style.backgroundImage = "url('Background/electronic.jpg')";
}

function fontChange1(){
    document.getElementById("timeContainer").style.fontFamily = 'mountain';
    document.getElementById("dateContainer").style.fontFamily = 'mountain';
    document.getElementById("dayContainer").style.fontFamily = 'mountain';
}

function fontChange2(){
    document.getElementById("timeContainer").style.fontFamily = 'electronic';
    document.getElementById("dateContainer").style.fontFamily = 'electronic';
    document.getElementById("dayContainer").style.fontFamily = 'electronic';
}

function textChange1(){
    document.getElementById("timeContainer").style.fontSize = '150%';
    document.getElementById("dateContainer").style.fontSize = '100%';
    document.getElementById("dayContainer").style.fontSize = '100%';
}
function textChange2(){
    document.getElementById("timeContainer").style.fontSize = '250%';
    document.getElementById("dateContainer").style.fontSize = '200%';
    document.getElementById("dayContainer").style.fontSize = '200%';
  }
function textChange3(){
    document.getElementById("timeContainer").style.fontSize = '350%';
    document.getElementById("dateContainer").style.fontSize = '300%';
    document.getElementById("dayContainer").style.fontSize = '300%';
}
