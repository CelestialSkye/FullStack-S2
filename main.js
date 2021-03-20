
function check(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var correct = 0;
	
	if (question1 == "1947") {
		correct++;
}
	if (question2 == "France") {
		correct++;
}	
	if (question3 == "89") {
		correct++;
	}
	if (question4 == "1963") {
		correct++;
	}
	if (question5 == "111") {
		correct++;
	}
	
	
	
	var score;

	if (correct == 0) {
		score = 2;
	}
	if (correct > 0 && correct < 3) {
		score = 1;
	}
	if (correct == 3) {
		score = 0;
	}
	document.getElementById("after_submit").style.visibility = "visible";
	
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	
	
	}
	
