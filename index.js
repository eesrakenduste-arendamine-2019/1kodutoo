/*jshint esversion:6*/
let changeColor;
let randomNum;
let hour;
let min;
let sec;

window.onload = function(){
  init();
};

function init(){

  startClock();
  changeColor = document.querySelector("#changeColor");
  changeColor.addEventListener("click", changeBGColor);
}

function changeBGColor(){
  randomNum1 = Math.random()*255 +"," + Math.random()*255+"," + Math.random()*255;
  randomNum2 = Math.random()*255 +"," + Math.random()*255+"," + Math.random()*255;
  document.body.style.backgroundColor = "rgb("+ randomNum1 + ")";
  document.getElementById("clockContainer").style.color = "rgb("+ randomNum2 + ")";
}

function startClock(){

  let clockContainer = document.querySelector("#clockContainer");

  window.setInterval(function(){
    const date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();
    const text = `${hour}:${min}:${sec}`;
    clockContainer.innerHTML = text;



  });



}
