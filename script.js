var question = document.querySelector("#question")
var choices = Array.from(document.querySelectorAll(".choice-text"))
var score = document.querySelector("#score")
var timerEl = document.querySelector(".timer")
var btn1 = document.getElementById ("#btn1")
var btn2 = document.getElementById ("#btn2")

var currentQuestions = {}

var score = 0
var questionCounter = 0
var availableQuestions = []
var score_points = 100
var max_questions = 5


var questions = [
    {
        question: "Who created JavaScript?",
        choice1: "Brendan Eich",
        choice2: "Sheryl Sandberg",
        choice3: "Douglas Crockford",
        a: 1,
    },
    {
        question: "What year was HTML invented?",
        choice1: "1993",
        choice2: "1994",
        choice3: "1995",
        a: 1,
    },
    {
        question: "What function converts a string and returns an integer?",
        choice1: "appendChild",
        choice2: "parseInt",
        choice3: "setAttribute",
        a: 2,
    },
    {
        question: "What is the Event Handler?",
        choice1: "The user behavior",
        choice2: "Observation of the event",
        choice3: "Response of the event",
        a: 3
    },
    {
        question: "In the for loop what is the increment expression",
        choice1: "var i = 0",
        choice2: "i < 3",
        choice3: "i++",
        a: 3
    }
];


playGame = () => {
    //countdown()
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getQuestions()

};

getQuestions = () => {
    questionCounter++
    var questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestions = availableQuestions[questionsIndex]
    question.innerText = currentQuestions.question

    choices.forEach(choice => {
        var number = choice.dataset["number"]
        choice.innerText = currentQuestions["choice" + number]
    })
};









playGame()