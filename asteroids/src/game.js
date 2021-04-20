const Asteroid = require("./asteroid")

// How to DRY up following:

Game.DIM_X = 600;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 7;

function Game() {
    this.asteroids = [];

    this.addAsteroids();

}

Game.prototype.addAsteroids = function() {
    while (this.asteroids.length < Game.NUM_ASTEROIDS) {
        this.asteroids.push(new Asteroid({pos: this.randomPosition()}));
    }
}

Game.prototype.randomPosition = function () {
    const x = Math.random() * Game.DIM_X;
    const y = Math.random() * Game.DIM_Y;
    return {x: x, y: y};
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);

    this.asteroids.forEach( function(asteroid) {
        asteroid.draw(ctx);
    })
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(function (asteroid) {
        asteroid.move();
    })
}