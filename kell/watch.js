let bgColor = localStorage.getItem('bgcolor');
document.body.style.backgroundColor = bgColor;


window.onload = function(){
    init();
    localStorageTest();
    let txtColor = localStorage.getItem('txtcolor');
    document.getElementById("quote").style.color = txtColor;
}

function init(){
    createClock();
}


function createClock(){
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    let session  = "AM";
    if(hour == 0){
        hour = 12;
    }
    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    
    let time = hour + ":" + minute + ":" + second + " " + session;

    document.getElementById("quote").innerText = time;
    document.getElementById("quote").textContent = time;

    setTimeout(createClock, 1000);
}

function openNav() {
    document.getElementById("sidenav").style.width = "250px";
    // document.getElementById("quote").style.marginLeft = "50px";
  }
  
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    // document.getElementById("quote").style.marginLeft = "0";
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

function changeSize(){
    let size = document.getElementById('input').value;
    size = 60 + (size)*10
    console.log(size);
    document.getElementById('quote').style.fontSize = size + "px";
}

function moveRightUp(){
    document.getElementById("quote").style.top= "15%";
    document.getElementById("quote").style.left = "85%";
}

function moveLeftUp(){
    document.getElementById("quote").style.top = "15%";
    document.getElementById("quote").style.left = "15%";
}

function moveMiddle(){
    let elem = document.getElementById("quote").style;
    elem.top = "50%";
    elem.left = "50%";
}
function moveRightDown(){
    document.getElementById("quote").style.top = "85%";
    document.getElementById("quote").style.left = "85%";    
}

function moveLeftDown(){
    document.getElementById("quote").style.top = "85%";
    document.getElementById("quote").style.left = "15%";    
}

