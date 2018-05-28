
// required modules
var http = require('http');
var dt = require('./myfirstmodule');
var url = require('url');

// create server object
http.createServer(function (req, res) {
    // first arg is status code, second arg is response header 
    res.writeHead(200, {'Content-Type': 'text/html'});
    // split query string
    // var q = url.parse(req.url, true).query;
    // var txt = q.year + " " + q.month;
    
    // write a response to the client
    res.write("The date and time are currently: " + dt.myDateTime());
    res.write(' Hello World!');
    res.write(req.url);
    // end response
    // res.end(txt);
    res.end();
    // server object listens on port 8080
}).listen(8080);