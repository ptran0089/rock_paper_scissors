document.addEventListener('DOMContentLoaded', () => {
  const rock_img = document.querySelector('#rock')
  const paper_img = document.querySelector('#paper')
  const scissors_img = document.querySelector('#scissors')
  const computer_div = document.querySelector('#computer')
  const player_div = document.querySelector('#player')
  const winner_div = document.querySelector('#winner')
  const computerScore_span = document.querySelector('#computer-score')
  const playerScore_span = document.querySelector('#player-score')
  let computerScore = 0
  let playerScore = 0

  function addEvent(...elements) {
    elements.forEach((e) => e.addEventListener('click', playRound))
  }

  function playRound() {
    const computerSelection = computerPlay()
    const playerSelection = this.getAttribute('id')
    let winner = determineWinner(computerSelection, playerSelection)

    if (winner === "player") {
      playerWon()
    } else if (winner === "computer") {
      computerWon()
    } else {
      tie()
    }
    computer_div.setAttribute('src', `./images/${computerSelection}.png`)
    player_div.setAttribute('src', `./images/${playerSelection}.png`)
    winner_div.className = "item3 pink"
  }

  function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let randomChoice = choices[Math.floor(Math.random() * choices.length)]
    return randomChoice
  }

  function determineWinner(computerSelection, playerSelection) {
    const selections = playerSelection + computerSelection

    if (selections === "rockscissors" || selections === "paperrock" || selections === "scissorspaper"){
      return "player"
    } else if (playerSelection === computerSelection) {
      return ""
    } else {
      return "computer"
    }
  }

  function playerWon() {
    playerScore++
    playerScore_span.innerHTML = playerScore
    winner_div.innerHTML = "Player won! =)"
  }

  function computerWon() {
    computerScore++
    computerScore_span.innerHTML = computerScore
    winner_div.innerHTML = "Computer won =("
  }

  function tie() {
    winner_div.innerHTML = "It's a tie..."
  }

  addEvent(rock_img, paper_img, scissors_img)
})
