//jshint esversion: 6

let clockContainer;
let changeColorButton;
let dayContainerElement;
let darkTheme = false;

window.onload = function(){
  init();
};

function init(){
  changeColorButton = document.querySelector("#clockButton");
  clockContainer = document.querySelector("#clockContainer");
  smalbutton = document.querySelector("#clocksmall");
  medbutton = document.querySelector("#clockmedium");
  bigbutton = document.querySelector("#clockbig");
  digibutton = document.querySelector("#fontChange");
  flex = document.querySelector("#main");
  showClock = document.getElementById("fontChangee");


  changeColorButton.addEventListener("click", changeBackgroundColor);

  smalbutton.addEventListener("click", small);
  medbutton.addEventListener("click", medium);
  bigbutton.addEventListener("click", big);
  //digibutton.addEventListener("click", hide);
  showClock.addEventListener("change", hide);

  //window.addEventListener("click", changeBackgroundColor);

  startClock();
}

function hide(){
  console.log("hide funkts");
  var p2ev = document.getElementById("dayContainer");
  var kuu = document.getElementById("dateContainer");
  if(p2ev.style.display === "none"){
    p2ev.style.display = "block";
    kuu.style.display = "block";
  } else {
    p2ev.style.display = "none";
    kuu.style.display = "none";
  }
}



function medium(){

    document.getElementById("clockContainer").className = "centered-medium";
    document.getElementById("dayContainer").className = "centered-medium";
    document.getElementById("dateContainer").className ="centered-medium";
}

function small () {
  document.getElementById("clockContainer").className = "inner";
  document.getElementById("dayContainer").className = "inner";
  document.getElementById("dateContainer").className ="inner";
}

function changeBackgroundColor(){
  console.log("Muudan värvi");
  if(darkTheme){
    //clockContainer.style.backgroundColor = "rgb("+34+","+35+","+38+")";
    //document.body.style.backgroundColor = "rgb("+34+","+35+","+38+")";
    clockContainer.style.color = "rgb("+250+","+255+","+255+")";
    dayContainerElement.style.color = "rgb("+250+","+255+","+255+")";
    //dayContainerElement.style.backgroundColor = "rgb("+34+","+35+","+38+")";
    dateContainerElement.style.color = "rgb("+250+","+255+","+255+")";
    flex.style.backgroundColor = "#222326";

  } else {
    //clockContainer.style.backgroundColor = "rgb("+255+","+255+","+255+")";
    //document.body.style.backgroundColor = "rgb("+255+","+255+","+255+")";
    clockContainer.style.color = "rgb("+0+","+0+","+0+")";
    dayContainerElement.style.color = "rgb("+0+","+0+","+0+")";
    //dayContainerElement.style.backgroundColor = "rgb("+255+","+255+","+255+")";
    dateContainerElement.style.color = "rgb("+0+","+0+","+0+")";
    flex.style.backgroundColor = "#F8F9F9";
  }
  darkTheme = !darkTheme;
}

function big(){
    document.getElementById("clockContainer").className = "centered-big";
    document.getElementById("dayContainer").className = "centered-big";
    document.getElementById("dateContainer").className ="centered-big";

}

function startClock(){
  updateClock();
  window.setInterval(function(){
    updateClock();

  },1000);
}

function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date.toLocaleTimeString("et-ee");
  //console.log("Kell muudetud");

  let day;
  dayContainerElement = document.querySelector("#dayContainer");
  dateContainerElement = document.querySelector("#dateContainer");
  function getDay(){
      switch (date.getDay()) {
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

      }

  }
  getDay();
  dayContainerElement.innerHTML = day;
  dateContainerElement.innerHTML = date.toLocaleDateString("et-ee");
  //console.log(day);
}
