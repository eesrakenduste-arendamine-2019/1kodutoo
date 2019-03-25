/*jshint esversion:6*/


window.onload = function() {
    init()
}

function init() {
    setDelays();
    /* let amoeba1 = document.querySelector('body'); */
    /* amoeba1.addEventListener('click', clockTypeSwitch); */
}

function setDelays() {
    let date = new Date();
    //digital clock animation delays
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let delaySeconds = -seconds;

    
    //analog clock animation delays
    let delayHours = -(hours * 3600 + minutes * 60 + seconds);
    let delayMinutes = -(minutes * 60 + seconds);


    let clockMin = document.getElementById('clockMin');
    let clockSec = document.getElementById('clockSec');

    clockSec.style.animationDelay = (delaySeconds + 's');
    clockMin.style.animationDelay = (delayMinutes + 's');
    clockHour.style.animationDelay = (delayHours + 's');
    console.log("sec: " + delaySeconds);
    console.log("h: " + delayHours/3600);
    console.log("min: " + delayMinutes/60);
}
