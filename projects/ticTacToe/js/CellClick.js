class CellClick {
    // function to fill cells
    static mark(divElement, x) {
    
        // error checking
        if ((gameCanStart === false) || (flagStopGame === true)) {
            GameDataBase.formBox.style.border = "2px solid red";
            GameDataBase.errorForme.innerHTML = "please fill all fields";
            return;
        }
        
        // win checking
        if (win == 0) {
            // cell is empty checking
            if ((divElement.innerHTML == '') || ((bombPosition + 1) === x) || ((heartPosition + 1) === x)) {
                let timer = 0;
                if ((bombPosition + 1) === x) {
                    timer = 1750;
                    divElement.innerHTML = '';
                    let bombImg = document.createElement("img");
                    bombImg.src = "images/bomb.png";
                    divElement.appendChild(bombImg);
                    bombImg.style.width = "65px";
                    bombImg.style.marginTop = "-20px";
                    bombImg.style.opacity = "1";
                    flagStopGame = true;
                } else if ((heartPosition + 1) === x) {
                    divElement.innerHTML = "❤️";
                    timer = 1750;
                    flagStopGame = true;
                }
            const bombShowing = setTimeout(() => {
                /* alert('a'); */
                    if ((bombPosition + 1) === x) {
                        if ((playersTurnBefore == false)) {
                            if (isPlayerX == true) {
                                if (countHeartPlayerOne > 0) {
                                    countHeartPlayerOne = countHeartPlayerOne - 1;
                                    GameDataBase.heartsBoxPlayerOne.innerHTML = `${hearts[countHeartPlayerOne]}`;
                                }
                            } else {
                                if (countHeartPlayerTwo > 0) {
                                    countHeartPlayerTwo = countHeartPlayerTwo - 1;
                                    GameDataBase.heartsBoxPlayerTwo.innerHTML = `${hearts[countHeartPlayerTwo]}`;
                                }
                            }
                        } else {
                            if (isPlayerX == true) {
                                if (countHeartPlayerTwo > 0) {
                                    countHeartPlayerTwo = countHeartPlayerTwo - 1;
                                    GameDataBase.heartsBoxPlayerTwo.innerHTML = `${hearts[countHeartPlayerTwo]}`;
                                }
                            } else {
                                if (countHeartPlayerOne > 0) {
                                    countHeartPlayerOne = countHeartPlayerOne - 1;
                                    GameDataBase.heartsBoxPlayerOne.innerHTML = `${hearts[countHeartPlayerOne]}`;
                                }
                            }
                        }
                        bombPosition = 10;
    
                    } else if ((heartPosition + 1) === x) {
                        if ((playersTurnBefore == false)) {
                            if (isPlayerX == true) {
                                countHeartPlayerOne = countHeartPlayerOne + 1;
                                GameDataBase.heartsBoxPlayerOne.innerHTML = `${hearts[countHeartPlayerOne]}`;
                            } else {
                                countHeartPlayerTwo = countHeartPlayerTwo + 1;
                                GameDataBase.heartsBoxPlayerTwo.innerHTML = `${hearts[countHeartPlayerTwo]}`;
                            }
                        } else {
                            if (isPlayerX == true) {
                                countHeartPlayerTwo = countHeartPlayerTwo + 1;
                                GameDataBase.heartsBoxPlayerTwo.innerHTML = `${hearts[countHeartPlayerTwo]}`;
                            } else {
                                countHeartPlayerOne = countHeartPlayerOne + 1;
                                GameDataBase.heartsBoxPlayerOne.innerHTML = `${hearts[countHeartPlayerOne]}`;
                            }
                        }
                        heartPosition = 10;
                    }
    
                    // next player turn if no one is a winner
                    if (countTurn != 9) {
                        // counter cells grow
                        countTurn = countTurn + 1;
                        // write on screen whose turn is now
                        if ((playersTurn == false) && (thereIsAWinner == false)) {
                            GameDataBase.whoseTurn.style.color = "rgb(202, 213, 42)";
                            GameDataBase.whoseTurn.innerHTML = `${signPlayerOne}=> ${namePlayerOne} Turn`;
                            playersTurn = true;
                        } else if ((playersTurn == true) && (thereIsAWinner == false)) {
                            GameDataBase.whoseTurn.style.color = "rgb(237, 89, 170)";
                            GameDataBase.whoseTurn.innerHTML = `${signPlayerTwo}=> ${namePlayerTwo} Turn`;
                            playersTurn = false;
                        }
                    }
                    // sign on screen
                    if (isPlayerX == false) {
                        divElement.innerHTML = 'X';
                    } else {
                        divElement.innerHTML = 'O';
                    }
    
                    // play can played again
                    flagStopGame = false;
            }, timer);
                if (isPlayerX == true) {
                    check[x - 1] = 1;
                    // replace the player's turn
                    isPlayerX = !isPlayerX;
                } else {
                    check[x - 1] = 10;
                    // replace the player's turn
                    isPlayerX = !isPlayerX;
                }
    
            } else if ((exclusiveGame.checked) || (flagEachGame == true)) {
    
                if (
                    ((playersTurn == true) && (playersTurnBefore == true) && (isPlayerX == true) && (check[x-1] === 10)) ||
                    ((playersTurn == true) && (playersTurnBefore == false) && (isPlayerX == false) && (check[x-1] === 1)) ||
                    ((playersTurn == false) && (playersTurnBefore == true) && (isPlayerX == false) && (check[x-1] === 1)) ||
                    ((playersTurn == false) && (playersTurnBefore == false) && (isPlayerX == true) && (check[x-1] === 10)) 
                    ) {
                        if ((playersTurn == false) && (countHeartPlayerOne > 0)) {
    
                            GameDataBase.whoseTurn.style.color = "rgb(202, 213, 42)";
                            GameDataBase.whoseTurn.innerHTML = `${signPlayerOne}=> ${namePlayerOne} Turn`;
                            playersTurn = true;
                            heartsBoxPlayerOne.innerHTML = `${hearts[countHeartPlayerOne - 1]}`;
                            countHeartPlayerOne = countHeartPlayerOne - 1;
                            if (check[x - 1] === 1) {
                                divElement.innerHTML = 'O';
                                check[x - 1] = 10;
                            } else {
                                divElement.innerHTML = 'X';
                                check[x - 1] = 1;
                            }
                            flagEatOtherPlayers = true;
                            // replace the player's turn
                            isPlayerX = !isPlayerX;
                        } else if ((playersTurn == true) && (countHeartPlayerTwo > 0)) { //playersTurnBefore true
                            GameDataBase.whoseTurn.style.color = "rgb(237, 89, 170)";
                            GameDataBase.whoseTurn.innerHTML = `${signPlayerTwo}=> ${namePlayerTwo} Turn`;
                            playersTurn = false;
                            GameDataBase.heartsBoxPlayerTwo.innerHTML = `${hearts[countHeartPlayerTwo - 1]}`;
                            countHeartPlayerTwo = countHeartPlayerTwo - 1;
                            if (check[x - 1] === 1) {
                                divElement.innerHTML = 'O';
                                check[x - 1] = 10;
                            } else {
                                divElement.innerHTML = 'X';
                                check[x - 1] = 1;
                            }
                            flagEatOtherPlayers = true;
                            // replace the player's turn
                            isPlayerX = !isPlayerX;
                        }
                    }
            }
        }
    }

}