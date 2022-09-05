var http = require('http');

http.createServer(function(req ,res){
    res.writeHead(200,{'content-type':'text/plane'});
    res.write('Hello everyone it is my first server');
    res.end('thank you');

    
}).listen(8080);