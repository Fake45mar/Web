$(function(){
	$('.call_cosult').submit(function(e){
		$('#area:after p').remove();
		$('.empty_class').remove();
		$('.error').remove();
		let text = $('#area').val();
		text.trim();
		if(text == ''){
			e.preventDefault();
			$('#area').addClass('.empty_area');
			$('#area').after('<p class="error">Ваше текстовое поле пустое!</p>');
		}
		else{
			e.preventDefault();
			$('.feedbacks > li:last').after("<li class='add_message'><span class='name'>Лилия Семёновна</span><span class='date'>14 октября 2011</span><div style='padding-top:10px;'>"+ $('#area').val() +"</div></li>");
		}
		$('#area').val("")
	})
	$("#area").keyup(function(e){
		if(e.keyCode == 17)
			ctrl = false;
	})
	$("#area").keydown(function(e){
		if(e.keyCode == 17)
			ctrl = true;
		else if(e.keyCode == 13 && ctrl)
			$('#butt').click();
	})
})