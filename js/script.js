$(document).ready(function(){
		
		$('#button').on('click', function(){
			$('.right').css({'height':"2px"});
			$('.right').animate({'width':"100%"},800);
			
			$('.left').css({'height':"2px"});
			$('.left').animate({'width':"100%"},800);
    	});
		
		
	});
