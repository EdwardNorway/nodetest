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
const port = process.env.PORT || 3000;
console.log('env: ' + process.env);
console.log('PORT = ' + process.env.PORT);
server.listen(port);
console.debug('Server listening on port ' + port + ' ...');