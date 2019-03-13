/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainer;
let day;
let dateContainer;
let nameContainer;
let newFont = "Times New Roman";
let clockCID;
let dateCID;
let dayCID;
//htmli nuppude kood
let buttonclose;
let buttonopen;
let buttoncolorwhite;
let buttoncolorblack;
let buttoncolorRND;
let buttonTNR;
let buttonAldrich;
let buttonBCKcolorwhite;
let buttonBCKcolorRND;
let buttonNightMode;
let buttondayMode;
let buttonReduce;
let buttonOriginalSize;
//sama aga muusikanuppudega
let playbutton;
let pausebutton;
let volplus;
let volminus;
let player;




//var clockCID = document.getElementById("clockContainer");
window.onload = function(){
  clockCID = document.getElementById("clockContainer").style;
  dateCID = document.getElementById("dateContainer").style;
  dayCID = document.getElementById("dayContainer").style;

  player = document.getElementById('player');
  playbutton = document.querySelector('.playbutton');
  pausebutton = document.querySelector('.pausebutton');
  volplus = document.querySelector('.volplus');
  volminus = document.querySelector('.volminus');

  playbutton.addEventListener('click', (event) => {
        player.play();
  });
  pausebutton.addEventListener('click', (event) => {
        player.pause();
  });
  volplus.addEventListener('click', (event) => {
        player.volume += 0.1;
  });
  volminus.addEventListener('click', (event) => {
        player.volume -= 0.1;
  });
  buttonclose = document.querySelector(".buttonclose");
  buttonclose.addEventListener('click', w3_close);

  buttonclose = document.querySelector(".buttonopen");
  buttonclose.addEventListener('click', w3_open);

  buttoncolorwhite = document.querySelector(".buttoncolorwhite");
  buttoncolorwhite.addEventListener('click', changeFontColorToWhite);

  buttoncolorblack = document.querySelector(".buttoncolorblack");
  buttoncolorblack.addEventListener('click', changeFontColorToBlack);

  buttoncolorRND = document.querySelector(".buttoncolorRND");
  buttoncolorRND.addEventListener('click', randomizeFontColor);

  buttonTNR = document.querySelector(".buttonTNR");
  buttonTNR.addEventListener('click', changeFont);

  buttonAldrich = document.querySelector(".buttonAldrich");
  buttonAldrich.addEventListener('click', defaultFont);

  buttonBCKcolorwhite = document.querySelector(".buttonBCKcolorwhite");
  buttonBCKcolorwhite.addEventListener('click', changeBckgColorToWhite);

  buttonBCKcolorRND = document.querySelector(".buttonBCKcolorRND");
  buttonBCKcolorRND.addEventListener('click', randomizeBckColor);

  buttonNightMode = document.querySelector(".buttonNightMode");
  buttonNightMode.addEventListener('click', nightMode);

  buttondayMode = document.querySelector(".buttondayMode");
  buttondayMode.addEventListener('click', dayMode);

  buttonReduce = document.querySelector(".buttonReduce");
  buttonReduce.addEventListener('click', decreaseSize);

  buttonOriginalSize = document.querySelector(".buttonOriginalSize");
  buttonOriginalSize.addEventListener('click', returnSize);


  init();
  var date = new Date();
  if(date.getHours() < 24 && date.getHours() >= 8){
    dayMode();
  }else if(date.getHours() >= 20 || date.getHours() < 8){
    nightMode();
  }
  document.getElementById("sidenav").style.background = "#99ffff";
  nameContainer = document.querySelector('#nameContainer');
  nameContainer.innerHTML= "Kert Liinat";
};


