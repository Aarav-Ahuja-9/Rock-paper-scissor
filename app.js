let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const msgcontainer = document.querySelector(".msg-container");
const userscorep = document.querySelector("#user-score");
const compscorep = document.querySelector("#comp-score");
const modebtn = document.querySelector(".change-mode");
const body = document.querySelector(".body");
const h1 = document.querySelector(".heading");
const choice1 = document.querySelector(".choice-1");
const choice2 = document.querySelector(".choice-2");
const choice3 = document.querySelector(".choice-3");
const score = document.querySelector(".score");
const score1 = document.querySelector(".score-1");
const score2 = document.querySelector(".score-2");



const gencomputerchoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}


const drawgame = () => {
  msg.innerText = "its a draw. please play again"
  msgcontainer.style.backgroundColor = `yello`
}

const showWinner = (userwin, userchoice, compChoice) => {
  if (userwin) {
    userscore++;
    userscorep.innerText = userscore; 
    msg.innerText = `you win your ${userchoice} beats ${compChoice}`
    msgcontainer.style.backgroundColor = "green"
  } else {
    compscore++;
    compscorep.innerText = compscore;
    msg.innerText = `you lose ${compChoice} beats your ${userchoice}`
    msgcontainer.style.backgroundColor = "red"
  }
};

const playgame =(userchoice) => {
    //generate computer choice
    const compChoice = gencomputerchoice();
    
    if (compChoice === userchoice){
    } else {
        let userwin = true;
        if (userchoice === "rock")  {
          //paper, scissor
          userwin = compChoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
          //rock, scissor
          userwin = compChoice === "scissor" ? false : true;
        } else if (userchoice === "scissor")  {
          userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin,userchoice, compChoice);
      } 
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice);
    

    })
});     


let mode = "light";

modebtn.addEventListener("click", () => {
  if (mode === "light") {
    console.log("dark");
    mode = "dark";
    modebtn.innerText = "switch to light mode";
    body.style.backgroundColor = "black";
    h1.style.backgroundColor = "aliceblue";
    h1.style.color = "rgb(88, 84, 84)";
    choice1.style.backgroundColor = "#000"
    choice2.style.backgroundColor = "#000"
    choice3.style.backgroundColor = "#000"
    choice1.onmouseover = () => {
      choice1.style.backgroundColor = "#fff"
    }
    choice2.onmouseover = () => {
      choice2.style.backgroundColor = "#fff"
    }
    choice3.onmouseover = () => {
      choice3.style.backgroundColor = "#fff"
    }
    choice1.onmouseout = () => {
      choice1.style.backgroundColor = "black"
    }
    choice2.onmouseout = () => {
      choice2.style.backgroundColor = "black"
    }
    choice3.onmouseout = () => {
      choice3.style.backgroundColor = "black"
   }
  } else {
  console.log("light")
  mode = "light";
  modebtn.innerText = "switch to dark mode";
  body.style.backgroundColor = "#FBFBFB"
  h1.style.backgroundColor = "rgb(88, 84, 84)";
  h1.style.color = "aliceblue";
  score.style.backgroundColor = "#0e336e";
  choice1.style.backgroundColor = "#FBFBFB"
  choice2.style.backgroundColor = "#FBFBFB"
  choice3.style.backgroundColor = "#FBFBFB"
  choice1.onmouseover = () => {
    choice1.style.backgroundColor = "#1c2a4H1"
  }
  choice2.onmouseover = () => {
    choice2.style.backgroundColor = "#1c2a41"
  }
  choice3.onmouseover = () => {
    choice3.style.backgroundColor = "#1c2a41"
  }  
  choice1.onmouseout = () => {
    choice1.style.backgroundColor = "#FBFBFB"
  }
  choice2.onmouseout = () => {
    choice2.style.backgroundColor = "#FBFBFB"
  }
  choice3.onmouseout = () => {
    choice3.style.backgroundColor = "#FBFBFB"
  }
  }
});