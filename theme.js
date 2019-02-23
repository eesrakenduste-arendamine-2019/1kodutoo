/*jshint esversion: 6*/
let activeTheme = 0;
let clock;
let activefSize = 1;

function changeTheme(){
    clock = document.querySelector(".dateAndTime");

    switch(activeTheme){
        case 0:
            document.body.style.backgroundImage = "url('backgrounds/theme2.jpg')";
            document.getElementById("clockContainer").style.fontFamily = 'beach';
            document.getElementById("dateContainer").style.fontFamily = 'beach';
            document.getElementById("dayContainer").style.fontFamily = 'beach';
            document.getElementById("author").style.fontFamily = 'beach';
            activeTheme = 1;
            break;
        case 1:
            document.body.style.backgroundImage = "url('backgrounds/theme3.jpg')";
            document.getElementById("clockContainer").style.fontFamily = 'lcd-clock';
            document.getElementById("dateContainer").style.fontFamily = 'lcd-clock';
            document.getElementById("dayContainer").style.fontFamily = 'lcd-clock';
            document.getElementById("author").style.fontFamily = 'lcd-clock';
            activeTheme = 2;
            break;
        case 2:
            document.body.style.backgroundImage = "url('backgrounds/theme1.jpg')";
            document.getElementById("clockContainer").style.fontFamily = 'digital-clock-font';
            document.getElementById("dateContainer").style.fontFamily = 'digital-clock-font';
            document.getElementById("dayContainer").style.fontFamily = 'digital-clock-font';
            document.getElementById("author").style.fontFamily = 'digital-clock-font';
            activeTheme = 0;
            break;
    }
}

function changeFontSize(){
    clock = document.querySelector(".dateAndTime");

    switch(activefSize){
        case 0:
            document.getElementById("clockContainer").style.fontSize = '90%';
            document.getElementById("dateContainer").style.fontSize = '40%';
            document.getElementById("dayContainer").style.fontSize = '40%';
            activefSize = 1;
            break;
        case 1:
            document.getElementById("clockContainer").style.fontSize = '120%';
            document.getElementById("dateContainer").style.fontSize = '60%';
            document.getElementById("dayContainer").style.fontSize = '60%';
            activefSize = 2;
            break;
        case 2:
            document.getElementById("clockContainer").style.fontSize = '60%';
            document.getElementById("dateContainer").style.fontSize = '20%';
            document.getElementById("dayContainer").style.fontSize = '20%';
            activefSize = 0;
            break;
    }
}