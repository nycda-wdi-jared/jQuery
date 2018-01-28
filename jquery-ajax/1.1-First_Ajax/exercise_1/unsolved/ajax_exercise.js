//api documentation for weather api: https://openweathermap.org/api
//http://openweathermap.org/appid

$(document).ready(function(){
	//key create to gain access to weather map api
	var apiKey = '275d5dfdea53a2d3e3869f48d154e9ac';
	//url required for get response
	var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
	//need to tell the api what location you want to look up the weather for

	$('#weather-button').on('click', function(){
		var inputValue = $('#city-input').val().toLowerCase().split(" ").join("+");
		console.log(inputValue)
		weatherApiUrl += inputValue;
		console.log(weatherApiUrl)
		$.ajax({
			type: 'GET',
			url: weatherApiUrl,
			success: function(response){
				//this will originally show as an error in the console. Make this have no error.
				console.log(response)
			}
		});
	});
})