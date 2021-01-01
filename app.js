var http = require('http');

var server = http.createServer(function(res, reg) {


    res.write("selam");
    res.end("mesaj bitti");

});











server.listen(8000);