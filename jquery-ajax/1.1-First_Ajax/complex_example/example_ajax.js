$(document).ready(function(){
	//setting up a variable as undefined, and will re-assign the value later on
	var randomFiltered;

	//setting up an api call to a website, 'GET'ting information
	//put this url into the brower, see what happens
	$.ajax({
		type: 'GET',
		url: 'https://intense-reef-37664.herokuapp.com/v1/api/all',
		contentType: 'application/json',
		//success is a callback function, what is coming out of response
		success: function(response){
			//look at the console log of the response
			console.log(response);

			//making sure that what comes out of the response
			//is an object
			if(typeof response === 'object'){
				//only getting the quoter out of the response array
				let mapQuoter = response.map(function(quoter){
					return quoter.quoter;
				})
				//removing duplicates from array
				//console log dupRemove....compate to mapQuoter
				let dupRemove = [...new Set(mapQuoter)]

				//going to create buttons out of all the quoters
				var div = $('<div>');
				//looping through my duplicates removed array
				for(var i = 0; i < dupRemove.length; i++){
					var button = $('<button>');
					//adding a bootstrap button class
					//and adding a class that i can use when i click the button
					button.addClass('btn btn-info quoter-button');

					//attributing a data attribute to the item so i get
					//a value out of it when the button is clicked
					button.attr('data-quoter', dupRemove[i]);
					//adding the text from the index of the array
					button.text(dupRemove[i]);
					//appending button to the div created above
					div.append(button);
				}
				//appending div of button(s) to the DOM
				$('div').eq(0).append(div);

				//setting up a click function for the buttons that i created above
				$(document).on('click', '.quoter-button', function(){
					//doing this remove because I only want one quote to show when I click
					//try it without the remove();
					$('#quote-div').remove();

					//I set my data-quoter for each button made
					//console.log quoter, and look at the button elements
					//in the google console as well
					var quoter = $(this).data('quoter');

					//filtering the response by comparing it against the quoter clicked
					var filtered = response.filter((res) => res.quoter === quoter);
					//creating a div to add quote to
					var quoteDiv = $('<div id="quote-div">')
					//creating a p tag to add quote text to
					var quoteP = $('<p>');
					//reassigning variable from above, getting a random value out of the
					//filtered array i created just above
					randomFiltered = filtered[Math.floor(Math.random() * filtered.length)].quote;
					//adding the quote text to the quote p tag
					quoteP.text(randomFiltered);
					//adding the quote p tag to the quote div
					quoteDiv.append(quoteP)
					//adding the quote div to the dom
					$('div').eq(0).append(quoteDiv);
				})
			}
		}
	})


})