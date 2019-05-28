let userScore =0;
let compScore=0;
const userscore_span=document.getElementById("userscore");
const compscore_span=document.getElementById("compscore");
const scoreboard_div=document.querySelector(".Scoreboard");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById("r");
const paper_div=document.getElementById("p");
const scissor_div=document.getElementById("s");

function getComputerChoice(){
  const choices = ["r","p","s"];
  const randomNumber=Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function converttoword(letter){
  if(letter==="r") return "Rock";
  if(letter==="p") return "Paper";
  return "Scissors";
}

function win(userChoice,computerChoice){
  userScore++;
  userscore_span.innerHTML=userScore;
  compscore_span.innerHTML=compScore;
  const smalluser="user ".fontsize(3).sub();
  const smallcomp="comp ".fontsize(3).sub();
  result_p.innerHTML= converttoword(userChoice)+ smalluser+ " beats " +converttoword(computerChoice)+smallcomp+". You Win! 😎";
}
function lose(userChoice,computerChoice){
  compScore++;
  userscore_span.innerHTML=userScore;
  compscore_span.innerHTML=compScore;
  const smalluser="user ".fontsize(3).sub();
  const smallcomp="comp ".fontsize(3).sub();
  result_p.innerHTML=converttoword(userChoice)+smalluser+" loses to " +converttoword(computerChoice)+smallcomp+". You lose! 🔫";
}
function draw(userChoice,computerChoice){
  const smalluser="user ".fontsize(3).sub();
  const smallcomp="comp ".fontsize(3).sub();
  result_p.innerHTML=converttoword(userChoice)+ smalluser+ " equals " +converttoword(computerChoice)+smallcomp+". Draw! 😵";
}

function game(userChoice){
  const computerChoice=getComputerChoice();
  switch(userChoice+computerChoice){
    case"rs":
    case "pr":
    case"sp":
     win(userChoice, computerChoice);
     break;
    case"rp":
    case"ps":
    case"sr":
     lose(userChoice,computerChoice);
     break;
    case"rr":
    case"pp":
    case"ss":
      draw(userChoice,computerChoice);
      break;
  }

}


function main(){
  rock_div.addEventListener('click',function(){
    game("r");
  })
  paper_div.addEventListener('click',function(){
    game("p");
  })
  scissor_div.addEventListener('click',function(){
    game("s");
  })
}
main();
