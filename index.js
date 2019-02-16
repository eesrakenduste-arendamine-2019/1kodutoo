/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainerElement;

window.onload = function(){
  init();
};

function init(){
  changeColorButton = document.querySelector("#clockButton");
  clockContainer = document.querySelector("#clockContainer");

  dayContainerElement = document.querySelector("#dayContainer");
  clockContainer.addEventListener("click", changeColor);

  startClock();
}



function changeColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);

  clockContainer.style.color = 'rgb('+r+','+g+','+b+')';
  dateContainer.style.color = 'rgb('+r+','+g+','+b+')';
  dayContainer.style.color = 'rgb('+r+','+g+','+b+')';
}

function startClock(){
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);
}

function updateClock(){
  const date = String(new Date().getHours()).padStart(2, "0") + ":" + String(new Date().getMinutes()).padStart(2, "0") + ":" + String(new Date().getSeconds()).padStart(2, "0");
  clockContainer.innerHTML = date;
  let day;
  let month;

  function getDay() {
    switch(new Date().getDay()){
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
    }
  }
  getDay();
  dayContainerElement.innerHTML = day;

  function getMonth(){
    switch(new Date().getMonth()){
      case 0:
        month = "Jaanuar";
        break;
      case 1:
        month = "Veebruar";
        break;
      case 2:
        month = "Märts";
        break;
      case 3:
        month = "Aprill";
        break;
      case 4:
        month = "Mai";
        break;
      case 5:
        month = "Juuni";
        break;
      case 6:
        month = "Juuli";
        break;
      case 7:
        month = "August";
        break;
      case 8:
        month = "September";
        break;
      case 9:
        month = "Oktoober";
        break;
      case 10:
        month = "November";
        break;
      case 11:
        month = "Detsember";
        break;
    }
  }
  getMonth();

  const dateTime = new Date().getDate() + ". " + month;
  dateContainer.innerHTML = dateTime;

}

//Sidenav menu
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
