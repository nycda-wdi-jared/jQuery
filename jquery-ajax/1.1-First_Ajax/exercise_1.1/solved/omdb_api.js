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
	var api_key = '40e9cece';
	var movieDiv = $('<div>');
	movieDiv.addClass('movie-div');
	var str = "";
	$(document).on('keypress', function(e){
		str += e.key;
		if(str.length >= 3){
			$.ajax({
				type: 'GET',
				url: `${omdb_url}?apikey=${api_key}&t=${str}`,
				success: function(res){
					console.log(res)
					$('.movie-div').empty();
					var img = $('<img>');
					img.attr('src', res.Poster);
					img.width('auto');
					img.height('250px');

					var title = $('<p>');
					title.text(res.Title);

					var actors = $('<p>');
					actors.text("Starring: " + res.Actors);

					var director = $('<p>');
					director.text("Director: " + res.Director);

					var ratingsList = $('<ul>')
					ratingsList.html('<strong style="font-size: 26px">Ratings</strong>')
					var ratingsLi;
					for(var i = 0; i < res.Ratings.length; i++){
						ratingsLi = $('<li>');
						ratingsLi.text(res.Ratings[i].Source + ": " + res.Ratings[i].Value);
						ratingsList.append(ratingsLi);
					}

					movieDiv.append(img).append(title).append(actors).append(director).append(ratingsList);
					$('div').eq(0).append(movieDiv);
				}
			})
		}
	})

});