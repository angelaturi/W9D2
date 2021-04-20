const MovingObject = require('./moving_object'); 
const Asteroid = require('./asteroid');
const GameView = require('./game_view');
const Game = require('./game');


document.addEventListener('DOMContentLoaded', function() {
    // testing objects
    window.MovingObject = MovingObject;



    const canvas = document.getElementById('game-canvas');
    canvas.width = 600;
    canvas.height = 600;
    const ctx = canvas.getContext('2d');
})
