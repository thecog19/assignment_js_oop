var View = {
  context: undefined,

  init: function(canvasDimensions){
    View.context = $("canvas")[0].getContext("2d");
    View.renderCanvas(canvasDimensions);
  },

  renderCanvas: function(canvasDimensions){
    $("canvas")
    .attr("width", canvasDimensions.x )
    .attr("height", canvasDimensions.y)
    View.context.fillRect(0,0, canvasDimensions.x, canvasDimensions.y);

  },

  displayAsteroids: function(asteroids){
    asteroids.forEach(function(asteroid){
      View.displayAsteroid(asteroid);
    } )
  },

  displayAsteroid: function(asteroid){
    View.context.strokeStyle = "#fff"
    View.context.lineWidth = 5
    View.context.beginPath()
    View.context.arc(asteroid.x,asteroid.y,asteroid.radius,0,2*Math.PI)
    View.context.closePath()
    View.context.stroke()
    View.context.fill()
  },

  displayShip: function(ship){
    View.context.strokeStyle = "#fff"
    View.context.lineWidth = 10;
    View.context.beginPath();
    View.context.moveTo(10, 10);
    View.context.lineTo(10, 30);
    View.context.lineTo(30, 30);
    View.context.closePath();
    View.context.stroke();
    View.context.fill()
  }
  
}
