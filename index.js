/*jshint esversion: 6*/

function init(){
  setTimeout(startTime(), 1000);

  startDate();
  changeClockSize();
  var str = "Githubi repositoorium";

  document.getElementById('name').innerHTML = "Jaagup Aland";

}



function startTime() {
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  var second = today.getSeconds();
  var time;

  hour = checkTime(hour);
  minute = checkTime(minute);
  second = checkTime(second);
  time = hour + ":" + minute + ":" + second;


  document.getElementById('clock').innerHTML = time;

  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}

function startDate() {
  var dateToday = new Date();
  var dd = dateToday.getDate();
  var mm = dateToday.getMonth();
  var yyyy = dateToday.getFullYear();

/*  if (dd < 10){
    dd = '0' + dd;
  }

  if (mm < 10){
    mm = '0' + mm;
  } */

  var day = dateToday.getDay();
  switch (day){
    case 0:
      day = "Pühapäev ";
      break;
    case 1:
      day = "Esmaspäev ";
      break;
    case 2:
      day = "Teisipäev ";
      break;
    case 3:
      day = "Kolmapäev ";
      break;
    case 4:
      day = "Neljapäev ";
      break;
    case 5:
      day = "Reede ";
      break;
    case  6:
      day = "Laupäev ";
      break;
  }

  switch(mm){
    case 0:
      mm = "jaanuar ";
      break;
    case 1:
      mm = "veebruar ";
      break;
    case 2:
      mm = "märts ";
      break;
    case 3:
      mm = "aprill ";
      break;
    case 4:
      mm = "mai ";
      break;
    case 5:
      mm = "juuni ";
      break;
    case 6:
      mm = "juuli ";
      break;
    case 7:
      mm = "august ";
      break;
    case 8:
      mm = "september ";
      break;
    case 9:
      mm = "oktoober ";
      break;
    case 10:
      mm = "november ";
      break;
    case 11:
      mm = "detsember ";
      break;
  }

  var today = day + dd + ". " + mm + yyyy;
  document.getElementById('date').innerHTML = today;
}

function changeClockSize(){
  document.getElementById('date').style.fontSize = document.getElementById('size').value + "px";
  document.getElementById('clock').style.fontSize = document.getElementById('size').value + "px";
}

function changeColor(){
 nextColor();

    console.log("tekst");
  }
function nextColor(){
  var colors = ["white", "black", "green", "red", "yellow", "blue", "purple", "grey", "brown"];
  var rand = Math.floor(Math.random()*9);
  document.getElementById('date').style.color = colors[rand];
  document.getElementById('clock').style.color = colors[rand];  
  console.log("tekst");

}
