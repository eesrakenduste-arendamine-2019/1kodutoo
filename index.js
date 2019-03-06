/*jshint esversion:6*/
let changeBackgroundColorButton;

function startTime() {
  var today = new Date();
  var y = today.getFullYear();
  var mm = today.getMonth() ;
  months = new Array('Jaanuar','Veebruar','Märts','Aprill','Mai','Juuni','Juuli', 'August','September','Oktoober','November','Detsember');
  var wd = today.getDay();
  weekdays = new Array('pühapäev','esmaspäev','teisipäev','kolmapäev','neljapäev','reede','laupäev','pühapäev');
  var d = today.getDate();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById('txt').innerText ="kell on " +
  h + ":" + m + ":" + s;
  document.getElementById('year').innerText ="täna on " + weekdays[wd] + ", " + d + "  " + months[mm] + " " + y;
  var t = setTimeout(startTime, 500);
}
function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
function init(){
  changeBackgroundColorButton=document.querySelector("#clockBackgroundColorButton");
  changeBackgroundColorButton.addEventListener("click", changeBackgroundColor);
}
function changeBackgroundColor() {
  const r=Math.round(Math.random()*255);
  const g=Math.round(Math.random()*255);
  const b=Math.round(Math.random()*255);
  document.body.style.backgroundColor="rgb("+r+","+g+","+b+")";
}
