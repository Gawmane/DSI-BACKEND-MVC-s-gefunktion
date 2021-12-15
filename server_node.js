import http from 'http';

http.createServer((request, response) => {
    response.writeHead(200, { 'Content-type': 'text/html;charset=utf-8' });
    response.write('godt nytår');
    response.end();
}).listen(4000);