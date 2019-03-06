/*jshint esversion:6*/
window.onload = function(){
  changeColorButton = document.querySelector('#changeBgColor');
  changeColorButton.addEventListener('click', changeBackgroundColor);
  bgColor = document.querySelector('#bgColor');
};
//keskel asuv kell
function clock() {// We create a new Date object and assign it to a variable called "time".
var time = new Date(),
    hours = time.getHours(),
    minutes = time.getMinutes(),
    seconds = time.getSeconds();

document.querySelectorAll('.clock')[0].innerHTML = clockk(hours) + ":" + clockk(minutes) + ":" + clockk(seconds);
//document.querySelectorAll('.date')[0].innerHTML = clockk(days) + ":" + clockk(months) + ":" + clockk(years);

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
  bgColorr=(bgColor.value);
  console.log("Muudan värvi");
  document.body.style.backgroundColor = (bgColorr);
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
  console.log(day);
  dayC.innerHTML = day;
  //kuupäeva päeva saamine
  var d = new Date();
  var dayDate = d.getDate();
  console.log(dayDate);
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
    console.log(month);
    monthC.innerHTML = month;
    //aasta saamine
    var y = new Date();
    var year = y.getFullYear();
    console.log(year);
    yearC.innerHTML = year;
