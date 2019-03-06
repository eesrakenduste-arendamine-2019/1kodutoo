window.onload = function(){
    localStorageTest();
}

function localStorageTest(){
  let test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch(e) {
    return false;
  }
}

if(localStorage.bgcolor) {
  document.body.style.backgroundColor = localStorage.bgcolor;
}

if(localStorage.txtcolor){
  document.getElementById("quote").style.color = localStorage.txtcolor;
}

function createDark() {
  let bgColor = localStorage.bgcolor || 'white'; 
  bgColor = 'black';
  document.body.style.backgroundColor = bgColor;
  let txtColor = localStorage.txtcolor;
  txtColor = 'white';
  document.getElementById("quote").style.color = txtColor;
  localStorage.setItem('bgcolor', document.body.style.color = bgColor);
  localStorage.setItem('txtcolor', document.getElementById("quote").style.color = txtColor);
}

function createLight(){
  let bgColor = localStorage.bgcolor || 'white'; 
  bgColor = '#eee';
  document.body.style.backgroundColor = '#eee';
  let txtColor = localStorage.txtcolor;
  txtColor = 'black';
  document.getElementById("quote").style.color = txtColor;
  localStorage.setItem('bgcolor', document.body.style.color = bgColor);
  localStorage.setItem('txtcolor', document.getElementById("quote").style.color = txtColor);
}
function createVintage(){
  let bgColor = localStorage.bgcolor || 'white'; 
  bgColor = '#c9af98';
  document.body.style.backgroundColor = bgColor;
  let txtColor = localStorage.txtcolor;
  txtColor = '#3a4660';
  document.getElementById("quote").style.color = txtColor;
  localStorage.setItem('bgcolor', document.body.style.color = bgColor);
  localStorage.setItem('txtcolor', document.getElementById("quote").style.color = txtColor);
}
function createRandom(){
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    console.log(red, green, blue);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
}
function goWatch(){
    window.location = 'watch.html';
}
