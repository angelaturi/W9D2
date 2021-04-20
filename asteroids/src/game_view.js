const Game = require('./game');



function GameView(ctx, game) {
  this.ctx = ctx; 
  this.game = game; 
}

GameView.prototype.start = function() {
  const that = this; 
  this.bindKeyHandlers(); 

  setInterval(function() {
    that.game.step(); 
    that.game.draw(that.ctx)
  }, 20);

}



GameView.prototype.bindKeyHandlers = function() {
  const ship = this.game.ship; 
  
  key('a', function() { ship.power( { x: -1, y: 0} ) });
  key('d', function() { ship.power( { x: 1, y: 0} ) });
  key('w', function() { ship.power( { x: 0, y: -1} ) });
  key('s', function() { ship.power( { x: 0, y: 1} ) });
}

// key('a', function(){ alert('you pressed a!') });



module.exports = GameView; 




