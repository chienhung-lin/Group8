$(document).ready(function(){
	$('button[type=submit]'.click(function(){
	    $.ajax({
		data:{
			id:$('input[name=name]').val()
		},
		url: 'do.njs',
		success:function(data){
			$('#contnet').text(data);
		}
	    });
	    $('#content').html('loading...');
	});
});

    
