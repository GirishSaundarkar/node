const http = require('http');

const server = http.createServer((req, res) => {
    res.end('hello from the server')
});

server.listen(5000, 'localhost', () => { 
    console.log('listening on port 5000');
})