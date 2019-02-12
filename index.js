/*jshint esversion:6*/
let clockContainer;
let dayContainer;

let changeColor;
window.onload = function(){
  init();
};

function init(){
    startClock();
    changeColor = document.querySelector('#change-color');

    changeColor.addEventListener('click', changeBackgroundColor);

    window.addEventListener('keypress', changeBackgroundColor);
    //lihtalt funktsiooni nimi, kuna siis laheb kohe varv peale
}

//init on porgrrammi töö väljakutsumiseks

function startClock(){
  clockContainer =
  document.querySelector('#clockContainer');//sama mis getElementById pmst #id .class
  upDateClock();
  window.setInterval(function(){//paneb kella tiksuma
    upDateClock();
    const date = new Date();
    clockContainer.innerHTML = date;
  },1000);//default on juba 1000ms

}

function upDateClock(){
  const date = new Date();
  clockContainer.innerHTML = date;
  dayContainer = document.querySelector("#dayContainer");
  let day;
  switch (new Date().getDay()) {
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

    default:
    day = "See pole päev";

  }
  dayContainer.innerHTML = day;

}

function changeBackgroundColor(){
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  console.log("red")
  //document.body.style.backgroundColor = 'rgb('+ red + ',' + green+ ',' + blue + ')';
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

}




/*function getRandomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for(var i = 0; i <6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}*/
