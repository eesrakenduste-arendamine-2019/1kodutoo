/*jshint esversion: 6 */
let date;
let clock;
let hours;
let minutes;
let seconds;
let actualDay;
let dayOfMonth;
let weekDays;
let test;

window.onload = function(){
  clockInfo();
  
  let containerCss = document.querySelector('.container');
  let bodyCss = document.querySelector('body');
  
  containerCss.style.marginTop = "30vh";
  containerCss.style.fontSize = "80px";
  containerCss.style.color = "white";
  containerCss.style.textShadow = "3px 3px 1px yellow, 6px 6px 1px orange";
  bodyCss.style.backgroundColor = "black";
  bodyCss.style.cursor = "progress";
  
  window.setInterval(function(){
    clockInfo();
  }, 100);
};

function clockInfo(){

    date = new Date();

    weekDays = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
    months = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];

    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    if (hours < 10){
      hours = "0" + hours;
    }
    if (minutes < 10){
      minutes = "0" + minutes;
    }
    if (seconds < 10){
      seconds = "0" + seconds;
    }

    actualDay = date.getDay();
    dayOfMonth = date.getDate();
    month = date.getMonth();
    year = date.getFullYear();

    clock = document.querySelector('#clock');

    document.querySelector('#hours').innerHTML = hours;
	document.querySelector('#hoursminutes').innerHTML = ":";
    document.querySelector('#minutes').innerHTML = minutes;
	document.querySelector('#minutesseconds').innerHTML = ":";
    document.querySelector('#seconds').innerHTML = seconds;

    document.querySelector('#day').innerHTML = weekDays[actualDay];

    if (dayOfMonth < 10){
      dayOfMonth = "0" + dayOfMonth;
    }

    document.querySelector('#date').innerHTML = dayOfMonth + ". " + months[month] + " " + year;

}

function nextElement(array, element, index){
	return array[(array.indexOf(element) + index) % array.length];
}

function calculateSemiColon(input1, input2, input3){
	let one = document.querySelector(input1).style.fontSize;
	let two = document.querySelector(input2).style.fontSize;
	
	let check = document.querySelector('.container');
	
	if(!two && check){
		two = check.style.fontSize;
	}
	if (!one && check){
		one = check.style.fontSize;
	}
	
	let three = ((parseInt(two) + parseInt(one))/2);
	
	document.querySelector(input3).style.fontSize = three.toString() + "px";
	
}

function changeFontSize(what, howMuch){

  let base = document.querySelector(what);
  let check = document.querySelector('.container');
  if (base.style.fontSize == ""){
    if (check.style.fontSize){
      base.style.fontSize = check.style.fontSize;
    } else {
      base.style.fontSize = "10px";
    }
  }
  
  var oldStyle = parseInt(base.style.fontSize);
  oldStyle = oldStyle + howMuch;
  if (oldStyle <= 0){
    oldStyle = 10;
  } else if (oldStyle >= 400){
    oldStyle = 390;
  }
  var newStyle = base.style.fontSize = oldStyle.toString() + "px";
  
  
  if (what == "#hours"){
	  calculateSemiColon("#hours", "#minutes", "#hoursminutes");
  } else if (what == "#minutes"){
	  calculateSemiColon("#hours", "#minutes", "#hoursminutes");
	  calculateSemiColon("#minutes", "#seconds", "#minutesseconds");
  } else if (what == "#seconds"){
	  calculateSemiColon("#minutes", "#seconds", "#minutesseconds");
  }

}

function clockUpDown(howMuch){
  let base = document.querySelector('.container');
  if (base.style.marginTop == ""){
    base.style.marginTop = "0vh";
  }
  console.log(base.style.marginTop);

  var oldStyle = parseInt(base.style.marginTop);
  console.log(oldStyle);
  oldStyle += howMuch;
  console.log(oldStyle);
  if (oldStyle <= 0){
    oldStyle = 0;
  } else if (oldStyle >= 90){
    oldStyle = 90;
  }

  var newStyle = base.style.marginTop = oldStyle.toString() + "vh";
}

function clockLeftRight(howMuch){
  let base = document.querySelector('.container');
  if (base.style.marginLeft == ""){
    base.style.marginLeft = "0%";
  }

  var oldStyle = parseInt(base.style.marginLeft);
  oldStyle += howMuch;

  var newStyle = base.style.marginLeft = oldStyle.toString() + "%";
}

function changeFont(){
  let base = document.querySelector('.container');
  if (base.style.fontFamily == ""){
    base.style.fontFamily = "Marlett";
  }

  let fontMassif = ["Arial", "Calibri", "Cambria", "Impact", "Ebrima", "Marlett", "SimSun", "Sylfaen", "Symbol"];
  
  base.style.fontFamily = nextElement(fontMassif, base.style.fontFamily, 1);
}

function changeColour(){
  let base = document.querySelector('.container');
  let body = document.querySelector('body');

  let colorMassif = ["black", "white", "purple", "yellow", "violet", "hotpink", "blue", "cyan", "grey", "green"];

  let index = 1;
    
  if (nextElement(colorMassif, base.style.color, index) == nextElement(colorMassif, body.style.backgroundColor, index-1)){
	  index = 2;
  } 
  
  base.style.color = nextElement(colorMassif, base.style.color, index);
}

function changeBackgroundColour(){
	let base = document.querySelector('.container');
	let body = document.querySelector('body');
  
	let colorMassif = ["white", "black", "purple", "yellow", "violet", "hotpink", "blue", "cyan", "grey", "green"];

	let index = 1;
    
	if (nextElement(colorMassif, body.style.backgroundColor, index) == nextElement(colorMassif, base.style.color, index-1)){
	  index = 2;
	} 

	body.style.backgroundColor = nextElement(colorMassif, body.style.backgroundColor, index);
  
}

function changeShadow(){
	let base = document.querySelector('.container');
	
	let colorMassif = ["purple 3px 3px 1px, yellow 6px 6px 1px", "yellow 3px 3px 1px, orange 6px 6px 1px", "orange 3px 3px 1px, red 6px 6px 1px", "red 3px 3px 1px, purple 6px 6px 1px"];
	
	base.style.textShadow = nextElement(colorMassif, base.style.textShadow, 1);
}

function changeCursor(){
	let base = document.querySelector('body');
	
	let cursorMassif = ["all-scroll", "crosshair", "help", "not-allowed", "text", "wait", "zoom-in", "zoom-out", "progress"];
	
	base.style.cursor = nextElement(cursorMassif, base.style.cursor, 1);
}
