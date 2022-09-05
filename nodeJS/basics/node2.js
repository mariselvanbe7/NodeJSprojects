const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    if(url === '/'){
        res.write('<html>');
        res.write('<head><title>My First Page message</title></head>');
        res.write('<body><form action ="/message" method = "POST"><input type="text" name = "message"><button type = "submit">Bush</button></form></body>');
        return res.end();

    }

    
   
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title></head>');
    res.write('<body>Hello from my Node.js Server</body>');
    res.end();
});

server.listen(3000);