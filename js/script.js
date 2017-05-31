$(document).ready(function(){
		
		var leftWidth = $('.contentLeft').width();
				
		$('#button').on('click', function(){
			$('.right').css({'height':"2px"});
			$('.right').animate({width: '100%', marginLeft: 0}, {duration: 300});
			
			$('.left').css({'height':"2px"});
			$('.left').animate({'width':"100%"},500, function() {
    			$('.content').css({'backgroundColor':"#848484"});
    			$('.right').animate({'height':"400px"}, 800)
    			$('.left').animate({'height':"400px"}, 800, function(){
    				$('.texte').fadeIn();
    		
    			});
  			});
			
    	});
    	
   });
