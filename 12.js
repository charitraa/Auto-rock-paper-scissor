const score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        }

        updateScored();

        document.querySelector('.rock-btn').addEventListener('click',() => {
            playGame('rock');
        });


        document.querySelector('.paper-btn').addEventListener('click',() => {
            playGame('paper');
        });

        document.querySelector('.scissors-btn').addEventListener('click',() => {
            playGame('scissors');
        });

        document.body.addEventListener('keydown',(event)=>{
            if(event.key==='r'){
                
                playGame('rock');
            }
            else if(event.key==='p'){
                playGame('paper');
            }

            else if(event.key==='s'){
                playGame('scissors');
            }
        })


        function playGame(playerMove) {
            const computerMove = pickComputerMove();

            let result = '';
            if (playerMove === 'scissors') {
                if (computerMove === 'rock') {
                    result = 'you lose.';
                }
                else if (computerMove === 'paper') {
                    result = 'you win.';
                }
                else if (computerMove === 'scissors') {
                    result = 'Tie.';
                }
            }
            else if (playerMove === 'paper') {
                if (computerMove === 'rock') {
                    result = 'you win.';
                }
                else if (computerMove === 'paper') {
                    result = 'Tie.';
                }
                else if (computerMove === 'scissors') {
                    result = 'you lose.';
                }
            }
            else if (playerMove === 'rock') {
                if (computerMove === 'rock') {
                    result = 'Tie.';
                }
                else if (computerMove === 'paper') {
                    result = 'you lose.';
                }
                else if (computerMove === 'scissors') {
                    result = 'you win.';
                }
            }

            if (result === 'you win.') {
                score.wins += 1;
            }
            else if (result === 'you lose.') {
                score.losses += 1;
            }
            else if (result === 'Tie.') {
                score.ties += 1;
            }

            localStorage.setItem('score', JSON.stringify(score));

            updateScored();


            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `you <img src="${playerMove}-emoji.png" alt=""> <img src="${computerMove}-emoji.png" alt=""> computer`;

            //     alert(`you picked ${C}. Computer Picked ${computerMove}. ${result}
            // wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties}`);
        }

        function updateScored() {
            document.querySelector('.js-score').innerHTML = `wins:${score.wins}, Losses:${score.losses}, Ties:${score.ties} `;

        }

        let isAutoPlaying = false;
        let interValid;
        function autoPlay(){

            const Auto = document.querySelector('.auto');
            if(Auto.innerHTML==='Auto Play'){
                Auto.innerHTML='Stop play';
                
            }
            else{
                Auto.innerHTML='Auto Play';
            }
            if(!isAutoPlaying){
            interValid= setInterval(function(){
                const playerMove = pickComputerMove();
                playGame(playerMove);

            },1000);
            isAutoPlaying = true;
        }
        else{
            clearInterval(interValid);
            isAutoPlaying = false;
        }
        }

        function pickComputerMove() {
            let computerMove = '';

            const randomNumber = Math.random();

            if (randomNumber >= 0 && randomNumber < 1 / 3) {
                computerMove = 'rock';
            }
            else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
                computerMove = 'paper';
            }
            else if (randomNumber >= 2 / 3 && randomNumber < 1) {
                computerMove = 'scissors';
            }
            return computerMove;
        }

