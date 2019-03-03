
/*jshint esversion: 6 */
let clockContainer;
let changeColorButton;
let dayContainer;
let monthAndYearContainer;
let changeClockColorButton;
window.onload = function(){
  init();
};

function init(){
  changeClockColorButton = document.querySelector('#clockBackgroundButton');
  changeColorButton = document.querySelector('#clockButton');
  clockContainer = document.querySelector('#clockContainer');
  changeColorButton.addEventListener('click', changeBackgroundColor);
  changeClockColorButton.addEventListener('click', changeClockColor);
  startClock();
}

function peidaValikud()
{
document.getElementById("clockButton").style.visibility = 'hidden';
}

 function changeClockColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  document.getElementById("clockContainer").style.color = 'rgb('+r+','+g+','+b+')';
  document.getElementById("dayContainer").style.color = 'rgb('+r+','+g+','+b+')';
  document.getElementById("monthAndYearContainer").style.color = 'rgb('+r+','+g+','+b+')';
}

function changeBackgroundColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
}

function startClock(){
  updateClock();
  window.setInterval(function(){ updateClock(); }, 1000); }

function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = new Date().toTimeString().split(" ")[0];
  let day;
  let month;
  monthAndYearContainerElement = document.querySelector('#monthAndYearContainer');
  dayContainerElement = document.querySelector('#dayContainer');

document.getElementById('picupload').addEventListener('change', readURL, true);

function readURL(){
   var file = document.getElementById("picupload").files[0];
   var reader = new FileReader();
   reader.onloadend = function(){
      document.body.style.background = "url(" + reader.result + ")";        
	  document.body.style.backgroundSize="100% 100%";
   }
   if(file){
      reader.readAsDataURL(file);
    }else{
    }
}

function getMonth(){

switch(new Date().getMonth()){
  case 0:
  month = "Jaanuar";
  break;
  case 1:
  month = "Veebruar";
  break;
  case 2:
  month = "Marts";
  break;
  case 3:
  month = "April";
  break;
  case 4:
  month = "Mai";
  break;
  case 5:
  month = "Juuni";
  break;
  case 6:
  month = "Juuli";
  break;
  case 7:
  month = "August";
  break;
  case 8:
  month = "September";
  break;
  case 9:
  month = "Oktoober";
  break;
  case 10:
  month = "November";
  break;
  case 11:
  month = "Detsember";
  break;
  default:
  month = "See pole kuu";
  }
}

  function getDay(){
  
  switch(new Date().getDay()){
    case 0:
    day = "Puhapaev";
    break;
    case 1:
    day = "Esmaspaev";
    break;
    case 2:
    day = "Teisipaev";
    break;
    case 3:
    day = "Kolmapaev";
    break;
    case 4:
    day = "Neljapaev";
    break;
    case 5:
    day = "Reede";
    break;
    case 6:
    day = "Laupaev";
    break;
    default:
    day = "See pole päev";
    }
  }

  getDay();
  getMonth();
  
dayContainerElement.innerHTML = day;
monthAndYearContainerElement.innerHTML = date.getDate() + ' ' + month + ' ' + date.getFullYear();
}
