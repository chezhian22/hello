var http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello world 7376222AL199 SEMMOZHICHEZHIAN E\n');
}).listen(3100);

console.log('Server running at http://127.0.0.1:3100/');
