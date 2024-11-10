let computer=["Rock","Paper","Scissor"];
let resultofgame=document.getElementById("result");
let playerofgame=document.getElementById("player");
let computerofgame=document.getElementById("computer");
let playerscore=document.getElementById("playersc");
let computerscore=document.getElementById("comsc");
let playerresult=0;
let comresult=0;





function playgame(eventt){
    const computerchoice=computer[Math.floor(Math.random()*3)]
    playerscore.style.display="block";
    computerscore.style.display="block";

    switch(eventt){
        case "Rock":
            if(computerchoice==="Scissor"){
                playerresult+=1;
                comresult+=0;

                playerscore.textContent=`Player Score : ${playerresult}`
                computerscore.textContent=`Computer Score : ${comresult}`


                playerofgame.textContent=`PLAYER : ${eventt}`;
                computerofgame.textContent=`COMPUTER : ${computerchoice}`;
                resultofgame.textContent="You Won !";
                resultofgame.style.color="greenyellow" ;
            }
            else if(computerchoice==="Rock"){
                resultofgame.textContent="It's a Tie";
                resultofgame.style.color="blue";
                playerofgame.textContent=`PLAYER : ${eventt}`;
                computerofgame.textContent=`COMPUTER : ${computerchoice}`;
            }
            else{
                playerresult+=0;
                comresult+=1;

                playerscore.textContent=`Player Score : ${playerresult}`
                computerscore.textContent=`Computer Score : ${comresult}`

                playerofgame.textContent=`PLAYER : ${eventt}`;
                computerofgame.textContent=`COMPUTER : ${computerchoice}`;
                resultofgame.textContent="You Lose !";
                resultofgame.style.color="tomato" ;
            }
            break;

        case "Paper":
            if(computerchoice==="Rock"){
                playerresult+=1;
                comresult+=0;

                playerscore.textContent=`Player Score : ${playerresult}`
                computerscore.textContent=`Computer Score : ${comresult}`


                playerofgame.textContent=`PLAYER : ${eventt}`;
                computerofgame.textContent=`COMPUTER : ${computerchoice}`;
                resultofgame.textContent="You Won !";
                resultofgame.style.color="greenyellow" ;
            }
            else if(computerchoice==="Paper"){
                resultofgame.textContent="It's a Tie";
                resultofgame.style.color="blue";
                playerofgame.textContent=`PLAYER : ${eventt}`;
                computerofgame.textContent=`COMPUTER : ${computerchoice}`;
            }
            else{
                playerresult+=0;
                comresult+=1;

                playerscore.textContent=`Player Score : ${playerresult}`
                computerscore.textContent=`Computer Score : ${comresult}`

                playerofgame.textContent=`PLAYER : ${eventt}`;
                computerofgame.textContent=`COMPUTER : ${computerchoice}`;
                resultofgame.textContent="You Lose !";
                resultofgame.style.color="tomato" ;
            }
            break;

        case "Scissor":
            if(computerchoice==="Paper"){
                playerresult+=1;
                comresult+=0;

                playerscore.textContent=`Player Score : ${playerresult}`
                computerscore.textContent=`Computer Score : ${comresult}`


                playerofgame.textContent=`PLAYER : ${eventt}`;
                computerofgame.textContent=`COMPUTER : ${computerchoice}`;
                resultofgame.textContent="You Won !";
                resultofgame.style.color="greenyellow" ;
            }
            else if(computerchoice==="Scissor"){
                resultofgame.textContent="It's a Tie";
                resultofgame.style.color="blue";
                playerofgame.textContent=`PLAYER : ${eventt}`;
                computerofgame.textContent=`COMPUTER : ${computerchoice}`;
            }
            else{
                playerresult+=0;
                comresult+=1;

                playerscore.textContent=`Player Score : ${playerresult}`
                computerscore.textContent=`Computer Score : ${comresult}`

                playerofgame.textContent=`PLAYER : ${eventt}`;
                computerofgame.textContent=`COMPUTER : ${computerchoice}`;
                resultofgame.textContent="You Lose !";
                resultofgame.style.color="tomato" ;
            }
            break;


    }
}