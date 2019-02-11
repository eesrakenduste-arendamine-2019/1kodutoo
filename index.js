/*jshint esversion: 6*/
let clockContainer;

window.onload = function(){
  init();
};

function init(){
  clockContainer = document.querySelector("#clockContainer");
  startClock();
}

function startClock(){
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);
}

function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date;
  }
