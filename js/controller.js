var Controller = {
  init: function(){
    Model.init(15);
    View.init(Model.canvasDimensions)
    setInterval(Controller.gameLoop, 100);
  },

  gameLoop: function(){
    View.renderCanvas(Model.canvasDimensions);
    View.displayShip(Model.ship, Model.canvasDimensions);
    View.displayAsteroids(Model.asteroids);
    Model.moveAsteroids();
    Model.cleanupAsteroids();
  }

}

$(document).ready(function() {
  Controller.init();
});
