window.onload = function(){

var counter = 30;
var timerId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var myForm = '';
var answers = ['howard', 'mystique', 'panther', 'asgard', 'laufey'];
var answerChecked;
var allRadios;
var numQuestions = 5;

$('.gameBtn').on('click', startTimer);

function startTimer() {// runs once to start timer
	//???????????????????????????????
	//$('formDisplay').append(myForm);

	// start the countdown here //
	timerId = setInterval(displayTime, 1000);
	$('.gameBtn').remove(); //removes Start button
	triviaGame();
}

function displayTime() {
	// increment counter by 1 - indicates # seconds since game began
	counter--;
	$('#infoDisplay').html('<p>Time Remaining: ' + counter + ' seconds</p>');
	if (counter === 0) {
		clearInterval(timerId);// clears timer
		reset();
	}
}

function triviaGame(){
	$('form').removeClass('hide');
}

function reset() {
	console.log('reset function');
	counter = 20;
	$('form').addClass('hide');
	answerChecked = $("input[type=radio]:checked");
	allRadios = $("input[type=radio]");

	console.log(answerChecked[0].value, 'value');

	console.log($.inArray(answerChecked[1].value, answers));
	//Determin correct and incorrect and unanswered questions
	console.log('answerChecked ', answerChecked);
	console.log('allRadios ', allRadios);

	// Check to see if the checked radio buttons are the correct answers. Compare to the answers array using the jQuery function -  $.inArray(value, array)
	var i;
	for (i=0; i < answerChecked.length; i++) {
		var arrayIndex = $.inArray(answerChecked[i].value,answers);
		if (arrayIndex >= 0) { //the checked btn was correct
			correct++;
			console.log(correct, 'correct');
			console.log(arrayIndex, 'arrayIndex');
		}
	}
	// calculate unanswered questions 
	unanswered = numQuestions - answerChecked.length;
	// calculate incorrect answers
	incorrect = numQuestions - correct - unanswered;
	$('#infoDisplay').append('<p>All Done!</p>');
	$('#infoDisplay').append('<p>Correct Answers: ' + correct + '</p>');
	$('#infoDisplay').append('<p>Incorrect Answers: ' + incorrect + '</p>');
	$('#infoDisplay').append('<p>Unanswered: ' + unanswered + '</p>');
}

}; // end of window.onload