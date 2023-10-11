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
};

let gameOutput;

let aiOutcome = ai();

let playerInput;

const rounds = 1;






let playGame = function playRound(a) {
  
  let aiOutcome = ai()
  let playerCoice = a
  gameOutput = game(aiOutcome, a)











  console.log(aiOutcome)

  console.log(playerCoice)

  console.log(gameOutput)
    
  
};











// A
// console.log(aiOutcome)

//B
// console.log(playerInput)

//Game outcome
// console.log(gameOutput)