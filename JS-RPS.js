function getComputerChoice(){
    const lista = ["rock", "paper", "scissors"];
    return lista[Math.floor(Math.random() * 3)];
}
function playround(player, machine){
    if(player == "scissors"){
        if(machine == "rock"){
            return console.log("You lose, rock beats scissors");
        }else if(machine == "paper"){
            return console.log("You win, scissor beats paper");
        }else if(machine == "scissors"){
            return console.log("It`s a draw, both choose scissors");
        }
    }else if(player == "rock"){
        if(machine == "rock"){
            return console.log("It`s a draw, both choose rock");
        }else if(machine == "paper"){
            return console.log("You lose, paper beats rock");
        }else if(machine == "scissors"){
            return console.log("You win, rock beats scissors");
        }
    }else if(player == "paper"){
        if(machine == "rock"){
            return console.log("You win, paper beats rock");
        }else if(machine == "paper"){
            return console.log("It`s a draw, both choose paper");
        }else if(machine == "scissors"){
            return console.log("You lose,  scissors beat paper ");
        }
    }
}
function game(){
    for (let i=0;i<5;i++){
        let playerschoice = prompt("Please, write your choice.");
        let machine = getComputerChoice();
        playround(playerschoice, machine)
    }
}
game();