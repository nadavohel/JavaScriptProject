class PlayAgain {
    static playAgain() {
        if (gameCanStart === false) {
            GameDataBase.formBox.style.border = "2px solid red";
            GameDataBase.errorForme.innerHTML = "please fill all fields";
            return;
        }
        
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
        // if is a exclusive game mode
        if (GameDataBase.exclusiveGame.checked) {
            // show player hearts
            GameDataBase.heartsBoxPlayerOne.style.display = "block";
            GameDataBase.heartsBoxPlayerTwo.style.display = "block";
        }
        // every player has 3 heart at start
        countHeartPlayerOne = 3;
        countHeartPlayerTwo = 3;
        GameDataBase.heartsBoxPlayerOne.innerHTML = threeHeart;
        GameDataBase.heartsBoxPlayerTwo.innerHTML = threeHeart;
        // change players turn start game and sign
        if (playersTurnBefore == true) {
            playersTurn = false;
            signPlayerOne = 'O';
            signPlayerTwo = 'X';
        } else {
            playersTurn = true;
            signPlayerOne = 'X';
            signPlayerTwo = 'O';
        }
        // winner flag back to no winner flag
        thereIsAWinner = false;
        // change player play first last time
        playersTurnBefore = !playersTurnBefore;
        // clears winners 
        playerOneWin = !playerOneWin;
        // clear counter to know if the board is full or not
        countTurn = 0;
        // show on screen whose start the game
        if (playersTurn == true) {
            GameDataBase.whoseTurn.style.color = "rgb(202, 213, 42)";
            GameDataBase.whoseTurn.innerHTML = `${signPlayerOne} ${namePlayerOne} Turn`;
        } else {
            GameDataBase.whoseTurn.style.color = "rgb(237, 89, 170)";
            GameDataBase.whoseTurn.innerHTML = `${signPlayerTwo} ${namePlayerTwo} Turn`;
        }
        // button play again disappears
        GameDataBase.playSameNamesAgain.style.display = "none";
    }
}