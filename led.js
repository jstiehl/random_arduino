var five = require('johnny-five');
var board = new five.Board();

board.on("ready", function() {
  // var led2 = new five.Led(11);
  // var led1 = new five.Led(13);
  // led1.blink(500);
  // led2.pulse(1000);
  console.log("board is ready")
  var pin = new five.Pin(9,3);
  var ledPower = new five.Pin(2);
  ledPower.high();
  board.repl.inject({
    pin: pin,
    on: function(){
      pin.high();
    },
    off: function(){
      pin.low();
    }
  });
});

