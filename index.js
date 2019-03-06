/*jshint esversion: 6*/
window.onload = setInterval(clock,1000);
let changeColorButton;
let changeTextButton;
let changeClockPos;

window.onload = function () {
  init();
};

function init() {
	 changeColorButton = document.querySelector('#colorButtonBackground');
	  changeTextButton = document.querySelector('#textColorButton');
	 changeColorButton.addEventListener('click', changeBackgroundColor);
	 changeTextButton.addEventListener('click', changeTextColor);
	 changeClockPos = document.getElementById("#clockPos");
	 changeClockPos.addEventListener('click', clockPos);
}

function changeBackgroundColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
}

function changeTextColor() {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  document.body.style.color = `rgb(${r}, ${g}, ${b})`;
}
//http://talkerscode.com/webtricks/digital-clock-with-complete-time-and-date-using-css-and-javascript.php Kella funksioon
function clock() {
	  var d = new Date();
	  
	  var date = d.getDate();
	  
	  var month = d.getMonth();
	  var months =["Jaanuar","Veebruar","Märts","Aprill","Mai","Juuni","Juuli","August","September","Oktoober","November","Detsember"];
	  month=months[month];
	  
	  var year = d.getFullYear();
	  
	  var day = d.getDay();
	  var days =["Pühapäev","Esmaspäev","Teisipäev","Kolmapäev","Neljapäev","Reede","Laupäev"];
	  day=days[day];
	  
	  var hour =d.getHours();
      var min = d.getMinutes();
	  var sec = d.getSeconds();
	
	  document.getElementById("date").innerHTML=day+" "+date+" "+month+" "+year;
	  document.getElementById("time").innerHTML=hour+":"+min+":"+sec;
}