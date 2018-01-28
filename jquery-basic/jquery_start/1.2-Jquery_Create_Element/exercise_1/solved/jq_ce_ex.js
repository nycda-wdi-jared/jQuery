/*

Store the input values in variables
From the inputs, add onto the respective div with 'p' tags with your name and your username
i.e. Name: Jared

**the value from the input after on submit is... $('whatever').val() instead of document.getElementByWhatever('whatever').value

*/

$(document).ready(function(){

	//calling on submit event for form created in html
	//with id of 'create-el-form'
	$('#create-el-form').on('submit', function(e){
		//prevents page from automatically reloading/redirecting
		e.preventDefault();

		//value of input with id of 'name' after form submitted
		var name = $('#name').val();

		//value of input with id of 'username' after form submitted
		var username = $('#username').val();

		//creating new p tag to store my name
		var nameP = $('<p>');
		//creating new p tag to store username
		var usernameP = $('<p>');

		//making the text of my name p tag the name that i entered in the input
		nameP.text('Name: ' + name);
		//making the text of my username p tag the username that i entered in the input
		usernameP.text('Username: ' + username);

		//appending both p tags that i made to a div on the html
		//with id of div-to-add-to
		$('#div-to-add-to').append(nameP).append(usernameP);

		//emptying the text in the inputs after the submit button
		//is pressed
		$('#name').val("");
		$('#username').val("");

	})

});