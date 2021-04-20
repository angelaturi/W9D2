
const MovingObject = require("./moving_object");
const Ship = require("./ship");
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


Asteroid.prototype.collideWith = function(otherObject) {
  if (otherObject instanceof Ship) {
    otherObject.relocate(); 
  } //else if(otherObject instanceof Asteroid) {
    // super.collidWith(); 
  //}
}





module.exports = Asteroid; 