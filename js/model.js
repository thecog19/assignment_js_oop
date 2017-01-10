var ASTEROIDS = ASTEROIDS || {}

var Model = {

  asteroids: [],
  canvasDimensions: { x: 800, y: 800 },

  generateAsteroidXY: function() {

  },

  randomPosNeg: function() {
    if (Math.random() < 0.5) { return 1 }
    return -1;
  },

  createAsteroids: function(numAsteroids) {
    for(var i = 0; i < numAsteroids; i++){
      var coords = {
        x: Math.floor(Math.random() * Model.canvasDimensions.x),
        y: Math.floor(Math.random() * Model.canvasDimensions.y),
        vX: Model.randomPosNeg() * (Math.floor(Math.random() * 10) + 1),
        vY: Model.randomPosNeg() * (Math.floor(Math.random() * 10) + 1),
        radius: Math.floor(Math.random() * 20)
      }
      Model.asteroids.push(new ASTEROIDS.Asteroid(coords))
    }
  },

  moveAsteroids: function(){
    this.asteroids.forEach(function(asteroid){
      asteroid.tic()
    })
  }

}
