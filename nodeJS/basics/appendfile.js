var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.appendFile('message.txt',"So I am munch enjoyfull to create this file",function(err){
        if(err){
            console.error(err);

        }
        res.write('success fully append!!!');
        res.end();

    });

}).listen(8080);
