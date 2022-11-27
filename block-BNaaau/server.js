var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    console.log(req.method, req.url);
    res.end('test succesful');
}

server.listen(5000, () => {
    console.log('welcome to the port 5000');
})