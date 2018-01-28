$(document).ready(function(){

	var evolveButton = $('<button id="evolve-button">');
	evolveButton.text('Evolve Me!');

	$('#div-to-add-to').append("<br>").append(evolveButton)

	var pokemon = [
		{
			name: 'Charmander',
			level: 1,
			type: 'dragon',
			evolvedFrom: 'noone'
		},
		{
			name: 'Charizard',
			level: 3,
			type: 'dragon',
			evolvedFrom: 'Charmander'
		},
		{
			name: 'Bulbasaur',
			level: 1,
			type: 'Vegetarian',
			evolvedFrom: 'noone'
		},
		{
			name: 'Venusaur',
			level: 3,
			type: 'Vegetarian',
			evolvedFrom: 'Bulbasaur'
		}
	]

	var div = $('<div id="poke-div">')
	div.css('display', 'inline-flex')
	for(var i = 0; i < pokemon.length; i++){
		if(pokemon[i].level == 1){
			var eachPokeDiv = $('<div class="single-poke" id="single-poke-' + pokemon[i].name + '">')
			var img = $('<img class="single-poke-image">')
			img.attr('src', './images/' + pokemon[i].name.toLowerCase() + ".png")
			img.attr('data-name', pokemon[i].name)

			var p = $('<p>');
			p.text(pokemon[i].name)

			eachPokeDiv.append(img).append(p)

			div.append(eachPokeDiv)
		}
	}

	$('#div-to-add-to').append("<br>").append(div)

	/*
		Below, write the functionality for when the 'Evolve Me!' button is clicked,
		the picture and name is changed from the level 1 to level 3 pokemon
	*/


})