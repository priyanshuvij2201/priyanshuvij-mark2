var readlineSync = require('readline-sync');

var score = 0
var topScorers = [
  {
    name: "friend1",
    score: 5,
  },

  {
    name: "friend2",
    score: 3,
  }
];
var questions = [
  {
    question: 'Which DC villain was meant to be terminated after their second appearance? \n',
    answer: 'The Joker',
  },
  {
    question: '\nWhat does DC stand for?\n',
    answer: 'Detctive Comics',
  },
  {
    question: '\nWhich famous superhero originally had no flight ability?\n',
    answer: 'Superman',
  },
  {
    question: '\nWhich writing font was inspired by Detective Comics (DC)?\n',
    answer: 'Comic Sans',
  },
  {
    question: '\nWhich Marvel writer worked for DC Comics?\n',
    answer: 'Stan Lee',
  }
];
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("Congratulations! You are correct!");
    score = score + 1;
  } else {
    console.log("That's wrong!")
  }
  console.log("Current score is " + score);
  console.log("*************")
}
function greeting() {
  var playerName = readlineSync.question("Enter your name : \n");
  console.log("\nGreetings, " + playerName + "!" + " This is the DO YOU KNOW MARVEL? Quiz!\n");
}
function quiz() {
  for (var i = 0; i < questions.length; i++) {
    var questionNow = questions[i];
    play(questionNow.question, questionNow.answer)
  }
}
function displayScore() {
  console.log("Your score is = " + score);
  console.log("The high scores are : ")
  for (var i = 0; i < topScorers.length; i++) {
    var topScorern = topScorers[i]
    console.log(topScorern.name + " : " + topScorern.score);
  }
}
greeting();
quiz();
displayScore();
