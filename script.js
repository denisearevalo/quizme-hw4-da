// var timerEl = document.getElementById ("countdown");
// const startButton = document.getElementById ("start-btn");

// if startButton = 

const startButton = document.getElementById("start-btn");

// const answerButton = document.getElementById("answer-btn");
startButton.addEventListener("click", startGame);

function startGame() {
    // console.log('Started')
}
const nextButton = document.getElementById("next-btn");

nextButton.addEventListener("click", getNextQuestion);

let currentQuestion = {}
let correctAnswer = true
let score = 0
let availableQuestions = []

let question = [
    {
        question: "What does JS stand for?",
        answer: {
            a: "Just Science",
            b: "Jumping Skittles",
            c: "Java Sucks",
            d: "Java Script",
            answer: 4,
        }
    },
    {
        question: "Which is true for const?",
        answer: [
            {text: "Can be used to redeclare the variable.", correct:false},
            {text: "Capitalizes variables.", correct:false},
            {text: "Cannot be reassigned.", correct:true},
            {text: "Only used for HTML.", correct:false},
        ]

    },
    {
        question: ["What is a boolean function?"],
        answer: [
            {text: "Finds out if something is greater than something else.", correct:false},
            {text: "A cool jellybean flavor.", correct:false},
            {text: "Finds out if an expression or variable is true.", correct:true},
            {text: "Not the basis of JS comparisons and conditions", correct:false},
        ]

    },
    {
        question: ["If HTML is the bone, CSS is the skin, then what is JS?"],
        answer: [
            {text: "The phalanges.", correct:false},
            {text: "The muscle.", correct:true},
            {text: "The pinky toe.", correct:false},
            {text: "The accessories.", correct:true},
        ]

    }
]

const scorePoints =20
const MaxQuestions= 4


function getNextQuestion() {
    // console.log('Next')
    // will keep track of score
    if(availableQuestions.length === 0 || questionCounter > MaxQuestions){
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('/end.html')
    }
    // how to calculate value of question index to ask
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question
    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
    availableQuestions.splice(questionIndex, 1)
}

// answerButton.addEventListener("click", selectAnswer);

// function selectAnswer() {
//     // console.log("answer")
// }

// function selectViewScore() {

// 
