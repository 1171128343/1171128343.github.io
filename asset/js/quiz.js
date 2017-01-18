

var answerone = document.getElementsByName('answer1');
var answertwo = document.getElementsByName('answer2');
var answerthree = document.getElementsByName('answer3');
var answerfour = document.getElementsByName('answer4');
var answerfive = document.getElementsByName('answer5');
var answersix = document.getElementsByName('answer6');
var answerseven = document.getElementsByName('answer7');
var answereight = document.getElementsByName('answer8');
var answernine = document.getElementsByName('answer9');
var answerten = document.getElementsByName('answer10');
var one = document.getElementById('one');
var two = document.getElementById('two');
var answerArray = [answerone, answertwo, answerthree, answerfour, answerfive, answersix, answerseven, answereight, answernine, answerten];
var score = 0;



function check(){
     for(var i = 0; i < answerArray.length; i++){
        for(var o = 0; o <answerone.length; o++){
            if(answerArray[i][o].value == "correct" && answerArray[i][o].checked) {
                one.innerHTML = 'you have got' + ' ' + (i+1) + ' ' + 'questions correct';
                score++;
            }
        }
     }
    var showScore = Math.round((score/10)*100) + '%';
    two.innerHTML = showScore;
}
 

function change() {
    document.getElementsByTagName('TITLE').innerHTML = 'Quizit Exam';
}