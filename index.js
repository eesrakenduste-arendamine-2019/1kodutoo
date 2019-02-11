let date = new Date();
let day = date.getDay();
let days = ["Pühapäev", "Esmaspäev", "Teisipäev", "Kolmapäev", "Neljapäev", "Reede", "Laupäev"];
let clockContainer = null;
window.onload = function() { init(); }

function init() {
	clockContainer = document.querySelector("#clock-label");
	startClock();
	let monthLabel = (date.getMonth()+1)+"";
    if(monthLabel.length < 2) { monthLabel = "0"+monthLabel; }

	document.querySelector("#date-label").innerHTML = days[day]+" "+date.getDate()+"."+monthLabel;
}

function startClock() {	updateClock(); window.setInterval(updateClock, 1000); }

function updateClock() {
	date = new Date();
	let hours = date.getHours()+"";
	let minutes = date.getMinutes()+"";
	let seonds = date.getSeconds()+"";
    if(hours.length < 2) { hours = "0"+hours; }
    if(minutes.length < 2) { minutes = "0"+minutes; }
    if(seonds.length < 2) { seonds = "0"+seonds; }
    clockContainer.innerHTML = hours+":"+minutes+":"+seonds;
}
