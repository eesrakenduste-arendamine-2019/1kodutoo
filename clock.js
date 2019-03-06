// function to display time
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    h = checkTime(h);
    m = checkTime(m);

    var d = today.getDay();
    d = checkDay(d);

    document.querySelector("#clock-time").innerHTML = h + "&nbsp; : &nbsp;" + m;
    var t = setTimeout(startTime, 500);
}

// function to check if 0 is needed
function checkTime(i) {
    if ( i < 10) {
        i = "0" + i;
    }
    return i;
};

// function for day display
function whatDay() {
    var today = new Date();
    var d = today.getDay();
    console.log(typeof(d));
    d = checkDay(d);
    console.log(typeof(d));
    document.querySelector("#day").innerHTML = d;

}

// function to check number and turn it into a string
function checkDay(i) {
    if ( i == 1) {
        i = "Monday";
    }
    else if ( i == 2) {
        i = "Tuesday";
    }
    else if (i == 3) {
        i = "Wednesday";
    }
    else if (i == 4) {
        i = "Thursday";
    }
    else if (i == 5){
        i = "Friday";
    }
    else if (i == 6) {
        i = "Saturday";
    }
    else {
        i = "Sunday"
    }
    return i;
}

// function to display todays date
function whatDate(){
    var today = new Date();
    var day_date = today.getDate();
    console.log(day_date);
    var month_date = today.getMonth();
    console.log(month_date);
    var year_date = today.getFullYear();
    console.log(year_date);

    month_date = checkMonth(month_date);
    console.log(month_date);

    document.querySelector("#date").innerHTML = day_date + "." + month_date + "." + year_date;

}

// check if month is valid
function checkMonth(i){

    if( i == 0){
        i = "0" + 1;
    }
    else if ( i == 1){
        i = "0" + 2;
    }
    else if ( i == 2){
        i = "0" + 3;
    }
    else if ( i == 3){
        i = "0" + 4;
    }
    else if ( i == 4){
        i = "0" + 5;
    }
    else if ( i == 5){
        i = "0" + 6;
    }
    else if ( i == 6){
        i = "0" + 7;
    }
    else if ( i == 7){
        i = "0" + 8;
    }
    else if ( i == 8){
        i = "0" + 9;
    }
    else if ( i == 9){
        i = 10;
    }
    else if ( i == 10){
        i = 11;
    }
    else if ( i == 11){
        i = 12;
    }

    return i;
}



// how the website works
const website = document.body;
let menuicon = document.querySelector(".menu-icon");
const menubox = document.querySelector(".menubox");
const container = document.querySelector(".container");
const reverse = document.querySelector("#reverse");
const reverseAll = document.querySelector("#reverseAll")

const white_open = "assets/menu-creative-open-white.svg";
const white_close = "assets/menu-creative-close-white.svg";
const black_open = "assets/menu-creative-open-black.svg";
const black_close = "assets/menu-creative-close-black.svg";

const timeSize = document.querySelector("#clock-time");
const dateSize = document.querySelector("#date");
const daySize = document.querySelector("#day");

const clockSize = document.querySelector("#smallerClock");
const compGeeks = document.querySelector("#computerGeeks");
const emptyContainer = document.querySelector("#emptyContainer");

website.id = "black";
container.style.visibility = "visible";

menuicon.addEventListener("click", function(){
    
    // if the background is black
    if(website.id == "black"){

        // open menu box and change the icon
        if(container.style.visibility === "visible"){
            container.style.visibility = "hidden";
            menuicon.src = white_close;
            menubox.style.visibility = "visible";
        } else {
            menuicon.src = white_open;
            menubox.style.visibility = "hidden";
            container.style.visibility = "visible";
        }

        reverse.addEventListener("click", function(){
            //change background to white and change body id to white
            website.style.backgroundColor = "white";
            website.id = "white";
            
            // change all items to black
            container.style.color = "black";
            menubox.style.color = "black";

            // close menubox, change menu icon and reveal container
            menuicon.src = black_open;
            menubox.style.visibility = "hidden";
            container.style.visibility = "visible";
        })

    } 

    //if the background is white
    else {

        if(container.style.visibility === "visible"){
            container.style.visibility = "hidden";
            menuicon.src = black_close;
            menubox.style.visibility = "visible";
        } else {
            menuicon.src = black_open;
            menubox.style.visibility = "hidden";
            container.style.visibility = "visible";
        }

        reverse.addEventListener("click", function(){
            //change background to white and change body id to white
            website.style.backgroundColor = "black";
            website.id = "black";
            
            // change all items to white
            container.style.color = "white";
            menubox.style.color = "white";

            // close menubox, change menu icon and reveal container
            menuicon.src = white_open;
            menubox.style.visibility = "hidden";
            container.style.visibility = "visible";
        })
    }

    //other functions
    reverseAll.addEventListener("click",reverseEverything);
    clockSize.addEventListener("click", smallerClock);
    compGeeks.addEventListener("click", computerGeeks);

})


function reverseEverything() { //this changes everything back to normal
    //change website id to black
    website.id = "black";
    //change background to black
    website.style.backgroundColor = "black";
    //change text to white
    container.style.color = "white";
    menubox.style.color = "white";
    //change menuicon to white
    menuicon.src = white_open;
    //close container
    menubox.style.visibility = "hidden";
    container.style.visibility = "visible";
    //change clock size to normal again
    timeSize.style.fontSize = "8vw";
    dateSize.style.fontSize = "2vw";
    daySize.style.fontSize = "2vw";
    //reverse all font settings back to normal
    website.style.fontFamily = "'Rock Salt', cursive";
}

function computerGeeks(){
    website.style.fontFamily = "'VT323', monospace";
    menubox.style.visibility = "hidden";
    container.style.visibility = "visible";
    timeSize.style.fontSize = "12vw";
    dateSize.style.fontSize = "4vw";
    daySize.style.fontSize = "4vw";
    changeIconToOpen();

}

function smallerClock(){

    //close menu and open clock
    menubox.style.visibility = "hidden";
    container.style.visibility = "visible";

    console.log("hello")
    timeSize.style.fontSize = "5vw";
    dateSize.style.fontSize = "1vw";
    daySize.style.fontSize = "1vw";

    //change menu icon to open
    changeIconToOpen();

}

function changeIconToOpen(){
    if(website.id == "black"){
        menuicon.src = white_open;
    } else {
        menuicon.src = black_open;
    }
}

// to run all functions
whatDay();
checkDay();
whatDate();
