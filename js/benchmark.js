var ASTEROIDS = ASTEROIDS || {}

ASTEROIDS.Benchmark = function(asteroid) {
  var start = new Date()

  for (var i = 0; i < 10000; i++) {
    var ast = new asteroid({
      y: Math.floor(Math.random() * 10),
      vX: Math.floor(Math.random() * 10),
      vY: Math.floor(Math.random() * 10)
    });
    for (var j = 0; j < 10000; j++) {
      ast.tic();
    };
  }

  var end = new Date()
  var time = end.getTime() - start.getTime()
  console.log(time)
}
