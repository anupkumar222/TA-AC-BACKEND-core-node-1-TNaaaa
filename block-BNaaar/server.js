var url = require('url');

var http = require('http');


var server = http.createServer(handleRequest);

function handleRequest (req, res) {
    console.log(req.method, req.url);
    if(req.method === 'GET' && req.url === '/') {
        res.setHeader('Content-Type', 'text/plain')
        res.write('Welocme to homepage');
        res.end();
    } else if(req.method === 'GET' && req.url === '/about') {
        res.setHeader('Content-Type', 'text/html')
        res.end('<h2>this is all about NodeJS</h2>')
    } else if(req.method === 'POST' && req.url === '/about') {
        res.writeHead(404, {'Content-Type': 'application/json'})
        res.write('{message: this is a post request}');
        res.end();
    }
    res.end('welcome');
}

server.listen(5000, () => {
    console.log('listening to server port 5000');
})