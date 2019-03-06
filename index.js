let clockContainer;
let changeColorButton;
let changeTextColorButton
let clockPos
let datePos
let dayPos
let buttonsPos

window.onload = function(){
  init();
  startTime();
};

function init(){
	changeColorButton = document.querySelector('#clockButton');
  clockContainer = document.querySelector("#clockContainer");
	dayContainerElement = document.querySelector('#dayContainer');
	//changeColorButton.addEventListener('click' , changeBackgroundColor);
  startClock();
	changeColorButton.addEventListener('click', changeBackgroundColor);
	changeTextColorButton = document.querySelector('#textColorButton');
	changeTextColorButton.addEventListener('click', changeTextColor);
}

clockPos = document.getElementById("clockPos");

function changeBackgroundColor(){
	console.log("Muudan värvi");
	const r = Math.round(Math.random()*255);
	const g = Math.round(Math.random()*255);
	const b = Math.round(Math.random()*255);

	//clockContainer.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
	document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function changeTextColor(){
	const r = Math.round(Math.random()*255);
	const g = Math.round(Math.random()*255);
	const b = Math.round(Math.random()*255);

	document.body.style.color = `rgb(${r}, ${g}, ${b})`;
}

function startTime() {
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerHTML =
  h + ":" + m + ":" + s;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
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
	let day;
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
			default:
			day ="See pole päev";
		}
	}
	getDay();
	dayContainerElement.innerHTML = day;
}
