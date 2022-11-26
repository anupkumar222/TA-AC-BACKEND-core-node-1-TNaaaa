var fs = require('fs');

var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest (req, res) {
    if(req.method === 'GET' && req.url === '/file') {
        res.end('Welcome to index page')
    }
    if(req.method === 'GET' && req.url === '/stream') {
        res.setHeader('Content-Type', 'text/html');
        fs.createReadStream('./about.html').pipe(res);

    }
}

server.listen(5555, () => {
    console.log('done');
})

