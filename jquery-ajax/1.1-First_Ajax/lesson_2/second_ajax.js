$(document).ready(function(){

	var header = $('<h1>');
	header.text('Enter some Text and see what happens')
	header.addClass('jumbotron');

	$('div').eq(0).append(header);

	var input = $('<input>', {
		type: 'text',
		id: 'giphy-input',
		placeholder: 'Put Text In Me!'
	})
	$('div').eq(0).append(input)
	$('div').eq(0).append('<br>')
	var button = $('<button>',{
		id: 'giphy-button',
		class: 'btn btn-danger',
		text: 'Find Giphy Match'
	});
	$('div').eq(0).append(button);

	//setting up an api call to a website, 'GET'ting information
	$(document).on('click', '#giphy-button', function(){
		var giphy = $('#giphy-input').val()
		
		var imagesDiv = $('<div>');
		imagesDiv.addClass('images-div');
		var img;
		if(giphy !== " "){
			$('#giphy-input').val("");
			$.ajax({
				type: 'GET',
				url: "http://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=dc6zaTOxFJmzC&limit=10",
				success: function(response){
					console.log(response)
					for(var i = 0; i < response.data.length; i++){
						img = $('<img>');
						img.attr('src', response.data[i].images.fixed_height.url);
						imagesDiv.append(img);
					}
					$('div').eq(0).append(imagesDiv);
				}
			});
		};
	});

})