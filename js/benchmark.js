var ASTEROIDS = ASTEROIDS || {}

ASTEROIDS.Benchmark = function() {
  var start = new Date()
  for (var i = 0; i < 1000; i++) {
    console.log("running! time = " + i)
    var ast = new ASTEROIDS.Asteroid({
      y: Math.floor(Math.random() * 10),
      vX: Math.floor(Math.random() * 10),
      vY: Math.floor(Math.random() * 10)
    });
    for (var j = 0; j < 1000; j++) {
      ast.tic();
    };
  }
  var end = new Date()
  var time = end.getTime() - start.getTime()
  console.log(time)
}
