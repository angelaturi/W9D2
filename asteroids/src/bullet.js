const MovingObject = require('./moving_object');

Bullet.RADIUS = 2; 
Bullet.SPEED = 15; 

function Bullet(options) {
  MovingObject.call(this, options);
  this.radius = Bullet.RADIUS; 
  this.vel = { x: ((this.vel.x / this.vel.x) * Bullet.SPEED), y: ((this.vel.y / this.vel.y) * Bullet.SPEED) }; 

}


Util.inherits(Bullet, MovingObject);



module.exports = Bullet; 