var ASTEROIDS = ASTEROIDS || {}

var Model = {

  asteroids: [],
  canvasDimensions: { x: 800, y: 800 },

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


    return params
  },

  cleanupAsteroids: function(){
    var indexes = []
    Model.asteroids.forEach(function(asteroid, index){
      var verticalEdge = false
      var horizontalEdge = false
      var overshot = false
      

      if(verticalEdge && horizontalEdge && overshot){
        indexes.push(index)
      }
    })
  // iterate over asteroids
  // if x delete, y delete and dir delete all true then delete asteroid
  //if asteroid x < 0 - asteroid.radius || x > canvas.x + asteroid.radius
  //  
  //if asteroid y same as above
  // verify vector
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
