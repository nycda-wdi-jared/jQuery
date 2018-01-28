/*

All the html is set up for you in the html and js
The functionality for the arrow is within the on click
Click on the bow to shoot the arrow.
Make sure to hide "ouch" and only show it when the arrow hits me

*/

$(document).ready(function(){


	$('#arrow').css('margin-top', '115px');
	$('#arrow').css('margin-left', '-185px');
	$('#arrow').css('z-index', '99');
	$('#arrow').css('position', 'absolute');

	$('img').eq(2).css('margin-top', '75px');

	$('#shooter').on('click', function(){


	});

})