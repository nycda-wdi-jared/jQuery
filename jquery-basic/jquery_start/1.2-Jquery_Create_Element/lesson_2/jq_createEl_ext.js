//for jQuery, wrap everything in $(document).ready()
$(document).ready(function(){

	//creating your data
	var arrayObj = [
		{
			id: 1,
			name: 'Joey',
			role: 'Developer',
			age: 30,
			gender: 'male'
		},
		{
			id: 2,
			name: 'Bobby',
			role: 'Anthropologist',
			age: 32,
			gender: 'male'
		},
		{
			id: 3,
			name: 'Sally',
			role: 'CEO',
			age: 23,
			gender: 'female'
		},
		{
			id: 4,
			name: 'Rebecca',
			role: 'Concierge',
			age: 53,
			gender: 'female'
		}
	]

	//creating a new div to store html elements
	//and then append later on
	var div = $('<div>');
	//looping through arrayObj to create a button
	//for each employee, with each of their names
	//as the text of the button
	for(var i = 0; i < arrayObj.length; i++){
		//creates new button
		var button = $('<button>')
		//adds text to that button
		button.text(arrayObj[i].name)
		//gives button a special attribute
		//which can tie it back to the data item in the object
		button.attr('data-id', arrayObj[i].id)

		//adding a class to each button so all of my jQuery
		//created buttons have a similar class
		button.addClass('employee-names')

		//appending each button made to the div i created
		//above the for loop
		div.append(button);
	}

	//append a line break to the div to create separation
	//when appended to the DOM
	div.append('<br />')

	//$('.employee-names').on('click') will not work because this element
	//is not hard-coded (meaning, its in the html file) into your html, it was created through jQuery
	//below is how you access this element through jQuery
	//document is the connection from your html to your js through jquery
	$(document).on('click', '.employee-names', function(){
		//removing this div which is created below, so a fresh
		//div each time a button is clicked
		$('#info-div').remove();
		// try both .remove() and .empty() when you want items removed after an event

		//creating a div to store my info
		var anotherDiv = $('<div id="info-div">');

		//creating p tags to store each text item to,
		//because that is the way that I want to look on the DOM
		var nameP = $('<p>');
		var roleP = $('<p>');
		var ageP = $('<p>');
		var genderP = $('<p>');

		//when one of the buttons is clicked, in order for the correct
		//info to print out in relation to the object, im comparing each id in the array
		//to the data-id of the item that was clicked
		//console.log($(this).data('id'))
		arrayObj.forEach((person) => {
			if(person.id == $(this).data('id')){
				//storing text to the p tags created above
				nameP.text("Name: " + person.name);
				roleP.text("Role: " + person.role);
				ageP.text("Age: " + person.age);
				genderP.text("Gender: " + person.gender)
			}
		})
		//appending p tags to the div created above
		anotherDiv.append(nameP).append(roleP).append(ageP).append(genderP)
		
		//appending that div holding all of the p tags to a div created above
		//holding some additional elements
		div.append(anotherDiv);
	})

	//finally.....appending the div holding everything
	//TO THE DOM
	$('div').eq(0).append(div)

});