let clockConateiner;
let changeColor;
let count;
let datContainer;
window.onload = function(){
  init(); //kutsub terve programmi välja
};

function init(){
  startClock();
  changeColor = document.querySelector('#change-color');
  window.setInterval(function(){
    updateClock();
  }, 1000);
  window.addEventListener('click', changeBackgroundColor);
  // changeColor.addEventListener('click', changeBackgroundColor);

}

function startClock(){

  clockConateiner = document.querySelector('#clockContainer')
  updateClock();
  window.setInterval(function(){
    updateClock();
  }, 1000);
}

function updateClock(){
  const date = new Date();
  clockContainer.innerHTML = date;
  let dayContainer = document.querySelector("#dayContainer");
  let day;
  switch (new Date().getDay()) {
    case 0:
        day="Pühapäev";
      break;
    case 1:
        day="Esmaspäev";
        break;
    case 2:
        day="Teisipäev";
    break
    case 3:
        day="Kolmapäev";
      break;
    case 4:
        day="Neljapäev";
        break;
    case 5:
        day="Reede";
        break;
    case 6:
        day="Laupäev";
        break;
  }
  dayContainer.innerHTML = day;
}

function changeBackgroundColor(){
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  console.log(red, green, blue);
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
