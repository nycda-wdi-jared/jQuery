$(document).ready(function(){
	console.log('the document is ready');

	//equivalent of document.getElementsByTagName[0].innerHTML = "Hello"
	//Look at how much prettier it looks ;)
	$('div').eq(0).html("WASSSSSAP")

	//$('div').eq(0) is the same as document.getElementsByTagName[0]
	//$('div').eq(1) is the same as document.getElementsByTagName[1]

	//$('div').eq(0).hide() is the equivalent of document.getElementsByTagName[0].style.display = "none";
	//hiding the first div on the page
	$('div').eq(0).hide();
	//hiding video(s) on the page
	//same as document.getElementsByTagName('video').style.display = 'none';
	$('video').hide();
	//same as document.getElementByClassName('first-p').style.dislay = 'none';
	//hiding a specific class on the page
	$('.first-p').hide();

	//equivalent of document.getElementsByTagName[0].style.display = "block";
	$('div').eq(0).show();

	//built in jquery, look what it does
	$('div').eq(1).fadeOut(5000);
	$('div').eq(1).fadeIn(5000);

	$('div').eq(2).css('position', 'absolute')

	//equivalent: document.getElementsByTagName[0].onclick=function(){}
	$('div').eq(2).on('click', function(){
		$('video').show();
		$('video').trigger('play');
	})

	//equivalent of document.getElemenyById('first-div').onsubmit(function(){})
	$('#first-div').on('click', function(){
		//built in jquery, to animate html elements
		//animating the 2nd div for 5 seconds
		//but look, it's in a function :-0
		//where is it?
		animateDiv();
		//changing the css of class 'first-p' and making it appear in html
		$(".first-p").css('position', 'absolute');
		$('.first-p').show();
	});

	//equivalent of document.getElementByClassName('first-p').onclick(function(){})
	$('.first-p').on('click', function(){
		//if you look in html, i imported bootstrap
		//im adding a bootstrap class here
		$('.first-p').addClass("alert alert-danger");
	})

	//explained above
	function animateDiv(){
		$('div').eq(2).animate({
	        margin: '250px',
	        opacity: '0.5',
	        height: '150px',
	        width: '150px'
		}, 5000)
	}


})