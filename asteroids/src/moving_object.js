

function MovingObject(options) {
  this.pos = options.pos; // object with key x,y
  this.vel = options.vel; // object with key x,y
  this.radius = options.radius; 
  this.color = options.color;
}

MovingObject.prototype.draw = function(ctx) {
  // debugger
  ctx.beginPath();
  ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI)
  ctx.fillStyle = this.color;
  ctx.fill();
}


MovingObject.prototype.move = function() {
  this.pos.x += this.vel.x; 
  this.pos.y += this.vel.y; 
}






module.exports = MovingObject;