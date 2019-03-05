/*jshint esversion: 6 */
let date;
let hours;
let minutes;
let seconds;
let monthDay;
let weekDays;

window.onload = function(){
  init();
  window.setInterval(function(){init();},1000);
};

function init(){

    date = new Date();

    weekDays = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
    months = ["Jaanuar", "Veebruar", "Märts", "Aprill", ",Mai", "Juuni", "Juuli", "August", "September", "Oktoober", "November", "Detsember"];

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

    weekday = date.getDay();
    monthDay = date.getDate();

    if (monthDay < 10){
      monthDay = "0" + monthDay;
    }

    month = date.getMonth();
    year = date.getFullYear();

    document.querySelector('#hours').innerHTML = hours + ":";
    document.querySelector('#minutes').innerHTML = minutes + ":";
    document.querySelector('#seconds').innerHTML = seconds;
    document.querySelector('#day').innerHTML = weekDays[weekday];
    document.querySelector('#date').innerHTML = monthDay + ". " + months[month] + " " + year;

 }
 function fontSize(clicked, shift){

  let object = document.querySelector(clicked);
  let check = document.querySelector('.container');
  if (object.style.fontSize == ""){
    if (check.style.fontSize){
      object.style.fontSize = check.style.fontSize;
    } else {
      object.style.fontSize = "80px";
    }
  }
  var oldStyle = parseInt(object.style.fontSize);
  oldStyle = oldStyle + shift;
  if (oldStyle <= 0){
    oldStyle = 10;
  } else if (oldStyle >= 400){
    oldStyle = 390;
  }
  var newStyle = object.style.fontSize = oldStyle.toString() + "px";

}

function clockUpDown(shift){
  let object = document.querySelector('.container');
  if (object.style.marginTop == ""){
    object.style.marginTop = "0%";
  }

  var oldStyle = parseInt(object.style.marginTop);
  oldStyle += shift;
  if (oldStyle <= 0){
    oldStyle = 0;
  } else if (oldStyle >= 40){
    oldStyle = 40;
  }

  var newStyle = object.style.marginTop = oldStyle.toString() + "%";
}

function clockLeftRight(shift){
  let object = document.querySelector('.container');
  if (object.style.marginLeft == ""){
    object.style.marginLeft = "0%";
  }

  var oldStyle = parseInt(object.style.marginLeft);
  oldStyle += shift;

  var newStyle = object.style.marginLeft = oldStyle.toString() + "%";
}

function font(){
  let object = document.querySelector('.container');
  if (object.style.fontFamily == ""){
    object.style.fontFamily = "Arial";
  }

  let fonts = ["Arial", "Consolas", "Oswald", "Tahoma", "Impact", "Ebrima", "Lobster", "Pacific", "Arvo", "Webdings", "Symbol", "Digital"];

  for (let i = 0; i < fonts.length; i++){
    if (fonts[i] == object.style.fontFamily){
      if (i == (fonts.length-1)){
        object.style.fontFamily = fonts[0];
        break;
      } else {
        object.style.fontFamily = fonts[i+1];
        break;
      }
    }
  }
}

function color(){
  let object = document.querySelector('.container');
  if (object.style.color == ""){
    object.style.color = "black";
  }

  let colors = ["black", "white", "grey", "palevioletred", "crimson", "orangered", "peachpuff", "rosybrown", "lime", "mediumaquamarine", "aqua", "teal"];

  for (let i = 0; i < colors.length; i++){
    if (colors[i] == object.style.color){
      if (i == (colors.length-1)){
        object.style.color = colors[0];
        break;
      } else {
        object.style.color = colors[i+1];
        break;
      }
    }
  }
}

function backgroundColor(){
  let object = document.querySelector('body');
  if (!object.style.backgroundColor){
    object.style.backgroundColor = "white";
  }

  let colors = ["black", "white", "grey", "palevioletred", "crimson", "orangered", "peachpuff", "rosybrown", "lime", "mediumaquamarine", "aqua", "teal"];

  for (let i = 0; i < colors.length; i++){
    if (colors[i] == object.style.backgroundColor){
      console.log(colors[i]);
      if (i == (colors.length-1)){
        object.style.backgroundColor = colors[0];
        break;
      } else {
        object.style.backgroundColor = colors[i+1];
        break;
      }
    }
  }
}
