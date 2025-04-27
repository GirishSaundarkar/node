const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName === '/product') {
        res.end('this is a product page');
    } else if(pathName === '/overview') { 
        res.end('this is a overview page');
    } else {
        res.writeHead(404, {
            'content-type': 'text/html'
        });
        res.end('<h1>page Not Found</h1>');
    }
    res.end('hello from the server')
});

server.listen(5000, '127.0.0.1', () => { 
    console.log('listening on port 5000');
})