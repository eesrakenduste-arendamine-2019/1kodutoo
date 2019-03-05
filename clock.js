let d = new Date();
let r = 250;
let slider;
let canvas;
let colorS = "#ffffff";
var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let pos = {
    x : window.outerHeight /1.093,
    y : window.outerWidth/4.39
};
let newPos = {
    x : pos.x,
    y :pos.y
};


window.onload = function clock () {
    slider = document.getElementById("range");
    canvas = document.getElementById("clock");
    document.documentElement.style.background = "#000000";
    draw();
    setInterval(draw, 1);
};

window.onresize = function() {
    //draw();
}

function getCoordinates (e) {
    newPos = {
        x : e.clientX,
        y : e.clientY
    };
    //console.log(newPos.x);
}

function changeRadius(val) {
  r = val;
  //console.log(r);
}

function changeColor(val) {
    document.documentElement.style.background = document.getElementById("color").value;
    colorS = document.getElementById("colorS").value;
}

function draw () {
    d = new Date();
    canvas.height = window.outerHeight-330;
    canvas.width = window.outerWidth-50;
    if (pos.x - newPos.x < 3 && newPos.x - pos.x < 3) {

    } else if (pos.x > newPos.x) {
        pos.x -=6;
    } else if (newPos.x > pos.x) {
        pos.x +=6;
    }
    if (pos.y - newPos.y < 3 && newPos.y - pos.y < 3) {

    } else if (pos.y > newPos.y) {
        pos.y -=3;
    } else if (newPos.y > pos.y) {
        pos.y +=3;
    }
    var ctx = canvas.getContext("2d");
    ctx.font = "25px Arial";
    ctx.fillStyle = colorS;

    let today = new Date().toISOString().slice(0, 10);
    let weekDay = days[d.getDay()];
    ctx.fillText(today, (pos.x)-60, (pos.y));
    ctx.fillText(weekDay, (pos.x)-40, (pos.y)+25);
    ctx.beginPath();
    ctx.arc(pos.x, pos.y-117, r, 0, 2 * Math.PI);
    for (var i = 0; i < 360; i+=30) {
        ctx.moveTo(r * Math.cos(i * Math.PI / 180)+pos.x, r * Math.sin(i * Math.PI / 180)+pos.y-116);
        ctx.lineTo(r*0.8 * Math.cos(i * Math.PI / 180)+pos.x, r*0.8 * Math.sin(i * Math.PI / 180)+pos.y-116);
    }
    ctx.strokeStyle = colorS;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
    // seconds
    ctx.beginPath();
    ctx.moveTo(-r*0.1 * Math.cos((d.getSeconds()-15)*6 * Math.PI / 180)+pos.x, -r*0.1 * Math.sin((d.getSeconds()-15)*6 * Math.PI / 180)+pos.y-115);
    ctx.lineTo(r/2 * Math.cos((d.getSeconds()-15)*6 * Math.PI / 180)+pos.x, r/2 * Math.sin((d.getSeconds()-15)*6 * Math.PI / 180)+pos.y-115);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();
    //console.log(d.getSeconds());
    // hours
    ctx.beginPath();
    ctx.moveTo(-r*0.1 * Math.cos((d.getHours()-3)*30 * Math.PI / 180)+pos.x, -r*0.1 * Math.sin((d.getHours()-3)*30 * Math.PI / 180)+pos.y-115);
    ctx.lineTo(r*0.33 * Math.cos((d.getHours()-3)*30 * Math.PI / 180)+pos.x, r*0.33 * Math.sin((d.getHours()-3)*30 * Math.PI / 180)+pos.y-115);
    // minutes
    ctx.moveTo(-r*0.1 * Math.cos((d.getMinutes()-15)*6 * Math.PI / 180)+pos.x, -r*0.1 * Math.sin((d.getMinutes()-15)*6 * Math.PI / 180)+pos.y-115);
    ctx.lineTo(r*0.66 * Math.cos((d.getMinutes()-15)*6 * Math.PI / 180)+pos.x, r*0.66 * Math.sin((d.getMinutes()-15)*6 * Math.PI / 180)+pos.y-115);
    ctx.strokeStyle = colorS;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
}


