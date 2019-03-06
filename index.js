/*jshint esversion:6*/
let clockContainer;
let dayContainer;
let now = new Date();
let seconds = now.getSeconds();
let minutes = now.getMinutes();
let hours = now.getHours();
let full = hours + ":" + minutes + ":" + seconds;


let changeColor;
window.onload = function(){
  init();
};

function init(){
    startClock();
    window.onload = addEventListener('click', changeBackgroundColor);
    moveText();

    //lihtalt funktsiooni nimi, kuna siis laheb kohe varv peale
}

function submit(){
  submitchoice = document.querySelector("#submit");
  submitchoice.addEventListener('click', changeTextSize);
  submitchoice.addEventListener('click', changeTextColor);

}

//init on porgrrammi töö väljakutsumiseks

function startClock(){
  clockContainer =
  document.querySelector('#clockContainer');//sama mis getElementById pmst #id .class
  upDateClock();
  window.setInterval(function(){//paneb kella tiksuma
    upDateClock();
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }

    let full = hours + ":" + minutes + ":" + seconds;
    clockContainer.innerHTML = full;
  },1000);//default on juba 1000ms

}

function upDateClock(){
  let now = new Date();
  let seconds = now.getSeconds();
  let minutes = now.getMinutes();
  let hours = now.getHours();
  if(minutes < 10){
    minutes = "0" + minutes;
  }
  if(hours < 10){
    hours = "0" + hours;
  }
  if(seconds < 10){
    seconds = "0" + seconds;
  }

  let full = hours + ":" + minutes + ":" + seconds;
  clockContainer.innerHTML = full;
  dayContainer = document.querySelector("#dayContainer");
  monthContainer = document.querySelector("#monthContainer");

  let day;
  let month;
  switch (now.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    break;

    default:
    day = "This kind of a day does not exist";
  }

    switch (now.getMonth()) {
      case 0:
      month = "Januar";
      break;
      case 1:
      month = "February";
      break;
      case 2:
      month = "March";
      break;
      case 3:
      month = "April";
      break;
      case 4:
      month = "May";
      break;
      case 5:
      month = "June";
      break;
      case 6:
      month = "July";
      break;
      case 7:
      month = "August";
      break;
      case 8:
      month = "September";
      break;
      case 9:
      month = "October";
      break;
      case 10:
      month = "November";
      break;
      case 11:
      month = "Decemeber";
      break;

      default:
      month = "This kind of month does not exist";


  }
  dayContainer.innerHTML = day;
  if(now.getDate() == 1){
    monthContainer.innerHTML = now.getDate() + "st "+ month;
}else if(now.getDate() == 2){
  monthContainer.innerHTML = now.getDate() + "nd " + month;
}else if(now.getDate() == 3){
  monthContainer.innerHTML = now.getDate() + "rd " + month;
}else{
  monthContainer.innerHTML = now.getDate() + "th " + month;
}

}

function changeTextSize(){
  let choice1 = document.querySelector("#changeclocksize").value;
  let choice2 = document.querySelector("#changedaysize").value;
  let choice3 = document.querySelector("#changemonthsize").value;
  let size1 = document.querySelector("#clockContainer");
  let size2 = document.querySelector("#dayContainer");
  let size3 = document.querySelector("#monthContainer");


  size1.style.fontSize = choice1 + "px";
  size2.style.fontSize = choice2 + "px";
  size3.style.fontSize = choice3 + "px";
}

function changeTextColor(){
  let choice1 = document.querySelector("#changeclockcolor").value;
  let choice2 = document.querySelector("#changedaycolor").value;
  let choice3 = document.querySelector("#changemonthcolor").value;

  let color1 = document.querySelector("#clockContainer");
  let color2 = document.querySelector("#dayContainer");
  let color3 = document.querySelector("#monthContainer");

  color1.style.color = choice1;
  color2.style.color = choice2;
  color3.style.color = choice3;

}

function moveText(){
	
choice = document.querySelector("#whole");

let gleft = 0;

window.addEventListener("keypress", function(e_Event){
  console.log(e_Event);
  if(e_Event.charCode == 119){
		  gleft -=10;
	  console.log("Kasutaja vajutas paremat noolt");
	  choice.style.top = gleft + "px";
	  if(gleft <= 0){
		  gleft -= 10;
	  }

    
  }else if(e_Event.charCode == 115){
	  gleft += 10;
      console.log("Kasutaja vajutas allanoolt");
      choice.style.top = gleft + "px";
      
  }else if(e_Event.charCode == 100){
	  gleft +=10;
	  console.log("Kasutaja vajutas paremat noolt");
	  choice.style.left = gleft + "px";
	  if(gleft <= 0){
		  gleft += 10;
	  }
	  
  }else if(e_Event.charCode == 97){
	  gleft -=10;
	  console.log("Kasutaja vajutas vasakut noolt");
	  choice.style.left = gleft + "px";
  }
});
}


function changeBackgroundColor(){
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  //document.body.style.backgroundColor = 'rgb('+ red + ',' + green+ ',' + blue + ')';
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

}



/*function getRandomColor(){
  var letters = '0123456789ABCDEF';
  var color = '#';
  for(var i = 0; i <6; i++){
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}
*/
