// console.log("Hello World!");


// Computer decision
let ai = function() {
  let x = Math.floor(Math.random() * 3)
  // console.log(x)
  if (x === 0) {
    return "rock"
  } else if (x === 1) {
    return "paper"
  } else if (x === 2) {
    return "scissors"
  } else {
    return "ERROR"
  }
};

// let aiOutcome = ai()


// let playerInput = prompt("Please choose Rock, Paper or Scissors please")

// const playerInput = "rock"

// let game = function(a, b) {
//   if (a.toLowerCase() === b.toLowerCase()) {
//     return "It is a tie!"
//   } else if ((a.toLowerCase() == "paper") && (b.toLowerCase() == "rock")) {
//     return "You Lose! Paper beats Rock"
//   } else if ((a.toLowerCase() == "rock") && (b.toLowerCase() == "paper")) {
//     return "You Win! Paper beats Rock"
//   } else if ((a.toLowerCase() == "rock") && (b.toLowerCase() == "scissors")) {
//     return "You Lose! Rock beats Scissors"
//   } else if ((a.toLowerCase() == "scissors") && (b.toLowerCase() == "rock")) {
//     return "You Win! Rock beats Scissors"
//   } else if ((a.toLowerCase() == "paper") && (b.toLowerCase() == "scissors")) {
//     return "You Win! Scissors beats Paper"
//   } else if ((a.toLowerCase() == "scissors") && (b.toLowerCase() == "paper")) {
//     return "You Lose! Scissors beats Paper"
//   } else {
//     return "ERROR"
//   }
// };

let rBox = document.querySelector('#resultBox')
let playerBox = document.querySelector('.playerBox')
let computerBox = document.querySelector('.computerBox')


// Score
let pScoreBox = document.querySelector("#playerScore")
let cScoreBox = document.querySelector("#computerScore")

let pScore = 0
let cScore = 0

let game = function(a, b) {
  if (a === b) {
    rBox.textContent = "It is a tie!"
  } else if ((a === "paper") && (b === "rock")) {
    rBox.textContent = "You Lose! Paper beats Rock"
  } else if ((a === "rock") && (b === "paper")) {
    rBox.textContent = "You Win! Paper beats Rock"
  } else if ((a === "rock") && (b === "scissors")) {
    rBox.textContent = "You Lose! Rock beats Scissors"
  } else if ((a === "scissors") && (b === "rock")) {
    rBox.textContent = "You Win! Rock beats Scissors"
  } else if ((a ==="paper") && (b === "scissors")) {
    rBox.textContent = "You Win! Scissors beats Paper"
  } else if ((a === "scissors") && (b === "paper")) {
    rBox.textContent = "You Lose! Scissors beats Paper"
  } else {
    rBox.textContent = "ERROR"
  }
  let temp = rBox.textContent
  rBox.textContent = "Result : " + temp
  if (temp.charAt(4) === "W"){
    pScore = pScore + 1
  } else if (temp.charAt(4) === "L"){
    cScore = cScore + 1
  } else {
    return
  }
};

let gameOutput;

let aiOutcome = ai();

let playerInput;

const rounds = 1;

let winMessage = document.querySelector("#winBox")





let playGame = function playRound(a) {
  
  let aiOutcome = ai()
  let playerCoice = a
  gameOutput = game(aiOutcome, a)




  console.log(aiOutcome)
  computerBox.textContent = "Computer : " + aiOutcome.toUpperCase()
  console.log(playerCoice)
  playerBox.textContent = "Human : " + playerCoice.toUpperCase()

  // The Result
  console.log(rBox.textContent)


  console.log(pScore)
  pScoreBox.textContent = "Human : " + pScore
  console.log(cScore)
  cScoreBox.textContent = "Computer : " + cScore

  if (pScore >= 5) {
    winMessage.textContent = "YOU WIN!!!"
    cScore = 0
    pScore = 0
  } else if (cScore >= 5) {
    winMessage.textContent = "YOU LOSE :("
    cScore = 0
    pScore = 0
  } else {
    winMessage.textContent = "First to Five Wins!"
  }
    
  
};











// A
// console.log(aiOutcome)

//B
// console.log(playerInput)

//Game outcome
// console.log(gameOutput)