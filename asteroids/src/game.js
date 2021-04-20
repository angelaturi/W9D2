const Asteroid = require("./asteroid")

// How to DRY up following:

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 4;
Game.COLOR = "black";

function Game() {
    this.asteroids = [];

    this.addAsteroids();

}

Game.prototype.addAsteroids = function() {
    while (this.asteroids.length < Game.NUM_ASTEROIDS) {
        this.asteroids.push(
            new Asteroid( { pos: this.randomPosition(), game: this } )
        );
    }
}

Game.prototype.randomPosition = function () {
    const x = Math.random() * Game.DIM_X;
    const y = Math.random() * Game.DIM_Y;
    return {x: x, y: y};
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    ctx.fillStyle = Game.COLOR; 
    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach( function(asteroid) {
        asteroid.draw(ctx);
    })
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
        asteroid.move();
    })
}


Game.prototype.wrap = function(pos) {
    let wrapped_pos = {};

    const {x, y} = pos;

    if (x > Game.DIM_X) {
        wrapped_pos.x = 0; 
    } else if (x < 0) {
        wrapped_pos.x = Game.DIM_X;
    } else {
        wrapped_pos.x = x;
    }

    if (y > Game.DIM_Y) {
        wrapped_pos.y = 0; 
    } else if (y < 0) {
        wrapped_pos.y = Game.DIM_Y;
    } else {
        wrapped_pos.y = y;
    }

    return wrapped_pos; 
}

Game.prototype.checkCollisions = function () {
    for (let i = 0; i < this.asteroids.length; i++) {
        for (let j = i + 1; j < this.asteroids.length; j++) {
            if (this.asteroids[i].isCollidedWith(this.asteroids[j])) {
                alert("COLLISION!");
            } 
        }
    }
}

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove(asteroid) {
    const idx = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(idx, 1);
}

module.exports = Game; 