let clockContainer;

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock');
  //vaheta värvi nupp
}

//KELL
//näidendina kasutasin järgmise video: https://www.youtube.com/watch?v=EOePhBhyB88
function digitalClock(){
  //date metod
  const date = new Date();
  //muutujad
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var wd = new Array(7); //w3schools
    wd[0] = "Sunday";
    wd[1] = "Monday";
    wd[2] = "Tuesday";
    wd[3] = "Wednesday";
    wd[4] = "Thursday";
    wd[5] = "Friday";
    wd[6] = "Saturday";
  var weekdays = wd[date.getDay()];
  var days = date.getDate();
  var mnth = new Array();
    mnth[0] = "January";
    mnth[1] = "February";
    mnth[2] = "March";
    mnth[3] = "April";
    mnth[4] = "May";
    mnth[5] = "June";
    mnth[6] = "July";
    mnth[7] = "August";
    mnth[8] = "September";
    mnth[9] = "October";
    mnth[10] = "November";
    mnth[11] = "December";
  var months = mnth[date.getMonth()];
  var years = date.getFullYear();
  //lisan nulli ette, kui numbrid on väiksem kui 10
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  //lisan tähendused HTMLi
  document.getElementById('hour').innerHTML = hours;
  document.getElementById('minute').innerHTML = ':' + minutes;
  document.getElementById('second').innerHTML = ':' + seconds;
  document.getElementById('weekday').innerHTML = weekdays;
  document.getElementById('day').innerHTML = days;
  document.getElementById('month').innerHTML = months;
  document.getElementById('year').innerHTML = years;
}
//kell automaatselt uueneb iga sekundi
setInterval(digitalClock, 1000);
