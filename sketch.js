let posX = 100;
let posY = 100;
let rad = 100;
let width, height;
let d;
let music;
let amp;
let hour, minute, second;
let img;
let colorVal = 1;
let days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
let bodyStyle, dateText, sliderX, sliderY, sliderRad, sliderColor;

function preload() {
    music = loadSound('assets/time.mp3');
}

function setup() {
    width = window.innerWidth-25;
    height = window.innerHeight-162
    createCanvas(width, height);
    amp = new p5.Amplitude();
    img = loadImage('assets/play.png');
    bodyStyle = document.body.style;
    dateText = document.getElementById("date");
    sliderX = document.getElementById("x");
    sliderY = document.getElementById("y");
    sliderRad = document.getElementById("sizeR");
    sliderColor = document.getElementById("color");
    moveLimit();
    loadLocal();
}

function draw() {
    clear();
    //background(0);
    d = new Date();
    // converting integers to binary string using toString()
    second = Number(d.getSeconds()).toString(2);
    minute = Number(d.getMinutes()).toString(2);
    hour = Number(d.getHours()).toString(2);

    // drawing circles
    let current;
    for (let i = 0; i < 3; i ++) {
        if (i == 0) {
            current = hour;
        } else if (i == 1) {
            current = minute;
        } else {
            current = second;
        }
        // while binary digit count value is less than 6, add 0 in front
        while (current.length < 6) {
            current = "0" + current;
        }
        for (let j = 0; j < 6; j ++) {
            // first element is play button
            if (i == 0 && j == 0) {
                let newRad = rad + amp.getLevel()*200;
                image(img, posX-newRad/2, posY-newRad/2, newRad, newRad);
            } else {
                if (current.charAt(j) == "1") {
                    switch(colorVal) {
                        case 1:
                            fill(255, 247, 72);
                            bodyStyle.backgroundColor = "#3C1A5B";
                            break;
                        case 2:
                            fill(139, 216, 189);
                            bodyStyle.backgroundColor = "#243665";
                            break;
                        case 3:
                            fill(41, 95, 45);
                            bodyStyle.backgroundColor = "#FFE67C";
                            break;
                        case 4:
                            fill(235, 33, 136);
                            bodyStyle.backgroundColor = "#080A52";
                            break;
                        case 5:
                            fill(204, 243, 129);
                            bodyStyle.backgroundColor = "#4831D4";
                            break;
                        case 6:
                            fill(249, 97, 103);
                            bodyStyle.backgroundColor = "#FCE77D";
                            break;
                        case 7:
                            fill(223, 103, 140);
                            bodyStyle.backgroundColor = "#3D155F";
                            break;
                        default:
                    }
                } else {
                    fill(255);
                }
                strokeWeight(5);
                // drawing circle with radius, which is based on the amp level
                ellipse(posX + j * 2*rad, posY + i * 2*rad, rad + amp.getLevel()*200);
            }
        }
    }
    dateText.innerHTML = " | " + d.toISOString().slice(0,10) + " " + days[d.getDay()];
}

// detecting if play button is pressed
function mousePressed() {
    let d = dist(mouseX, mouseY, posX, posY);
    if (d < rad/2) {
        if (music.isPlaying()) {
            music.pause();
        } else {
            music.play();
        }
    }
}

function changeSize(e) {
    rad = parseInt(e);
    resetPos();
    moveLimit();
    saveLocal();
}

function changeX(e) {
    posX = parseInt(e);
    saveLocal();
}

function changeY(e) {
    posY = parseInt(e);
    saveLocal();
}

function changeColor(e) {
    colorVal = parseInt(e);
    saveLocal();
}

// limit the x and y value based on radius vale
function moveLimit() {
    sliderX.max = (width-11*rad).toString();
    sliderY.max = (height-5*rad).toString();
}

// reset pos if user is changing the x or y value
function resetPos() {
    posX = 100;
    posY = 100;
    sliderX.value = "100";
    sliderY.value = "100";
}

function saveLocal(){
    let obj = {
        x: posX,
        y: posY,
        size: rad,
        color: colorVal
    };
    localStorage.setItem('data', JSON.stringify(obj));
}

function loadLocal(){
    const localData = localStorage.getItem('data');
    if(localData){
        const data = JSON.parse(localStorage.getItem('data'));
        posX = data.x;
        posY = data.y;
        rad = data.size;
        colorVal = data.color;
        sliderX.value = posX;
        sliderY.value = posY;
        sliderRad.value = rad;
        sliderColor.value = colorVal;
    }
}
