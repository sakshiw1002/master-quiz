//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;

    //Create variables for each question's input value
    var q1 = document.getElementById("q1a").checked;
    var q2 = document.getElementById("q2b").checked;
    var q3 = document.getElementById("q3b").checked;
    var q4 = document.getElementById("q4b").checked;
    var q5 = document.getElementById("q5b").checked;
    var q6 = document.getElementById("q6a").checked;
    var q7 = document.getElementById("q7a").checked;
    var q8 = document.getElementById("q8b").checked;
    var q9 = document.getElementById("q9a").checked;
    var q10 = document.getElementById("q10b").checked;
    /*var q11 = document.getElementById("q11b").checked;
    var q12 = document.getElementById("q12").value;
    var q13 = document.getElementById("q13b").checked;
    var q14 = document.getElementById("q14").value;
    var q15 = document.getElementById("q15a").checked;
    var q16 = document.getElementById("q16d").checked;
    var q17 = document.getElementById("q17").value;
    var q18 = document.getElementById("q18c").checked;
    var q19 = document.getElementById("q19").value;
    var q20 = document.getElementById("q20").value;*/

    //Assign correct answers to field inputs
      if (q1) {
        correctAnswers += 1;
    } if (q2) {
        correctAnswers += 1;
    } if (q3) {
        correctAnswers += 1;
    } if (q4) {
        correctAnswers += 1;
    } if (q5) {
        correctAnswers += 1;
    } if (q6) {
        correctAnswers += 1;
    } if (q7) {
        correctAnswers += 1;
    } if (q8)  {
        correctAnswers += 1;
    } if (q9) {
        correctAnswers += 1;
    } if (q10) {
        correctAnswers += 1;
    } /*if (q11) {
        correctAnswers += 1;
    } if (q12.toUpperCase() === "SALT") {
        correctAnswers += 1;
    } if (q13) {
        correctAnswers += 1;
    }  if (q14.toUpperCase() === "ALUMINIUM") {
        correctAnswers += 1;
    }  if (q15) {
        correctAnswers += 1;
    }  if (q16) {
        correctAnswers += 1;
    }  if (q17.toUpperCase() === "AUSTRIA") {
        correctAnswers += 1;
    }  if (q18) {
        correctAnswers += 1;
    }  if (q19.toUpperCase() === "FRANCE") {
        correctAnswers += 1;
    }  if ((q20.toUpperCase() === "TEN") || (q20 === "10")) {
        correctAnswers += 1;
    }*/

         //Print results (and statement) to document, dependant on outcome
         if (correctAnswers === 10) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 10 answers correct";}
    else if (correctAnswers >= 7) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 5) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 3) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";}
    else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";}
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";}

        //Print correct answers to form
        document.getElementById("answers").innerHTML = "Correct answers: (1)True(2)False(3)False(4)False (5)False (6)True (7)True (8)False9)True (10)False";

        //Reset contents of form
        document.getElementById("quiz-form").reset();