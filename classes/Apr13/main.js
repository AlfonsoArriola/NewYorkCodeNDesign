let gameOver = false;
let computerChoices = ["rock", "paper", "scissors"];
       console.log("grape");


        function checkInput(input, computerChoices) {
  if (input == "quit") {
       return true;
                      }

function randomFrom(array) {
        return array[(Math.ceil(Math.random()*3)) ];
         console.log("yups");

                           }

//   ***********************************

//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  
  let computerChoice = randomFrom(computerChoices);
    console.log("tooh");
  
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
     console.log('ppp');
	         return false;
}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++
function start(gameOver, computerChoices) {

  while (!gameOver){
    let playerInput = '';
       prompt("Hi! Enter rock/paper/scissors to play, or quit to stop playing.");
       console.log("kirk");
         gameOver = checkInput(playerInput, computerChoices);
         console.log("spock");
            playerInput = "paper";
             console.log("picard");

} 

}

// ---------------------------------



start(gameOver, computerChoices)  
