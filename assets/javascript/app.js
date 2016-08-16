window.onload = function(){
    $('.gameBtn').on('click', trivia);
};

var counter = 20;
var timerId;
var correct = 0;
var incorrect = 0;
var unanswered = 0;

function reset() {
	console.log('reset function');
	counter = 20;

	$('#formDisplay').html('<h2>All Done!</h2>');
	$('#formDisplay').append('<h2>Correct Answers: ' + correct + '</h2>');
	$('#formDisplay').append('<h2>Incorrect Answers: ' + incorrect + '</h2>');
	$('#formDisplay').append('<h2>Unanswered: ' + unanswered + '</h2>');
}

function trivia() {
	// start the countdown here //
	timerId = setInterval(display, 1000);
	$('.gameBtn').remove();
}

function display() {
	// increment time by 1
	counter--;
	console.log('counter is ' + counter);
	$('#formDisplay').html('<h2>Time Remaining: ' + counter + ' seconds</h2>');
	if (counter === 0) {
		clearInterval(timerId);
		reset();
	}
}