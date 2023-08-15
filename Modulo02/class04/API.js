const http = require('http');

const hostname = '127.0.0.1';

const port = 3000;

//criando o Servidor
const server = http.createServer( (req, res) => {
    res.statusCode= 200;
    res.setHeader( 'Content-Type', 'text/plain');
    res.end('hello world');
} );



//ativar o servidor
server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})