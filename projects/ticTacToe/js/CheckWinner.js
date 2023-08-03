class CheckWinner {
    // check if there is a winner
    static cellPos(a) {
        
        if (gameCanStart === false) {
            return;
        }
        // check if there is a winner X and cells colors
        if (
                ((check[a - 1] == 10) && (isPlayerX == true) && (win == 0)) 
            ) {
            // color for win cells
            if (check[0] + check[1] + check[2] == 30) {
                GameDataBase.gameBoxArray[1].style.color = "green";
                GameDataBase.gameBoxArray[2].style.color = "green";
                GameDataBase.gameBoxArray[3].style.color = "green";
            } else if (check[3] + check[4] + check[5] == 30) {
                GameDataBase.gameBoxArray[4].style.color = "green";
                GameDataBase.gameBoxArray[5].style.color = "green";
                GameDataBase.gameBoxArray[6].style.color = "green";
            } else if (check[6] + check[7] + check[8] == 30) {
                GameDataBase.gameBoxArray[7].style.color = "green";
                GameDataBase.gameBoxArray[8].style.color = "green";
                GameDataBase.gameBoxArray[9].style.color = "green";
            } else if (check[0] + check[3] + check[6] == 30) {
                GameDataBase.gameBoxArray[1].style.color = "green";
                GameDataBase.gameBoxArray[4].style.color = "green";
                GameDataBase.gameBoxArray[7].style.color = "green";
            } else if (check[1] + check[4] + check[7] == 30) {
                GameDataBase.gameBoxArray[2].style.color = "green";
                GameDataBase.gameBoxArray[5].style.color = "green";
                GameDataBase.gameBoxArray[8].style.color = "green";
            } else if (check[2] + check[5] + check[8] == 30) {
                GameDataBase.gameBoxArray[3].style.color = "green";
                GameDataBase.gameBoxArray[6].style.color = "green";
                GameDataBase.gameBoxArray[9].style.color = "green";
            } else if (check[0] + check[4] + check[8] == 30) {
                GameDataBase.gameBoxArray[1].style.color = "green";
                GameDataBase.gameBoxArray[5].style.color = "green";
                GameDataBase.gameBoxArray[9].style.color = "green";
            } else if (check[2] + check[4] + check[6] == 30) {
                GameDataBase.gameBoxArray[3].style.color = "green";
                GameDataBase.gameBoxArray[5].style.color = "green";
                GameDataBase.gameBoxArray[7].style.color = "green";
            }
            // check if there is a winner X
            if ((check[0] + check[1] + check[2] == 30)
                || (check[3] + check[4] + check[5] == 30)
                || (check[6] + check[7] + check[8] == 30)
                || (check[0] + check[3] + check[6] == 30)
                || (check[1] + check[4] + check[7] == 30)
                || (check[2] + check[5] + check[8] == 30)
                || (check[0] + check[4] + check[8] == 30)
                || (check[2] + check[4] + check[6] == 30)) {
                win = 1;
                if (win != 0) {
                    setTimeout(WinnerStatement.theWinner, 0.3 * 1000);
                    thereIsAWinner = true;
                }
            }
            // check if there is a winner O and cells colors
        } else if (
                ((check[a - 1] == 1) && (isPlayerX == false) && (win == 0)) 
            )  {
                
            // color for win cells
            if (check[0] + check[1] + check[2] == 3) {
                GameDataBase.gameBoxArray[1].style.color = "green";
                GameDataBase.gameBoxArray[2].style.color = "green";
                GameDataBase.gameBoxArray[3].style.color = "green";
            } else if (check[3] + check[4] + check[5] == 3) {
                GameDataBase.gameBoxArray[4].style.color = "green";
                GameDataBase.gameBoxArray[5].style.color = "green";
                GameDataBase.gameBoxArray[6].style.color = "green";
            } else if (check[6] + check[7] + check[8] == 3) {
                GameDataBase.gameBoxArray[7].style.color = "green";
                GameDataBase.gameBoxArray[8].style.color = "green";
                GameDataBase.gameBoxArray[9].style.color = "green";
            } else if (check[0] + check[3] + check[6] == 3) {
                GameDataBase.gameBoxArray[1].style.color = "green";
                GameDataBase.gameBoxArray[4].style.color = "green";
                GameDataBase.gameBoxArray[7].style.color = "green";
            } else if (check[1] + check[4] + check[7] == 3) {
                GameDataBase.gameBoxArray[2].style.color = "green";
                GameDataBase.gameBoxArray[5].style.color = "green";
                GameDataBase.gameBoxArray[8].style.color = "green";
            } else if (check[2] + check[5] + check[8] == 3) {
                GameDataBase.gameBoxArray[3].style.color = "green";
                GameDataBase.gameBoxArray[6].style.color = "green";
                GameDataBase.gameBoxArray[9].style.color = "green";
            } else if (check[0] + check[4] + check[8] == 3) {
                GameDataBase.gameBoxArray[1].style.color = "green";
                GameDataBase.gameBoxArray[5].style.color = "green";
                GameDataBase.gameBoxArray[9].style.color = "green";
            } else if (check[2] + check[4] + check[6] == 3) {
                GameDataBase.gameBoxArray[3].style.color = "green";
                GameDataBase.gameBoxArray[5].style.color = "green";
                GameDataBase.gameBoxArray[7].style.color = "green";
            }
            // check if there is a winner O
            if ((check[0] + check[1] + check[2] == 3)
                || (check[3] + check[4] + check[5] == 3)
                || (check[6] + check[7] + check[8] == 3)
                || (check[0] + check[3] + check[6] == 3)
                || (check[1] + check[4] + check[7] == 3)
                || (check[2] + check[5] + check[8] == 3)
                || (check[0] + check[4] + check[8] == 3)
                || (check[2] + check[4] + check[6] == 3)) {
                win = 2;
                if (win != 0) {
                    setTimeout(WinnerStatement.theWinner, 0.3 * 1000);
                    thereIsAWinner = true;
                }
            }
        }
        // stop names turn or anuncment a draw
        if (thereIsAWinner == true) {
            GameDataBase.whoseTurn.innerHTML = '';
        } else if (countTurn === 9) {
            GameDataBase.whoseTurn.style.color = "rgb(237, 89, 170)";
            GameDataBase.whoseTurn.innerHTML = `WE do not have a winner yet!`;
            // button play again shows up
            GameDataBase.playSameNamesAgain.style.display = "block";
        }
    }
    
}
