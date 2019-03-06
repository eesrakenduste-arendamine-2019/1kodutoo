/*jshint esversion: 6 */
let date;
let clock;
let hours;
let minutes;
let seconds;
let actualDay;
let dayOfMonth;
let weekDays;
let test;

window.onload = function(){
  clockInfo();
  window.setInterval(function(){
    clockInfo();
  }, 100);
};

function clockInfo(){

    date = new Date();

    weekDays = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
    months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    if (hours < 10){
      hours = "0" + hours;
    }
    if (minutes < 10){
      minutes = "0" + minutes;
    }
    if (seconds < 10){
      seconds = "0" + seconds;
    }

    actualDay = date.getDay();
    dayOfMonth = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();

    clock = document.querySelector('#clock');
    /*document.querySelector('#hours').innerHTML = "<p onclick=\'changeFontSize(\"#hours\",10)\'>+</p>" + "<p onclick=\'changeFontSize(\"#hours\",-10)\'>-</p>" + hours;
    document.querySelector('#minutes').innerHTML = "<p onclick=\'changeFontSize(\"#minutes\",10)\'>+</p>" + "<p onclick=\'changeFontSize(\"#minutes\",-10)\'>-</p>" + minutes;
    document.querySelector('#seconds').innerHTML = "<p onclick=\'changeFontSize(\"#seconds\",10)\'>+</p>" + "<p onclick=\'changeFontSize(\"#seconds\",-10)\'>-</p>" + seconds;*/


    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;

    document.querySelector('#day').innerHTML = weekDays[actualDay];

    if (dayOfMonth < 10){
      dayOfMonth = "0" + dayOfMonth;
    }

    document.querySelector('#date').innerHTML = dayOfMonth + ". " + months[month] + " " + year;

    //hoursDiv.innerHTML = hours;
    //clock.innerHTML = "hours + <br>" + minutes + "<br>" + seconds + "<br> Päev: " + weekDays[actualDay] + " " + dayOfMonth;
}

function changeFontSize(what, howMuch){

  let base = document.querySelector(what);
  let check = document.querySelector('.container');
  if (base.style.fontSize == ""){
    if (check.style.fontSize){
      base.style.fontSize = check.style.fontSize;
    } else {
      base.style.fontSize = "10px";
    }
  }
  var oldStyle = parseInt(base.style.fontSize);
  oldStyle = oldStyle + howMuch;
  if (oldStyle <= 0){
    oldStyle = 10;
  } else if (oldStyle >= 400){
    oldStyle = 390;
  }
  var newStyle = base.style.fontSize = oldStyle.toString() + "px";

}

function clockUpDown(howMuch){
  let base = document.querySelector('.container');
  if (base.style.marginTop == ""){
    base.style.marginTop = "0%";
  }

  var oldStyle = parseInt(base.style.marginTop);
  oldStyle += howMuch;
  if (oldStyle <= 0){
    oldStyle = 0;
  } else if (oldStyle >= 40){
    oldStyle = 40;
  }

  var newStyle = base.style.marginTop = oldStyle.toString() + "%";
}

function clockLeftRight(howMuch){
  let base = document.querySelector('.container');
  if (base.style.marginLeft == ""){
    base.style.marginLeft = "0%";
  }

  var oldStyle = parseInt(base.style.marginLeft);
  oldStyle += howMuch;

  var newStyle = base.style.marginLeft = oldStyle.toString() + "%";
}

function changeFont(){
  let base = document.querySelector('.container');
  if (base.style.fontFamily == ""){
    base.style.fontFamily = "Marlett";
  }

  let fontMassif = ["Arial", "Calibri", "Cambria", "Impact", "Ebrima", "Marlett", "SimSun", "Sylfaen", "Symbol"];

  for (let i = 0; i < fontMassif.length; i++){
    if (fontMassif[i] == base.style.fontFamily){
      if (i == (fontMassif.length-1)){
        base.style.fontFamily = fontMassif[0];
        break;
      } else {
        base.style.fontFamily = fontMassif[i+1];
        break;
      }
    }
  }
}

function changeColour(){
  let base = document.querySelector('.container');
  if (base.style.color == ""){
    base.style.color = "black";
  }

  let fontMassif = ["black", "white", "purple", "yellow", "violet", "hotpink", "blue", "cyan", "grey", "green"];

  for (let i = 0; i < fontMassif.length; i++){
    if (fontMassif[i] == base.style.color){
      if (i == (fontMassif.length-1)){
        base.style.color = fontMassif[0];
        break;
      } else {
        base.style.color = fontMassif[i+1];
        break;
      }
    }
  }
}

function changeBackgroundColour(){
  let base = document.querySelector('body');
  if (!base.style.backgroundColor){
    base.style.backgroundColor = "white";
  }

  let fontMassif = ["white", "black", "purple", "yellow", "violet", "hotpink", "blue", "cyan", "grey", "green"];

  for (let i = 0; i < fontMassif.length; i++){
    if (fontMassif[i] == base.style.backgroundColor){
      console.log(fontMassif[i]);
      if (i == (fontMassif.length-1)){
        base.style.backgroundColor = fontMassif[0];
        break;
      } else {
        base.style.backgroundColor = fontMassif[i+1];
        break;
      }
    }
  }
}
