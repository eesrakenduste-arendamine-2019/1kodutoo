let clockContainer // = null
let dateContaier
let dateTime = document.getElementById("date_time");
let colorButton = document.getElementById("date_time");

window.onload = function () {
  init()
}

function init () {
  clockContainer = document.querySelector('#clock')
  dateContainer = document.querySelector('#date')
  console.log(clockContainer)
  console.log(dateContainer)
  startClock()
  startDate()
}

function startClock () {
  window.setInterval(function () {
    const date = new Date()
    const hours = date.getHours();
    const minutes = ('0'+date.getMinutes()).slice(-2);
    const seconds = date.getSeconds();

    clockContainer.innerHTML = hours + ":" + minutes + ":" + seconds
  }, 1000)
}

function startDate(){
  let date = new Date()
  let kuud = ['jaanuar', '  veebruar  ', 'märts', 'aprill', 'mai', 'juuni', 'juuli', 'august', 'september', 'oktoober', 'november', 'detsember'];
  dateContainer.innerHTML =date.getDate()+" "+kuud[date.getMonth()]+" "+date.getFullYear()
}

function fullScreen() {
  if ((document.fullScreenElement && document.fullScreenElement !== null) ||    
   (!document.mozFullScreen && !document.webkitIsFullScreen)) {
    if (document.documentElement.requestFullScreen) {  
      document.documentElement.requestFullScreen();  
    } else if (document.documentElement.mozRequestFullScreen) {  
      document.documentElement.mozRequestFullScreen();  
    } else if (document.documentElement.webkitRequestFullScreen) {  
      document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
    }  
  } else {  
    if (document.cancelFullScreen) {  
      document.cancelFullScreen();  
    } else if (document.mozCancelFullScreen) {  
      document.mozCancelFullScreen();  
    } else if (document.webkitCancelFullScreen) {  
      document.webkitCancelFullScreen();  
    }  
  }  
}

function fontSizeSmaller(){
  element = document.getElementById("clock");
  style = window.getComputedStyle(element, null).getPropertyValue("font-size");
  fontSize = parseFloat(style);

  element.style.fontSize = (fontSize - 5) + "px";

  document.getElementById("clock").style.fontSize = fontSize;
}

function fontSizeBigger(){
  element = document.getElementById("clock");
  style = window.getComputedStyle(element, null).getPropertyValue("font-size");
  fontSize = parseFloat(style);

  element.style.fontSize = (fontSize + 5) + "px";

  document.getElementById("clock").style.fontSize = fontSize;
}

function changeColor(){
  element = document.getElementById("clock");
  color = "#"+((1<<24)*Math.random()|0).toString(16);
  element.style.color = color;
  document.getElementById("colorChange").style.color = color;
}
