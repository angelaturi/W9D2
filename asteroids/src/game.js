const Asteroid = require("./asteroid");
const Ship = require("./ship");

// How to DRY up following:

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 4;
Game.COLOR = "black";

function Game() {
    this.asteroids = [];

    this.addAsteroids();
    this.ship = new Ship( { pos: this.randomPosition(), game: this } );
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

    this.allObjects().forEach( function(obj) {
        obj.draw(ctx);
    })
}

Game.prototype.moveObjects = function () {
    this.allObjects().forEach( function (obj) {
        obj.move();
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
    const allObjects = this.allObjects(); 
    // console.log(allObjects);
    // debugger

    for (let i = 0; i < allObjects.length; i++) {
        for (let j = i + 1; j < allObjects.length; j++) {
            if (allObjects[i].isCollidedWith(allObjects[j])) {
                allObjects[i].collideWith(allObjects[j]);
            } 
        }
    }
}

Game.prototype.step = function () {
    this.moveObjects();
    this.checkCollisions();
}

Game.prototype.remove = function(asteroid) {
    const idx = this.asteroids.indexOf(asteroid);
    this.asteroids.splice(idx, 1);
}

Game.prototype.allObjects = function() {
    return [].concat(this.asteroids, this.ship); 
}










module.exports = Game; 