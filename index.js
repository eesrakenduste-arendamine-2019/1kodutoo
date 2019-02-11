/* function doMath(){
  var short = document.getElementById("math");
  //short.innerHTML = Math.round(4.4);
  //short.innerHTML = Math.ceil(4.1);
  //short.innerHTML = Math.floor(4.9);
  //short.innerHTML = Math.pow(4., 2);
  //short.innerHTML = Math.round(Math.random()*100);
  //short.innerHTML = Math.sqrt(25);
} */

let clockContainer;
let changeColorButton;
let dayContainerElement;

window.onload = function(){
  init();
}

function init(){
  changeColorButton = document.querySelector("#clockButton");
  clockContainer = document.querySelector("#clockContainer");
  dayContainerElement = document.querySelector("#dayContainer");
  //changeColorButton.addEventListener("click", changeBackgroundColor);
  window.addEventListener("mousemove", changeBackgroundColor);
  startClock();
}


function changeBackgroundColor(){
  console.log("Muudan värvi");
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);

  clockContainer.style.backgroundColor = "rgb("+r+","+g+","+b+")";
  document.body.style.backgroundColor = "rgb("+r+","+g+","+b+")";
}

function startClock(){
  updateClock();
  window.setInterval(function(){

  }, 1000);
}

function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date;
  let day;
  function getDay(){
    switch(date.getDay()){
      case 0:
        day = "Pühapäev";
        break;
      case 1:
        day = "Esmaspäev";
        break;
      case 2:
        day = "Teisipäev"
        break;
      case 3:
        day = "Kolmapäev"
        break;
      case 4:
        day = "Neljapäev"
        break;
      case 5:
        day = "Reede"
        break;
      case 6:
        day = "Laupäev"
        break;

    }
  }
  getDay();
  dayContainerElement.innerHTML = day;
}
