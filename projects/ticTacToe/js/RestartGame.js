class restartGame {
    static restart() {
        // change players turns
        isPlayerX = true;
        // clear board
        for (let x = 0; x < 9; x++) {
            check[x] = 0;
            let clearBox = document.getElementsByClassName("cell");
            clearBox[x].innerHTML = '';
        }
        // back to no winner flag
        win = 0;
    
        // clear style green on cells
        for (let i = 1; i <= 9; i++) {
            GameDataBase.gameBoxArray[i].style.color = "black";
        }
        // hide player hearts
        GameDataBase.heartsBoxPlayerOne.style.opacity =  0;
        GameDataBase.heartsBoxPlayerTwo.style.opacity = 0;
    
        // reset score on screen
        namePlayerOneCountWin = 0;
        namePlayerTwoCountWin = 0;
        playerScreenScore.innerHTML = `${namePlayerOneCountWin} - ${namePlayerTwoCountWin}`;
        // stop the gmae untel fill player names
        gameCanStart = false;
        // back to form box
        GameDataBase.formBox.style.display = 'block';
        // game center disappears and clear
        GameDataBase.screenGameCenter.innerHTML = '';
        GameDataBase.screenGameCenter.style.display = 'none';
        GameDataBase.whoseTurn.innerHTML = '';
        GameDataBase.playSameNamesAgain.style.display = "none";
        // clear player names in input boxes
        GameDataBase.playerOne.value = '';
        GameDataBase.playerTwo.value = '';
        // clear player play first last time
        playersTurnBefore = true;
        playerOneWin = true;
        // winner flag back to no winner flag
        thereIsAWinner = false;
        // clear counter to know if the board is full or not
        countTurn = 0;
        // Reset hearts for each player
        countHeartPlayerOne = 3;
        countHeartPlayerTwo = 3;
    }

}