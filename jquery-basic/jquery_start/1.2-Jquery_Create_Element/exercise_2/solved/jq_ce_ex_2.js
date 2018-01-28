$(document).ready(function(){

	//creating a button that will do something when onclick
	var evolveButton = $('<button id="evolve-button">');
	//giving text to that button
	evolveButton.text('Evolve Me!');

	//append a break and the evolveButton to the div with id of 'div-to-add-to' in the html
	$('#div-to-add-to').append("<br>").append(evolveButton)

	//creating my data object
	var pokemon = [
		{
			name: 'Charmander',
			level: 1,
			type: 'dragon'
		},
		{
			name: 'Charizard',
			level: 3,
			type: 'dragon'
		},
		{
			name: 'Bulbasaur',
			level: 1,
			type: 'Vegetarian'
		},
		{
			name: 'Venusaur',
			level: 3,
			type: 'Vegetarian'
		}
	]

	//creating a div to add stuff to later on
	var div = $('<div id="poke-div">')
	//adding css to that div
	div.css('display', 'inline-flex')

	//looping through my pokemon array object to query data
	for(var i = 0; i < pokemon.length; i++){
		//for each pokemon, if their level is 1...
		if(pokemon[i].level == 1){
			//...then they make it through to here...yippie

			//creating a div to add each item that passes if conditional
			var eachPokeDiv = $('<div class="single-poke">');

			//creating an jQuery img to add to later one
			var img = $('<img>');
			//giving a src attribute to my jquery image
			//look at how im giving the path of my image
			img.attr('src', './images/' + pokemon[i].name.toLowerCase() + ".png")

			//creating a p tag to add text to later on
			var p = $('<p>');
			//adding the text of each pokemons name that passes conditional
			p.text(pokemon[i].name)

			//adding the image and p tag to the div created above
			eachPokeDiv.append(img).append(p)

			//attaching that div to another div because that's how I want
			//to set up my application
			div.append(eachPokeDiv)
		}
	}

	//finally....adding a break tag and the div to the dom/html
	$('#div-to-add-to').append("<br>").append(div)

	//creating a new div because im setting up my application to delete
	//a div and then add another, i want to add my new items to a new div
	var newDiv = $('<div id="evolved-poke-div">')
	//giving css to my newDiv
	newDiv.css('display', 'inline-flex');

	//if you look, i gave the evolve button an id of element
	//when an item is created in jQuery, this is how you access
	//and event for that item.
	//if the item is there physically in the html, then you can use
	//$('#evolve-button').on('click', function(){})
	//after that rant...when that #evolve-button is clicked
	//any functionality after that on click is going between 
	//the $(document).on('click', '#evolve-button', function(){})
	$(document).on('click', '#evolve-button', function(){
		//removing the poke-div that i created above
		$('#poke-div').remove();
		//emptying the evolved-poke-div that i created above
		$('#evolved-poke-div').empty();
		//looping through pokemon object to query data
		for(var i = 0; i < pokemon.length; i++){
			//if the pokemons level is 3...
			if(pokemon[i].level == 3){
				//then do whatever is...  if(){ '...in here' }
				var eachPokeDiv = $('<div class="single-evolved-poke">');
				//creating an image to add to later on
				var img = $('<img>');
				//adding a src attribute to that image for each item that passes the conditional
				img.attr('src', './images/' + pokemon[i].name.toLowerCase() + ".png")
				//creating a p tag to add to later on
				var p = $('<p>');
				//adding text to this p tag
				p.text(pokemon[i].name)
				//adding the img and p tag to my newly created div above
				//this will be the div around each pokemon
				eachPokeDiv.append(img).append(p)
				//another div im adding to above which will represent all of my pokemon
				newDiv.append(eachPokeDiv);
			}
		}
	})
	//....finally....appending to the dom/document/web
	$('#div-to-add-to').append("<br>").append(newDiv)

	//remember, go and check how to elements look in the google inspect

})