//jshint esversion: 6

let clockContainer;
let changeColorButton;
let dayContainerElement;

window.onload = function(){
  init();
};

function init(){
  changeColorButton = document.querySelector("#clockButton");
  clockContainer = document.querySelector("#clockContainer");
  changeColorButton.addEventListener("click", changeBackgroundColor);
  startClock();
}


function fontColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  document.getElementById("clockContainer").style.color = "rgb("+r+","+g+","+b+")";
  document.getElementById("dayContainer").style.color = "rgb("+r+","+g+","+b+")";
  document.getElementById("dateContainer").style.color = "rgb("+r+","+g+","+b+")";

}

function clockDown(){
  var checkBox = document.getElementById("clocksize-");
  if (checkBox.checked == true){
    document.getElementById("clockContainer").style.fontSize = "180%";

    document.getElementById("dayContainer").style.fontSize = "180%";
    document.getElementById("dayContainer").style.marginTop = "-38px";

    document.getElementById("dateContainer").style.marginTop = "-8px";
    document.getElementById("dateContainer").style.fontSize = "180%";
  } else {
    document.getElementById("clockContainer").style.fontSize = "450%";

    document.getElementById("dayContainer").style.fontSize = "450%";
    document.getElementById("dayContainer").style.marginTop = "-1px";

    document.getElementById("dateContainer").style.fontSize = "450%";
    document.getElementById("dateContainer").style.marginTop = "68px";
  }

}

function changeBackgroundColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}
function startClock(){
  updateClock();
  window.setInterval(function(){
    updateClock();
  },1000);
}
function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date.toLocaleTimeString("et-ee");

let day;
dayContainerElement = document.querySelector("#dayContainer");
dateContainerElement = document.querySelector("#dateContainer");
function getDay(){
    switch (date.getDay()) {
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
dateContainerElement.innerHTML = date.toLocaleDateString("et-ee");
}
