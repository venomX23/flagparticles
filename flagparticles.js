var express = require('express');
var app = express();
var serv = require('http').server(app);

app.get('/',function(req, res) {
	res.sendFile(C:\Users\yash\Desktop\webs + '/client/index.html')
	});
	app.use('/client',express.static(C:\Users\yash\Desktop\webs + '/client'));
	serv.listen(2000);
	
