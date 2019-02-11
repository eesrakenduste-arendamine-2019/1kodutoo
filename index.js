/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainer;
let day;



window.onload = function(){
  init();
};

function init(){
  changeColorButton = document.querySelector('#clockButton');
  clockContainer = document.querySelector('#clockContainer');

  changeColorButton.addEventListener('click', changeBackgroundColor);

  window.addEventListener('mousemove',changeBackgroundColor);
  //dayContainerElement =
  dayContainer = document.querySelector('#dayContainer');
  startClock();
}


function changeBackgroundColor(){
  console.log("Muudan värvi");
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  clockContainer.style.backgroundColor = 'rgb('+ r+' , '+ g +' , '+ b +')';
  //document.body.style.backgroundColor = 'rgb('+ r+' , '+ g +' , '+ b +')';
}


function startClock(){
  updateClock();
  window.setInterval(function(){
    const date = new Date();
    clockContainer.innerHTML = date;
  }, 1000);

}
function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date;
  dayContainer = document.querySelector('#dayContainer');

  function getDay(){
    switch(new Date().getDay()){
      case 0:
        day = "Pühapäev";
        console.log(day);
        break;
      case 1:
        day = "Esmaspäev";
        console.log(day);
        break;
      case 2:
        day = "Teisipäev";
        console.log(day);
        break;
      case 3:
        day = "Kolmapäev";
        console.log(day);
        break;
      case 4:
        day = "Neljapäev";
        console.log(day);
        break;
      case 5:
        day = "Reede";
        console.log(day);
        break;
      case 6:
        day = "Laupäev";
        console.log(day);
        break;
    }
  }
  getDay();
dayContainer.innerHTML = day;

}



/*function doMath(){
  var short = document.getElementById('math');
  short.innerHTTML = Math.round(4.6);
}

*/
