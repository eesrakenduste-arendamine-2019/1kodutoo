let posX = 100;
let posY = 100;
let rad = 100;
let width;
let height;
let d;
let music;
let amp;
let hour;
let minute;
let second;
let img;
let colorVal = 1;
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function preload() {
    music = loadSound('assets/time.mp3');
}

function setup() {
    width = window.innerWidth-25;
    height = window.innerHeight-162
    createCanvas(width, height);
    amp = new p5.Amplitude();
    img = loadImage('assets/play.png');
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
                            document.body.style.backgroundColor = "#3C1A5B";
                            break;
                        case 2:
                            fill(139, 216, 189);
                            document.body.style.backgroundColor = "#243665";
                            break;
                        case 3:
                            fill(41, 95, 45);
                            document.body.style.backgroundColor = "#FFE67C";
                            break;
                        case 4:
                            fill(235, 33, 136);
                            document.body.style.backgroundColor = "#080A52";
                            break;
                        case 5:
                            fill(204, 243, 129);
                            document.body.style.backgroundColor = "#4831D4";
                            break;
                        case 6:
                            fill(249, 97, 103);
                            document.body.style.backgroundColor = "#FCE77D";
                            break;
                        case 7:
                            fill(223, 103, 140);
                            document.body.style.backgroundColor = "#3D155F";
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
    document.getElementById("date").innerHTML = " | " + d.toISOString().slice(0,10) + " " + days[d.getDay()];
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
    document.getElementById("x").max = (width-11*rad).toString();
    document.getElementById("y").max = (height-5*rad).toString();
}

// reset pos if user is changing the x or y value
function resetPos() {
    posX = 100;
    posY = 100;
    document.getElementById("x").value = "100";
    document.getElementById("y").value = "100";
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
        document.getElementById("x").value = posX;
        document.getElementById("y").value = posY;
        document.getElementById("sizeR").value = rad;
        document.getElementById("color").value = colorVal;
    }
}
