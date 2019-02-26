let clockContainer;
let changeColorButton;
let resetButton;
let changeBackgroundButton;
let onOffMusicButton;

window.onload = function () {
    init()
}

function init () {
    clockContainer = document.querySelector('#clock');
    clockContainer.addEventListener('click', changeSize);
    console.log(clockContainer);
    //vaheta värvi nupp
    changeColorButton = document.querySelector('#change-color');
    changeColorButton.addEventListener('click', changeColor);
    //vaheta taustapilti pupp
    changeBackgroundButton = document.querySelector('#change-image');
    changeBackgroundButton.addEventListener('click', changeBackground);
    //sisse/välja muusuka nupp
    onOffMusicButton = document.querySelector('#onoff-music');
    onOffMusicButton.addEventListener('click', onOffMusic);
    //vaheta suurus nupp
    resetButton = document.querySelector('#reset');
    resetButton.addEventListener('click', reset);
}


//reset funktsioon
function reset(){
    //muudan värvi valgeks
    clockContainer.style.color = "white";
    //tagastan esialgse suuruse
    var s = document.getElementById('clock');
    var sstyle = window.getComputedStyle(s, null).getPropertyValue('font-size');
    if (sstyle == "50px") {
        s.style.fontSize = "25px";
    }
    //tagastan esialgse taustapilti
    var b = document.getElementById('mainbody');
    b.style.backgroundImage = "url('blueberry.png')";
    //lülitan välja musikat
    var myAudio = document.getElementById("bgm");
    return myAudio.pause();

}
//vaheta värvi funktsioon
function changeColor () {
    console.log('muudan värvi');

    const r = Math.round(Math.random() * 255);
    const g = Math.round(Math.random() * 255);
    const b = Math.round(Math.random() * 255);

    clockContainer.style.color = 'rgb('+ r + ', '+ g + ','+ b + ')';
}
//vaheta suuruse funktsioon
function changeSize (){ //w3schools
    console.log('muudan suuruse');
    var s = document.getElementById('clock');
    var sstyle = window.getComputedStyle(s, null).getPropertyValue('font-size');
    if (sstyle == "25px") {
        s.style.fontSize = "50px";
    } else{
        s.style.fontSize = "25px";
    }
}
//taustapildi funktsioon
var x = 0; //stackoverflow
var pics = ['plant.png', 'owl.png', 'blueberry.png'];
function changeBackground (){
    console.log('change background');
    var b = document.getElementById('mainbody');
    b.style.backgroundImage = 'url('+pics[(x++)%3]+')';
}

function onOffMusic (){
    var myAudio = document.getElementById("bgm");
    return myAudio.paused ? myAudio.play() : myAudio.pause();
}
//KELL
//näidendina kasutasin järgmise video: https://www.youtube.com/watch?v=EOePhBhyB88
function digitalClock(){
    //date metod
    const date = new Date();
    //muutujad
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var wd = new Array(7); //w3schools
    wd[0] =  "Sunday";
    wd[1] = "Monday";
    wd[2] = "Tuesday";
    wd[3] = "Wednesday";
    wd[4] = "Thursday";
    wd[5] = "Friday";
    wd[6] = "Saturday";
    var weekdays = wd[date.getDay()];
    var days = date.getDate();
    var mnth = new Array();
    mnth[0] = "January";
    mnth[1] = "February";
    mnth[2] = "March";
    mnth[3] = "April";
    mnth[4] = "May";
    mnth[5] = "June";
    mnth[6] = "July";
    mnth[7] = "August";
    mnth[8] = "September";
    mnth[9] = "October";
    mnth[10] = "November";
    mnth[11] = "December";
    var months = mnth[date.getMonth()];
    var years = date.getFullYear();
    //lisan nulli ette, kui numbrid on väiksem kui 10
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    //lisan tähendused HTMLi
    document.getElementById('hour').innerHTML = hours;
    document.getElementById('minute').innerHTML = ':' + minutes;
    document.getElementById('second').innerHTML = ':' + seconds;
    document.getElementById('weekday').innerHTML = weekdays;
    document.getElementById('day').innerHTML = days;
    document.getElementById('month').innerHTML = months;
    document.getElementById('year').innerHTML = years;
}
//kell automaatselt uueneb iga sekundi
setInterval(digitalClock, 1000);
