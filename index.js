var readlineSync = require('readline-sync')

// --> Input
var score = 0;
var userHighScore = 0;
var topUser = ""
var userName = readlineSync.question("Whats your name?")
console.log("Welcome! ", userName, " to DO YOU KNOW PUSHKAR?")

// --> Processing
function play(question, answer){
  var userAnswer = readlineSync.question(question)

  if (userAnswer == answer){
    console.log("Right Answer")
    score++
  }
  else{
    console.log("Wrong answer")
  }
  console.log("Current Score: ",score)
  console.log("_____")
}

// Data for questions

var questions = [
  {
    question: "My favourite football team?",
    answer: "Arsenal"
  }, 
  {
    question: "Where do I live?",
    answer: "Ahmedabad"
  }, 
  {
    question: "Which college am I a part of?",
    answer: "Ahmedabad University"
  },
  {
    question: "My programme?",
    answer: "BA"
  }
]

// Data for high scores
highScore = []

for (var i = 0; i < questions.length; i++){
  play(questions[i].question, questions[i].answer)
}

var userScore  = score;

if (userScore > userHighScore){
  userHighScore = userScore;
  topUser = userName;
  console.log("You scored the highest score", userScore);
  highScore.push(topUser, userHighScore);
}
else{
  console.log("You scored -->", userScore);
}


