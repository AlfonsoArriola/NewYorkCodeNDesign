let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];

function randomFrom(array) {
        return [(Math.ceil(Math.random()*3)) ];

                           }

//   ***********************************
function checkInput(input, computerChoices) {
  if (input == "quit") {
       return true;
                      }
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
  let computerChoice = randomFrom(computerChoices);
  
  if(computerChoice === "rock" && input === "scissors"){
	   alert("Computer wins1!");
	         return true;
} else if (computerChoice === "scissors" && input === "paper"){
	   alert("Computer wins2!");
	         return true;
} else if (computerChoice === "paper" && input === "rock"){
	   alert("Computer wins3!");
	         return true;
	}

	   alert("Don't Stop");
	         return false;
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
function start(gameOver, computerChoices) {

  while (!gameOver){
    let playerInput = '';
       prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
         gameOver = checkInput(playerInput, computerChoices);
            playerInput = "paper";

} 

}

// ---------------------------------



start(gameOver, computerChoices)  
