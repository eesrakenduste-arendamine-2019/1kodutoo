
/*jshint esversion: 6*/
/*https://codepen.io/afarrar/pen/JRaEjP*/ /*See aitas mul kellaga alustada, põhi tuleneb siit*/
/*https://www.w3schools.com/css/css_dropdowns.asp*/ /*Siit sain ma dropdown menu vormistuse*/

/*Erinevad muutujad*/
let dayContainerElement;
let backgroundCounter = 1;
let musicCounter = 1;

/*onload funktsioon*/
window.onload = function(){
  init();
};

/*Täidab kohe, kui leht avatakse, funktsioon*/
function init(){
  showTime();

  dayContainerElement = document.querySelector("#dayContainer");
}

/*Funktsioonid teksti suuruse ja värvi muutmiseks*/

function resizeTextInc(){
    document.getElementById("MyClockDisplay").style.fontSize = "600%";
    document.getElementById("MyClockDisplay").style.top = "41%";
    document.getElementById("MyClockDisplay2").style.fontSize = "600%";
    document.getElementById("MyClockDisplay2").style.top = "53%";
    document.getElementById("MyClockDisplay3").style.fontSize = "600%";
    document.getElementById("MyClockDisplay3").style.top = "63%";
}
function resizeTextDec(){
    document.getElementById("MyClockDisplay").style.fontSize = "200%";
    document.getElementById("MyClockDisplay").style.top = "44%";
    document.getElementById("MyClockDisplay2").style.fontSize = "200%";
    document.getElementById("MyClockDisplay2").style.top = "50%";
    document.getElementById("MyClockDisplay3").style.fontSize = "200%";
    document.getElementById("MyClockDisplay3").style.top = "55%";
}
function resizeTextRes(){
    document.getElementById("MyClockDisplay").style.fontSize = "450%";
    document.getElementById("MyClockDisplay").style.top = "43%";
    document.getElementById("MyClockDisplay2").style.fontSize = "450%";
    document.getElementById("MyClockDisplay2").style.top = "51%";
    document.getElementById("MyClockDisplay3").style.fontSize = "450%";
    document.getElementById("MyClockDisplay3").style.top = "59%";
}

function textR(){
  document.getElementById("MyClockDisplay").style.color = "#DC143C";
  document.getElementById("MyClockDisplay2").style.color = "#DC143C";
  document.getElementById("MyClockDisplay3").style.color = "#DC143C";
}

function textB(){
  document.getElementById("MyClockDisplay").style.color = "#000000";
  document.getElementById("MyClockDisplay2").style.color = "#000000";
  document.getElementById("MyClockDisplay3").style.color = "#000000";
}

function textW(){
  document.getElementById("MyClockDisplay").style.color = "#F8F8FF";
  document.getElementById("MyClockDisplay2").style.color = "#F8F8FF";
  document.getElementById("MyClockDisplay3").style.color = "#F8F8FF";
}

function textO(){
  document.getElementById("MyClockDisplay").style.color = "#FF8C00";
  document.getElementById("MyClockDisplay2").style.color = "#FF8C00";
  document.getElementById("MyClockDisplay3").style.color = "#FF8C00";
}
function textRes(){
  document.getElementById("MyClockDisplay").style.color = "#17D4FE";
  document.getElementById("MyClockDisplay2").style.color = "#17D4FE";
  document.getElementById("MyClockDisplay3").style.color = "#17D4FE";
}

/*Funktsioon tausta muutmiseks*/
function backG(){
  if(backgroundCounter == 3){
    backgroundCounter = 0;
  }
  if(backgroundCounter == 2){
    document.body.style.backgroundImage = "url('../Pictures/SnowyMountains.jpg')";
    backgroundCounter++;
  }
  if(backgroundCounter == 1){
    document.body.style.backgroundImage = "url('../Pictures/SpacePlanet.jpg')";
    backgroundCounter++;
  }
  if(backgroundCounter == 0){
    document.body.style.backgroundImage = "url('../Pictures/SkyNight.jpg')";
    backgroundCounter++;
  }
}

   /*Funktsioonid muusika muutmiseks*/
  function changeMusic1(){
    document.getElementById("soundDisplay").src="../Muusika/Again.mp3";
  }
  function changeMusic2(){
    document.getElementById("soundDisplay").src="../Muusika/Technicolor.mp3";
  }
  function changeMusic3(){
    document.getElementById("soundDisplay").src="../Muusika/Lemon.mp3";
  }

  //document.body.style.backgroundColor = "black";


/*Spikker css-i muutmiseks läbi javascripti*/
/*class clock{
  document.getElementById("MyClockDisplay").style.position = "absolute";
  document.getElementById("MyClockDisplay").style.top = "100px";
  document.getElementById("MyClockDisplay").style.left = "100px";
  document.getElementById("MyClockDisplay").style.transform = "translateX(-50%) translateY(-50%)";
  document.getElementById("MyClockDisplay").style.color = "#17D4FE";
  document.getElementById("MyClockDisplay").style.fontSize = "50px";
  document.getElementById("MyClockDisplay").style.fontFamily = "Orbitron";
  document.getElementById("MyClockDisplay").style.letterSpacing = "7px";
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%) ;
  color: #17D4FE;
  font-size: 500%;
  font-family: Orbitron;
  letter-spacing: 7px;
}*/


/*Kui kasutaja vajutab nupule, avatakse ja suletakse menüüd, järgnevad 3 menüüd*/
function resizeText() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function changeColor() {
  document.getElementById("myDropdown2").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content2");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function changeMusic() {
  document.getElementById("myDropdown3").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content3");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

/*Funktsioon Kellaaja arvutamiseks, kuupäeva leidmiseks*/
function showTime(){

    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var mnth = date.getMonth();
    var session = "AM";

    var d = new Date();
    var weekday = new Array(7);
    weekday[0] =  "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    var mon = new Date();
    var monthNum;
    var currentMonth = new Array(12);
    currentMonth[0] =  "January";
    currentMonth[1] = "February";
    currentMonth[2] = "March";
    currentMonth[3] = "April";
    currentMonth[4] = "May";
    currentMonth[5] = "June";
    currentMonth[6] = "July";
    currentMonth[7] = "August";
    currentMonth[8] = "September";
    currentMonth[9] = "October";
    currentMonth[10] = "November";
    currentMonth[11] = "December";

/*Lisab -st, -nd, -rd, -th kuupäeva taha*/
    function monthDay(){
      if(date.getDay() == 1){
        monthNum = date.getDay() + "st";
      }else{
        if(date.getDay() == 2){
          monthNum = date.getDay() + "nd";
        }else{
          if(date.getDay() == 2){
              monthNum = date.getDay() + "rd";
          }else{
            monthNum = date.getDay() + "th";
          }
        }
      }
    }
    monthDay();

    var dayn = weekday[d.getDay()];
    var monthn =  monthNum + " of " + currentMonth[mon.getMonth()];

    /*Lisab kellale nullid juurde ja näitab kas on päev või öö(am, pm)*/
    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;

    /*Kuvab tulemused lehel välja*/
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    document.getElementById("MyClockDisplay2").innerText = dayn;
    document.getElementById("MyClockDisplay2").textContent = dayn;
    document.getElementById("MyClockDisplay3").innerText = monthn;
    document.getElementById("MyClockDisplay3").textContent = monthn;


    setTimeout(showTime, 1000);

}
