/*jshint esversion:6*/
window.onload = function(){
  changeColorButton = document.querySelector('#changeBgColor');
  changeColorButton.addEventListener('click', changeBackgroundColor);
  changeDateColorButton = document.querySelector('#dvb');
  changeDateColorButton.addEventListener('click', changeDateColor);
  changeClockButton = document.querySelector('#move');
  changeClockButton.addEventListener('click', changeClockPos);
  changeClockFont = document.querySelector('#font');
  changeClockFont.addEventListener('click', changeClockFontSize);

};

function changeClockPos(){

  if(document.getElementById("moveCheckbox").checked == true){
    document.getElementById("clock").style.display = "none";
    document.getElementById("clock1").style.display = "block";
  } else {
    document.getElementById("clock").style.display = "block";
    document.getElementById("clock1").style.display = "none";
  }

}
//keskel asuv kell
function changeClockFontSize(){

  if(document.getElementById("fontCheckbox").checked == false){
    console.log("123");
    document.getElementById("clock").style.fontSize = "6em";
    document.getElementById("clock1").style.fontSize = "6em";
  } else {

    document.getElementById("clock").style.fontSize = "2em";
    document.getElementById("clock1").style.fontSize = "2em";

  }
}


function clock() {// We create a new Date object and assign it to a variable called "time".
var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();


document.querySelectorAll('.clock')[0].innerHTML = clockk(hours) + ":" + clockk(minutes) + ":" + clockk(seconds);
//document.querySelectorAll('.date')[0].innerHTML = clockk(days) + ":" + clockk(months) + ":" + clockk(years);


document.querySelectorAll('#clock1')[0].innerHTML = clockk(hours) + ":" + clockk(minutes) + ":" + clockk(seconds);

function clockk(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn;
    }
    return standIn;
  }
}
setInterval(clock, 1000);
//taustavärvi vahetus
function changeBackgroundColor(){
  console.log("lammas");
  // bgColorr=(bgColor.value);
  // document.body.style.backgroundColor = (bgColorr);
  document.body.style.backgroundColor = (bgColor.value);
}

function changeDateColor(){
  for (var i = 0; i <= document.getElementsByClassName("dv").length - 1; i++) {
    document.getElementsByClassName("dv")[i].style.color = (dateColor .value);
  }
  //document.getElementsByClassName("dv").style.color = "yellow";
  //console.log(document.getElementsByClassName("dv").length)


}
//päeva saamine
let day;
function getDay(){
    switch(new Date().getDay()){
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
    }
  }
  getDay();
  dayC.innerHTML = day;
  //kuupäeva päeva saamine
  var d = new Date();
  var dayDate = d.getDate();
  dayCc.innerHTML = dayDate+".";
  //kuu saamine
  let month;
  function getMonth(){
      switch(new Date().getMonth()){
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
        case 7:
          month = "August";
          break;
        case 8:
          monthy = "September";
          break;
        case 9:
          month = "Oktoober";
          break;
        case 10:
          month = "November";
          break;
        case 11:
          month = "Detsember";
          break;
      }
    }
    getMonth();
    monthC.innerHTML = month;
    //aasta saamine
    var y = new Date();
    var year = y.getFullYear();
    yearC.innerHTML = year;
