/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainer;
let dateContainer;
let timeContainer;
let textColorButton;
let normaliseButton;
let theme1;
let theme2;
let theme3;
let small;
let medium;
let big;

window.onload = function() {
  init();
  dayContainer = document.getElementById("dayContainer");
  dayContainer.style.color = 'white';
  dateContainer = document.getElementById("dateContainer");
  dateContainer.style.color = 'white';
  timeContainer = document.getElementById("timeContainer");
  timeContainer.style.color = 'white';
};

function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59

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
  theme1 = document.querySelector('#theme1');
  theme1.addEventListener('click', themeChange1);
  theme2 = document.querySelector('#theme2');
  theme2.addEventListener('click', themeChange2);
  theme3 = document.querySelector('#theme3');
  theme3.addEventListener('click', themeChange3);
  small = document.querySelector('#small');
  small.addEventListener('click', textChange1);
  normal = document.querySelector('#normal');
  normal.addEventListener('click', textChange2);
  big = document.querySelector('#big');
  big.addEventListener('click', textChange3);
  document.body.style.backgroundColor = "rgba(0,0,0,255)";
  //window.addEventListener('mousemove', changeBackgroundColor);
  //window.addEventListener('keypress', changeBackgroundColor);
  showDate();
  closeNav();
}

function showDate(){
  var today = new Date();
  var day = today.getDate();
  var month = today.getMonth() + 1; //Jaanuar on 0!
  var year = today.getFullYear();

  if (day < 10) {
    day = '0' + day;
  }

  if (month < 10) {
    month = '0' + month;
  }

today = day + '/' + month + '/' + year;
document.getElementById("dateContainer").innerHTML = today;
document.getElementById("dateContainer").textContent = today;
showDay();
}


function showDay(){
  const date = new Date();
  //clockContainer.innerHTML = date;
  dayContainer = document.querySelector('#dayContainer');
  function getDay() {
    switch (new Date().getDay()){
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
      default:
        day = "See pole päev";
    }
  }
  getDay();
  dayContainer.innerHTML = day;
  showTime();
}

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,255)";
  changeColorButton.addEventListener('click', changeBackgroundColor);
  function changeBackgroundColor(){
    console.log("Muudan värvi");
    const r = Math.round(Math.random()*255);
    const g = Math.round(Math.random()*255);
    const b = Math.round(Math.random()*255);

    clockContainer.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
    document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
  }
}
/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function normaliseFunction(){
  console.log("Normaliseerin");
  document.body.style.backgroundImage = 'none';
  clockContainer.style.backgroundColor = 'rgba(0,0,0,255)';
  document.body.style.backgroundColor = "rgba(0,0,0,255)";
  document.getElementById("timeContainer").style.fontFamily = 'times';
  document.getElementById("dateContainer").style.fontFamily = 'times';
  document.getElementById("dayContainer").style.fontFamily = 'times';
  dayContainer = document.getElementById("dayContainer");
  dayContainer.style.color = 'white';
  dateContainer = document.getElementById("dateContainer");
  dateContainer.style.color = 'white';
  timeContainer = document.getElementById("timeContainer");
  timeContainer.style.color = 'white';
  document.getElementById("timeContainer").style.fontSize = '220%';
  document.getElementById("dateContainer").style.fontSize = '190%';
  document.getElementById("dayContainer").style.fontSize = '190%';
}

function textColorChange(){
  console.log("Muudan teksti värvi");
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

function themeChange1(){
    document.body.style.backgroundImage = "url('bg/city.jpg')";
    document.getElementById("timeContainer").style.fontFamily = 'city';
    document.getElementById("dateContainer").style.fontFamily = 'city';
    document.getElementById("dayContainer").style.fontFamily = 'city';
}
function themeChange2(){
    document.body.style.backgroundImage = "url('bg/clock.jpg')";
    document.getElementById("timeContainer").style.fontFamily = 'clock';
    document.getElementById("dateContainer").style.fontFamily = 'clock';
    document.getElementById("dayContainer").style.fontFamily = 'clock';
}
function themeChange3(){
    document.body.style.backgroundImage = "url('bg/zen.jpg')";
    document.getElementById("timeContainer").style.fontFamily = 'zen';
    document.getElementById("dateContainer").style.fontFamily = 'zen';
    document.getElementById("dayContainer").style.fontFamily = 'zen';
}

function textChange1(){
    document.getElementById("timeContainer").style.fontSize = '180%';
    document.getElementById("dateContainer").style.fontSize = '160%';
    document.getElementById("dayContainer").style.fontSize = '160%';
}
function textChange2(){
    document.getElementById("timeContainer").style.fontSize = '220%';
    document.getElementById("dateContainer").style.fontSize = '190%';
    document.getElementById("dayContainer").style.fontSize = '190%';
  }
function textChange3(){
    document.getElementById("timeContainer").style.fontSize = '350%';
    document.getElementById("dateContainer").style.fontSize = '300%';
    document.getElementById("dayContainer").style.fontSize = '300%';
}
