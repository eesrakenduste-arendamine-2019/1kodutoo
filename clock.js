function Clock (x, y, r) {
    this.y = y;
    this.x = x;
    this.r = r;

    // clock render function
    this.render = function () {
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
            let newRad;
            for (let j = 0; j < 6; j ++) {
                // first element is play button
                if (i == 0 && j == 0) {
                    newRad = this.r + amp.getLevel() * 200 + square.acceleration;
                    image(img, this.x-newRad/2, posY-newRad/2, newRad, newRad);
                } else {
                    // detecting color theme
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
                    // drawing circle with radius, which is based on the amp level and the height of the game character
                    newRad = this.r + amp.getLevel() * 200 + square.acceleration;
                    ellipse(this.x + j * 2*this.r, posY + i * 2*this.r, newRad);
                }
            }
        }
    }
}

// changing rad
function changeSize(e) {
    rad = parseInt(e);
    resetPos();
    moveLimit();
    saveLocal();
}

// changing posX
function changeX(e) {
    posX = parseInt(e);
    saveLocal();
}

// changing posY
function changeY(e) {
    posY = parseInt(e);
    saveLocal();
}

// changing color
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
