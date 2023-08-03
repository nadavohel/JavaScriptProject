class PlayTheGame {
    
    static playGame() {
        if (gameIsExclusive) {
            if (characterPlayerTwo != false) {
                if (memoryFirst == false) {
                    GameDataBase.playerOneTime.style.opacity = "1";
                    GameDataBase.playerTwoTime.style.opacity = "0";
                } else {
                    GameDataBase.playerOneTime.style.opacity = "0";
                    GameDataBase.playerTwoTime.style.opacity = "1";
                }
            } 
        }
    
        // טיימר
        timerInterval = setInterval(() => {
            timer++;
            const date = new Date(timer * 1000);
            const m = date.getMinutes();
            const s = date.getSeconds();
            
            document.querySelector('.timer').innerHTML = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
            if (gameIsExclusive) {
                if (whoIsFirst) {
                    playersTimerA++;
                    let plTime = playerOneTimer - playersTimerA;
                    if (plTime > 9) {
                        GameDataBase.playerOneTime.innerHTML = `00:${playerOneTimer - playersTimerA}`;
                    } else {
                        GameDataBase.playerOneTime.innerHTML = `00:0${playerOneTimer - playersTimerA}`;
                    }
                    if (plTime < 4) {
                        GameDataBase.playerOneTime.style.color = 'red';
                        GameDataBase.nameTurn.style.color = 'red';
                        GameDataBase.resultsScreen.style.color = 'red';
                        setTimeout(() => {
                            GameDataBase.playerOneTime.style.color = 'white';
                            GameDataBase.nameTurn.style.color = 'white';
                            GameDataBase.resultsScreen.style.color = 'white';
                        }, 500);
                    } else {
                        GameDataBase.playerOneTime.style.color = 'white';
                        GameDataBase.nameTurn.style.color = 'white';
                        GameDataBase.resultsScreen.style.color = 'white';
                    }
                } else {
                    playersTimerB++;
                    let plTime = playerTwoTimer - playersTimerB;
                    if (plTime > 9) {
                        GameDataBase.playerTwoTime.innerHTML = `00:${playerTwoTimer - playersTimerB}`;
                    } else {
                        GameDataBase.playerTwoTime.innerHTML = `00:0${playerTwoTimer - playersTimerB}`;
                    }
                    if (plTime < 4) {
                        GameDataBase.playerTwoTime.style.color = 'red';
                        GameDataBase.nameTurn.style.color = 'red';
                        GameDataBase.resultsScreen.style.color = 'red';
                        setTimeout(() => {
                            GameDataBase.playerTwoTime.style.color = 'white';
                            GameDataBase.nameTurn.style.color = 'white';
                            GameDataBase.resultsScreen.style.color = 'white';
                        }, 500);
                    } else {
                        GameDataBase.playerTwoTime.style.color = 'white';
                        GameDataBase.nameTurn.style.color = 'white';
                        GameDataBase.resultsScreen.style.color = 'white';
                    }
                }
                
                if (playerOneTimer - playersTimerA == 0) {
                    whoIsFirst = !whoIsFirst;
                    playersTimerA = 0;
                    GameDataBase.nameTurn.style.color = 'white';
                    GameDataBase.resultsScreen.style.color = 'white';
    
                    if (playerOneTimer > 9) {
                        GameDataBase.playerOneTime.innerHTML = `00:${playerOneTimer}`;
                    } else {
                        GameDataBase.playerOneTime.innerHTML = `00:0${playerOneTimer}`;
                    }
                    GameDataBase.playerImgOneContainer.style.opacity = '0';
                    GameDataBase.playerImgTwoContainer.style.opacity = '1';
                    GameDataBase.nameTurn.innerHTML = characterPlayerTwo;
                    GameDataBase.nameTurn.style.left = '';
                    GameDataBase.nameTurn.style.right = '0';
                    GameDataBase.resultsScreen.style.left = '';
                    GameDataBase.resultsScreen.style.right = '0';
                        GameDataBase.playerOneTime.style.opacity = "0";
                        GameDataBase.playerTwoTime.style.opacity = "1";
                        if (playerOneTimer > 5) {
                            playerOneTimer--;
                        }
                    if (MixEverythingCount == 0) {
                        MixEverything.MixEverything()
                    } else {
                        MixEverythingCount--;
                    }
                } else if (playerTwoTimer - playersTimerB == 0) {
                    whoIsFirst = !whoIsFirst;
                    playersTimerB = 0;
                    GameDataBase.nameTurn.style.color = 'white';
                    GameDataBase.resultsScreen.style.color = 'white';
                    
                    if (playerTwoTimer > 9) {
                        GameDataBase.playerTwoTime.innerHTML = `00:${playerTwoTimer}`;
                    } else {
                        GameDataBase.playerTwoTime.innerHTML = `00:0${playerTwoTimer}`;
                    }
                    GameDataBase.playerImgOneContainer.style.opacity = '1';
                    GameDataBase.playerImgTwoContainer.style.opacity = '0';
                    GameDataBase.nameTurn.innerHTML = characterPlayerOne;
                    GameDataBase.nameTurn.style.left = '0';
                    GameDataBase.nameTurn.style.right = '';
                    GameDataBase.resultsScreen.style.left = '0';
                    GameDataBase.resultsScreen.style.right = '';
                        GameDataBase.playerOneTime.style.opacity = "1";
                        GameDataBase.playerTwoTime.style.opacity = "0";
                        if (playerTwoTimer > 5) {
                            playerTwoTimer--;
                        }
                    if (MixEverythingCount == 0) {
                        MixEverything.MixEverything()
                    } else {
                        MixEverythingCount--;
                    }
                }
            }
    
            /* whoIsFirst = !whoIsFirst; */
    
        }, 1000);
        // קביעת העמודות של המשחק
        GameDataBase.board.style.gridTemplateColumns = `repeat(${column}, 1fr)`;
        // העתקת מערך
        for (let i = 0; i < (amount); i++) {
            arrayOfBoardCards.push(arrayCardType[i], arrayCardType[i]);
        }
        let idCounter = 0;
        // יצירת לוח המשחק
        for (let i = 1; i <= amount * 2; i++) {
            // אינדקס רנדומלי מהמערך
            const rand = Math.floor(Math.random() * (arrayOfBoardCards.length));
            idCounter++;
            // מייצר קלף רנדומלי לפי הסדר
            const div = document.createElement("div");
            div.style.backgroundColor = colorBox;
            if (cardImg == false) {
                div.innerHTML = `<span>${arrayOfBoardCards[rand]}</span>`;
                div.setAttribute("id", `boxit${idCounter}`);
            } else {
                div.innerHTML = `<img src="./images/cardType/${arrayOfBoardCards[rand]}">`;
                div.setAttribute("id", `boxit${idCounter}`);
            }
            GameDataBase.board.appendChild(div);
            if (memoryFirst == false) {
                GameDataBase.nameTurn.innerHTML = characterPlayerOne;
            } else {
                GameDataBase.nameTurn.innerHTML = characterPlayerTwo;
            }
            
            
            if (characterPlayerTwo == false) {
                GameDataBase.resultsScreen.style.opacity = '0';
            } else {
                GameDataBase.resultsScreen.style.opacity = '1';
            }
            // בכדי שלא יהיו כפילויות, לאחר שהשתמשנו במיקום מסויים, הסרנו אותו מהמערך
            arrayOfBoardCards.splice(rand, 1);
            //**********************************************************
            // בלחיצה על קלף
            div.addEventListener("click", ev => {
                // אם הקלף כבר נעלם
                if (ev.target.classList.contains('hidden')) {
                    return;
                }
                // אם במידה ויש שתי קלפים חשופים תשהה ואל תתן להמשיך 
                if (cardImg == true) {
                    if (GameDataBase.board.querySelectorAll(".showing").length == 4) {
                        return;
                    }
                } else {
                    if (GameDataBase.board.querySelectorAll(".showing").length == 2) {
                        return;
                    }
                }
                
                // תחשוף את הקלף
                ev.target.classList.add("showing");
                if (cardImg == true) {
                    ev.target.parentElement.classList.add("showing");
                }

                Checks.check();
            });
        }
    }

}


