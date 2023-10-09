// console.log("Hello World!");


// Computer decision
let ai = function() {
  let x = Math.floor(Math.random() * 3)
  // console.log(x)
  if (x === 0) {
    return "Rock"
  } else if (x === 1) {
    return "Paper"
  } else if (x === 2) {
    return "Scissors"
  } else {
    return "ERROR"
  }
}

// let aiOutcome = ai()


let playerInput = prompt("Please choose Rock, Paper or Scissors please")

// const playerInput = "rock"

let game = function(a, b) {
  if (a.toLowerCase() === b.toLowerCase()) {
    return "It is a tie!"
  } else if ((a.toLowerCase() == "paper") && (b.toLowerCase() == "rock")) {
    return "You Lose! Paper beats Rock"
  } else if ((a.toLowerCase() == "rock") && (b.toLowerCase() == "paper")) {
    return "You Win! Paper beats Rock"
  } else if ((a.toLowerCase() == "rock") && (b.toLowerCase() == "scissors")) {
    return "You Lose! Rock beats Scissors"
  } else if ((a.toLowerCase() == "scissors") && (b.toLowerCase() == "rock")) {
    return "You Win! Rock beats Scissors"
  } else if ((a.toLowerCase() == "paper") && (b.toLowerCase() == "scissors")) {
    return "You Win! Scissors beats Paper"
  } else if ((a.toLowerCase() == "scissors") && (b.toLowerCase() == "paper")) {
    return "You Lose! Scissors beats Paper"
  } else {
    return "ERROR"
  }
}

let gameOutput

let aiOutcome = ai()


const rounds = 5

for (let i = 0; i < rounds; i++) {
  
  let aiOutcome = ai()

  gameOutput = game(aiOutcome, playerInput)

  console.log(aiOutcome)

  console.log(playerInput)

  console.log(gameOutput)

}


// A
// console.log(aiOutcome)

//B
// console.log(playerInput)

//Game outcome
// console.log(gameOutput)