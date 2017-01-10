var ASTEROIDS = ASTEROIDS || {}

ASTEROIDS.Ship = function(options) {
  options = options || {};

  this.x = options.x;
  this.y = options.y;
  this.rotationRad = options.rotationRad || 0
  this.vX = options.vX || 0;
  this.vY = options.vY || 0;
  this.accel = options.accel || 0


}