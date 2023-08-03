let mobile = window.matchMedia("(max-width: 470px)")
class LetsPlay {
    
    static letsPlay() {
        // if names players are available then lets play
        if ((GameDataBase.playerOne.value.trim().length >= 3) && (GameDataBase.playerTwo.value.trim().length >= 3) && (GameDataBase.onlineGame.checked === false)) {
            // erase error message
            GameDataBase.errorForme.style.display = "none";
            // erase error red border
            GameDataBase.formBox.style.border = '';
            // flag to check if game can start change to current
            gameCanStart = true;
            // clear player names
            namePlayerOne = '';
            namePlayerTwo = '';
            // get player names
            namePlayerOne = GameDataBase.playerOne.value;
            namePlayerTwo = GameDataBase.playerTwo.value;
            // erase form container
            GameDataBase.formBox.style.display = 'none';
            // game centers show up ans is styles
            GameDataBase.screenGameCenter.style.display = 'block';
            GameDataBase.screenGameCenter.style.position = "absolute";
            GameDataBase.screenGameCenter.style.top = "20px";
            GameDataBase.screenGameCenter.style.left = "0";  
            GameDataBase.screenGameCenter.style.height = "210px";
            if ((mobile.matches) || (window.innerWidth < 500)) { // If media query matches
                GameDataBase.screenGameCenter.style.width = "100vw";
            } else {
                GameDataBase.screenGameCenter.style.width = "520px";
            }  
            GameDataBase.heartsBoxPlayerOne.innerHTML = threeHeart;
            GameDataBase.heartsBoxPlayerTwo.innerHTML = threeHeart;
            // if is a exclusive game mode
            if (GameDataBase.exclusiveGame.checked) {
                // show player hearts
                GameDataBase.heartsBoxPlayerOne.style.opacity = 1;
                GameDataBase.heartsBoxPlayerTwo.style.opacity = 1;
                flagEachGame = true;
            } else {
                flagEachGame = false;
            }
            // if is a exclusive game mode
            if (exclusiveGame.checked) {
                // show player hearts
                GameDataBase.heartsBoxPlayerOne.style.display = "block";
                GameDataBase.heartsBoxPlayerTwo.style.display = "block";
            }
            // player one name 
            const playerOneName = document.createElement('p');
            playerOneName.innerHTML = namePlayerOne;
            GameDataBase.screenGameCenter.appendChild(playerOneName);
            // player one name styles
            playerOneName.style.position = "absolute";
            
            playerOneName.style.color = "white";
            playerOneName.style.fontSize = "1.3em";
            playerOneName.style.fontWeight = "bold";
            playerOneName.style.textAlign = "right";
            playerOneName.style.height = "25px";
            playerOneName.style.paddingRight = "20px";
            if ((mobile.matches) || (window.innerWidth < 500)) { // If media query matches
                playerOneName.style.width = "100px";
                playerOneName.style.left = "10px";
                playerOneName.style.top = "30px";
            } else {
                playerOneName.style.width = "200px";
                playerOneName.style.left = "30px";
                playerOneName.style.top = "10px";
            }  
            // player two name 
            const playerTwoName = document.createElement('p');
            playerTwoName.innerHTML = namePlayerTwo;
            GameDataBase.screenGameCenter.appendChild(playerTwoName);
            // player two name styles
            playerTwoName.style.position = "absolute";
            
            
            playerTwoName.style.color = "white";
            playerTwoName.style.fontSize = "1.3em";
            playerTwoName.style.fontWeight = "bold";
            playerTwoName.style.textAlign = "left";
            playerTwoName.style.height = "25px";
            playerTwoName.style.paddingLeft = "20px";
    
            if (mobile.matches) { // If media query matches
                playerTwoName.style.width = "100px";
                playerTwoName.style.left = "60vw";
                playerTwoName.style.top = "30px";
            } else {
                playerTwoName.style.width = "200px";
                playerTwoName.style.left = "270px";
                playerTwoName.style.top = "10px";
            }  
            // screen results
            playerScreenScore = document.createElement('p');
            playerScreenScore.innerHTML = `${namePlayerOneCountWin} - ${namePlayerTwoCountWin}`;
            GameDataBase.screenGameCenter.appendChild(playerScreenScore);
            // screen results styles
            playerScreenScore.style.position = "absolute";
            playerScreenScore.style.top = "30px";
            playerScreenScore.style.color = "white";
            playerScreenScore.style.fontSize = "5.3em";
            playerScreenScore.style.fontWeight = "bold";
            playerScreenScore.style.textAlign = "center";
            
            playerScreenScore.style.height = "100px";
    
    
            if ((mobile.matches) || (window.innerWidth < 500)) { // If media query matches
                playerScreenScore.style.top = "50px";
                playerScreenScore.style.left = "0px";
                playerScreenScore.style.width = "100vw";
            } else {
                playerScreenScore.style.top = "30px";
                playerScreenScore.style.left = "160px";
                playerScreenScore.style.width = "200px";
            }  
            // show on screen whose start the game
            GameDataBase.whoseTurn.innerHTML = `X=> ${namePlayerOne} Turn`;
            GameDataBase.screenGameCenter.appendChild(GameDataBase.whoseTurn);
            GameDataBase.whoseTurn.style.color = "rgb(202, 213, 42)";
            // whose turn start whith player one
            playersTurn = true;
            // error message if user not enter name
        } else if ((GameDataBase.playerOne.value.trim().length === 0) && (GameDataBase.playerTwo.value.trim().length === 0)) {
            GameDataBase.errorForme.style.display = "block";
            GameDataBase.errorForme.style.marginTop = "22.4px";
            GameDataBase.errorForme.style.zIndex = "4365347427245245";
            GameDataBase.errorForme.innerHTML = "please fill all fields";
            GameDataBase.formBox.style.border = "2px solid red";
            // error message if one or two names is to short
        } else if (GameDataBase.onlineGame.checked === true) {
            GameDataBase.errorForme.style.display = "block";
            GameDataBase.errorForme.style.marginTop = "8px";
            GameDataBase.errorForme.style.zIndex = "4365347427245245";
            GameDataBase.errorForme.innerHTML = "Don't rush me!!! I'm just learning. It will take more time";
            GameDataBase.formBox.style.border = "2px solid red";
        } else {
            GameDataBase.errorForme.style.display = "block";
            GameDataBase.errorForme.style.marginTop = "22.4px";
            GameDataBase.errorForme.style.zIndex = "4365347427245245";
            GameDataBase.errorForme.innerHTML = "one or two names is to short";
            GameDataBase.formBox.style.border = "2px solid red";
        }
    
        bombPosition = 15;
        heartPosition = 15;
    }
}
