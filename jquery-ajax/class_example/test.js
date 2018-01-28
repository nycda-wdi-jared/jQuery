$(document).ready(function(){


	var bob = "whatever string";
	var john = "second string";
	var songDiv = $('<div id="all-songs">');
	songDiv.addClass('song-class');

	var songButton = $('<div>');
	songButton.attr('id', 'song-button');

	var button = $('<button>');
	button.addClass('i-dont-know-what-the-button-is-going-to-do');
	button.text('Press ME!!!!!!!!!')

	songButton.append(button);
	$('#song-names').append(songButton);
	var songs = [{
			id: 1,
			song: 'Hallowed Be Thy Name',
			artist: 'Iron Maiden'
		},{
			id: 2,
			song: 'I get around',
			artist: 'Beach Boys'	
		},{
			id: 3,
			song: 'Dream On',
			artist: 'Aerosmith'
	}];

	var num = 0;
	$(document).on('click', '.i-dont-know-what-the-button-is-going-to-do', function(){
		$('p').remove();
		var anotherSongDiv = $('<div id="another-song-div">');
		var anotherPTag = $('<p id="another-p-tag">');
		anotherPTag.text(songs[num].song);

		anotherSongDiv.append(anotherPTag);
		$('#song-names').append(anotherPTag)
		num++;

	});

	$('#whatever').on('keydown', function(e){
		if(e.key === "Enter"){
			var inputValue = $('#whatever').val();

			var home = $('<p>');
			home.text(inputValue);

			$('#input-div').append(home);
			$('#whatever').val("")
		}
	});

	$('#whatever-form').on('submit', function(e){
		e.preventDefault();

		var whateverInput = $('#whatever').val();
		console.log(whateverInput)

	});


	//$('div').eq(0).append(songDiv);
	var songButtonsDiv = $('<div>');
	for(var i = 0; i < songs.length; i++){
		var song = songs[i].song;
		//if(song.length < 10){
			//console.log(song);
		//}
		//var songP = $('<p>');
		//songP.text(song);

		//songDiv.append(songP);

		var anotherButton = $('<button>');
		anotherButton.addClass('song-name-button');
		anotherButton.attr('data-song-artist', songs[i].artist)
		anotherButton.text(song);
		songButtonsDiv.append(anotherButton);
	}

	$("#buttons-div").append(songButtonsDiv)

	$(document).on('click', '.song-name-button', function(){
		var artist = $(this).data('song-artist');
		$('#appender').append(artist);
	})


	var classRoomNames = ['nathan', 'joel', 'bianca', 'jasmaine'];

	function addTwoStrings(str, strTwo){
		var both = str + strTwo;
		if(both.length < 10){
			return "This is less than 10";
		} else if (both.length < 15 && both.length > 10) {
			return "this is greater than 10 but less than 15"
		} else {
			return "This is more than 15";
		}
	}

});