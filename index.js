/*jshint esversion: 6*/
let clockContainer;
let changeColorButton;
let dayContainer;
let day;
let dateContainer;
let nameContainer;
let newFont = "Times New Roman";


window.onload = function(){
  init();

  document.getElementById("clockContainer").style.right = "40%";
  document.getElementById("clockContainer").style.top = "40%";

  document.getElementById("dayContainer").style.right = "45%";
  document.getElementById("dayContainer").style.top = "50%";

  document.getElementById("dateContainer").style.right = "39%";
  document.getElementById("dateContainer").style.top = "55%";

  /*document.getElementById("myBtn").style.top = "15%";
  document.getElementById("myBtn").style.right = "94%";
*/
  document.getElementById("myColorBtn").style.top = "95%";

  document.body.style.background = "#4db8ff";

  nameContainer = document.querySelector('#nameContainer');
  nameContainer.innerHTML= "Kert Liinat";

  var date = new Date();

  if(date.getHours() < 20 && date.getHours() >= 8){
    dayMode();
  }else if(date.getHours() >= 20 && date.getHours() < 8){
    nightMode();
  }

};

function returnSize(){
  document.getElementById("clockContainer").style.fontSize = "500%";
  document.getElementById("clockContainer").style.right = "40%";
  document.getElementById("clockContainer").style.top = "40%";
}

function decreaseSize(){
  document.getElementById("clockContainer").style.fontSize = "250%";
  document.getElementById("clockContainer").style.right = "46%";
  document.getElementById("clockContainer").style.top = "45%";

}

function nightMode(){
  document.body.style.background = "#003366";
  document.getElementById("clockContainer").style.color = "#ccccff";
  document.getElementById("dayContainer").style.color = "#ccccff";
  document.getElementById("dateContainer").style.color = "#ccccff";

}

function dayMode(){
  document.body.style.background = "#ccffff";
  document.getElementById("clockContainer").style.color = "#000033";
  document.getElementById("dayContainer").style.color = "#000033";
  document.getElementById("dateContainer").style.color = "#000033";
}

function randomizeBckColor(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  document.body.style.backgroundColor = 'rgb('+ r+' , '+ g +' , '+ b +')';
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
  document.getElementById("clockContainer").style.color = 'rgb('+ r+' , '+ g +' , '+ b +')';
  document.getElementById("dayContainer").style.color = 'rgb('+ r+' , '+ g +' , '+ b +')';
  document.getElementById("dateContainer").style.color = 'rgb('+ r+' , '+ g +' , '+ b +')';

}

function changeFontColorToWhite(){
  document.getElementById("clockContainer").style.color = "White";
  document.getElementById("dayContainer").style.color = "White";
  document.getElementById("dateContainer").style.color = "White";
}

function changeFontColorToBlack(){
  document.getElementById("clockContainer").style.color = "Black";
  document.getElementById("dayContainer").style.color = "Black";
  document.getElementById("dateContainer").style.color = "Black";
}
function changeFontColorToRed(){
  document.getElementById("clockContainer").style.color = "Red";
  document.getElementById("dayContainer").style.color = "Red";
  document.getElementById("dateContainer").style.color = "Red";
}



function defaultFont(){
  document.getElementById("clockContainer").style.fontFamily = "Aldrich";
  document.getElementById("dayContainer").style.fontFamily = "Aldrich";
  document.getElementById("dateContainer").style.fontFamily = "Aldrich";
}

function changeFont(){
  document.getElementById("clockContainer").style.fontFamily = newFont;
  document.getElementById("dayContainer").style.fontFamily = newFont;
  document.getElementById("dateContainer").style.fontFamily = newFont;
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
