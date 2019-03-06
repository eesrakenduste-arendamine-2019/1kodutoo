setInterval(function(){
  var date = new Date();
  updateTime(date);
  updateClock(date);
}, 1000);

function updateClock(date){
  var secHand = document.getElementById("sec-hand").style;
  var minHand = document.getElementById("min-hand").style;
  var hrHand = document.getElementById("hr-hand").style;

  secHand.transform = "rotate(" + date.getSeconds() * 6 + "deg)";
  minHand.transform = "rotate(" + date.getMinutes() * 6 + "deg)";
  hrHand.transform = "rotate(" + (date.getHours() * 30 + date.getMinutes() * 0.5) + "deg)";
}

function updateTime(date){
  var timeDiv = document.getElementById("time");
  var time = "Digitaanle kell näitab: " + date.getHours() + " : " + date.getMinutes() + " : " + date.getSeconds();
  timeDiv.innerHTML = time;
}

function myFunction() {
  document.getElementById("demo").style.color;
}

function toggleBackgroundNight () {
  let body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(design/oo.jpg)';
  body.style.backgroundSize = 'cover';

}


function toggleBackgroundDay () {
  let body = document.getElementsByTagName('body')[0];
  body.style.backgroundImage = 'url(design/paev.png)';
  body.style.backgroundSize = 'cover';

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
