/*

1. import jquery
2. start off your js with $(document).ready(function(){})...all code goes between the curly brackets
3. start off by hiding the image first
4. make the image appear after you click the appropriate button
5. make the backgound color of the h2 tag to change to blue on click
6. Bonus: Create a num variable and increment that number with the appropriate on click, 
          and append the change number to the dom
7. Another Bonus: Make num decrease with appropriate button

*/

$(document).ready(function(){

	//hiding first image on the page
	$('img').eq(0).hide();

	//first button click will show the image
	$('button').eq(0).on('click', function(){
		$('img').show();
	})

	//3rd div on click will change the background-color and width of the 2nd div
	$('div').eq(2).on('click', function(){
		$('div').eq(2).css('background', 'blue');
		$('div').eq(2).css('width', '400px');
	})

	//declaring a variable to an integer for later user
	var num = 0;

	//element with id of num-inc-button, when clicked, will increase
	//the number and append the number to the first span dom/html
	$('#num-inc-button').on('click', function(){
		num++;
		$('span').eq(0).text(num);
	})

	//element with id of num-inc-button, when clicked, will decrease
	//the number and append the number to the first span dom/html
	$('#num-dec-button').on('click', function(){
		num--;
		$('span').eq(0).text(num)
	})

})