

function MovingObject(options) {
  this.pos = options.pos; // object with key x,y
  this.vel = options.vel; // object with key x,y
  this.radius = options.radius; 
  this.color = options.color;
  this.game = options.game; 
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
  this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function (otherObject) {
  let dist_sq = ((this.pos.x - otherObject.pos.x) ** 2) + ((this.pos.y - otherObject.pos.y) ** 2);
  const dist = Math.sqrt(dist_sq);
  return (dist < (this.radius + otherObject.radius));
}

MovingObject.prototype.collideWith = function(otherObject) {
  this.game.remove(otherObject);
  this.game.remove(this);
}


module.exports = MovingObject;