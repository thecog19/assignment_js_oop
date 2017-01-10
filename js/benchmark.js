var ASTEROIDS = ASTEROIDS || {}

ASTEROIDS.Benchmark = function() {
  for (var i = 0; i < 100; i++) {
    var ast = new ASTEROIDS.asteroid({
      y: Math.floor(Math.random() * 10),
      vX: Math.floor(Math.random() * 10),
      vY: Math.floor(Math.random() * 10)
    });
    for (var i = 0; i < 100; i++) {
      ast.tic();
    };
  }
}
