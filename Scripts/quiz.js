let jsonQuestion;
let question_text = document.querySelector("h2");
let checkButton = document.getElementById("check-btn");
let nextButton = document.getElementById("next-btn");

// OPTIONS TEXT
let optA = document.getElementById("optionA");
let optB = document.getElementById("optionB");
let optC = document.getElementById("optionC");
let optD = document.getElementById("optionD");

// OPTIONS BUTTON
let optACont = document.getElementById("optionA-container");
let optBCont = document.getElementById("optionB-container");
let optCCont = document.getElementById("optionC-container");
let optDCont = document.getElementById("optionD-container");

let correctAnswers = document.getElementById("player-correct");
let totalCorrect = 0;
let totalWrong = 0;

const answersArray = [];
const shuffledArray = [];

const attemptNum = ["lifeOne", "lifeTwo", "lifeThree"];

let initialNum = 1;
let foundQuestion;
let playerChoice;
let playerChoiceIndex;

// INSTRUCTIONS
let instContButton = document.getElementById("cont-btn");
let instStartButton = document.getElementById("start-btn");
let instContainer = document.getElementById("instructions-container");
let instText = document.getElementById("instruction-text");

// GAME OVER
let gameEnd = document.getElementById("game-over");
let gameStatus = document.getElementById("game-status");

function stdnt_grade(level) {
    if (level === "programmingPrimary"){
        fetch("/QandA/questions.json")
            .then((response) => response.json())
            .then((data) => (jsonQuestion = data.programming_primary))
            .catch((err) => console.log(err));
    } else if (level == "programmingMiddle") {
        fetch("/QandA/questions.json")
            .then((response) => response.json())
            .then((data) => (jsonQuestion = data.programming_middle))
            .catch((err) => console.log(err));
    } else if (level == "programmingSecondary") {
        fetch("/QandA/questions.json")
            .then((response) => response.json())
            .then((data) => (jsonQuestion = data.programming_secondary))
            .catch((err) => console.log(err));
    } else if (level == "cybersecPrimary") {
        fetch("/QandA/questions.json")
            .then((response) => response.json())
            .then((data) => (jsonQuestion = data.cybersecurity_primary))
            .catch((err) => console.log(err));
    } else if (level == "cybersecMiddle") {
        fetch("/QandA/questions.json")
            .then((response) => response.json())
            .then((data) => (jsonQuestion = data.cybersecurity_middle))
            .catch((err) => console.log(err));
    } else if (level == "cybersecSecondary") {
        fetch("/QandA/questions.json")
            .then((response) => response.json())
            .then((data) => (jsonQuestion = data.cybersecurity_secondary))
            .catch((err) => console.log(err));
    }
    instText.style.display = "none"
    const instSteps = document.createElement("div");
    instSteps.innerHTML = `
        <p>1. Read the questions carefully.<br></p>
        <p><br>2. Choose 1 of the 4 options.<br></p>
        <p><br>3. Check your answer and move on to the next stop!</p>
    `;
    instContainer.appendChild(instSteps)
    instStartButton.style.display = "block"
    instContButton.style.display = "none"
}

function startGame() {
    checkChoice();
    document.getElementById("instructions").style.display = "none";
    displayOptions();
}

function checkChoice() {
    if (initialNum <= 10) {
        answersArray.length = 0;
        shuffledArray.length = 0;
        let questionNumber = initialNum++;
        let question = jsonQuestion.find(item => item.question_number == questionNumber);
        foundQuestion = question; 
        answersArray.push(foundQuestion.opt1, foundQuestion.opt2, foundQuestion.opt3, foundQuestion.opt4);
        shuffledArray.push(randomSort([...answersArray]));
        console.log(shuffledArray);
    } else if (initialNum == 11) {
        window.location.href = "/Pages/certificate.html";
    }
    
    if (playerChoice == "Correct") {
        question_text.textContent = "Nice! You're Right!"
        totalCorrect++;
        correctAnswers.textContent = totalCorrect;
    } else if (playerChoice == "Wrong") {
        question_text.textContent = "Try Again!"
        totalWrong++;    
        loseAttempt(totalWrong);
        displayCorrect(playerChoiceIndex);
    }
    // Displays the Question that corresponds to the number.
}

