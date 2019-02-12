/*jshint esversion:6*/
/*let a = 5;
const b = 8;
console.log("esimene:" + b);

function demoButton(){
  const b = 9;
  console.log(b);
} */
document.getElementById('');
let clockContainer;
let changeColorButton;
let dayContainer;

window.onload = function(){
  init();
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundColor);
};


function init(){
  startClock();
}


function startClock(){
  clockContainer = document.querySelector('#clockContainer');
  updateClock();
  window.setInterval(function(){
    const date = new Date();
    clockContainer.innerHTML = date;
  },1000);
}


 function updateClock(){
   const date = new Date();
   clockContainer.innerHTML = date;
   dayContainer = document.querySelector('#dayContainer');
   let day;
   function getDay(){
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
      case 7:
            day = "Pühapäev";
            break;



     }
   }
   getDay();
   dayContainer.innerHTML = day;
 }


 function changeBackgroundColor(){
   const red = Math.round(Math.random()*255);
   const green = Math.round(Math.random()*255);
   const blue = Math.round(Math.random()*255);
   console.log(red);
   //document.body.style.backgroundColor = 'rgb('+red+','+green+','+blue+')';
    document.body.style.backgroundColor =`rgb(${red}, ${green}, ${blue})`;
 }
