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




module.exports = Ship; 