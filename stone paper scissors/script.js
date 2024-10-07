// let userscore=0;
// let AIscore=0;
  
// const choices= document.querySelectorAll("choice");
// const msg= document.querySelector("#msg");

// const genAIchoice = ()=>{
//     const option= ["rock","paper","scissors"];
//     const  randIdx = Math.floor(Math.random()* 3);
// return option [randIdx];
// }



// const drawgame =()=>{
//     console.log("game was draw");
//       msg.innerText="Game was draw.play again"
// };
// const showwinner = (userwin)=>{
//     if(userwin){
//         console.log("you win!");
//         msg.innerText="You win";

//     }
//     else{
//         console.log("you lose");
//           msg.innerText="You lose";
//     };
// };



// const playgame=(userchoice)=>{
//     console.log("user choice=",userchoice);
//     const AIchoice=genAIchoice();
//     console.log("AL choice",AIchoice);




//     if( userchoice ===AIchoice){
//         drawgame();

//     }
//     else{
//         let userwin=true;
//         if(userchoice ==="rock"){
//             userwin = AIchoice === "paper"? false:true;
//         }
//         else if(userchoice ==="paper"){
//             userwin = AIchoice === "scissors"? false:true;

//         }
//         else{
//             userwin = AIchoice === "rock"? false:true;
//         }
//         showwinner(userwin);
//     }
// };


// choices.forEach((choice)=>{
//     choice.addEventListener("click",()=>{
//         const userchoice = choice.getAttribute("id");
//         playgame(userchoice);
//         // console.log("choice was clicked",userchoice);
       
//     });
// });

let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

const drawGame = () => {
  msg.innerText = "Game was Draw. Play again.";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  //Generate computer choice
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


















