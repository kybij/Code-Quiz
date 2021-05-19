var playEl = document.querySelector(".play");
var timerEl = document.querySelector("#countdown")
var scoreEl = document.querySelector(".score");
var questionEl = document.getElementById("questions");
var quizEl = document.getElementById("quiz");
var choiceA = document.getElementById ("A");
var choiceB = document.getElementById ("B");
var choiceC = document.getElementById ("C");
var progress =document.getElementById ("progress")
var myQuestions = [{
    questions: "Who created JavaScript?",
         choiceA: "Brendan Eich",
        choiceB: "Sheryl Sandberg",
        choiceC: "Douglas Crockford",
        correctAnswer: "a"
    },
{
    questions: "What year was HTML invented?",
        choiceA: "1993",
        choiceB: "1994",
        choiceC: "1995",
        correctAnswer: "a"
    },
{
    questions: "What function converts a string and returns an integer?",
        choiceA: "appendChild",
        choiceB: "parseInt",
        choiceC: "setAttribute",
        correctAnswer: "b"
    },
{
    questions: "What is the Event Handler?",
        choiceA: "The user behavior",
        choiceB: "Observation of the event",
        choiceC: "Response of the event",
        correctAnswer: "c"
},
{
    questions: "In the for loop what is the increment expression",
        choiceA: "var i = 0",
        choiceB: "i < 3",
        choiceC: "i++",
    correctAnswer: "c"
}
];

 function countdown() {
    var timeLeft = 20;

    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = timeLeft + "seconds remaining";
            timeLeft--;
        } else if (timeLeft === 0) {
            timerEl.textContent = timeLeft + "seconds remaining";
            timeLeft--;
        } else {
            timerEl.textContent = "";
            clearInterval(timeInterval);
            return;
        }
    }, 1000)
};

var playGame = function () {
    countdown()
    questionEl.removeAttribute("class")
    quizEl.setAttribute("class", "hide")
    getQuestions()
};

var getQuestions = function () {
    var q = myQuestions[0];

  questions.innerHTML = "<h3>" + q.questions + "</h3>";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;

};

var getProgress = function () {
    for(let qIndex = 0; qIndex <= questions.length -1; qIndex++ ){
        progress.innerHTML += "div class= 'prog' id=" + qIndex +"></div>";
    }
}




playEl.onclick = playGame
scoreEl.addEventListener("click", function () {
    alert("button clicked");
});
playEl.addEventListener("click",playGame)

