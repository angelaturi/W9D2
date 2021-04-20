const Game = require('./game');


function GameView(ctx, game) {
  this.ctx = ctx; 
  this.game = game; 
}

GameView.prototype.start = function() {
  const that = this; 

  setInterval(function() {
    that.game.step(); 
    that.game.draw(that.ctx)
  }, 20);


}



module.exports = GameView; 




