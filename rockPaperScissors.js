console.log('Welcome to the Shandon Williams Rock Paper Scissor Tournament!!!!!');
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('ERROR');
  }
}

const getComputerChoice = () => {
  let compNumber = Math.floor(Math.random() *3);
  switch(compNumber) {
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'bomb') {
    return 'Ultimate combo victory!!!!!!!!!!!!!!'
  }
  if (userChoice === computerChoice) {
    return 'All square - It\'s a Tie!';
  } 
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Uh oh - you lose!';
    } else {
      return 'Woohoo - you win';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Uh oh - you lose!';
    } else {
      return 'Woohoo - you win';
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Uh oh - you lose!';
    } else {
      return 'Woohoo - you win';
    }
  }
}

const playGame = () => {
  const userChoice = getUserChoice('scissors');
  const computerChoice = getComputerChoice();
  console.log('Your choice: ' + userChoice);
  console.log('Computer choice: ' + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();