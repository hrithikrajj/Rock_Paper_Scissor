var userScore =0;
var compScore = 0;
const userScore_span = document.getElementById("user_score");
const computerScore_span = document.getElementById("comp_score");
const scoreBoard_div = document.querySelector(".score_board");
const  result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");

function getcomputerChoice(){
    const choice = ['r','p','s'];
    const randomnumber = Math.floor(Math.random() *3);
    return choice[randomnumber];
}

function convertword(letter){
    switch(letter){
        case "r" : 
            return "Rock";
            break;
        case "p" :
            return "Paper";
            break;
        case "s" :
            return "Scissor"
            break;
    }

}

function win(userChoice,computerChoice){
    userScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = convertword(userChoice) + "Beats the " + convertword(computerChoice) + " you win !!!";
    const userChoice_div = document.getElementById("r");
    userChoice_div.classList.add('green-glow');

}

function lose(userChoice,computerChoice){
    compScore ++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = convertword(userChoice) + "Beats the " + convertword(computerChoice) + " you Lose !!!";
}

function draw(){
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = compScore;
    result_div.innerHTML = "OOps its a Draw";

}

function game(userChoice){
    const computerChoice = getcomputerChoice();
    switch(userChoice+computerChoice){
        case "rs":
        case "sp":
        case "pr":
            win(userChoice,computerChoice);
            break;
        case "ps":
        case "rp":
        case "sr":
            lose(userChoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
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