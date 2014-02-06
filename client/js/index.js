window.main = window.main || function(){

};

$(document).ready(function(){
	$('#fileUploader').on('submit',function(event){
		event.preventDefault();
		var formData = new FormData($('#fileUploader')[0]);
		$.ajax({
			url:'genThumbs',
			type: 'POST',
			processData: false,
			contentType: false,
			// xhr: function(){
			// 	var myXhr = $.ajaxSettings.xhr();
			// 	if(myXhr.upload){
			// 		myXhr.upload.addEventListener('progress',function(prog){
			// 			console.log(prog);
			// 		});
			// 	}
			// 	return myXhr;
			// },
			error:function(err){console.log('error');console.log(err);},
			success:function(splitInfo){
				if(splitInfo){
					$(splitInfo.files).each(function(k,v){
						$('body').append($('<img>',{
							'src':splitInfo.basedir + '/' + v
						}));
					});
				}
			},
			data: formData
		});
	});
});