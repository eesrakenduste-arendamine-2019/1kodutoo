/*jshint esversion:6*/
let hourContainer;
let minuteContainer;
let dateContainer;
let dayContainer;

window.onload = function () {
    init();
    
    $('#clockContainer').on('click', function() {
        if ($("#analogContainer").css('display') == 'none') {
            $('#clockDisp').fadeToggle(250, function() {
                setDelays();
                $('#analogContainer').fadeToggle(250);
            });
        } else {
            $('#analogContainer').fadeToggle(250, function() {
                setDelays();
                $('#clockDisp').fadeToggle(250);
            });
        }
    })

    //asendab analoog kella svg failid inline svg path'idega (et saaks fill'i muuta).
    //selle ma tegelikult võtsin stackOverflow'st otse.

    jQuery('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });

}

function init() {
    startClock();
    let colorMenuDiv = document.querySelector('.colorSelect');
    colorMenuDiv.addEventListener('mouseenter', colorGenerate);
    dragElement(document.getElementById("clockContainer"));
    
    setDelays();
    /* let amoeba1 = document.querySelector('body'); */
    /* amoeba1.addEventListener('click', clockTypeSwitch); */
}

function setDelays() {
    let date = new Date();
    //digital clock animation delays
    let seconds = date.getSeconds();
    let milliseconds = date.getMilliseconds();
    let hours = date.getHours();
    let minutes = date.getMinutes();

    let delaySeconds = -seconds + 's';
    clockBar.style.animationDelay = (delaySeconds);

    let delayMs = -5000 + ((seconds * 1000 + milliseconds) % 5000) + 'ms';
    bgPulse.style.animationDelay = delayMs;

    //analog clock animation delays
    let delayHours = -(hours * 3600 + minutes * 60 + seconds) + 's';
    let delayMinutes = -(minutes * 60 + seconds) + 's'

    
    let clockMin = document.getElementById('clockMin');
    let clockSec = document.getElementById('clockSec');
    
    clockSec.style.animationDelay = (delaySeconds);
    clockMin.style.animationDelay = (delayMinutes);
    clockHour.style.animationDelay = (delayHours);
    console.log("sec: " + delaySeconds);
    console.log("h: " + delayHours);
    console.log("min: " + delayMinutes);
}

/* let colorMenuDiv = document.querySelector('.colorSelect');
colorMenuDiv.addEventListener('hover', colorGenerate); */
class rndmColor {
    constructor(r, g, b) {
        this.red = r;
        this.green = g;
        this.blue = b;
    }
}

function switchClocktype() {
    $("#analogContainer").click(function () {
        $("#animated").addClass("off");
    });
    $("#clockContainer").click(function () {
        $("#animated").removeClass("off");
    });
}




function colorGenerate() {

    let colors = [];
    for (let i = 0; i < 5; i++) {
        let value1 = Math.round(Math.random() * 255);
        let value2 = Math.round(Math.random() * 255);
        let value3 = Math.round(Math.random() * 255);
        colors[i] = new rndmColor(value1, value2, value3);
    }

    for (let i = 0; i < 5; i++) {
        let colorButtonDiv = document.querySelector('#colBtn' + i);
       
        let divColor = 'rgb(' + colors[i].red + ',' + colors[i].green + ',' + colors[i].blue + ')';
        colorButtonDiv.style.backgroundColor = divColor;

        colorButtonDiv.addEventListener('click', changeBgColor);
    }

}

function changeBgColor() {
    document.body.style.backgroundColor = this.style.backgroundColor;
    document.querySelector('#clockDisp').style.color = this.style.backgroundColor;
    document.querySelector('#clockBarContainer').style.backgroundColor = this.style.backgroundColor;
    document.querySelector('#colorIcon').style.fill = this.style.backgroundColor;
    $('#analogContainer').find('path').css("fill", this.style.backgroundColor);
    $('#analogContainer').find('circle').css("fill", this.style.backgroundColor);
}

function startClock() {
    updateClock();
    window.setInterval(function () {
        updateClock();
    }, 100);
}


function updateClock() {
    let date = new Date();
    
    hourContainer = document.querySelector('#hours');
    minuteContainer = document.querySelector('#minutes');
    dateContainer = document.querySelector('#date');
    dayContainer = document.querySelector('#day');
    clockBar = document.querySelector('#clockBar');
    bgPulse = document.querySelector('.bgPulse');

    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (minutes < 10) {
        minutes = "0" + date.getMinutes();
    }
    if (hours < 10) {
        hours = "0" + date.getHours();
    }

    
    hourContainer.innerHTML = hours;
    minuteContainer.innerHTML = minutes;
    
    console.log(minutes);

    let day;
    function getDay() {
        switch (new Date().getDay()) {
            case 0:
                day = "Pühapäev";
                break;
            case 1:
                day = "Esmaspäev";
                break;
            case 2:
                day = "Teisipäev";
                break;
            case 3:
                day = "Kolmapäev";
                break;
            case 4:
                day = "Neljapäev";
                break;
            case 5:
                day = "Reede";
                break;
            case 6:
                day = "Laupäev";
                break;
        }
    }
    getDay();
    dayContainer.innerHTML = day;

    let monthDate = date.getDate();

    let month;
    function getMonth() {
        switch (new Date().getMonth()) {
            case 0:
                month = "Jaanuar";
                break;
            case 1:
                month = "Veebruar";
                break;
            case 2:
                month = "Märts";
                break;
            case 3:
                month = "Aprill";
                break;
            case 4:
                month = "Mai";
                break;
            case 5:
                month = "Juuni";
                break;
            case 6:
                month = "Juuli";
                break;
            case 7:
                month = "August";
                break;
            case 8:
                month = "September";
                break;
            case 9:
                month = "Oktoober";
                break;
            case 10:
                month = "November";
                break;
            case 11:
                month = "Detsember";
                break;
        }
    }
    getMonth();

    dateContainer.innerHTML = monthDate + ". " + month;
}


function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    
/*     elmnt.onmousedown = dragMouseDown; */
    document.getElementById(elmnt.id + "clockContainer").onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }

}