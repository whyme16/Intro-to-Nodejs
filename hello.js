var http = require("http");
var fs = require("fs");
var url = require("url");

http.createServer(function(req, res) {
	let q = url.parse(req.url, true);
	// console.log(q);
	// console.log(req.url);
	let filename = (req.url == "/" ? "./index" : "." + q.pathname) + ".html";

	fs.readFile(filename, function(err, data) {
		if (err) {
			res.writeHead(404, {'Content-Type': 'text/html'});
			return res.end("404 Not Found");
		}
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		console.log("... Incoming Request: " + req.url);
		return res.end();
	});
	// let q = url.parse(req.url, true).query;
	// let dates = q.year + " " + q.month;	
	// res.write(dates);
	// res.end(dates);
	// res.end('Hello World! My name is Kah-Y');
}).listen(8080);

console.log("Server listening on Port 8080...");

// http://localhost:8080/?year=2020&month=August