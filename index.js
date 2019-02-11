/*jshint esversion: 6*/
let clockContainer;
let dayContainer;

window.onload = function(){
  init();
};

function init(){
  clockContainer = document.querySelector("#clockContainer");
  dayContainerElement = document.querySelector("#dayContainer");
  startClock();
}

function startClock(){
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);
}

function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date;
  let day;
  document.querySelector("#dayContainer");
  function getDay(){
    switch(new Date().getDay()){
    default:
      day = "See ei ole päev!";
      break;
    case 0:
      day ="Pühapäev";
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
}
