/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\")\n\nAsteroid.COLOR = 'gray'; \nAsteroid.RADIUS = 25; \nAsteroid.SPEED = 6;\n\nfunction Asteroid(options) {\n  MovingObject.call(this, options);\n  this.color = Asteroid.COLOR;\n  this.radius = Asteroid.RADIUS;\n  this.vel = Util.randomVec(Asteroid.SPEED); \n}\n\nUtil.inherits(Asteroid, MovingObject);\n\n\nAsteroid.prototype.collideWith = function(otherObject) {\n  if (otherObject instanceof Ship) {\n    otherObject.relocate(); \n  } //else if(otherObject instanceof Asteroid) {\n    // super.collidWith(); \n  //}\n}\n\n\n\n\n\nmodule.exports = Asteroid; \n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst Ship = __webpack_require__(/*! ./ship */ \"./src/ship.js\");\n\n// How to DRY up following:\n\nGame.DIM_X = 1000;\nGame.DIM_Y = 600;\nGame.NUM_ASTEROIDS = 4;\nGame.COLOR = \"black\";\n\nfunction Game() {\n    this.asteroids = [];\n\n    this.addAsteroids();\n    this.ship = new Ship( { pos: this.randomPosition(), game: this } );\n}\n\nGame.prototype.addAsteroids = function() {\n    while (this.asteroids.length < Game.NUM_ASTEROIDS) {\n        this.asteroids.push(\n            new Asteroid( { pos: this.randomPosition(), game: this } )\n        );\n    }\n}\n\nGame.prototype.randomPosition = function () {\n    const x = Math.random() * Game.DIM_X;\n    const y = Math.random() * Game.DIM_Y;\n    return {x: x, y: y};\n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n    ctx.fillStyle = Game.COLOR; \n    ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);\n\n    this.allObjects().forEach( function(obj) {\n        obj.draw(ctx);\n    })\n}\n\nGame.prototype.moveObjects = function () {\n    this.allObjects().forEach( function (obj) {\n        obj.move();\n    })\n}\n\n\nGame.prototype.wrap = function(pos) {\n    let wrapped_pos = {};\n\n    const {x, y} = pos;\n\n    if (x > Game.DIM_X) {\n        wrapped_pos.x = 0; \n    } else if (x < 0) {\n        wrapped_pos.x = Game.DIM_X;\n    } else {\n        wrapped_pos.x = x;\n    }\n\n    if (y > Game.DIM_Y) {\n        wrapped_pos.y = 0; \n    } else if (y < 0) {\n        wrapped_pos.y = Game.DIM_Y;\n    } else {\n        wrapped_pos.y = y;\n    }\n\n    return wrapped_pos; \n}\n\nGame.prototype.checkCollisions = function () {\n    const allObjects = this.allObjects(); \n    // console.log(allObjects);\n    // debugger\n\n    for (let i = 0; i < allObjects.length; i++) {\n        for (let j = i + 1; j < allObjects.length; j++) {\n            if (allObjects[i].isCollidedWith(allObjects[j])) {\n                allObjects[i].collideWith(allObjects[j]);\n            } \n        }\n    }\n}\n\nGame.prototype.step = function () {\n    this.moveObjects();\n    this.checkCollisions();\n}\n\nGame.prototype.remove = function(asteroid) {\n    const idx = this.asteroids.indexOf(asteroid);\n    this.asteroids.splice(idx, 1);\n}\n\nGame.prototype.allObjects = function() {\n    return [].concat(this.asteroids, this.ship); \n}\n\n\n\n\n\n\n\n\n\n\nmodule.exports = Game; \n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\nfunction GameView(ctx, game) {\n  this.ctx = ctx; \n  this.game = game; \n}\n\nGameView.prototype.start = function() {\n  const that = this; \n\n  setInterval(function() {\n    that.game.step(); \n    that.game.draw(that.ctx)\n  }, 20);\n\n\n}\n\n\n\nmodule.exports = GameView; \n\n\n\n\n\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\"); \nconst Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\nconst GameView = __webpack_require__(/*! ./game_view */ \"./src/game_view.js\");\nconst Game = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', function() {\n    // testing objects\n    window.MovingObject = MovingObject;\n    window.Asteroid = Asteroid; \n\n\n\n    const canvas = document.getElementById('game-canvas');\n    canvas.width = 1000;\n    canvas.height = 600;\n    const ctx = canvas.getContext('2d');\n\n    const game = new Game(); \n    const game_view = new GameView(ctx, game);\n\n    game_view.start(); \n\n\n\n    //testing MovingObject.draw()\n\n    // const pos = {x: 30, y: 30};\n    // const vel = {x: 10, y: 10};\n    // const radius = 30;\n    // const color = \"orange\";\n\n    // const mo = new MovingObject({pos, vel, radius, color});\n    // const ast = new Asteroid({pos: pos});\n\n    // ast.draw(ctx);\n})\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("\n\nfunction MovingObject(options) {\n  this.pos = options.pos; // object with key x,y\n  this.vel = options.vel; // object with key x,y\n  this.radius = options.radius; \n  this.color = options.color;\n  this.game = options.game; \n}\n\nMovingObject.prototype.draw = function(ctx) {\n  // debugger\n  ctx.beginPath();\n  ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI)\n  ctx.fillStyle = this.color;\n  ctx.fill();\n}\n\n\nMovingObject.prototype.move = function() {\n  this.pos.x += this.vel.x; \n  this.pos.y += this.vel.y; \n  this.pos = this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function (otherObject) {\n  let dist_sq = ((this.pos.x - otherObject.pos.x) ** 2) + ((this.pos.y - otherObject.pos.y) ** 2);\n  const dist = Math.sqrt(dist_sq);\n  return (dist < (this.radius + otherObject.radius));\n}\n\nMovingObject.prototype.collideWith = function(otherObject) {\n  // this.game.remove(otherObject);\n  // this.game.remove(this);\n}\n\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/ship.js":
/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\n\nShip.COLOR = \"blue\";\nShip.RADIUS = 25; \n\n\nfunction Ship(options) {\n  MovingObject.call(this, options);\n  this.color = Ship.COLOR; \n  this.radius = Ship.RADIUS; \n  this.vel = {x: 0, y: 0 }; \n}\n\nUtil.inherits(Ship, MovingObject);\n\nShip.prototype.relocate = function() {\n  this.pos = this.game.randomPosition(); \n  this.vel = {x: 0, y: 0 }; \n}\n\n\n\n\nmodule.exports = Ship; \n\n//# sourceURL=webpack:///./src/ship.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("\nconst Util = {\n  inherits(ChildClass, ParentClass) {\n    ChildClass.prototype = Object.create(ParentClass.prototype);\n    ChildClass.prototype.constructor = ChildClass;\n  },\n\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return {\n      x: vec[0] * m, \n      y: vec[1] * m\n    };\n  }\n\n \n}\n\n\n\nmodule.exports = Util;\n\n\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;