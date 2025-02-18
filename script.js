// Declare the players score variables
let humanScore = 0
let computerScore = 0

//get the computer choice
function getComputerChoice (){
    const chooseNumber = Math.floor(Math.random() * 3)
    switch (chooseNumber) {
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissors"
    }
}

// get the human choice
function getHumanChoice () {
    const humanChoice = prompt(`Please enter your choice: rock, paper, or scissors`).toLocaleLowerCase()
    if (humanChoice === `rock` || humanChoice === `paper` || humanChoice === `scissors`){
        return humanChoice
    } else {
        alert(`Invalid Choice. Please enter rock, paper, or scissors`)
        return getHumanChoice()
    }
}

// play a single round
function playRound (humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return `It's a draw!`
    } else if ((humanChoice === 'rock'&& computerChoice === `scissors`) ||
(humanChoice === `paper` && computerChoice === `rock`) || 
(humanChoice === `scissors` && computerChoice === `paper`)) {
    humanScore++
    return `You Win! ${humanChoice} beats ${computerChoice}.`

}else {
    computerScore++
    return `You lose! ${computerChoice} beats ${humanChoice}.`
}
}

// play the entire game
function playGame (){
    for (let i =0; i < 5; i++){
        const humanChoice = getHumanChoice()
        const computerChoice = getComputerChoice()
        console.log(playRound(humanChoice, computerChoice))
    }
    if (humanScore > computerScore){
        console.log(`You win!`)
    } else if (humanScore < computerScore){
        console.log(`You loose`)
    } else {
        console.log('The game is draw!')
    }
}

playGame()
