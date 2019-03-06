// Muutujate deklareerimine
let d = new Date();
let r = 250;
let slider;
let video;
let btn;
let canvas;
let hidden = true;
let isFullscreen;
let footer;
let container;
let colorS = "#ffffff";
let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
let backgrounds = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
let imgCount = 0;
let pos = {
    x : window.outerHeight /1.093,
    y : window.outerWidth/4.39
};
let newPos = {
    x : pos.x,
    y :pos.y
};


// Funktsionaalsus, mis peab jooksma peale lehe laadimist
window.onload = function clock () {
    footer = document.getElementById("footer");
    container = document.getElementById("container");
    slider = document.getElementById("range");
    canvas = document.getElementById("clock");
    video = document.getElementById("videoBg");
    btn = document.getElementById("btn");
    document.documentElement.style.background = "#000000";
    draw();
    setInterval(draw, 1);
};


// Funktsioon tagastab koordinaadid
function getCoordinates (e) {
    newPos = {
        x : e.clientX,
        y : e.clientY
    };
    //console.log(newPos.x);
}

// Funktsioon muudab raadiust
function changeRadius(val) {
  r = val;
  //console.log(r);
}

// Funktsioon vahetab kella värvi
function changeColor(val) {
    document.documentElement.style.background = document.getElementById("color").value;
    colorS = document.getElementById("colorS").value;
    document.body.style.backgroundImage = "none";
}

// Funktsioon jookseb iga millisekund, matemaatiline osa on tehtud polaarkoordinaatides, mida hiljuti õppisime, ilmselt tekitab palju küsimusi.
function draw () {
    d = new Date();
    canvas.height = window.outerHeight;
    canvas.width = window.outerWidth;
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
    let ctx = canvas.getContext("2d");
    ctx.font = "25px Arial";
    ctx.fillStyle = colorS;

    let weekDay = days[d.getDay()];
    let today = new Date().toISOString().slice(0, 10);
    ctx.fillText(today, (pos.x)-60, (pos.y)+5);
    ctx.fillText(weekDay, (pos.x)-40, (pos.y)-20);
    ctx.beginPath();
    // Joonistatakse kellaring
    ctx.arc(pos.x, pos.y-117, r, 0, 2 * Math.PI);
    // For-tsükkel joonistab kellale tunnikriipsud
    for (let i = 0; i < 360; i+=30) {
        ctx.moveTo(r * Math.cos(i * Math.PI / 180)+pos.x, r * Math.sin(i * Math.PI / 180)+pos.y-116);
        ctx.lineTo(r*0.8 * Math.cos(i * Math.PI / 180)+pos.x, r*0.8 * Math.sin(i * Math.PI / 180)+pos.y-116);
    }
    ctx.strokeStyle = colorS;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
    // Joonistab sekundiseierit
    ctx.beginPath();
    ctx.moveTo(-r*0.1 * Math.cos((d.getSeconds()-15)*6 * Math.PI / 180)+pos.x, -r*0.1 * Math.sin((d.getSeconds()-15)*6 * Math.PI / 180)+pos.y-115);
    ctx.lineTo(r/2 * Math.cos((d.getSeconds()-15)*6 * Math.PI / 180)+pos.x, r/2 * Math.sin((d.getSeconds()-15)*6 * Math.PI / 180)+pos.y-115);
    ctx.strokeStyle = "red";
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.stroke();
    //console.log(d.getSeconds());

    // Joonistab tunniseierit
    ctx.beginPath();
    ctx.moveTo(-r*0.1 * Math.cos(((d.getHours()+d.getMinutes()/60)-3)*30 * Math.PI / 180)+pos.x, -r*0.1 * Math.sin(((d.getHours()+d.getMinutes()/60)-3)*30 * Math.PI / 180)+pos.y-115);
    ctx.lineTo(r*0.33 * Math.cos(((d.getHours()+d.getMinutes()/60)-3)*30 * Math.PI / 180)+pos.x, r*0.33 * Math.sin(((d.getHours()+d.getMinutes()/60)-3)*30 * Math.PI / 180)+pos.y-115);
    
    // Joonistab minutiseierit
    ctx.moveTo(-r*0.1 * Math.cos((d.getMinutes()-15)*6 * Math.PI / 180)+pos.x, -r*0.1 * Math.sin((d.getMinutes()-15)*6 * Math.PI / 180)+pos.y-115);
    ctx.lineTo(r*0.66 * Math.cos((d.getMinutes()-15)*6 * Math.PI / 180)+pos.x, r*0.66 * Math.sin((d.getMinutes()-15)*6 * Math.PI / 180)+pos.y-115);
    ctx.strokeStyle = colorS;
    ctx.lineWidth = 10;
    ctx.lineCap = "round";
    ctx.stroke();
}


// Funktsioon näitab ja peidab videot nupule vajutades
  function showVideo() {
    if (video.paused) {
        video.play();
        if (!isFullscreen) {
            toggleFullscreen(btn.event);
        }
        btn.innerHTML = "Pause";
        video.style.display = "block";
      } else {
        video.pause();
        document.cancelFullScreen();
        video.style.display = "none";
        btn.innerHTML = "Play";
        
      }
    }

    /* Kood võetud- https://gist.github.com/demonixis/5188326 - Funktsioon paneb nupule klikkides Browseri Fullscreeni.*/
    function toggleFullscreen(event) {
        let element = document.body;
          if (event instanceof HTMLElement) {
              element = event;
          }
          isFullscreen = document.webkitIsFullScreen || document.mozFullScreen || false;
          element.requestFullScreen = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || function () { return false; };
          document.cancelFullScreen = document.cancelFullScreen || document.webkitCancelFullScreen || document.mozCancelFullScreen || function () { return false; };
          isFullscreen ? document.cancelFullScreen() : element.requestFullScreen();
      }

    /* Funktsioon peidab slaideri, footer jms */ 
    function hideMenu(){
        if (hidden) {
            hidden = false;
            container.style.zIndex = "-3";
            container.style.display = "none";
            footer.style.display = "none";
            hideBtn.innerHTML = 'Show';
        } else {
            hidden = true;
            container.style.zIndex = "1";
            container.style.display = "block";
            footer.style.display = "block";
            hideBtn.innerHTML = 'Hide';

        }
    }

    /* Funktsioon vahetab taustapilti */
    function bgChange() {
        if (imgCount >= backgrounds.length){
            imgCount = 0;
        }
        document.body.style.backgroundImage = "url(background/" + backgrounds[imgCount] + ")";
        imgCount++;

    }