function randomSort(array) { // Randomizes the contents of the array where the options are stored.
    return array
      .map((val) => ({ val, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ val }) => val);
}

//checkButton.disabled = true; // TEMPORARY
function ansChosen(ansNum) {
    checkButton.disabled = false;
    let choiceIndex = shuffledArray[0].indexOf(foundQuestion.correct_answer);
    playerChoiceIndex = choiceIndex;
    console.log(shuffledArray[0][ansNum])
    console.log(foundQuestion.correct_answer)
    if (shuffledArray[0][ansNum] == foundQuestion.correct_answer) {
        console.log("You gave the CORRECT answer!")
        playerChoice = "Correct";
    } else {
        console.log("You gave the wrong answer!")
        playerChoice = "Wrong";
    }
}

function displayOptions() { // Function for the Next Button to display the next questions.
    checkButton.style.display = "block";
    checkButton.disabled = true;
    if(foundQuestion) {
        console.log(answersArray);
        question_text.textContent = foundQuestion.question;
        optA.textContent = shuffledArray[0][0];
        optB.textContent = shuffledArray[0][1];
        optC.textContent = shuffledArray[0][2];
        optD.textContent = shuffledArray[0][3];
    } else {
        question_text.textContent = "Not Found";
    }

    optACont.disabled = false;
    optACont.style.backgroundColor = "#67a7c1"
    optBCont.disabled = false;
    optBCont.style.backgroundColor = "#67a7c1"
    optCCont.disabled = false;
    optCCont.style.backgroundColor = "#67a7c1"
    optDCont.disabled = false;
    optDCont.style.backgroundColor = "#67a7c1"
}

function displayCorrect(index) {
    if (playerChoiceIndex == 0) {
        optACont.style.backgroundColor = "green";
        optBCont.style.backgroundColor = "red";
        optCCont.style.backgroundColor = "red";
        optDCont.style.backgroundColor = "red";
    } else if (playerChoiceIndex == 1) {
        optACont.style.backgroundColor = "red";
        optBCont.style.backgroundColor = "green";
        optCCont.style.backgroundColor = "red";
        optDCont.style.backgroundColor = "red";
    } else if (playerChoiceIndex == 2) {
        optACont.style.backgroundColor = "red";
        optBCont.style.backgroundColor = "red";
        optCCont.style.backgroundColor = "green";
        optDCont.style.backgroundColor = "red";
    } else {
        optACont.style.backgroundColor = "red";
        optBCont.style.backgroundColor = "red";
        optCCont.style.backgroundColor = "red";
        optDCont.style.backgroundColor = "green";
    }
}

function loseAttempt(ttlWrong) { // Displays the loss of player attempts.
    let life = document.getElementById(attemptNum[totalWrong - 1]);
    console.log(life)
    life.style.filter = "grayscale(1)"
    if (totalWrong == 3) { 
        endGame();
    } 
}

function endGame(){ // Ends the Game once the playe has lost all their lives/attempts.
    gameEnd.style.display = "flex"
    gameStatus.textContent = "You must get at least 7 correct answers to get your certificate. You can always try again or review your lessons." 
}

document.getElementById("lessons-btn").addEventListener("click", () => {
    window.location.href = "/Pages/grade-level.html"
})
document.getElementById("try-again-btn").addEventListener("click", () => {
    location.reload();
})

checkButton.addEventListener("click", () => {
    checkButton.style.display = "none";
})

optACont.addEventListener("click", () =>{
    optACont.disabled = true;
    optBCont.disabled = false;
    optCCont.disabled = false;
    optDCont.disabled = false;
})

optBCont.addEventListener("click", () =>{
    optACont.disabled = false;
    optBCont.disabled = true;
    optCCont.disabled = false;
    optDCont.disabled = false;
})

optCCont.addEventListener("click", () =>{
    optACont.disabled = false;
    optBCont.disabled = false;
    optCCont.disabled = true;
    optDCont.disabled = false;
})

optDCont.addEventListener("click", () =>{
    optACont.disabled = false;
    optBCont.disabled = false;
    optCCont.disabled = false;
    optDCont.disabled = true;
})