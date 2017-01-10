var ASTEROIDS = ASTEROIDS || {}

var Model = {

  asteroids: [],
  canvasDimensions: {x: 200, y: 200},

  createAsteroids: function(numAsteroids) {
    for(var i = 0; i < numAsteroids; i++){
      var coords = {
       x: Math.floor(Math.random() * 100),
       y: Math.floor(Math.random() * 100),
      vX: Math.floor(Math.random() * 10),
      vY: Math.floor(Math.random() * 10),
      radius: 1
      }
      Model.asteroids.push(new ASTEROIDS.Asteroid(coords))
    }
  },

  moveAsteroids: function(){
    asteroids.forEach(function(asteroid){
      asteroid.tic()
    })
  }

}
