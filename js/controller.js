var Controller = {
  init: function(){
    View.init(Model.canvasDimensions)
    Model.createAsteroids(15);
    setInterval(Controller.gameLoop, 100);
  },

  gameLoop: function(){
    View.renderCanvas(Model.canvasDimensions);
    View.displayAsteroids(Model.asteroids);
    Model.moveAsteroids();
    Model.cleanupAsteroids();
  }

}

$(document).ready(function() {
  Controller.init();
});
