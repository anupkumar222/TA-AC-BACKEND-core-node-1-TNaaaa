var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest (req, res) {
    res.statusCode = 201;
    res.setHeader('Content-Type', 'text/plain');
    res.end('<h1>Welcome</h1>');
}

server.listen(4444, () => {
    console.log('server listening to port 4444');
})