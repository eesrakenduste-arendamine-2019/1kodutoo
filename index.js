/*jshint esversion: 6*/

// Custom time, weekday and date formats using system time
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
const timeFormat = { hour: 'numeric', minute: 'numeric' };
const weekDayFormat = { weekday: 'long' };
const dateFormat = { day: 'numeric', month: 'long', year: 'numeric' };

window.onload = function () {
    forceHttps();
    init();
};

function init() {
    // Initialize HTML element selectors
    const clockText = document.querySelector("#clockText");
    const weekDayText = document.querySelector("#weekDayText");
    const dateText = document.querySelector("#dateText");

    const textColorPicker = document.querySelector("#textColorPicker");
    const textColorButton = document.querySelector("#textColorButton");
    const bgColorPicker = document.querySelector("#bgColorPicker");
    const bgColorButton = document.querySelector("#bgColorButton");
    const clockFontPicker = document.querySelector("#clockFontPicker");
    const increaseFontButton = document.querySelector("#increaseFontButton");
    const decreaseFontButton = document.querySelector("#decreaseFontButton");

    // Add events to elements
    textColorPicker.addEventListener('input', (event) => {
        setTextColor(textColorPicker.value);
    });
    textColorButton.addEventListener('click', (event) => {
        randomizeElementColor(textColorPicker);
    });

    bgColorPicker.addEventListener('input', () => {
        setBackgroundColor(bgColorPicker.value);
    });
    bgColorButton.addEventListener('click', (event) => {
        randomizeElementColor(bgColorPicker);
    });

    clockFontPicker.addEventListener('input', () => {
        setBodyFont(clockFontPicker.selectedIndex);
    });

    increaseFontButton.addEventListener('click', () => {
        changeFontSizes(true);
    });
    decreaseFontButton.addEventListener('click', () => {
        changeFontSizes(false);
    });

    startClock();

    function setBackgroundColor(hex) {
        console.log(`Background color changed to ${hex}`);
        document.body.style.backgroundColor = hex;
    }

    function setTextColor(hex) {
        console.log(`Text color changed to ${hex}`);
        clockText.style.color = hex;
        weekDayText.style.color = hex;
        dateText.style.color = hex;
    }

    function randomizeElementColor(element){
        element.value = getRandomColorHex();
        triggerInputEvent(element);
    }

    function changeFontSizes(increase) {
        const multiplier = 1.5;
        if (increase) {
            increaseFontSize(clockText, multiplier);
            increaseFontSize(weekDayText, multiplier);
            increaseFontSize(dateText, multiplier);
        } else {
            decreaseFontSize(clockText, multiplier);
            decreaseFontSize(weekDayText, multiplier);
            decreaseFontSize(dateText, multiplier);
        }
    }

    function setBodyFont(selection) {
        // https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_fontfamily2
        const listValue = clockFontPicker.options[selection].text;
        document.body.style.fontFamily = listValue;
    }

    function startClock() {
        window.setInterval(function () {
            updateClock(new Date());
        }, 1000); // 1000 ms = 1 s
    }

    function updateClock(date) {
        const formattedTime = date.toLocaleString("et-EE", timeFormat);
        const formattedWeekDay = date.toLocaleDateString("et-EE", weekDayFormat);
        const formattedDate = date.toLocaleString("et-EE", dateFormat);
        clockText.innerHTML = formattedTime;
        weekDayText.innerHTML = formattedWeekDay;
        dateText.innerHTML = formattedDate;
        document.title = formattedTime;
    }   

    function getFontSize(element) {
        const fontSize = window.getComputedStyle(element).fontSize;
        if (!fontSize)
            return null;
        return parseInt(fontSize.replace("px", ""));
    }

    function setFontSize(element, size) {
        element.style.fontSize = `${size}px`;
    }

    function increaseFontSize(element, multiplier) {
        const maxPx = 500;
        const currentSize = getFontSize(element);
        if (!currentSize || currentSize > 500)
            return;
        setFontSize(element, currentSize * multiplier);
    }

    function decreaseFontSize(element, multiplier) {
        const minPx = 3;
        const currentSize = getFontSize(element);
        if (!currentSize || currentSize < minPx)
            return;
        setFontSize(element, currentSize / multiplier);
    }
}

function forceHttps() {
    // Ensures that the Greeny page is loaded over HTTPS - https://stackoverflow.com/a/4597085
    if (window.location.href.indexOf("greeny.cs.tlu.ee") != -1) {
        if (location.protocol == 'http:'){
            location.href = 'https:' + window.location.href.substring
                                       (window.location.protocol.length);
       }
    }
}

function triggerInputEvent(element) {
    // https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Creating_and_triggering_events
    element.dispatchEvent(new Event("input", {
        bubbles: true
    }));
}

function getRandomColorRgb() {
    // https://stackoverflow.com/a/2917197
    return {
        r: randomColorComponent(),
        g: randomColorComponent(),
        b: randomColorComponent()
    };
}

function randomColorComponent() {
    return Math.round(Math.random() * 255);
}

function getRandomColorHex() {
    return rgbToHex(getRandomColorRgb());
}

function componentToHex(c) {
    // https://stackoverflow.com/a/5624139
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(rgb) {
    return "#" + componentToHex(rgb.r) + componentToHex(rgb.g) + componentToHex(rgb.b);
}