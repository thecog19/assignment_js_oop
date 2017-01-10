var ASTEROIDS = ASTEROIDS || {}

ASTEROIDS.Asteroid = function(options) {
  options = options || {};

  this.x = options.x;
  this.y = options.y;
  this.vX = options.vX;
  this.vY = options.vY;
}

ASTEROIDS.Asteroid.prototype.tic = function() {
  this.x += this.vX;
  this.y += this.vY;
}