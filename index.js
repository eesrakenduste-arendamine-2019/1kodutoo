/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainer;


window.onload = function (){
  init();
};

function init(){
  changeColorButton = document.querySelector('#clockButton');
  clockContainer = document.querySelector('#clockContainer');
  dayContainerElement = document.querySelector('#dayContainer');
  //changeColorButton.addEventListener('click', changeBackgroundColor);
  window.addEventListener('click', changeBackgroundColor);

  startClock();
}


function changeBackgroundColor(){
  console.log("Muudan värvi");
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);

  clockContainer.style.backgroundColor = 'rgb('+r+' , '+g+' , '+b+')';
  //document.body.style.backgroundColor = 'rgb('+r+' , '+g+' , '+b+')';
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
  dayContainerElement =
  function getDay(){
    switch(new Date().getDay()){
      case 0:
        day = "Pühapäev";
        // console.log(day);
        break;
      case 1:
        day = "Esmaspäev";
        // console.log(day);
        break;
      case 2:
        day = "Teisipäev";
        // console.log(day);
        break;
      case 3:
        day = "Kolmapäev";
        // console.log(day);
        break;
      case 4:
        day = "Neljapäev";
        // console.log(day);
        break;
      case 5:
        day = "Reede";
        // console.log(day);
        break;
      case 6:
        day = "Laupäev";
        // console.log(day);
        break;
      default:
        day ="See pole päev";
    }
  }
  getDay();
  dayContainerElement.innerHTML = day;
}

/*
let a = 6;
const short = 5;
function doMath(){
  const short = document.getElementById("math");
  let number = 5;
  var number2 = 2;
  //short.innerHTML = Math.round(4.4);
  //short.innerHTML = Math.ceil(4.1);
  //short.innerHTML = Math.floor(4.9);
  //short.innerHTML = Math.pow(4, 3);
  //short.innerHTML = Math.round(Math.random()*100); //ümardatud sajavahemikus random
  //short.innerHTML = Math.sqr(16); //ruutjuur
}
window.onload = function (){
  doMath();
  console.log(short + " " + number2);
};
*/
