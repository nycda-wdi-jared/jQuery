$(document).ready(function(){
	//checking if the document/window is ready to load up
	//the items im about to serve it through javascript to html
	console.log('ready');

	//creating a div that i will add things onto later on
	var div = $('<div>');

	//creating an image that i will attribute properties too later
	var img = $('<img>')

	//attributing a source of a picture to my newly created image
	img.attr('src', 'http://d3n3e0roqdrhcc.cloudfront.net/assets/home-try-9a55eb59edde9d8e1588bc9d6c68d957.png')
	
	//adding a class to my newly created image
	img.addClass('jquery-')

	//adding width and height properties to my newly created image
	img.height(100)
	img.width(100)

	//creating an a tag and adding my properties this way
	//as you can see: lines 24-28 && lines 13-20 are two different
	//ways to add properties to an item in jquery ;)
	var aTag = $('<a>', {
		href: 'https://jquery.com/',
		text: 'jQuery',
		target: '_blank'
	})
	//adding css to my newly created a tag
	aTag.css('float', 'left')

	//appending the aTag to the div that i created above
	//you can use html or append, try both out...
	//html expects html...append will just add onto, not too nitpicky
	div.html(aTag);

	//appending the img to the div that i created above
	div.append(img);

	//it will show up in the dom in this order, top is a tag and bottom is image

	//finally, the much needed appending the div created above
	//which holds all of the value i added to it....now to the dom/html
	$('div').eq(0).append(div);

	//look at the elements in the google inspect, see how they come out
})