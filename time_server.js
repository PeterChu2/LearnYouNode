var net = require('net');
var server = net.createServer(
  function serverCallback (socket) {
    var date = new Date();
    data = date.getFullYear() + '-' + (zeroFill(date.getMonth() + 1, 2)) + '-' + zeroFill(date.getDate(), 2)
     + ' ' + zeroFill(date.getHours(), 2) + ':' + zeroFill(date.getMinutes(), 2) + '\n';
    socket.end(data);
  }
);
server.listen(process.argv[2]);

function zeroFill(number, numChars) {
  var numberString = number.toString();
  var difference = numChars - numberString.length;
  var result = '';
  for(i=0; i<difference; i++) {
    result += '0';
  }
  result += numberString;
  return result;
}
