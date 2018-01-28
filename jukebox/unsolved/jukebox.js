$(document).ready(function(){

	var buttons = ["Play", "Pause", "Volume Up", "Volume Down"];

	var audioButtons = $("<div>");
	var button;
	for(var i = 0; i < buttons.length; i++){
		button = $('<button>');
		button.addClass('audio-button');
		button.text(buttons[i]);
		button.attr('data-audio', buttons[i].toLowerCase());
		audioButtons.append(button)
	}
	$('div').eq(0).append(audioButtons);

	var songs = [
		{
			id: 1,
			title: 'modern_man'
		},
		{
			id: 2,
			title: 'ready_to_start'
		}
	];

	var num = 0;
	$(document).on('click', '.audio-button', function(){
		var audioPick = $(this).data('audio');
		var audioDiv = $('<div id="audio-div">');
		if(audioPick === 'play'){
			if(num == 0){
				num++;
				var audioTag = $('<audio>', {
					id: 'playing',
					src: './audio/' + songs[0].title + '.m4a',
					type: "audio/mpeg"
				});
				audioTag[0].play();
				audioDiv.append(audioTag);
				$('div').eq(0).append(audioDiv);
			} else {
				$('#playing')[0].play();
			}
		}
		if(audioPick === 'pause'){
			$('#playing')[0].pause();
		}
		if(audioPick === 'volume up'){
			var volumeChange = 0.2;
			if(volumeChange <= 1){
				$('#playing').get(0).volume += volumeChange;
			}
		}
		if(audioPick === 'volume down'){
			var volumeChange = 0.2;
			if(volumeChange >= 0){
				$('#playing').get(0).volume -= volumeChange;
			}
		}
	})


});