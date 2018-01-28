$(document).ready(function(){

	//creating my data object
	var videoPlay = [
		{
			animal: 'hippo',
			video: 'https://www.youtube.com/embed/bVdm2xBL6GY?autoplay=1&start=5'
		},
		{
			animal: 'giraffe',
			video: 'https://www.youtube.com/embed/2_P-2VB0quM?autoplay=1&start=5'
		},
		{
			animal: 'lion',
			video: 'https://www.youtube.com/embed/9pzJbQlEtFU?autoplay=1&start=4'
		},
		{
			animal: 'owl',
			video: 'https://www.youtube.com/embed/XYDMmZqv9wI?autoplay=1&start=2'
		},
		{
			animal: 'elephant',
			video: 'https://www.youtube.com/embed/153xbn1k2H8?autoplay=1'
		}
	]

	$('#form-this').on('submit', function(e){
		e.preventDefault();
		$('.spirit-animal').empty();

		var spiritAnimal;
		var nameInput = $('#name').val();
		var birthYearInput = parseInt($('#birth-year').val());

		var gender = $('#gender').val();

		var numbers = ['1','2','3','4','5','6','7','8','9','0']
		var ifNumberInNameText = false;
		var validGender = false;

		for(var i = 0; i < numbers.length; i++){
			if(nameInput.indexOf(numbers[i]) > -1){
				ifNumberInNameText = true;
			}
		}

		if(gender.toLowerCase() === "male" || gender.toLowerCase() === "female"){
			validGender = true
		}

		if(!ifNumberInNameText && birthYearInput >= 1920 && birthYearInput <= 2013 && validGender){
			if(nameInput.charAt(0).match(/[a-jA-J]/) && birthYearInput >= 1980 && gender === "male"){
				spiritAnimal = "giraffe";
			} else if (nameInput.charAt(0).match(/[a-jA-J]/) && birthYearInput <= 1980 && gender === "male") {
				spiritAnimal = "hippo";
			} else if (nameInput.charAt(0).match(/[k-zK-Z]/) && birthYearInput >= 1980 && gender === "female") {
				spiritAnimal = "elephant";
			} else if (nameInput.charAt(0).match(/[k-zK-Z]/) && birthYearInput <= 1980 && gender === "female") {
				spiritAnimal = "lion";
			} else {
				spiritAnimal = "owl";
			}
		} else {
			console.log('enter a valid name, and/or birth year, ')
		}

		var animalDiv = $('<div>');
		animalDiv.addClass('spirit-animal');
		var img = $('<img id="animal-image">');
		img.attr('src', './images/' + spiritAnimal + ".jpg");
		img.attr('data-animal-name', spiritAnimal)
		img.height(150)
		img.width('auto')
		animalDiv.append(img)
		$('div').eq(0).append(animalDiv)
	})

	$(document).on('click', '#animal-image', function(){
		var animalClicked = $(this).data('animal-name');
		for(var i = 0; i < videoPlay.length; i++){
			if(animalClicked === videoPlay[i].animal){
				var video = $('<iframe>', {
					src: videoPlay[i].video,
					type: 'video/mp4',
					controls: true
				});
				video.hide();
				$('div').eq(0).append(video)
			}
		}
		setTimeout(function(){
			video.remove();
		}, 10000)
	})


})