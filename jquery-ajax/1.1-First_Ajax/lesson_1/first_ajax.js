//api documentation for weather api: https://openweathermap.org/api

$(document).ready(function(){
	//key create to gain access to weather map api
	var apiKey = '275d5dfdea53a2d3e3869f48d154e9ac';
	//url required for get response
	var weatherApiUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=' + apiKey + '&units=imperial&q=new+york';

	$.ajax({
		type: 'GET',
		//url created above
		url: weatherApiUrl,
		success: function(response){
			//look at the console log of the response
			console.log(response)
			console.log(response.name)
			console.log(response.main.temp)
		}
	});

	//if you look at the end of the url, that is what the api expects for the input of the city
	//here, we are hard-coding it, meaning directly entering it in the url
	//for the exercise, we are going to use an input to enter the city in
	//however, remember how i said coding doesnt like spaces, well neither does this api
	//spaces are replaced by "+";
	//so, what we need to do with the input string is replace the " " with "+"
	//lets practice on a string
	var name = "Jared Thomas Love";
	//lets practice .toLowerCase() as well, because most urls do not like uppercase letters
	var lowercaseName = name.toLowerCase();
	console.log(lowercaseName);
	var splitStringIntoArray = lowercaseName.split(" ");
	console.log(splitStringIntoArray);
	var joinArrayIntoString = splitStringIntoArray.join("+");
	console.log(joinArrayIntoString);

	console.log("Jared Thomas Love".toLowerCase().split(" ").join("+"));
})