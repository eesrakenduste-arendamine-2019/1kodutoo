/*jshint esversion: 6*/

window.onload=function(){
  init();
  showTime();
  showDay();
  showDate();


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
  var mm = today.getMonth() + 1;
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
  changeColorButton.addEventListener('click', changeBackgroundColor);
  clockContainer = document.querySelector('#clockContainer');
  dayContainer = document.querySelector('#dayContainer');
  textColorButton = document.querySelector('#kellaNupp');
  textColorButton.addEventListener('click', textColorChange);
  fontButton = document.querySelector('#font');
  fontButton.addEventListener('click', fontChange);
}

function fontChange(){
      document.getElementById("timeContainer").style.fontSize = '325%';
      document.getElementById("dateContainer").style.fontSize = '325%';
      document.getElementById("dayContainer").style.fontSize = '325%';
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

function showDay(){
    switch(new Date().getDay()){
      case 0:
      day="Saturday";
      break;
      case 1:
      day="Monday";
      break;
      case 2:
      day="Tuesday";
      break;
      case 3:
      day="Wednesday";
      break;
      case 4:
      day="Thursday";
      break;
      case 5:
      day="Friday";
      break;
      case 6:
      day="Sunday";
      break;
      default:
      day = "See pole päev";
    }
document.getElementById("dayContainer").innerHTML = day;
  }

  function changeBackgroundColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);

  clockContainer.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
  document.body.style.backgroundColor = 'rgb('+r+', '+g+', '+b+')';
}
