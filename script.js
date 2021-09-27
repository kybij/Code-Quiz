console.log("script")
var question = document.getElementById("question")
var choices = Array.from(document.querySelectorAll(".choice-text"))
var scoreEl = document.querySelector("#score")
var timerEl = document.querySelector(".timer")
var btn1 = document.getElementById("#btn1")
var btn2 = document.getElementById("#btn2")
var initialsEl = document.querySelector("#initials")
var feedbackEl = document.querySelector("#feedback")
var endScreenEl = document.getElementById("end-screen")
var submitBtn = document.querySelector("#submitBtn")


var currentQuestions = {}
var score = 0
var questionCounter = 0
var availableQuestions = []
var score_points = 100


const CORRECT_BONUS = 10
const MAX_QUESTIONS = 5
var questions = [
    {
        question: "Who created JavaScript?",
        choice1: "Brendan Eich",
        choice2: "Sheryl Sandberg",
        choice3: "Douglas Crockford",
        answer: 1,
    },
    {
        question: "What year was HTML invented?",
        choice1: "1993",
        choice2: "1994",
        choice3: "1995",
        answer: 1,
    },
    {
        question: "What function converts a string and returns an integer?",
        choice1: "appendChild",
        choice2: "parseInt",
        choice3: "setAttribute",
        answer: 2,
    },
    {
        question: "What is the Event Handler?",
        choice1: "The user behavior",
        choice2: "Observation of the event",
        choice3: "Response of the event",
        answer: 3
    },
    {
        question: "In the for loop what is the increment expression",
        choice1: "var i = 0",
        choice2: "i < 3",
        choice3: "i++",
        answer: 3
    }
];

var timeLeft = questions.length * 15
questions = questions.sort(question => 0.5 - Math.random())

console.log(questions)


playGame = () => {


    timerId = setInterval(countDown, 1000)


    questionCounter = 0
    score = 0
    getQuestions()

};

countDown = () => {

    if (scoreEl) {
        scoreEl.textContent = timeLeft
        //     clearInterval(timerId)
        //     quizEnd()
    }
}

getQuestions = () => {

    document.querySelector(".questionContainer").innerHTML = `
    <h1 id="question">${questions[questionCounter].question}</h1>
    <div class="choice-container">
       <button class="btn" data-id=1 >${questions[questionCounter].choice1}</button>
        
    </div>
    <div class="choice-container">
    <button class="btn"  data-id=2 >${questions[questionCounter].choice2}</button>
         
    </div>
    <div class="choice-container">
        <button class="btn"  data-id=3 >${questions[questionCounter].choice3}</button>
        
    </div>
    </div>
    `


    var btnArraySelector = document.querySelectorAll(".btn")

    for (let index = 0; index < btnArraySelector.length; index++) {
        btnArraySelector[index].addEventListener("click", function () {
            var answer = this.getAttribute("data-id")
            if (questionCounter < questions.length) {

                if (answer != questions[questionCounter].answer) {
                    timeLeft = timeLeft - 15
                    document.querySelector(".errorMessage").textContent = "Wrong"
                }
                else {
                    document.querySelector(".errorMessage").textContent = "Right"
                }

                questionCounter++

                setTimeout(getQuestions, 1000)
            }
            else {
                clearInterval(timerId)
                alert("Add Initials then few your highscore")
            }

        })
    }


};



function quizEnd() {
    clearInterval(timerId);

    endScreenEl.removeAttribute("class");

    var finalScoreEl = document.getElementById("demo");
    finalScoreEl.textContent = timeLeft;


}




function saveHighscore() {


    var initials = initialsEl.value.trim();
    // getting input box value

    if (initials !== "") {
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];


        var newScore = {
            score: timeLeft, initials: initials
        };

        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        
    }


}


function saving(event) {
    if (event.key === "Enter") {
        saveHighscore()
    }
}


playGame();


submitBtn.onclick = saveHighscore;

// initialsEl.onkeyup = checkForEnter;
initialsEl.onkeyup = saving;