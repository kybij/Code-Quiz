var playEl = document.querySelector(".play");
var timerEl = document.querySelector("#countdown")
var scoreEl = document.querySelector(".score");
var questionEl = document.getElementById("questions")
var quizEl = document.getElementById("quiz")
var myQuestions = [{
    question: "Who created JavaScript?",
    answers: {
        a: "Brendan Eich",
        b: "Sheryl Sandberg",
        c: "Douglas Crockford"
    },
    correctAnswer: "a"
},
{
    question: "What year was HTML invented?",
    answers: {
        a: "1993",
        b: "1994",
        c: "1995"
    },
    correctAnswer: "a"
},
{
    question: "What function converts a string and returns an integer?",
    answers: {
        a: "appendChild",
        b: "parseInt",
        c: "setAttribute"
    },
    correctAnswer: "b"
},
{
    question: "What is the Event Handler?",
    answers: {
        a: "The user behavior",
        b: "Observation of the event",
        c: "Response of the event"
    },
    correctAnswer: "c"
},
{
    question: "In the for loop what is the increment expression",
    answers: {
        a: "var i = 0",
        b: "i < 3",
        c: "i++"
    },
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
            timeEl.textContent = "";
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
   

    
};

playEl.onclick = playGame
scoreEl.addEventListener("click", function () {
    alert("button clicked");
});
playEl.addEventListener("click",playGame)