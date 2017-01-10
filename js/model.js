var ASTEROIDS = ASTEROIDS || {}
var SHIP = SHIP || {}

var Model = {

  asteroids: [],
  canvasDimensions: { x: 800, y: 800 },
  ship: undefined,

  init: function(num){
    Model.ship = new ASTEROIDS.Ship({
      x: Model.canvasDimensions.x/2,
      y: Model.canvasDimensions.y/2
    });
    Model.createAsteroids(num);
  },

  generateAsteroidParams: function() {
    var params = {
      vX: Model.randomPosNeg() * (Math.floor(Math.random() * 10) + 1),
      vY: Model.randomPosNeg() * (Math.floor(Math.random() * 10) + 1),
      radius: Math.floor(Math.random() * 20)
    }

    if(params.vX > 0 && params.vY > 0){
      params.x = 0 - params.radius
      params.y = Math.floor(Math.random() * Model.canvasDimensions.y)
    }else if(params.vX < 0 && params.vY < 0){
      params.x = Model.canvasDimensions.x + params.radius
      params.y = Math.floor(Math.random() * Model.canvasDimensions.y)
    }else if(params.vX < 0 && params.vY > 0){
      params.x = Math.floor(Math.random() * Model.canvasDimensions.x)
      params.y = 0 - params.radius
    }else{
      params.x = Math.floor(Math.random() * Model.canvasDimensions.x)
      params.y = Model.canvasDimensions.y + params.radius
    }

    params.startingX = params.x;
    params.startingY = params.y;

    return params
  },

  cleanupAsteroids: function(){ // TODO: refactor
    Model.asteroids.forEach(function(asteroid){

      var leftEdge = false
      var rightEdge = false
      var topEdge = false
      var bottomEdge = false;
      var overshot = false

      if (asteroid.x < 0 - asteroid.radius) {
        leftEdge = true;
      }
      if (asteroid.x > Model.canvasDimensions.x + asteroid.radius) {
        rightEdge = true;
      }

      if (asteroid.y < 0 - asteroid.radius) {
        topEdge = true;
      }
      if (asteroid.y > Model.canvasDimensions.y + asteroid.radius) {
        bottomEdge = true;
      }

      if (asteroid.vX > 0 && asteroid.vY > 0 && (rightEdge || bottomEdge)) {
        overshot = true;
      }
      if (asteroid.vX < 0 && asteroid.vY < 0 && (leftEdge || topEdge)) {
        overshot = true;
      }
      if (asteroid.vX > 0 && asteroid.vY < 0 && (rightEdge || topEdge)) {
        overshot = true;
      }
      if (asteroid.vX < 0 && asteroid.vY > 0 && (leftEdge || bottomEdge)) {
        overshot = true;
      }

      if (overshot) {
        asteroid.x = asteroid.startingX;
        asteroid.y = asteroid.startingY;
      };
    });
  },

  randomPosNeg: function() {
    if (Math.random() < 0.5) { return 1 }
    return -1;
  },

  createAsteroids: function(numAsteroids) {
    for(var i = 0; i < numAsteroids; i++){
      Model.asteroids.push(new ASTEROIDS.Asteroid(Model.generateAsteroidParams()))
    }
  },

  moveAsteroids: function(){
    this.asteroids.forEach(function(asteroid){
      asteroid.tic()
    })
  }

}
