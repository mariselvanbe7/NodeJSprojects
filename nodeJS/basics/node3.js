const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My First Page message</title></head>');
        res.write('<body><form action ="/message" method = "POST"><input type="text" name = "message"><button type = "submit">Bush</button></form></body>');
        return res.end();

    }

    if(url === '/message' && method === 'POST'){

        fs.writeFileSync('message.txt', 'DUMMY');
        req.statusCode = 302;
    }

    
   
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Hello from my Node.js Server</body>');
    res.end();
});

server.listen(3000);