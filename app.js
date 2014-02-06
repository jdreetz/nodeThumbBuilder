var port = 3000;
var express = require('express'),
	vidSplit = require('./other'),
	app = express(),
	ffmpeg = require('fluent-ffmpeg');
app.use(express.bodyParser({keepExtensions:true,uploadDir:'uploads'}));
app.use('/',express.static('client'));
app.use('/thumbs',express.static('thumbs'));
app.post('/genThumbs',function(request,response){
	var path = request.files['videoFile'] && request.files['videoFile'].path ? request.files['videoFile'].path : null;
	if(path){
		console.log("File Received", path);
		var splitInfo = vidSplit.splitThumbs(response,ffmpeg,path,4);
	}
	else{
		response.send('File not received', 500);
	}

});

app.listen(port);
console.log('Listening on ' + port);