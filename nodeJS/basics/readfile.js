var http = require('http');
var fs = require('fs');


http.createServer(function(req, res){
    fs.readFile('message.txt',function(err, data){
        if(err){
         return console.error(err);
        }
        console.log(data.toString());
        res.write(data);
        res.end();
    });
}).listen(8090);

