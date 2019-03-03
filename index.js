/*jshint esversion: 6*/

let formattedTime;
let formattedWeekDay;
let formattedDate;

let clockText;
let weekDayText;
let dateText;

let clockSize;
let weekDaySize;
let dateSize;

let textColorPicker;
let textColorButton;

let bgColorPicker;
let bgColorButton;

let clockFontPicker;

let increaseFontButton;
let decreaseFontButton;

window.onload = function() {
    forceHttps();
    init();
};

function init(){
    // Initialize HTML element selectors
    clockText = document.querySelector("#clockText");
    weekDayText = document.querySelector("#weekDayText");
    dateText = document.querySelector("#dateText");

    textColorPicker = document.querySelector("#textColorPicker");
    textColorButton = document.querySelector("#textColorButton");
    bgColorPicker = document.querySelector("#bgColorPicker");
    bgColorButton = document.querySelector("#bgColorButton");
    clockFontPicker = document.querySelector("#clockFontPicker");
    increaseFontButton = document.querySelector("#increaseFontButton")
    decreaseFontButton = document.querySelector("#decreaseFontButton")

    // Add events to elements
    textColorPicker.addEventListener('input', (event) => {
        setTextColor(textColorPicker.value);
    });
    textColorButton.addEventListener('click', randomizeTextColor);

    bgColorPicker.addEventListener('input', (event) => {
        setBackgroundColor(bgColorPicker.value);
    });
    bgColorButton.addEventListener('click', randomizeBackgroundColor);

    clockFontPicker.addEventListener('input', (event) => {
        setBodyFont(clockFontPicker.selectedIndex);
    });

    increaseFontButton.addEventListener('click', function() {
        changeFontSizes("+");
    });
    decreaseFontButton.addEventListener('click', function() {
        changeFontSizes("-");
    });

    startClock();
    getColors();
}

function forceHttps(){
    if (location.protocol == 'http:'){
        location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
    }
}

function rgbToHex(rgb){
    // https://stackoverflow.com/a/33511903
    let hex = '#' + rgb.substr(4, rgb.indexOf(')') - 4).split(',').map((color) => 
                    parseInt(color).toString(16)).join('');
    return hex;
}

function setBackgroundColor(hex){
    console.log(`Background color changed to ${hex}`);
    
    document.body.style.backgroundColor = hex;
}

function setTextColor(hex){
    console.log(`Text color changed to ${hex}`);

    clockText.style.color = hex;
    weekDayText.style.color = hex;
    dateText.style.color = hex;
}

function randomizeBackgroundColor(){
    const r = randomColor();
    const g = randomColor();
    const b = randomColor();

    console.log(`Background color changed to ` + rgbToHex(`rgb(${r},${g},${b})`));

    document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
    getColors();
}

function randomizeTextColor(){
    const r = randomColor();
    const g = randomColor();
    const b = randomColor();

    console.log(`Text color changed to ` + rgbToHex(`rgb(${r},${g},${b})`));

    clockText.style.color = `rgb(${r},${g},${b})`;
    weekDayText.style.color = `rgb(${r},${g},${b})`;
    dateText.style.color = `rgb(${r},${g},${b})`;
    getColors();
}

function changeFontSizes(modifier){
    getFontSizes();

    let size = 1.5;

    if(modifier == "+"){
        clockText.style.fontSize = clockSize * size + "px";
        weekDayText.style.fontSize = weekDaySize * size + "px";
        dateText.style.fontSize = dateSize * size + "px";
    }
    else if (modifier == "-"){
        clockText.style.fontSize = clockSize / size + "px";
        weekDayText.style.fontSize = weekDaySize / size + "px";
        dateText.style.fontSize = dateSize / size + "px";
    }
}

function setBodyFont(selection) {
    // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_fontfamily2
    var listValue = clockFontPicker.options[selection].text;
    document.body.style.fontFamily = listValue;
  }

function startClock(){
    window.setInterval(function(){
        const date = new Date();
        updateClock();

        // Custom time, weekday and date formats using system time
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
        let timeFormat = { hour: 'numeric', minute: 'numeric' };
        let weekDayFormat = { weekday: 'long' };
        let dateFormat = { day: 'numeric', month: 'long', year: 'numeric' };

        formattedTime = date.toLocaleString("et-EE", timeFormat); 
        formattedWeekDay = date.toLocaleDateString("et-EE", weekDayFormat);
        formattedDate = date.toLocaleString("et-EE", dateFormat);
    }, 1000); // 1000 ms = 1 s
}

function getColors(){
    textColorPicker.value = rgbToHex(clockText.style.color);
    bgColorPicker.value = rgbToHex(document.body.style.backgroundColor);
}

function getFontSizes(){
    clockSize = parseInt((window.getComputedStyle(clockText).fontSize).replace("px",""));
    weekDaySize = parseInt((window.getComputedStyle(weekDayText).fontSize).replace("px",""));
    dateSize = parseInt((window.getComputedStyle(dateText).fontSize).replace("px",""));
}

function updateClock() {
    clockText.innerHTML = formattedTime;
    weekDayText.innerHTML = formattedWeekDay;
    dateText.innerHTML = formattedDate;
    document.title = formattedTime;
}

function randomColor(){
    return Math.round(Math.random()*255);
}

