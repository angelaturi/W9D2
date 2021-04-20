const MovingObject = require('./moving_object'); 
const Asteroid = require('./asteroid');
const GameView = require('./game_view');
const Game = require('./game');


document.addEventListener('DOMContentLoaded', function() {
    // testing objects
    window.MovingObject = MovingObject;
    window.Asteroid = Asteroid; 



    const canvas = document.getElementById('game-canvas');
    canvas.width = 1000;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');

    const game = new Game(); 
    const game_view = new GameView(ctx, game);

    game_view.start(); 



    //testing MovingObject.draw()

    // const pos = {x: 30, y: 30};
    // const vel = {x: 10, y: 10};
    // const radius = 30;
    // const color = "orange";

    // const mo = new MovingObject({pos, vel, radius, color});
    // const ast = new Asteroid({pos: pos});

    // ast.draw(ctx);
})
