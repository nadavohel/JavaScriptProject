class WinnerStatement {
    static theWinner() {
        // call popup function
        Popup.popupJump()
        // if player one wins
        if (win == 1) {
            GameDataBase.popupBox.innerHTML = "The Winner Is<br>";
            if (playerOneWin == true) {
                namePlayerTwoCountWin = namePlayerTwoCountWin + 1;
                GameDataBase.popupBox.innerHTML += `${namePlayerTwo} !!!<br>`;
            } else {
                namePlayerOneCountWin = namePlayerOneCountWin + 1;
                GameDataBase.popupBox.innerHTML += `${namePlayerOne} !!!<br>`;
            }
            GameDataBase.popupBox.innerHTML += "🤠🤠";
        // if player two wins
        } else if (win == 2) {
            GameDataBase.popupBox.innerHTML = "The Winner Is<br>";
            if (playerOneWin == false) {
                namePlayerTwoCountWin = namePlayerTwoCountWin + 1;
                GameDataBase.popupBox.innerHTML += `${namePlayerTwo} !!!<br>`;
            } else {
                namePlayerOneCountWin = namePlayerOneCountWin + 1;
                GameDataBase.popupBox.innerHTML += `${namePlayerOne} !!!<br>`;
            }
            GameDataBase.popupBox.innerHTML += "🤠🤠";
        }
        // button play again shows up
        GameDataBase.playSameNamesAgain.style.display = "block";
    }
}
