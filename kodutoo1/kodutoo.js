/*jshint esversion: 6*/
window.onload=function(){
  init();
  showTime();
  showDay();
  showDate()
  openNav();
  closeNav();
  normaliseFunction();

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

function showDate(){
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //Jaanuar on 0!
  var yyyy = today.getFullYear();

  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

today = dd + '/' + mm + '/' + yyyy;
document.getElementById("dateContainer").innerHTML = today;
document.getElementById("dateContainer").textContent = today;
}

function init() {
  changeColorButton = document.querySelector('#clockButton');
  clockContainer = document.querySelector('#clockContainer');
  dayContainer = document.querySelector('#dayContainer');
  changeBackButton = document.querySelector('#default');
  textColorButton = document.querySelector('#text');
  textColorButton.addEventListener('click', textColorChange);
  fontButton = document.querySelector('#font');
  fontButton.addEventListener('click', fontChange);
  textColorButton.addEventListener('click', textColorChange);
  themeChangeButton = document.querySelector('#theme');
  themeChangeButton.addEventListener('click', themeChange);
  normaliseButton = document.querySelector('#default');
  normaliseButton.addEventListener('click', normaliseFunction);
  //window.addEventListener('mousemove', changeBackgroundColor);
  //window.addEventListener('keypress', changeBackgroundColor);
}

  function showDay(){
    switch(new Date().getDay()){
      case 0:
      day="Pühapäev";
      //console.log(day);
      break;
      case 1:
      day="Esmaspäev";
      //console.log(day);
      break;
      case 2:
      day="Teisipäev";
      //console.log(day);
      break;
      case 3:
      day="Kolmapäev";
      //console.log(day);
      break;
      case 4:
      day="Neljapäev";
      //console.log(day);
      break;
      case 5:
      day="Reede";
      //console.log(day);
      break;
      case 6:
      day="Laupäev";
      //console.log(day);
      break;
      default:
      day = "See pole päev";
    }
document.getElementById("dayContainer").innerHTML = day;
  }
  function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
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
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
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
  function fontChange(){
      document.getElementById("timeContainer").style.fontSize = '250%';
      document.getElementById("dateContainer").style.fontSize = '250%';
      document.getElementById("dayContainer").style.fontSize = '250%';
    }
  function themeChange(){
    document.body.style.backgroundImage = "url('pilt3.jpeg')";
  }
  function normaliseFunction(){
    console.log("Normaliseerin");
    clockContainer.style.backgroundColor = 'rgb(0,0,0)';
    document.body.style.backgroundColor = "rgb(0,0,0)";
    dayContainer = document.getElementById("dayContainer");
    dayContainer.style.color = 'white';
    dateContainer = document.getElementById("dateContainer");
    dateContainer.style.color = 'white';
    timeContainer = document.getElementById("timeContainer");
    timeContainer.style.color = 'white';
    document.body.style.backgroundImage = 'none';
    document.getElementById("timeContainer").style.fontSize = '220%';
    document.getElementById("dateContainer").style.fontSize = '190%';
    document.getElementById("dayContainer").style.fontSize = '190%';

  }
