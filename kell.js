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


  //changeColorButton.addEventListener("click", changeBackgroundColor);
  window.addEventListener("keypress", changeBackgroundColor);

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
    updateClock();

  },1000);
}

function updateClock(){
  const date = new Date(DD-MM-YYYY);
  clockContainer.innerHTML = date;

  let day;
  dayContainerElement = document.querySelector("#dayContainer");
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
  //console.log(day);
}





/*const a = 6;
let short = 5;
function doMath(){
  var short = document.getElementById("math");
  //short.innerHTML = Math.round(4.4);
  //short.innerHTML = Math.ceil(4.1);
  //short.innerHTML = Math.floor(4.9);
  //short.innerHTML = Math.pow(4, 3);
  //short.innerHTML = Math.round(Math.random()*100);
  short.innerHTML = Math.sqrt(16);
        // var muutuja = "väärtus";
        // const muutuja = 5; Ei saa enam ümberdefineerida.
        // let muutuja = 6; saab defineerida ümber funktisoonis aga ei muutu algselt.
}


console.log(short);*/
