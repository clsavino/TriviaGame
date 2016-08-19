window.onload = function(){

var counter = 40;
var timerId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;
var myForm = '';
var answers = ['howard', 'mystique', 'panther', 'asgard', 'natalia', 'bucky', 'gwen', 'laufey', 'magneto'];
console.log('answers array ', answers);
var answerChecked;
var allRadios;
var numQuestions = 9;

// starts the game when game button (start) pressed
$('.gameBtn').on('click', startTimer);

// runs once to start the timer when called by click handler
function startTimer() {
	// start the countdown here //
	timerId = setInterval(displayTime, 1000);
	$('.gameBtn').addClass('hide'); //removes Start button
	$('#infoDisplay').html('<p></p>');
	triviaGame();
}

// displays a timer of how many seconds left to play the game
function displayTime() {
	// decrement counter by 1 - indicates # seconds left in game
	counter--;
	$('#infoDisplay').html('<p>Time Remaining: ' + counter + ' seconds</p>');
	if (counter === 0) {
		clearInterval(timerId);// clears timer
		reset(); // removes game questions and displays stats
	}
}

// displays the trivia game that was hidden until the start btn clicked
function triviaGame(){
	$('form').removeClass('hide'); 
}

// resets the page by removing the trivia and displaying the stats
function reset() {
	counter = 40;
	$('form').addClass('hide');
	answerChecked = $("input[type=radio]:checked");
	allRadios = $("input[type=radio]");

	// Check to see if the checked radio buttons are the correct answers. Compare to the answers array using the jQuery function -  $.inArray(value, array)
	var i;
	for (i=0; i < answerChecked.length; i++) {
		var arrayIndex = $.inArray(answerChecked[i].value, answers);
		if (arrayIndex >= 0) { //the checked btn was a correct answer (was in the answers array)
			correct++;
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

	$('.gameBtn').removeClass('hide');
}

}; // end of window.onload