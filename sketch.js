// clock
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
let clock;
// game
let square;
let lastSpawnTime = 0;
let spawnRate = 2000;
let enemies = [];
let gameOver = true;
let showGame = false;
let score = 0;
let scoreBoard;

function preload() {
    music = loadSound('assets/time.mp3');
}

function setup() {
    // clock
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
    scoreBoard = document.getElementById("score");
    moveLimit();
    loadLocal();
    clock = new Clock(posX, posY, rad);
    // game
    square = new Square(width/2.5, height-150, 50);
}

function draw() {
    clear();
    //background(0);
    // clock
    d = new Date();
    // converting integers to binary string using toString()
    second = Number(d.getSeconds()).toString(2);
    minute = Number(d.getMinutes()).toString(2);
    hour = Number(d.getHours()).toString(2);

    dateText.innerHTML = " | " + d.toISOString().slice(0,10) + " " + days[d.getDay()];

    // rendering clock
    clock.x = posX;
    clock.y = posY;
    clock.r = rad;
    clock.render();
    // game
    if (showGame) {
        // spawning an enemy and increasing spawnRate
        if (lastSpawnTime < d.getTime() && !gameOver) {
            spawnRate -= 5;
            lastSpawnTime = d.getTime() + spawnRate;
            let rnd = Math.floor((Math.random() * 2) + 1);
            enemies.push(new Enemy(width, height- 100 - 50 * rnd, 50));
            score ++;
            scoreBoard.innerHTML = score.toString();
        }
        // rendering game objecys
        square.update();
        for (let i = 0; i < enemies.length; i++) {
            enemies[i].update();
        }
        // delete old enemies
        if (enemies[0].x < -100) {
            enemies.splice(0, 1);
        }
    }
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

// saving clock data
function saveLocal(){
    let obj = {
        x: posX,
        y: posY,
        size: rad,
        color: colorVal
    };
    localStorage.setItem('data', JSON.stringify(obj));
}

// loading clock data
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
