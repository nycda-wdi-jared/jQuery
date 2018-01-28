/*

1. Import Jquery
2. Wrap the js in a $(document).ready() just like in the lesson
3. 

*/

$(document).ready(function(){

	var split;

	$('.ouchie').hide();

	$('#arrow').css('margin-top', '115px');
	$('#arrow').css('margin-left', '-185px');
	$('#arrow').css('z-index', '99');
	$('#arrow').css('position', 'absolute');

	$('img').eq(2).css('margin-top', '75px');

	$('#shooter').on('click', function(){

		$('#arrow').animate({
			marginLeft: '700px',
		}, 3000)

		setInterval(sayOuch, 1)

		function sayOuch(){
			split = parseInt($('#arrow').css('margin-left').split("px")[0]);
			if(split > 680){
				$('.ouchie').show();
				$('img').eq(2).css({filter: 'saturate(100)'});
				clearInterval(sayOuch)
			}
		}

	});

})