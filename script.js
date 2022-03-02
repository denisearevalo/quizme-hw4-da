// object of questions
var questions = [
  {
    question: "Which is true for const?",
    choices: [
      "Can be used to redeclare the variable.",
      "Only used for HTML.",
      "Cannot be reassigned.",
      "Only used for HTML.",
    ],
    answer: "Cannot be reassigned.",
  },
  {
    question: "What does JS stand for?",
    choices: ["Just Science", "Jumping Skittles", "Java Sucks", "Java Script"],
    answer: "parentheses",
  },
  {
    question: "Which is true for const?",
    choices: [
      "Can be used to redeclare the variable.",
      "Capitalizes variables.",
      "Only used for HTML.",
      "Cannot be reassigned.",
    ],
    answer: "Cannot be reassigned.",
  },
  {
    question: "What is a boolean function?",
    choices: [
      "Finds out if something is greater than something else.",
      "A cool jellybean flavor.",
      "Finds out if an expression or variable is true.",
      "Not the basis of JS comparisons and conditions",
    ],
    answer: "Finds out if an expression or variable is true.",
  },
  {
    question: "If HTML is the bone, CSS is the skin, then what is JS?",
    choices: [
      "The phalanges.",
      "The muscle.",
      "The pinky toe.",
      "The accessories.",
    ],
    answer: "The muscle.",
  },
];

var score = 0;
var questionIndex = 0;

var currentTime = document.querySelector("#currentTime");
var timer = document.querySelector("#startTime");
var questionsDiv = document.querySelector("#questionsDiv");
var borderBox = document.querySelector(".borderBox");

var secondsLeft = 76;
var holdInterval = 0;
var penalty = 10;
// dynamically creates new element
var ulCreate = document.createElement("ul");

// Triggers timer on button, shows user a display on the screen
timer.addEventListener("click", function () {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      secondsLeft--;
      currentTime.textContent = "Time: " + secondsLeft;

      if (secondsLeft <= 0) {
        clearInterval(holdInterval);
        gameDone();
        currentTime.textContent = "Time's up!";
      }
    }, 1000);
  }
  render(questionIndex);
});

// Renders questions and choices to page:
function render(questionIndex) {
  questionsDiv.innerHTML = "";
  ulCreate.innerHTML = "";
  for (var i = 0; i < questions.length; i++) {
    var userQuestion = questions[questionIndex].question;
    var userChoices = questions[questionIndex].choices;
    questionsDiv.textContent = userQuestion;
  }
  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questionsDiv.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}
// checking the answers
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");
    // Correct condition
    if (element.textContent == questions[questionIndex].answer) {
      score++;
      createDiv.textContent =
        "Correct! 👏 The answer is:  " + questions[questionIndex].answer;
    } else {
      // Will deduct seconds off secondsLeft for wrong answers
      secondsLeft = secondsLeft - penalty;
      createDiv.textContent =
        "Wrong! 💩 The correct answer is:  " + questions[questionIndex].answer;
    }
  }
  // Question Index determines number question user is on, increments
  questionIndex++;

  if (questionIndex >= questions.length) {
    // All done will append last page with user stats
    gameDone();
    createDiv.textContent =
      "Congrats 🤓, you reached the end of the quiz!" +
      " " +
      "You got  " +
      score +
      "/" +
      questions.length +
      " correct!";
  } else {
    render(questionIndex);
  }
  questionsDiv.appendChild(createDiv);
}
function gameDone() {
  questionsDiv.innerHTML = "";
  currentTime.innerHTML = "";

  var createH1 = document.createElement("h1");
  createH1.setAttribute("id", "createH1");
  createH1.textContent = "All Done!";

  questionsDiv.appendChild(createH1);

  var createP = document.createElement("p");
  createP.setAttribute("id", "createP");

  questionsDiv.appendChild(createP);

  // Calculate the time remaining and replace it with the score
  if (secondsLeft >= 0) {
    var timeRemaining = secondsLeft;
    var createP2 = document.createElement("p");
    clearInterval(holdInterval);
    createP.textContent = "Your final score is: " + timeRemaining;

    questionsDiv.appendChild(createP2);
  }

  var createLabel = document.createElement("label");
  createLabel.setAttribute("id", "createLabel");
  createLabel.textContent = "Enter your name: ";

  questionsDiv.appendChild(createLabel);

  var createInput = document.createElement("input");
  createInput.setAttribute("type", "text");
  createInput.setAttribute("id", "name");
  createInput.textContent = "";

  questionsDiv.appendChild(createInput);

  var createSubmit = document.createElement("button");
  createSubmit.setAttribute("type", "submit");
  createSubmit.setAttribute("id", "Submit");
  createSubmit.textContent = "Submit";

  questionsDiv.appendChild(createSubmit);

  // Event listener to capture name and local storage for name and score
  createSubmit.addEventListener("click", function () {
    var name = createInput.value;

    if (name === null) {
      console.log("No value entered!");
    } else {
      var finalScore = {
        name: name,
        score: timeRemaining,
      };
      console.log(finalScore);
      var allScores = localStorage.getItem("allScores");
      if (allScores === null) {
        allScores = [];
      } else {
        allScores = JSON.parse(allScores);
      }
      allScores.push(finalScore);
      var newScore = JSON.stringify(allScores);
      localStorage.setItem("allScores", newScore);
      window.location.replace("./scores.html");
    }
  });
}
