/*

Use the OMDB api to create a quick movie search app.
Using jquery's methods .onkeyup() and .val() you can create a 
workable search bar that will execute an api call as someone is typing a movie title into the bar!
1. Have the title and poster update as search result comes in.
2. Use jquery to also display 2-3 more details about the movie (i.e. genre, year released, actor list, etc.)
Bonus:
• make it so that the search only executes after a user has typed in at least 3 characters

*/

$(document).ready(function(){

	var omdb_url = 'http://www.omdbapi.com/'
	var api_key = "40e9cece";
	$('#movie-button').on('click', function(){

		var movieInputManip = $('#movie-input').val().toLowerCase().split(" ");

		for(var i = 0; i < movieInputManip.length; i++){
			if(movieInputManip[i].slice(movieInputManip[i].length - 1) === "s"){
				var splitter = movieInputManip[i].split("")
				splitter.splice(movieInputManip[i].length-1, 0, '\'');
				movieInputManip[i] = splitter.join("");
			}
		}
		console.log(movieInputManip);

		var movieInput = movieInputManip.join("+");

		$.ajax({
			type: 'GET',
			url: `${omdb_url}?apikey=${api_key}&t=${movieInput}`,
			success: function(response){
				console.log(response);
				$('.movie-div').empty();

				if(!response.Error){
					var movieResponseDiv = $('<div>');
					movieResponseDiv.addClass('movie-div');

					var poster = $('<img>');
					poster.attr('src', response.Poster);

					movieResponseDiv.append(poster);
					$('#movie-results').append(movieResponseDiv);
					$('#movie-input').val("");
				} else {
					$('#movie-input').val("");
					alert("No Movie By That Name!")
				}
			}
		})
	})

});