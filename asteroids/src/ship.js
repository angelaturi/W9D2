const Bullet = require('./bullet');
const MovingObject = require('./moving_object');
const Util = require('./util');

Ship.COLOR = "blue";
Ship.RADIUS = 25; 


function Ship(options) {
  MovingObject.call(this, options);
  this.color = Ship.COLOR; 
  this.radius = Ship.RADIUS; 
  this.vel = {x: 0, y: 0 }; 
}

Util.inherits(Ship, MovingObject);

Ship.prototype.relocate = function() {
  this.pos = this.game.randomPosition(); 
  this.vel = {x: 0, y: 0 }; 
}


Ship.prototype.power = function(impulse) {
  this.vel.x += impulse.x;
  this.vel.y += impulse.y;
}


Ship.prototype.fireBullet = function() {
  // construct bullet instance
  const bullet = new Bullet({pos: this.pos, color: this.color, vel: this.vel}); 

}





module.exports = Ship; 