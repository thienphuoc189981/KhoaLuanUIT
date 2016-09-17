"use strict";
var http = require('http');
var fs = require('fs');
var port = process.env.port || 1337;
fs.readFile('./view/index.html', function (err, html) {
    if (err) {
        throw err;
    }
    http.createServer(function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(html);
        res.end();
    }).listen(port);
});
//# sourceMappingURL=server.js.map