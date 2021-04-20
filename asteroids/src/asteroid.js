
const MovingObject = require("./moving_object")
const Util = require("./util")

Asteroid.COLOR = 'gray'; 
Asteroid.RADIUS = 25; 
Asteroid.SPEED = 6;

function Asteroid(options) {
  MovingObject.call(this, options);
  this.color = Asteroid.COLOR;
  this.radius = Asteroid.RADIUS;
  this.vel = Util.randomVec(Asteroid.SPEED); 
}

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid; 