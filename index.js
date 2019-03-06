/*jshint esversion: 6*/
let clockContainer;
let dateContainer;
let changeColorButton;
let dayContainerElement;
let authorContainer;
let songContainer;
let player;

window.onload = function(){
  init();
};

function init(){
  clockContainer = document.querySelector("#clockContainer");
  dateContainer = document.querySelector("#dateContainer");
  dayContainerElement = document.querySelector("#dayContainer");
  authorContainer = document.querySelector("#author");
  songContainer = document.querySelector('#song');
  player = document.querySelector('#myAudio');

  clockContainer.addEventListener("click", changeColor);
  dateContainer.addEventListener("click", changeColor);
  dayContainerElement.addEventListener("click", changeColor);

  player.volume = 0.5;
  document.getElementById("volume").innerHTML = "Volume: " + Math.round(player.volume*100) + "%";

  if(new Date().getHours() < 6){
    document.body.style.backgroundImage = "url('backgrounds/theme1night.jpg')";
  }else if(new Date().getHours() >= 6 && new Date().getHours() < 12){
    document.body.style.backgroundImage = "url('backgrounds/theme1morning.jpg')";
  }else if(new Date().getHours() >= 12 && new Date().getHours() < 18){
    document.body.style.backgroundImage = "url('backgrounds/theme1day.jpg')";
  }else{
    document.body.style.backgroundImage = "url('backgrounds/theme1evening.jpg')";
  }

  startClock();
}

//Värvi vahetus
function changeColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);

  clockContainer.style.color = 'rgb('+r+','+g+','+b+')';
  dateContainer.style.color = 'rgb('+r+','+g+','+b+')';
  dayContainerElement.style.color = 'rgb('+r+','+g+','+b+')';
  main.style.color = 'rgb('+r+','+g+','+b+')';
  authorContainer.style.color = 'rgb('+r+','+g+','+b+')';
  songContainer.style.color = 'rgb('+r+','+g+','+b+')';
}

//Reset color
function resetColor(){
  clockContainer.style.color = 'rgb(255,255,255)';
  dateContainer.style.color = 'rgb(255,255,255)';
  dayContainerElement.style.color = 'rgb(255,255,255)';
  main.style.color = 'rgb(255,255,255)';
  authorContainer.style.color = 'rgb(255,255,255)';
  songContainer.style.color = 'rgb(255,255,255)';
}

//Kell
function startClock(){
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);
}

//Kella update
function updateClock(){
  const date = String(new Date().getHours()).padStart(2, "0") + ":" + String(new Date().getMinutes()).padStart(2, "0") + ":" + String(new Date().getSeconds()).padStart(2, "0");
  clockContainer.innerHTML = date;
  let day;
  let month;

  //Päeva saamine
  function getDay() {
    switch(new Date().getDay()){
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
    }
  }
  getDay();
  dayContainerElement.innerHTML = day;

  //Kuu saamine
  function getMonth(){
    switch(new Date().getMonth()){
      case 0:
        month = "January";
        break;
      case 1:
        month = "February";
        break;
      case 2:
        month = "March";
        break;
      case 3:
        month = "April";
        break;
      case 4:
        month = "May";
        break;
      case 5:
        month = "June";
        break;
      case 6:
        month = "July";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "October";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "December";
        break;
    }
  }
  getMonth();

  const dateTime = new Date().getDate() + ". " + month;
  dateContainer.innerHTML = dateTime;

}

//Sidenav avane ja sulge
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("main").style.opacity = 0;
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  setTimeout(function() {
    document.getElementById("main").style.opacity = 1;
  }, 500);
}

//Muusika
function openMusicNav() {
  document.getElementById("musicnav").style.height = "250px";
  document.getElementById("song").style.opacity = 0;
}

function closeMusicNav() {
  document.getElementById("musicnav").style.height = "0";
  setTimeout(function() {
    document.getElementById("song").style.opacity = 1;
  }, 500);
}

function playPause(){
  if(player.paused){
    player.play();
    document.getElementById("playpause").innerHTML = 'Pause';
    songContainer.innerHTML = 'Now playing: Luxe & Rain - U';
  }else{
    player.pause();
    document.getElementById("playpause").innerHTML = 'Play';
    songContainer.innerHTML = 'Paused: Luxe & Rain - U';
  }
}

function volumeDown(){
  player.volume -= 0.1;
  document.getElementById("volume").innerHTML = "Volume: " + Math.round(player.volume*100) + "%";
}

function volumeUp(){
  player.volume += 0.1;
  document.getElementById("volume").innerHTML = "Volume: " + Math.round(player.volume*100) + "%";
}