//Function to count correct answers and print results to document 
function myFunction() {

    //Create variable to count correct answers 
    var correctAnswers = 0;

    //Create variables for each question's input value
    var q1 = document.getElementById("q1c").checked;
    var q2 = document.getElementById("q2c").checked;
    var q3 = document.getElementById("q3b").checked;
    var q4 = document.getElementById("q4a").checked;
    var q5 = document.getElementById("q5b").checked;
    var q6 = document.getElementById("q6a").checked;
    var q7 = document.getElementById("q7a").checked;
    var q8 = document.getElementById("q8a").checked;
    var q9 = document.getElementById("q9d").checked;
    var q10 = document.getElementById("q10d").checked;
    var q11 = document.getElementById("q11d").checked;
    var q12 = document.getElementById("q12c").checked;
    var q13 = document.getElementById("q13b").checked;
    var q14 = document.getElementById("q14b").checked;
    var q15 = document.getElementById("q15b").checked;

    //check totaL NUMBER of coorect answers
     if (q1) {
        correctAnswers += 1;
    }
     if (q2) {
        correctAnswers += 1;
    }
     if (q3) {
        correctAnswers += 1;
    }
     if (q4) {
        correctAnswers += 1;
    }
     if (q5) {
        correctAnswers += 1;
    }
     if (q6) {
        correctAnswers += 1;
    }
     if (q7) {
        correctAnswers += 1;
    }
     if (q8) {
        correctAnswers += 1;
    }
     if (q9) {
        correctAnswers += 1;
    }
     if (q10) {
        correctAnswers += 1;
    }
     if (q11) {
        correctAnswers += 1;
    }
     if (q412) {
        correctAnswers += 1;
    }
     if (q13) {
        correctAnswers += 1;
    }
     if (q14) {
        correctAnswers += 1;
    }


     //Print results (and statement) to document, dependant on outcome
         if (correctAnswers === 15) {
        document.getElementById("result").innerHTML = "Congratulations! You got all 15 answers correct";}
    else if (correctAnswers >= 10) {
        document.getElementById("result").innerHTML = "Congratulations! You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 7) {
        document.getElementById("result").innerHTML = "You got " + correctAnswers + " answers correct";}
    else if (correctAnswers >= 3) {
        document.getElementById("result").innerHTML = "Too Bad! You only got " + correctAnswers + " answers correct";}
    else if (correctAnswers === 1) {
        document.getElementById("result").innerHTML = "Too Bad! You only got 1 answer correct";}
    else if (correctAnswers === 0) {
        document.getElementById("result").innerHTML = "You didn't answer a single answer correctly!";}

        //Print correct answers to form
        document.getElementById("answers").innerHTML = "Correct answers: (1)c (2)c (3)b (4)a (5)b (6)a (7)a (8)a (9)d (10)d (11)d (12)c (13)b (14)b (15)b;

        //Reset contents of form
        document.getElementById("quiz-form").reset();
}
