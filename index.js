/*jshint esversion:6*/
/*document.getElementByID("clockContainer").innerHTML = "";
document.querySelector('#clockContainer');
document.querySelectorAll('');*/
let fontSize, font;
window.onload = function(){
  startClock();
  fontSize=0; font=0;
}

function startClock () {
  currentTime()

  window.setInterval(function () {
      currentTime()
  }, 1000)
}

function currentTime() {
  const currentDate = new Date()
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  let currentHour = currentDate.getHours() < 10 ? "0" + currentDate.getHours() : currentDate.getHours();
  let currentMinute = currentDate.getMinutes() < 10 ? "0" + currentDate.getMinutes() : currentDate.getMinutes();
  let currentSecond = currentDate.getSeconds() < 10 ? "0" + currentDate.getSeconds() : currentDate.getSeconds();
  
  document.getElementById("weekday").innerHTML = weekdays[currentDate.getDay()];
  document.getElementById("month").innerHTML =  months[currentDate.getMonth()] + " " + currentDate.getDate();
  document.getElementById("clock").innerHTML =  currentHour + ":" + currentMinute + ":" + currentSecond;
}

function changeColor (i) {
  let color = document.getElementById(i).getAttribute('value')
  document.getElementById("info").style.color = color
}

function hideColor() {
  let x = document.getElementById("colors");
  if (x.style.display === "block") {
      x.style.display = "none";
  } else {
      x.style.display = "block";
  }
}



function changeSize() {
  let y = document.getElementById('info');
  let style = window.getComputedStyle(y).getPropertyValue('font-size');
  if (fontSize == 0) {
    document.getElementById("weekday").style.fontSize = "2vw";
    document.getElementById("month").style.fontSize = "2vw";
    document.getElementById("clock").style.fontSize = "2vw";
    fontSize=1;
  } else {
    document.getElementById("weekday").style.fontSize = "4vw";
    document.getElementById("month").style.fontSize = "4vw";
    document.getElementById("clock").style.fontSize = "4vw";
    fontSize=0;
  }
}

function changeFont() {
  let y = document.getElementById('info');
  let style = window.getComputedStyle(y).getPropertyValue('font');
  if (font == 0) {
    document.getElementById("weekday").style.fontFamily = "Arial";
    document.getElementById("month").style.fontFamily = "Arial";
    document.getElementById("clock").style.fontFamily = "Arial";
    font=1;
  } else {
    document.getElementById("weekday").style.fontFamily = "Impact,Charcoal,sans-serif";
    document.getElementById("month").style.fontFamily = "Impact,Charcoal,sans-serif";
    document.getElementById("clock").style.fontFamily = "Impact,Charcoal,sans-serif";
    font=0;
  }
}