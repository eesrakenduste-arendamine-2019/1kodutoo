function Square (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.gravity = 10;
    this.acceleration = 0;

    this.update = function () {
        fill(255);
        rect(this.x, this.y, this.r, this.r);
        line(width, height-100, 0, height-100);
        if (height - this.y > 150) {
            this.y += this.gravity;
        } else {
            this.y = height - 150;
        }
        if (this.acceleration >= 0) {
            this.y -= this.acceleration;
            this.acceleration --;
        }
        for (let i = 0; i < enemies.length; i++) {
            if (Math.abs(enemies[i].y - this.y) < 50 && Math.abs(enemies[i].x - this.x) < 50) {
                gameOver = true;
            }
        }
    }
}

function Enemy (x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.speed = 10;

    this.update = function () {
        fill(0);
        rect(this.x, this.y, this.r, this.r);
        if (!gameOver) {
            this.x -= this.speed;
        }
    }
}

function keyPressed () {
    if (keyCode == 32 && square.acceleration <= 0) {
        if (gameOver) {
            showGame = true;
            enemies = [];
            spawnRate = 2000;
            lastSpawnTime = 0;
            gameOver = false;
            score = 0;
            square.acceleration = 23;
        } else {
            square.acceleration = 23;
        }
    }
}
