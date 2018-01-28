$(document).ready(function(){

	//creating my data object
	var videoPlay = [
		{
			animal: 'hippo',
			video: 'https://www.youtube.com/embed/bVdm2xBL6GY?autoplay=1'
		},
		{
			animal: 'giraffe',
			video: 'https://www.youtube.com/embed/2_P-2VB0quM?autoplay=1'
		}
	]

	//when i press the submit button for form with id of 'form-this'
	$('#form-this').on('submit', function(e){
		//on submit will not refresh page
		e.preventDefault();
		//emptying the div in order to prevent items continuously appending to div
		//meaning it will only show the item entered, not all of them
		//im doing it even though it's not there yet, weird right
		$('.spirit-animal').empty();
		//the value in the input box with id of spirit animal after 
		//the submit button is pressed
		var spiritAnimal = $('#spirit-animal').val();

		//setting up a data object to use later on
		//these are the only animals that i set up my application with
		//so i want to make sure that only those names are entered
		var animals = ['owl', 'giraffe', 'elephant', 'lion', 'hippo']

		//creating a new div to add my animal to
		var animalDiv = $('<div>');
		//adding a class to that div...remember, i emptied it before
		//it was created above. you can do that!
		animalDiv.addClass('spirit-animal');

		//indexOf is built in javascript function for arrays and string
		//in this situation, we're using it against an array
		//this indexOf is checking if the input entered (spiritAnimal)
		//matches any of the indexes in the 'animals' array.
		//if the item is not in that array, it will return -1
		//if it is in that array, it will return the index in the array of that item
		//for this conditional, im saying if > -1 because anything greater than -1 
		//is stating that its in that array
		if(animals.indexOf(spiritAnimal) > -1){
			//if it passes the conditional,then...
			//creating img tag to add attributes later on
			var img = $('<img id="animal-image">');
			//attribute src image to img created above
			//look for how to the src finds the image
			img.attr('src', './images/' + spiritAnimal + ".jpg");
			//giving my image a data attribute, because i plan on having
			//an event fire later on when my picture is appended to the dom
			//i will be able to access that data attribute when the event on
			//that item is fired. I need this data item for further querying ;)
			img.attr('data-animal-name', spiritAnimal)
			//giving my image a height attribute
			img.height(150)
			//giving my image a width attribute
			img.width('auto')
			//adding image to animalDiv created above
			//img will now be a child to div, check your elements in the google inspect
			animalDiv.append(img)
			//finally....adding this animalDiv to the one div in the html
			$('div').eq(0).append(animalDiv)
		} else {
			//if(animals.indexOf(spiritAnimal)) is not greater than > -1, then it will end up here
			//which is alerting the user to only enter the animals that currently fit my application
			alert('Please enter giraffe, owl, hippo, lion, or elephant')
		}
	})

	//remember, i gave my image that i appended to the dom an id of 'animal-image',
	//now im giving it an onclick event
	$(document).on('click', '#animal-image', function(){
		//remember the data attribute i gave it above,
		//look at how it's accessed and stored in a variable
		var animalClicked = $(this).data('animal-name');
		//looping through my videoArray above to make a query
		for(var i = 0; i < videoPlay.length; i++){
			//checking to see if the name of the animal for the clicked picture
			//matches any of the names in the videoPlay object array above
			if(animalClicked === videoPlay[i].animal){
				//if the input entered does match a name in the array
				//then create a video, and get access to the src of the video
				//through the item in the object array that passed the conditional
				var video = $('<iframe>', {
					src: videoPlay[i].video,
					type: 'video/mp4',
					controls: true
				});
				//hide the video, which will just play the audio
				video.hide();
				//finally, appending to the div in the dom
				$('div').eq(0).append(video)
			}
		}
	})


})