function w3_open() {
  document.getElementById("sidenav").style.display = "block";
}
function w3_close() {
  document.getElementById("sidenav").style.display = "none";
}
function returnSize(){
  clockCID.fontSize = "500%";
  clockCID.right = "44%";
  clockCID.top = "41%";
}
function decreaseSize(){
  clockCID.fontSize = "250%";
  clockCID.right = "47%";
  clockCID.top = "45%";
}
function nightMode(){
  document.body.style.background = "#003366";
  clockCID.color = "#ccccff";
  dayCID.color = "#ccccff";
  dateCID.color = "#ccccff";
  clockCID.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
  dayCID.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
  dateCID.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
}
function dayMode(){
  document.body.style.background = "#ccffff";
  clockCID.color = "#003366";
  dayCID.color = "#003366";
  dateCID.color = "#003366";
  clockCID.textShadow = "0px 0 black, 0 0px black, 0px 0 black, 0 0px black";
  dayCID.textShadow = "0px 0 black, 0 0px black, 0px 0 black, 0 0px black";
  dateCID.textShadow = "0px 0 black, 0 0px black, 0px 0 black, 0 0px black";
}
function randomizeBckColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  //document.body.style.backgroundColor = 'rgb('+ r+' , '+ g +' , '+ b +')';
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
}
function changeBckgColorToWhite(){
  document.body.style.background = "White";
}
function originalBckColor(){
  document.body.style.background = "#4db8ff";
}
function randomizeFontColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  clockCID.color = 'rgb('+ r+' , '+ g +' , '+ b +')';
  dayCID.color = 'rgb('+ r+' , '+ g +' , '+ b +')';
  dateCID.color = 'rgb('+ r+' , '+ g +' , '+ b +')';
}
function changeFontColorToWhite(){
  clockCID.color = "White";
  dayCID.color = "White";
  dateCID.color = "White";
}
function changeFontColorToBlack(){
  clockCID.color = "Black";
  dayCID.color = "Black";
  dateCID.color = "Black";
}
function changeFontColorToRed(){
  clockCID.color = "Red";
  dayCID.color = "Red";
  dateCID.color = "Red";
}
function defaultFont(){
  clockCID.fontFamily = "Aldrich";
  dayCID.fontFamily = "Aldrich";
  dateCID.fontFamily = "Aldrich";
}
function changeFont(){
  clockCID.fontFamily = newFont;
  dayCID.fontFamily = newFont;
  dateCID.fontFamily = newFont;
}
function init(){
  clockContainer = document.querySelector('#clockContainer');
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
function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
function startClock(){
  updateClock();
  window.setInterval(function(){
    var date = new Date();
    var HMS = pad(date.getHours()) +":" + pad(date.getMinutes())+":"+pad(date.getSeconds());
    clockContainer.innerHTML = HMS;
  }, 1000);
}
function updateClock(){
  var date = new Date();
  var HMS = pad(date.getHours()) +":" + pad(date.getMinutes())+":"+pad(date.getSeconds());
  clockContainer.innerHTML = HMS;
  dayContainer = document.querySelector('#dayContainer');
  dateContainer = document.querySelector('#dateContainer');

  function getM(){
    switch(new Date().getMonth()){
      case 0:
        month= "Jaanuar";
        console.log(month);
        break;
      case 1:
        month= "Veebruar";
        console.log(month);
        break;
      case 2:
        month= "Märts";
        console.log(month);
        break;
      case 3:
        month= "Aprill";
        console.log(month);
        break;
      case 4:
        month= "Mai";
        console.log(month);
        break;
      case 5:
        month= "Juuni";
        console.log(month);
        break;
      case 6:
        month= "Juuli";
        console.log(month);
        break;
      case 7:
        month= "August";
        console.log(month);
        break;
      case 8:
        month= "September";
        console.log(month);
        break;
      case 9:
        month= "Oktoober";
        console.log(month);
        break;
      case 10:
        month= "November";
        console.log(month);
        break;
      case 11:
        month= "Detsember";
        console.log(month);
        break;
    }
  }
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
  getM();
  getDay();
dateContainer.innerHTML = date.getDate()+"."+month+" "+date.getFullYear();
dayContainer.innerHTML = day;
}



/*function doMath(){
  var short = document.getElementById('math');
  short.innerHTTML = Math.round(4.6);
}

*/
