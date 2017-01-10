var Controller = {
  init: function(){
    Model.init(80);
    View.init(Model.canvasDimensions)
    setInterval(Controller.gameLoop, 100);
  },

  gameLoop: function(){
    View.renderCanvas(Model.canvasDimensions);
    View.displayShip(Model.ship, Model.canvasDimensions);
    View.displayAsteroids(Model.asteroids);
    Model.updateShipPosition();
    Model.moveAsteroids();
    Model.cleanupAsteroids();
  },

  shipAction: function(event){
    Model.moveShip(event.keyCode)
  }
}

$(document).ready(function() {
  
  
  Controller.init();
});
