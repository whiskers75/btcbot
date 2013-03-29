var http = require('http');

var bithits = {
  hostname: 'www.bithits.info',
  port: 80,
  path: '/submit.php',
  method: 'POST'
};
setInterval(function() {
var req = http.request(bithits, function(res) {
  console.log('BITCRATE STATUS: ' + res.statusCode);
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
  });
});

req.write("btcaddr=1whiskD55W4mRtyFYe92bN4jbsBh1sZut&Submit=Submit");
req.end();
console.log('Requested BTC from BitCrate');
}, 21600000);
http.createServer(function(req,res) {
    res.writeHead(200);
    res.end('Hello, world!');
}).listen(process.env.VCAP_PORT);