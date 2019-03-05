let posX = 100;
let posY = 100;
let rad = 100;
let d;
let music;
let amp;
let hour;
let minute;
let second;
let img;
let sizeSlider;
let xSlider;
let ySlider;
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function preload() {
    music = loadSound('assets/time.mp3');
}

function setup() {
    // Create the canvas
    createCanvas(window.innerWidth-25, window.innerHeight-131);
    //music.play();
    amp = new p5.Amplitude();
    img = loadImage('assets/play.png');
    moveLimit();
    loadLocal();
}

function draw() {
    background(0);
    d = new Date();
    second = Number(d.getSeconds()).toString(2);
    minute = Number(d.getMinutes()).toString(2);
    hour = Number(d.getHours()).toString(2);

    let current;
    for (let i = 0; i < 3; i ++) {
        if (i == 0) {
            current = hour;
        } else if (i == 1) {
            current = minute;
        } else {
            current = second;
        }
        while (current.length < 6) {
            current = "0" + current;
        }
        for (let j = 0; j < 6; j ++) {
            if (i == 0 && j == 0) {
                let newRad = rad + amp.getLevel()*200;
                image(img, posX-newRad/2, posY-newRad/2, newRad, newRad);
            } else {
                if (current.charAt(j) == "1") {
                    fill(166, 0, 10);
                } else {
                    fill(255);
                }
                ellipse(posX + j * 2*rad, posY + i * 2*rad, rad + amp.getLevel()*200);
            }
        }
    }
    document.getElementById("date").innerHTML = " | Today is: " + d.toISOString().slice(0,10) + ", " + days[d.getDay()];
}

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

function moveLimit() {
    document.getElementById("x").max = (window.innerWidth-25-11*rad).toString();
    document.getElementById("y").max = (window.innerHeight-120-5*rad).toString();
}

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
        size: rad
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
        document.getElementById("x").value = posX;
        document.getElementById("y").value = posY;
        document.getElementById("sizeR").value = rad;
    }
}
