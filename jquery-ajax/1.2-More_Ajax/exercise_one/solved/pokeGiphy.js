$(document).ready(function(){

	var jqImg = $('<div>');
	jqImg.addClass('jq-img');
	var img = $('<img>', {
		src: 'loader.gif',
		width: 'auto',
		height: '250px'
	});
	jqImg.append(img);
	
	$('#search-button').on('click', function(){
		$(this).prop("disabled",true);
		$('#image-div').append(jqImg);
		$('.poke-results').empty();
		var searchQuery = $('#search-input').val();
		var resultsDiv = $('<div>');
		resultsDiv.addClass('poke-results');
		$.ajax({
			method: 'GET',
			url: 'https://pokeapi.co/api/v2/pokemon/' + searchQuery,
			statusCode: {
		        404: function() {		  
		          	alert("Please Enter Correct Pokemon Name");
		          	$('.jq-img').remove();
					$('#search-button').prop("disabled",false);
		        }
		    }
		}).then(function(response){
			if(response){
				$('.jq-img').remove();
				$('#search-button').prop("disabled",false);
				var nameP = $('<p>');
				nameP.text(response.name);
				resultsDiv.append(nameP);
				$('div').eq(1).append(resultsDiv)
				$.ajax({
					type: 'GET',
					url: "http://api.giphy.com/v1/gifs/search?q=" + response.name + "&api_key=dc6zaTOxFJmzC&limit=10",
					success: function(res){
						var pokeImg = $('<img>', {
							src: res.data[0].images.fixed_height.url
						});
						resultsDiv.append(pokeImg)
						$('div').eq(1).append(resultsDiv);
					}
				});
			}
		});

		$('#search-input').val("");

	});


})