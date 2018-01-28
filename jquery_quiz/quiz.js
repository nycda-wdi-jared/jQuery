/*

1. Lets get some question and answers

*/

//telling my application that i want these html to not be displayed when the page first loads
//these lines represent how to access css with vanilla javascript

$(document).ready(function(){

	//jquery - 3 different ways to access this element, then three different ways to hide
	//it right when the page loads
	$('form').eq(0).hide();
	//$('#your-answer-form').hide();
	//$('.answer-form').hide();

	//$('form').eq(0).css('display', 'none');
	//$('#your-answer-form').css('display', 'none');
	//$('.answer-form').css('display', 'none');
	//vanilla javascript
	//document.getElementById('your-answer-form').style.display = 'none';

	//jQuery
	$('div').eq(1).hide();
	//$('#options-list').hide()
	//vanilla-js
	//document.getElementById('options-list').style.display = 'none';

	var index = 0;
	var correct = 0;
	var incorrect = 0;

	var trivia = [
		{
			question: 'Who was the first person to land on the moon',
			options: ['neil armstrong', 'john smith', 'bob saget'],
			answer: 'neil armstrong'
		},
		{
			question: 'Who framed roger rabbit',
			options: ['joe', 'john', 'who cares'],
			answer: 'who cares'
		},
		{
			question: 'Who shot Biggie',
			options: ['tupac', 'suge knight', 'eazy e'],
			answer: 'suge knight'
		}
	]

	function nextQuestion(index){
		//jquery
		$('#question').html("Question " + (index + 1) + ": " + trivia[index].question);
		//vanilla js
		//document.getElementById('question').innerHTML = "Question " + (index + 1) + ": " + trivia[index].question;
		var options = "<ol>";
		for(var i = 0; i < trivia[index].options.length; i++){
			options += "<li>" + trivia[index].options[i] + "</li>"
		}
		//jquery
		$('#options-list').html(options + "</ol>")

		//vanilla js
		//document.getElementById('options-list').innerHTML = options + "</ol>"
	}

	//vanilla js
	// document.addEventListener('keydown', function(e){
	// 	if(e.key === " "){
	// 		document.getElementById('your-answer-form').style.display = 'block';
	// 		document.getElementById('options-list').style.display = 'block';
	// 		document.getElementById('trivia').style.display = 'none';

	// 		nextQuestion(0);
	// 	}
	// })

	$(document).keydown(function(e){
		if(e.key === " "){
			$('#your-answer-form').show();
			$('#options-list').show();
			$('#trivia').hide();

			nextQuestion(0)
		}
	})

	//vanilla js
	// document.getElementById('your-answer-form').onsubmit = function(e){
	// 	e.preventDefault();

	// 	var answer = document.getElementById('your-answer').value

	// 	if(answer === trivia[index].answer){
	// 		correct++;
	// 	} else {
	// 		incorrect++;
	// 	}

	// 	index++;
	// 	nextQuestion(index);

	// 	document.getElementById('your-answer').value = "";
	// }

	//jQuery
	$('#your-answer-form').on('submit', function(e){
		e.preventDefault();

		if($('#your-answer').val() === trivia[index].answer){
			correct++;
		} else {
			incorrect++;
		}

		index++;
		nextQuestion(index);

		$('#your-answer').val("");
	})

})





