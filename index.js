/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainerElement;


window.onload = function(){
  init();
};

function init(){
  changeColorButton = document.querySelector('#clockButton');
  clockContainer = document.querySelector('#clockContainer');


  //changeColorButton.addEventListener('click', changeBackgroundColor); //klikkil muudab
  window.addEventListener('mousemove', changeBackgroundColor); //hiire liigutusel muudab
  startClock();
}

function changeBackgroundColor(){
  console.log("Muudan värvi");
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);

  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
  clockContainer.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
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
  dayContainerElement = document.querySelector('#dayContainer');
  function getDay(){
    switch(new Date().getDay()){
      case 0:
        day = "Pühapäev";
        break;
      case 1:
        day ="Esmaspäev";
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
      default:
        day = "See pole päev";

    }
  }
getDay();
dayContainerElement.innerHTML = day;
}


/*const a = 6; //konstanti ei saa üle kirjutada
let short = 5;

function doMath(){
  var short = document.getElementById("math");
  //short.innerHTML = Math.round(4.4);
  //short.innerHTML = Math.ceil(4.1); #ümardab ülesse
  //short.innerHTML = Math.floor(4.9); #ümardab alla
  //short.innerHTML = Math.pow(4, 3); //astmes
  //short.innerHTML = Math.round(Math.random()*100);
  short.innerHTML = Math.sqrt(16);
}

console.log(short);*/
