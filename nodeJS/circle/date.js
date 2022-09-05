var http = require('http');

var dt = require('./router/dateExports/firstmodule');

http.createServer(function(req,res){

    res.write('rhe dateand time is ' + dt.dateTime());
    res.end();
}).listen(8080);