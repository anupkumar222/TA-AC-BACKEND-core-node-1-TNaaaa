const { fstat } = require('fs');
var http = require('http');
var url = require('url');
var fs = require('fs');

var PORT = 2345;


var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    // if(req.method === 'GET', req.url === '/') {
    //     res.setHeader('content-Type', 'text/plain');
    //     res.end('Anup');
    // }
    // if(req.method === 'GET', req.url === '/about') {
    //     res.setHeader('content-Type', 'text/html');
    //     res.end('<h1>Anup</h1>');
    // } else {
    //     statusCode = 404;
    //     res.end('Page not found');
    // }

    // if(req.method === 'GET' && req.url === '/users') {
    //     res.setHeader('content-type', 'text/html')
    //     fs.createReadStream('./form.html').pipe(res);
    // }
    // if(req.method === 'POST' && req.url === '/users') {
    //     res.setHeader('content-type', 'text/html')
    //     res.end('Posted for the second time');
    // }
var parsedUrl = url.parse(req.url, true);
console.log(parsedUrl.pathname, req.url);
res.setHeader('content-type', 'application/json')
res.end(JSON.stringify(parsedUrl.query))
}

server.listen(PORT, () => {
    console.log('server listening on port ' + PORT);
})