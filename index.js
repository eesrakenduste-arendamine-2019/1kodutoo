let clockContainer;
let changeColorButton;
let dayContainer;


window.onload = function()
{
  tictac();
  changeColorButton = document.querySelector('#change-color');
  changeColorButton.addEventListener('click', changeBackgroundColor);
  document.getElementById("animController").addEventListener("click", toggleAnimation);

}
function suuruseMuut(){
	var image = document.getElementById('kellakast');
	image.style.width = "130%";
	image.style.height = "130%";
}

function toggleAnimation(){
    if  (document.getElementById("clock").style.animationPlayState == "paused"){
         document.getElementById("clock").style.animationPlayState = "running";
	
    } else {
		document.getElementById("clock").style.animationPlayState = "paused";
        document.getElementById("animController").value = "taaskäivita kella liikumine";

    }
}

/*function suuruseMuut2(){
	var image = document.getElementById('kellakast');
	image.style.width = "100%";
	image.style.height = "100%";
}*/

function moveseierid(){
	document.getElementById("clockface").style.left="175px"
	document.getElementById("clockface").style.top="175px"	
}

/*function tagasieierid(){
	document.getElementById("clockface").style.left="1110px"
	document.getElementById("clockface").style.top="1110px"	
}*/

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
  dd = '0' + dd;
}

if (mm < 10) {
  mm = '0' + mm;
}

today = mm + '/' + dd + '/' + yyyy;
document.write(today);

function tictac()
{
    let timeNow = new Date();
    let secondNow = timeNow.getSeconds();
    let minuteNow = timeNow.getMinutes();
    let hourNow = timeNow.getHours();
    let secAngle = secondNow * 6;
    let minAngle = minuteNow * 6 + secondNow / 10;
    let hourAngle = hourNow * 30 + minuteNow / 2;
    document.getElementById("secondhand").style.transform = "rotate(" + secAngle + "deg)";
    document.getElementById("minutehand").style.transform = "rotate(" + minAngle + "deg)";
    document.getElementById("hourhand").style.transform = "rotate(" + hourAngle + "deg)";
    requestAnimationFrame(tictac);
}


function changeBackgroundColor(){
  const red = Math.round(Math.random()*255);
  const green = Math.round(Math.random()*255);
  const blue = Math.round(Math.random()*255);
  document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
