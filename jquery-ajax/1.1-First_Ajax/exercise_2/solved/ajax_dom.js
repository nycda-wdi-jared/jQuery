//api documentation for pokemon: https://www.pokeapi.co/docsv2/
//api documentation for star wars: https://swapi.co/
//api documentation for ron swanson quotes: https://github.com/jamesseanwright/ron-swanson-quotes
//api documentation for the office quotes: https://github.com/nycda-wdi-jared/office_quotes_api
//api documentation for Giphy API: https://developers.giphy.com/
//api documentation for art-share: http://art-share.herokuapp.com/documentation

//from scratch, add code to the js file, and make a call to one of the apis above,
//or an api of your own. Use examples from scratch to append items from that
//api call to the dom with jQuery. You can make the html elements in js
//or add them to the html

$(document).ready(function(){

	$.ajax({
		type: 'GET',
		url: 'https://swapi.co/api/people/1',
		success: function(res){
			console.log(res)
			var header = $('<h1>')
			header.addClass('jumbotron text-center');
			header.text(res.name);
			$('div').eq(0).append(header);

			var div = $('<div>');
			div.addClass('row');

			var blankDiv = $('<div class="col-md-4">');
			div.append(blankDiv);

			var infoDiv = $('<div>');
			infoDiv.addClass('well text-center center-block col-md-4');

			var birthYear = $('<p>');
			birthYear.text("YOB: " + res.birth_year);
			var eyeColor = $('<p>');
			eyeColor.text('Eye Color: ' + res.eye_color);
			var hairColor = $('<p>');
			hairColor.text("Hair Color: " + res.hair_color);
			var skinColor = $('<p>');
			skinColor.text('Skin Color: ' + res.skin_color);

			infoDiv.append(birthYear).append(eyeColor).append(hairColor).append(skinColor);
			div.append(infoDiv);

			$('div').eq(0).append(div);

		}
	})

})