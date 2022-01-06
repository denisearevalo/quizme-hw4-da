const startButton = document.getElementById("start-btn");
var countdown = document.getElementById("timer");
var secondsLeft = 60;
const nextButton = document.getElementById("next-btn");
const question = document.getElementById("question");
const a = document.getElementById("answer-abtn")
const b = document.getElementById("answer-bbtn")
const c = document.getElementById("answer-cbtn")
const d = document.getElementById("answer-dbtn")

const questions = [
    {
        question: "What does JS stand for?",
            a: "Just Science",
            b: "Jumping Skittles",
            c: "Java Sucks",
            d: "Java Script",
        correctAnswer: "Java Script",
    },
    {
        question: "Which is true for const?",
            a: "Can be used to redeclare the variable.", 
            b: "Capitalizes variables.", 
            c: "Cannot be reassigned.", 
            d: "Only used for HTML.", 
        correctAnswer: "Cannot be reassigned.",
    },
    {
        question: "What is a boolean function?",
            a: "Finds out if something is greater than something else.", 
            b: "A cool jellybean flavor.", 
            c: "Finds out if an expression or variable is true.", 
            d: "Not the basis of JS comparisons and conditions", 
        correctAnswer: "Finds out if an expression or variable is true.",
    },
    {
        question: "If HTML is the bone, CSS is the skin, then what is JS?",
            a: "The phalanges.", 
            b: "The muscle.", 
            c: "The pinky toe.", 
            d: "The accessories.", 
        correctAnswer: "The muscle.",
    }]
// const answerButton = document.getElementById("answer-btn");

function startGame() {
    
    startButton.classList.add("hidden")
    var timerInterval = setInterval(function() {
        secondsLeft--;
        // this sets the time on the screen to what is declared
        countdown.textContent = "timeleft:" + secondsLeft;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
        //   sendMessage();
        }
    
      }, 1000);
   getNextQuestion();
}

// let currentQuestion = 0
// let correctAnswer = true
// let score = 0
// let availableQuestions = []

function getNextQuestion() {
   question.textContent = questions.question;
    // a.textContent = questions.a;
    // b.textContent = questions.b;
    // c.textContent = questions.c;
    // d.textContent = questions.d;
}
// scores to be stored in localStorage need for for user to complete and display other scores

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", getNextQuestion);
a.addEventListener("click", a);
b.addEventListener("click", b);
c.addEventListener("click", c);
d.addEventListener("click", d);

// const question = document.getElementById ("question");
// // ["What does JS stand for?","Which is true for const?", "What is a boolean function?","If HTML is the bone, CSS is the skin, then what is JS?",]
// const answer = document.getElementById("answer-abtn");
// const answer = document.getElementById("answer-bbtn");
// const answer = document.getElementById("answer-cbtn");
// const answer = document.getElementById("answer-adtn");
// // let currentQuestion = 0
// // let correctAnswer = true
// // let score = 0
// // let availableQuestions = []