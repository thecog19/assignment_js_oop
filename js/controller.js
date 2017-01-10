var Controller = {
  init: function(){
    View.init(Model.canvasDimensions)
    Model.createAsteroids(1);
    setInterval(Controller.gameLoop, 1000);
  },

  gameLoop: function(){
    View.displayAsteroids(Model.asteroids);
    Model.moveAsteroids();
  }
  
}
