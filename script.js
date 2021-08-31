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

var timerId 


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

var timeLeft = questions.length * 15
questions = questions.sort(question => 0.5 - Math.random() )

console.log(questions)


playGame = () => {


  timerId =  setInterval(countDown, 1000)
     
    
    questionCounter = 0
    score = 0
    getQuestions()

};

countDown = () => {
    document.querySelector("#score").textContent = timeLeft-- 
    if ( timeLeft < 0){
        clearInterval(timerId)
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
             if (questionCounter < questions.length ) {
                    
                if (answer !=questions[questionCounter].a){
                    timeLeft = timeLeft -15
                    document.querySelector(".errorMessage").textContent= "Wrong"
                }
                else {
                    document.querySelector(".errorMessage").textContent= "Right"
                }

                questionCounter++
            
                setTimeout(getQuestions, 2000)
             }
             else {
                 clearInterval(timerId)
             }
           
           
        })
    }


    // currentQuestions = availableQuestions[questionsIndex]
    // question.innerText = currentQuestions.question

    // choices.forEach(choice => {
    //     var number = choice.dataset["number"]
    //     choice.innerText = currentQuestions["choice" + number]
    // })
};









playGame()