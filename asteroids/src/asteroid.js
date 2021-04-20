
const MovingObject = require("./moving_object")
const Util = require("./util")

Asteroid.COLOR = 'gray'; 
Asteroid.RADIUS = 25; 

function Asteroid(options) {
  MovingObject.call(this, options);
  this.color = Asteroid.COLOR;
  this.radius = Asteroid.RADIUS;
  this.vel = Util.randomVec(8); 
}

Util.inherits(Asteroid, MovingObject);


module.exports = Asteroid; 