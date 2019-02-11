/*jshint esversion: 6 */
let clockContainer;
let changeColor;


window.onload = function(){
  init();
}



function init(){
changeColorButton=document.querySelector('#clockButton');
clockContainer=document.querySelector('#clockContainer');
dayContainer=document.querySelector('#dayContainer');

//changeColorButton.addEventListener('click', changeBackgroundColor);
window.addEventListener('keypress', changeBackgroundColor);

  startClock();
}



function getDay(){

}

function changeBackgroundColor(){
  console.log("muuda v2rv");
  const r=Math.round(Math.random()*255);
  const g=Math.round(Math.random()*255);
  const b=Math.round(Math.random()*255);
  clockContainer.style.backgroundColor='rgb('+r+','+g+','+b+')';
  document.body.style.backgroundColor='rgb('+r+','+g+','+b+')';
}

function startClock(){
  window.setInterval(function(){
    updateClock();

  },1000)
  ;
}

function updateClock(){
  const date=new Date();
  clockContainer.innerHTML = date;
  let day;
  dayContainerElement=document.querySelector('#dayContainer');
  function getDay(){
    switch(date.getDay()){
      case 0:
          day="Pühapäev";
          //console.log(day);
          break;
      case 1:
          day="Esmaspäev";
          //console.log(day);
          break;
      case 2:
          day="Teisipäev";
          //console.log(day);
          break;
      case 3:
          day="Kolmapäev";
          //console.log(day);
          break;
      case 4:
          day="Neljapäev";
          //console.log(day);
          break;
      case 5:
          day="Reede";
          //console.log(day);
          break;
      case 6:
          day="Laupäev";
          //console.log(day);
          break;
      case 7:
          day="Pühapäev";
          //console.log(day);
          break;
      case default:
          day="Kes teab";
          //console.log(day);
          break;
    }
  }
  getDay();
  dayContainerElement.innerHTML = day;
}


/*function doMath(){
  var short=document.getElementById("math");
  //short.innerHTML = Math.round(4.4);
  //short.innerHTML = Math.ceil(4.1);
  //short.innerHTML = Math.floor(4.8);
  //short.innerHTML = Math.pow(4,3);
  short.innerHTML = Math.round(Math.random()*100);
}
*/
