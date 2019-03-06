/*jshint esversion:6*/
let cycle = 0;

window.onload = function(){
  showDate();
  showTime();
  showWeekDay();
  hoursMenu();
  minsMenu();
  secsMenu();
  checkAlarm();
};

function showDate(){
  var date = new Date();
  var year = date.getFullYear();
  var month = date.getMonth()+1; //Liidan 1-ga sest kuu tuleb numbritega 0-11
  var day = date.getDate(); // 1-31
  day = checkDate(day);
  month = checkDate(month);
  document.getElementById('date').innerHTML = day + "/" + month + "/" + year + "<br>";
  var d = setTimeout(showDate, 500);
}
function checkDate(i){
  if (i < 10) {i = "0" + i;}
  return i;
}

function showWeekDay(){
  var date = new Date();
  var dayNum = date.getDay(); //Nädalapäevad 0-6

  days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
  var dayName = days[dayNum];
  document.getElementById('weekDay').innerHTML = dayName;
  var w = setTimeout(showWeekDay, 500);
}

function showTime(){
  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
  hour = checkTime(hour);
  min = checkTime(min);
  sec = checkTime(sec);
  document.getElementById('clock').innerHTML =
  hour + ":" + min + ":" + sec;
  var t = setTimeout(showTime, 500);
}
function checkTime(i){
  if (i < 10) {i = "0" + i;}
  return i;
}

function changeColor(){   //Teksti muutmine suvaliseks värviks
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  dateColor = document.querySelector('#date');
  dateColor.style.color = `rgb(${r},${g},${b})`;
  clockColor = document.querySelector('#clock');
  clockColor.style.color = `rgb(${r},${g},${b})`;
  weekColor = document.querySelector('#weekDay');
  weekColor.style.color = `rgb(${r},${g},${b})`;

  btnTextColor1 = document.querySelector('#colorBtn');
  btnTextColor1.style.color = `rgb(${r},${g},${b})`;
  btnTextColor2 = document.querySelector('#changeBg');
  btnTextColor2.style.color = `rgb(${r},${g},${b})`;
}

function changeBackground(){  //Cycle through background images
  if (cycle==0){
    document.body.style.backgroundImage = "url('bg_nature.jpg')";
  }
  else if (cycle==1){
    document.body.style.backgroundImage = "url('bg_beach.jpg')";
  }
  else if (cycle==2){
    document.body.style.backgroundImage = "url('bg_mountain.jpg')";
  }
  else if (cycle==3){
    document.body.style.backgroundImage = "url('bg_space.jpg')";
  }
  else if (cycle==4){
    document.body.style.backgroundImage = "none";
    cycle = -1;
  }
  cycle++;
}



function addZero(time){
		return (time < 10) ? "0" + time : time;
}

function hoursMenu(){  //Add options to selection in html
  var select = document.getElementById('alarmHrs');
  var option = document.createElement('option');
  var hrs = 23;

  for (i=0; i <= hrs; i++){
  	select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}

function minsMenu(){
  var select = document.getElementById('alarmMins');
  var min = 59;

  for (i=0; i <= min; i++){
  	select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}
function secsMenu(){
  var select = document.getElementById('alarmSecs');
  var sec = 59;

  for (i=0; i <= sec; i++){
  	select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
  }
}

var alarmActive = false;
let selectedHour;
let selectedMin;
let selectedSec;

function setAlarm(){
  console.log("Alarm activated");
  alarmActive = true;
  let alarmHr = document.getElementById("alarmHrs");
  let alarmMn = document.getElementById("alarmMins");
  let alarmSc = document.getElementById("alarmSecs");

  selectedHour = alarmHr.options[alarmHr.selectedIndex].value;
  selectedMin = alarmMn.options[alarmMn.selectedIndex].value;
  selectedSec = alarmSc.options[alarmSc.selectedIndex].value;

  var today = new Date();
  var hour = today.getHours();
  var min = today.getMinutes();
  var sec = today.getSeconds();
}

function StopAlarm(){
  console.log("Alarm deactivated");
  alarmActive = false;
  document.body.style.backgroundColor = "black";
  audio.pause();
}

var audio = new Audio('alarm.wav');

function checkAlarm(){
  var today = new Date();
  if (alarmActive == true){
    if (selectedHour == today.getHours()){
      if (selectedMin == today.getMinutes()){
        if (selectedSec == today.getSeconds()){
          document.body.style.backgroundImage = "none";
          audio.loop = true;
          audio.play();
          redBg();
        }
      }
    }
  }
  var c = setTimeout(checkAlarm, 500);
}

function redBg(){
  if (alarmActive == true){
    document.body.style.backgroundColor = "red";
    setTimeout(blackBg, 500);
  }
}

function blackBg(){
  if (alarmActive == true){
    document.body.style.backgroundColor = "black";
    setTimeout(redBg, 500);
  }
}
