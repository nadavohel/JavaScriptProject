class PlayGameAgain {
    static playAgain() {
        anotherTurn = false;
        win = false;
        attamps = 0;
        timer = 0;
        MixEverythingCount = 10;
        document.querySelector(".counter").innerHTML = 0;
        boardId.innerHTML = '';
        playerOneScore = 0;
        playerTwoScore = 0;
        arrayOfBoardCards = [];
        playerOneNewTime = 10;
        playerTwoNewTime = 10;
        playersTimerA = 0;
        playersTimerB = 0;
        playerOneTimer = playerOneNewTime;
        playerTwoTimer = playerTwoNewTime;
        GameDataBase.nameTurn.style.color = 'white';
        GameDataBase.resultsScreen.style.color = 'white';
        if (characterPlayerTwo != false) {
            whoIsFirst = memoryFirst;
            memoryFirst = !memoryFirst;
            GameDataBase.nameTurn.style.opacity = '1';
            GameDataBase.resultsScreen.style.width = '500px'
            GameDataBase.resultsScreen.style.right = '';
            GameDataBase.resultsScreen.style.left = '';
            GameDataBase.resultsScreen.style.transform = '';
            GameDataBase.resultsScreen.style.fontSize = '3.5em';
            GameDataBase.resultsScreen.style.top = '80px';
            GameDataBase.resultsScreen.innerHTML = `${playerOneScore} - ${playerTwoScore}`;
            if (memoryFirst == false) {
                GameDataBase.playerImgOneContainer.style.opacity = '1';
                GameDataBase.playerImgTwoContainer.style.opacity = '0';
                GameDataBase.nameTurn.innerHTML = characterPlayerOne;
                GameDataBase.nameTurn.style.left = '0';
                GameDataBase.nameTurn.style.right = '';
                GameDataBase.resultsScreen.style.left = '0';
                GameDataBase.resultsScreen.style.right = '';
            } else {
                GameDataBase.playerImgOneContainer.style.opacity = '0';
                GameDataBase.playerImgTwoContainer.style.opacity = '1';
                GameDataBase.nameTurn.innerHTML = characterPlayerTwo;
                GameDataBase.nameTurn.style.left = '';
                GameDataBase.nameTurn.style.right = '0';
                GameDataBase.resultsScreen.style.left = '';
                GameDataBase.resultsScreen.style.right = '0';
            }
        }
        PlayTheGame.playGame()
    }
}