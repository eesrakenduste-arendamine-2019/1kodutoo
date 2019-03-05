/*jshint esversion: 6 */


window.onload = function(){
  init();

};




function init(){
  startTime();
  getDay();
}

function getDay(){
  const date=new Date();
  let day;
  switch(date.getDay()){
    case 0:
        day="Pühapäev";
        //console.log(day);
        break;
    case 1:
        day="Esmaspäev";
        //console.log(day);
        break;
    case 2:
        day="Teisipäev";
        //console.log(day);
        break;
    case 3:
        day="Kolmapäev";
        //console.log(day);
        break;
    case 4:
        day="Neljapäev";
        //console.log(day);
        break;
    case 5:
        day="Reede";
        //console.log(day);
        break;
    case 6:
        day="Laupäev";
        //console.log(day);
        break;
  }
  let monthDay;
  monthDay=checkTime((date.getDate()));
  let month;
  month=checkTime((date.getMonth()+1));


  document.getElementById('day').innerHTML=day+", "+monthDay+"."+month;
}


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function startTime() {
  var secondCheckbox=document.getElementById("secondSelect");
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  if (secondCheckbox.checked == true){
   document.getElementById('time').innerHTML = h + ":" + m;
 } else {
   document.getElementById('time').innerHTML = h + ":" + m+":"+s;
 }
  t = setTimeout(function() {
    startTime();
  }, 500);
}

function clockSize(){
  var sizeCheckbox=document.getElementById("superSize");
  if(sizeCheckbox.checked == true){
    document.getElementById('time').style.fontSize="3700%";
  }else{
    document.getElementById('time').style.fontSize="700%";
  }
}

function colorScheme(){
  var colorBox=document.getElementById("darkMode");
  if(colorBox.checked==true){
    document.body.style.backgroundColor="#000000";
    document.body.style.color="#1a1a1a";
  }else{
    document.body.style.backgroundColor="#00CACA";
    document.body.style.color="#000000";
  }
}

function  rndCol(){
  const r = Math.round(Math.random()*255);
  const g = Math.round(Math.random()*255);
  const b = Math.round(Math.random()*255);
  document.getElementById("creator").style.color = "rgb("+r+","+g+","+b+")";
  t = setTimeout(function() {
    rndCol();
  }, 80);
}


function showCreator(){
  rndCol();
  var infoBox=document.getElementById("showCreator");
  if(infoBox.checked == true){
    document.getElementById('creator').innerHTML="Taavi Liivat";
  }else{
    document.getElementById('creator').innerHTML="";
  }
}
