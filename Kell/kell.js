let clock = document.getElementById('clock');
let greeting = document.getElementById('greeting');

function tellTime() {
  let time = new Date();
  let hours = (time.getHours() % 12).toString();
  let minutes = time.getMinutes().toString();
  let seconds = time.getSeconds().toString();

  if (hours.length < 2) {
    hours = '0' + hours;
  }

  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }

  if (seconds.length < 2) {
    seconds = '0' + seconds;
  }

  let clockStr = hours + ' : ' + minutes + ' : ' + seconds;

  clock.textContent = clockStr;
}

tellTime();
setInterval(tellTime, 1000);

function Backgrnd1(){
    document.getElementById("page").style.backgroundImage = "url('taust.jpg')";
}

function Backgrnd2(){
    document.getElementById("page").style.backgroundImage = "url('taust2.jpeg')";
}

function Backgrnd3(){
    document.getElementById("page").style.backgroundImage = "url('Aeg.jpg')";
}

document.getElementById("clock").onmouseover = function() {mouseOver()};
document.getElementById("clock").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.getElementById("clock").style.color = "black";
}

function mouseOut() {
    document.getElementById("clock").style.color = "white";
}

document.getElementById("clock").onclick = function() {redClock()};

function redClock() {
    document.getElementById("clock").style.color = "red";
}

function greetMe() {
    let time = new Date();
    let hours = (time.getHours());
    let greetStr = '';

    if (hours >= 18 && hours <= 22) {
        let greetStr = 'Good evening, Eric.';
        greeting.textContent = greetStr;
    }
    if (hours > 22 || hours < 5) {
        let greetStr = 'Good night, Eric..';
        greeting.textContent = greetStr;
    }
    if (hours >= 5 && hours < 12) {
        let greetStr = 'Good morning, Eric!';
        greeting.textContent = greetStr;
    }
    if (hours >= 12 && hours < 18) {
        let greetStr = 'Good afternoon, Eric.';
        greeting.textContent = greetStr;
    }

}

greetMe();
setInterval(greetMe, 1000);

function tellDate(){
    
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];
    const d = new Date();
    let day = d.getDate();
    let dayEnd = day.toString().split('').pop();

    if(dayEnd == 4 || 5 || 6 || 7 || 8 || 9 || 0){
        date.textContent = "Today is the " + day + "th of " + monthNames[d.getMonth()];
    }
    
    if(dayEnd == 1){
        date.textContent = "Today is the " + day + "st of " + monthNames[d.getMonth()];
    }
    
    if(dayEnd == 2){
        date.textContent = "Today is the " + day + "nd of " + monthNames[d.getMonth()];
    }

    if(dayEnd == 3){
        date.textContent = "Today is the " + day + "rd of " + monthNames[d.getMonth()];
    }

    
}

tellDate();




