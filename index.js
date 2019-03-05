/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainer;
let day;
let dateContainer;
let nameContainer;
let newFont = "Times New Roman";

//var clockCID = document.getElementById("clockContainer");


window.onload = function(){
  init();
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
  var date = new Date();
  if(date.getHours() < 24 && date.getHours() >= 8){
    dayMode();
  }else if(date.getHours() >= 20 || date.getHours() < 8){
    nightMode();
  }

  /*document.getElementById("myBtn").style.top = "15%";
  document.getElementById("myBtn").style.right = "94%";
*/
  //document.getElementById("myColorBtn").style.top = "95%";

  //document.body.style.background = "#4db8ff";
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
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
  clockCID.fontSize = "500%";
  clockCID.right = "44%";
  clockCID.top = "41%";
}

function decreaseSize(){
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
  clockCID.fontSize = "250%";
  clockCID.right = "47%";
  clockCID.top = "45%";

}

function nightMode(){
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
  document.body.style.background = "#003366";
  clockCID.color = "#ccccff";
  dayCID.color = "#ccccff";
  dateCID.color = "#ccccff";
  clockCID.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
  dayCID.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";
  dateCID.textShadow = "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black";

}

function dayMode(){
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
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
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  clockCID.color = 'rgb('+ r+' , '+ g +' , '+ b +')';
  dayCID.color = 'rgb('+ r+' , '+ g +' , '+ b +')';
  dateCID.color = 'rgb('+ r+' , '+ g +' , '+ b +')';

}

function changeFontColorToWhite(){
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
  clockCID.color = "White";
  dayCID.color = "White";
  dateCID.color = "White";
}

function changeFontColorToBlack(){
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
  clockCID.color = "Black";
  dayCID.color = "Black";
  dateCID.color = "Black";
}
function changeFontColorToRed(){
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
  clockCID.color = "Red";
  dayCID.color = "Red";
  dateCID.color = "Red";
}



function defaultFont(){
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
  clockCID.fontFamily = "Aldrich";
  dayCID.fontFamily = "Aldrich";
  dateCID.fontFamily = "Aldrich";
}

function changeFont(){
  var clockCID = document.getElementById("clockContainer").style;
  var dateCID = document.getElementById("dateContainer").style;
  var dayCID = document.getElementById("dayContainer").style;
  clockCID.fontFamily = newFont;
  dayCID.fontFamily = newFont;
  dateCID.fontFamily = newFont;


}
/*function changeSize(){
  document.getElementById("clockContainer").style.width = "100px";
}*/

function init(){
  //changeColorButton = document.querySelector('#clockButton');
  clockContainer = document.querySelector('#clockContainer');
  //changeColorButton.addEventListener('click', changeBackgroundColor);
  //window.addEventListener('mousemove',changeBackgroundColor);
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
