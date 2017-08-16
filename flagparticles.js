var http = require('http');
var fs = require('fs');

function onRequest(request, response) {
	response.writeHead(200,{'content-Type': 'text/html'});
	fs.readFile('./index.html', null, function(error, data) {
		if (error) {
			response.writeHead(404);
			response.write('File Not Found !');
		} else {
			response.write(data);
		}
		response.end();
	});
}
