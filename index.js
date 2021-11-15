/***
 * http://localhost:3000/
 * run by using command npm start or node index.js
 */

const http = require('http');
const express = require('express');
const app = express();
app.use(express.json());
app.use('/', function(req, res) {
    res.send('todo api works.test by deng');
});
const server = http.createServer(app);
const port = 3000;  //Environment.port || 3000;
server.listen(port);
console.debug('Server listening on port ' + port + ' ...');