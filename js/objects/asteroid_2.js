var ASTEROIDS = ASTEROIDS || {}

ASTEROIDS.Asteroid2 = function(options) {
  options = options || {};

  this.x = options.x;
  this.y = options.y;
  this.vX = options.vX;
  this.vY = options.vY;

  this.tic = function() {
    this.x += this.vX;
    this.y += this.vY;
  }
}
