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





let aiOutcome = ai()

console.log(aiOutcome)