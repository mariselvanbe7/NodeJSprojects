var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
    fs.writeFile('message.txt',"I am very exiteed to learn new thing and new techknology",function(err){
        if(err){
            console.error(err);

        }
        res.write("succesfully update");
        res.end();


    });

}).listen(8080)