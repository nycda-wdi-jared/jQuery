//api documentation for weather api: https://openweathermap.org/api

$(document).ready(function(){
	//key created to gain access to weather map api
	//var apiKey = '275d5dfdea53a2d3e3869f48d154e9ac';

	//$('#weather-button').on('click', function(){
		//var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=';
		//weatherApiUrl += $('#city-input').val().toLowerCase().split(" ").join("+");
		//or you can do weatherApiUrl = weatherApiUrl + $('#city-input').val().toLowerCase().split(" ").join("+");
		$.ajax({
			type: 'POST',
			//url created above
			url: 'https://aztro.herokuapp.com/?sign=aries&day=today',
			accept: 'application/json',
			dataType: 'jsonp xml',
			success: function(response){
				//look at the console log of the response
				console.log(response)
			}
		});
	//});
})