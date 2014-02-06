module.exports = {
	splitThumbs: function(res,ffmpeg,path,num){
		var thumbsLoc = 'thumbs';
		var splitInfo = {};
		var proc = new ffmpeg({source: path})
			.withSize('480x?')
			.takeScreenshots(num,thumbsLoc,function(err,filenames){
				if(err)
					console.log('error');
				console.log(filenames);
				console.log('screenshots were saved');
				splitInfo = {
					basedir: thumbsLoc,
					files:filenames
				};
				res.send(splitInfo);
				res.end();
		});
		return splitInfo;
	}
};