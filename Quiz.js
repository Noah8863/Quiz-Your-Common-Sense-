//Enjecting Elements into HTML variables //
const startbutton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const button =  document.getElementsByClassName("button")
const questionContainerElement = document.getElementById ("question-containter")
const nextButtonElement = document.getElementById ("next-button")
const answerButtonElement = document.getElementById("answer-buttons")
const questionElement = document.getElementById("question")
const scoreElement = document.getElementById("score")
const restartButton = document.getElementById('restart-button')
const textBoxElement = document.getElementById('textBox')
const pregameElement = document.getElementById('pregameText')
let shuffledQuestions, currentQuestionIndex

//Variables to keep track of score, time and questions

var score = 0;
var timeLeft = 60;

//Event listeners for on click elements
textBoxElement.classList.add('hide')
restartButton.classList.add('hide')
scoreElement.classList.add('hide')
startbutton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startbutton.classList.add('hide')
    questionContainerElement.classList.remove("hide")
    nextButtonElement.classList.remove("hide") 
    pregameElement.classList.add('hide')  
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0
    //Timer on Display

    var interval = setInterval(function(){
        document.getElementById("timer").innerHTML = "Time Left: " + --timeLeft + "s";
        if (timeLeft === 0 || timeLeft < 0){
            clearInterval(interval)
            document.getElementById("timer").innerHTML = "Times Up!"
            startbutton.classList.remove('hide')
            questionContainerElement.classList.add("hide")
            nextButtonElement.classList.add("hide")
            timeLeft = 60;
            score = 0;
        }
    },1000)
    setNextQuestion()
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    
}
function resetState(){
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild
        (answerButtonElement.firstChild)
    }
}

function showQuestion(questions) {
    questionElement.innerText = questions.questions
    questions.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('button')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonElement.appendChild(button)
    })
}


function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startbutton.innerText = 'View LeaderBoard and Your Final Score'
        startbutton.classList.remove('hide')
        startbutton.addEventListener('click', scoreBoard)
    }
    //Adding Score to the Score Board

    if (correct) {
        score ++
        console.log(score)
    } else {
        timeLeft = timeLeft - 5
    }
}
function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add("correct")
    } else {
        element.classList.add("wrong")   
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function scoreBoard(){
    questionContainerElement.classList.add('hide')
    answerButtonElement.classList.add('hide')
    nextButton.classList.add("hide")
    scoreElement.classList.remove('hide')
    textBoxElement.classList.remove('hide')
    scoreElement.innerText = "Your Final score is: " + score
    startbutton.addEventListener('click',startGame)
    document.getElementById("timer").classList.add('hide')
    restartButton.classList.remove('hide')
    restartButton.addEventListener('click',restartGame)
}
function restartGame () {
    window.location.reload()
}
function getUserInitails() {
    const userInitails = document.querySelector('input').value;
    console.log(userInitails + score);
  }
  
const questions = [
    {
        questions: "What is 2 + 2",
        answers: [
            {text: '4', correct: true},
            {text: '22', correct: false},
            {text: '44', correct: false},
            {text: '10', correct: false}
        ]
    },
    {              
        questions: "sdrawkcaB snoitseuQ sihT rewsnA",
        answers: [
            {text: "Is this even English?", correct: false},
            {text: "K.O.", correct: true},
            {text: "Um what?!", corret: false},
            {text: "I don't understand", correct: false},
        ] 
        },
        {
            questions: "How many holes does a shirt have?",
            answers: [
                {text: '2', correct: false},
                {text: '3', correct: false},
                {text: '4', correct: true},
                {text: '5', correct: false},
            ]
        },
        {
            questions: "What does a baby cow drink?",
            answers: [
                {text: 'Milk', correct: false},
                {text: 'Water', correct: true},
                {text: 'Soda', correct: false},
                {text: 'Mud', correct: false},
            ]
        },
        {
            questions: "What is 4 + 7 - 1 x 7?",
            answers: [
                {text: '17', correct: false},
                {text: '70', correct: false},
                {text: '4', correct: true},
                {text: '11', correct: false},
            ]
        },
        {
            questions: "QUICK! PICK ONE!",
            answers: [
                {text: 'Um what?', correct: false},
                {text: 'OKAY!', correct: false},
                {text: 'No', correct: false},
                {text: 'ONE', correct: true},
            ]
        },
        {
            questions: "What is REALLY BIG?",
            answers: [
                {text: 'REALLY BIG', correct: true},
                {text: 'The Universe', correct: false},
                {text: 'A Boulder', correct: false},
                {text: 'My Forehead', correct: false},
            ]
        },
        {
            questions: 'What comes after April 1st?',
            answers: [
                {text: 'A joke', correct: false},
                {text: 'ST', correct: false},
                {text: 'April 2nd', correct: false},
                {text: '?', correct: true}
            ]
        },
        {
            questions: 'Can February March?',
            answers: [
                {text: 'No but I can', correct: false},
                {text: 'April May', correct: true},
                {text: 'Obviously!', correct: false},
                {text: 'No becasue 7 ate 9', correct: false}
            ]
        },
        {
            questions: 'Bon Appetit!',
            answers: [
                {text: '🦴 🍎 🦷', correct: true},
                {text: '😳 😳 😳', correct: false},
                {text: '😋 😋 😆', correct: false},
                {text: '😋 🦃 🥱 😴', correct: false}
            ]
        },
        {
            questions: 'Before Mount Everest was discovered, what was the highest mountain on earth?',
            answers: [
                {text: 'Mt Carmel', correct: false},
                {text: 'Mt K2', correct: false},
                {text: 'Mt Everest', correct: true},
                {text: 'Mt. McKinley', correct: false},
            ]
        },
        {
            questions: 'A plane crashes on the boarder between Texas and New Mexico, where do you bury the survivors?',
            answers: [
                {text: 'Texas', correct: false},
                {text: 'New Mexico', correct: false},
                {text: 'You Dont', correct: true},
                {text: 'It depends on the families', correct: false},
            ]
        },
    
    ]
