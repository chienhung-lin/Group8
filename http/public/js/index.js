$(document).ready(function(){
	$('button[type=submit]').click(function(){
	    $.ajax({
	    	type:"POST",
		data:{
			user_name:$('input[name=user_name]').val()
		},
		url: '/ID',
		success:function(data){
			console.log(data);
			$("#result").html(data);
		},
		error:function(){
			console.log("Error!");
		}
	    });
	    $('#result').html('loading...');
	});
});

    
