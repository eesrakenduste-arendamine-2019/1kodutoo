/*jshint esversion:6*/

let clockContainer;
let changeColorButton;
let dayContainerElement;
var formatStatus = window.localStorage.getItem("format");
var session = window.localStorage.getItem("format");
var clockSize = 60;
if(formatStatus == 0){
	session = "";
	formatStatus = 0;
} if (formatStatus == null){
	session = "";
	formatStatus = 0;
}

window.onload = function(){
  init();
  if(window.localStorage.getItem("size") > 0){
	var clock = document.getElementById( 'txt' );
	clockSize = parseInt(window.localStorage.getItem("size"));
	document.getElementById( 'txt' ).style.fontSize = clockSize+"px";
}
	if(window.localStorage.getItem("r") != 0){
		var r = window.localStorage.getItem("r");
		var g = window.localStorage.getItem("g");
		var b = window.localStorage.getItem("b");
		clock.style.color = `rgb(${r},${g},${b})`;
	}
};

function init(){
  startTime();
}

function startButtons(){
	window.localStorage.setItem("format", formatStatus);
	var color = document.getElementById( 'clockColor' );
	var clockFormat = document.getElementById( 'clockFormat' );
	var clockLarger = document.getElementById( 'clockLarger' );
	var clockSmaller = document.getElementById( 'clockSmaller' );
	var clock = document.getElementById( 'txt' );
	clock.style.fontSize = clockSize+"px"; 
	clockLarger.onclick = function(){
		if(clockSize <= 500){
			clockSize += 10;
		}
		clock.style.fontSize = clockSize+"px"; 
		window.localStorage.setItem("size", clockSize);
	}
	clockSmaller.onclick = function(){
		clock = document.getElementById( 'txt' );
		if(clockSize > 10){
			clockSize -= 10;
		}
		clock.style.fontSize = clockSize+"px";
		window.localStorage.setItem("size", clockSize);
	}
	clockFormat.onclick = function(){
	  if (formatStatus == 0){
		formatStatus = 1;
	  } else {
		 formatStatus = 0;
		 session = "";
	  }
  };
	
	 color.onclick= function(){
	    const r = Math.round(Math.random()*255);
		const g = Math.round(Math.random()*255);
		const b = Math.round(Math.random()*255);
	  clock = document.getElementById( 'txt' );
	  clock.style.color = `rgb(${r},${g},${b})`;
	  window.localStorage.setItem("r", r);
	  window.localStorage.setItem("g", g);
	  window.localStorage.setItem("b", b);
  };
}


function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var dayOfMonth = today.getDate();
  getDay();
  getMonth();
  startButtons();
	if (formatStatus == 1){
	  if(h == 0){
        h = 12;
		session = "AM";
    }
    
    if(h > 12){
        h = h - 12;
		session = "PM";
    }
  };
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s + " " +session + "<br/>" + day + "<br/>" + dayOfMonth + "." + month;
  var t = setTimeout(startTime, 500);
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}

function getDay(){
    switch (new Date().getDay()) {
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
      default:
      day="See ei ole päev";
    }
}
function getMonth(){
    switch (new Date().getMonth()) {
		case 0:
			month = "Jaanuar";
			break;
		case 1:
			month = "Veebruar";
			break;
		case 2:
			month = "Märts";
			break;
		case 3:
			month = "Aprill";
			break;
		case 4:
			month = "Mai";
			break;
		case 5:
			month = "Juuni";
			break;
		case 6:
			month = "Juuli";
			break;
		case 6:
			month = "August";
			break;
		case 6:
			month = "September";
			break;
		case 6:
			month = "Oktoober";
			break;
		case 6:
			month = "November";
			break;
		case 6:
			month = "Detsember";
			break;
      default:
      month="See ei ole kuu";
    }
}