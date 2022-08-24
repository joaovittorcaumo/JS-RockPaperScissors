function getComputerChoice(){
    const lista = ["rock", "paper", "scissors"];
    return lista[Math.floor(Math.random() * 3)];
}
const btn = document.querySelectorAll('button');
const diiv = document.getElementById('dp');
let text = document.createTextNode("");
let text2 = document.createTextNode("");
const h22 = document.getElementById('score')
let mpoints=0,ppoints=0, round=0;
text2.textContent = "SCORE MACHINE:" + mpoints + " SCORE PLAYER: " + ppoints;
h22.appendChild(text2);
text.textContent = "THE GAME IS A BETTER OF 5, CHOOSE CAREFULLY :C";
diiv.appendChild(text);
let w=0,l=0,t=0;

btn.forEach(btn => btn.addEventListener('click', function(e){
    round+=1;
    if(round<5){
        if(btn.id == 'id1'){
            diiv.removeChild(text);
            machine = getComputerChoice();
            if(machine == "rock"){
                text.textContent = "It`s a draw, both choose rock";
                mpoints+=1;ppoints+=1;
            }else if(machine == "paper"){
                text.textContent = "You lose, paper beats rock";
                mpoints+=1;
            }else if(machine == "scissors"){
                text.textContent = "You win, rock beats scissors";
                ppoints+=1;
            }diiv.appendChild(text);
        }
        else if(btn.id == 'id2'){
            diiv.removeChild(text);
            machine = getComputerChoice();
            if(machine == "rock"){
                text.textContent = "You win, paper beats rock";
                ppoints+=1;
            }else if(machine == "paper"){
                text.textContent = "It`s a draw, both choose paper";
                mpoints+=1;ppoints+=1;
            }else if(machine == "scissors"){
                text.textContent = "You lose,  scissors beat paper ";
                mpoints+=1;
            }diiv.appendChild(text);
        }
        else if(btn.id == 'id3'){
            diiv.removeChild(text);
            machine = getComputerChoice();
            if(machine == "rock"){
                text.textContent = "You lose, rock beats scissors";
                mpoints+=1;
            }else if(machine == "paper"){
                text.textContent = "You win, scissor beats paper";
                ppoints+=1;
            }else if(machine == "scissors"){
                text.textContent = "It`s a draw, both choose scissors";
                mpoints+=1;ppoints+=1;
            }diiv.appendChild(text);
        }
        text2.textContent = "SCORE MACHINE:" + mpoints + " SCORE PLAYER: " + ppoints;
        h22.appendChild(text2);
    }else{
        text.textContent = "";
        diiv.appendChild(text);
        if(mpoints==ppoints){
            text2.textContent = "THE GAME IS A DRAW, FINAL SCORE:  MACHINE:" + mpoints + "  PLAYER: " + ppoints;
            h22.appendChild(text2);
        }else if(mpoints>ppoints){
            text2.textContent = "YOU LOST, FINAL SCORE: MACHINE:" + mpoints + "  PLAYER: " + ppoints;
            h22.appendChild(text2);
        }else{
            text2.textContent = "YOU WON, FINAL SCORE: MACHINE:" + mpoints + "  PLAYER: " + ppoints;
            h22.appendChild(text2);
        }
    }
})
);