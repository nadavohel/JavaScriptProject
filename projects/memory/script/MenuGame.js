class MenuGame {
    // go to the main page
    static backToMenu(pageInMenu) {
        pageInMenu.style.opacity = '0';
        pageInMenu.style.zIndex = '0';
        GameDataBase.menuGame.style.opacity = '1';
        GameDataBase.menuGame.style.zIndex = '1';
        GameDataBase.menuContainer.style.height = '254px';
    }
    // go to the call function page
    static goPageInMenu(pageInMenu,height, opicity) {
        pageInMenu.style.opacity = '1';
        pageInMenu.style.zIndex = '1';
        pageInMenu.style.transition = `all ${opicity}` ;
        GameDataBase.menuGame.style.opacity = '0';
        GameDataBase.menuGame.style.zIndex = '0';
        GameDataBase.menuContainer.style.height = height;
        GameDataBase.menuContainer.style.transition = `height ${opicity}`;
    }
    // lets play the game
    static goPlay() {
        if ((characterPlayerTwo == false) && (gameIsExclusive == true)) {
            needToPickPlayerTwo = true;
            GameDataBase.errorMessage.style.opacity = '1';
            GameDataBase.menuContainer.style.border = '4px solid red';
        } else {
            PlayTheGame.playGame();
            GameDataBase.popGameId.style.display = 'none';
            GameDataBase.buttonsContainer.style.zIndex = '1';
        }
    }
    // start menu game
    static startMenuGame() {
        if (preventFlag) {
            return;
        }
        location.reload();
    }
    // players character pick function
    static characterplayers(img, pl, cr) {
        if (pl == "one") {
            if (characterPlayerTwo == GameDataBase.playersCharacter[cr]) {
                return;
            }
            GameDataBase.playerImgOne.src = `./images/${GameDataBase.characterImg[cr]}.png`;
    
            characterPlayerOne = GameDataBase.playersCharacter[cr];
            GameDataBase.playerOneCharacterIds.forEach((character) => {
                character.style.border = '2px solid #00000000';
                character.style.backgroundColor = '#6bf87000';
            })
            img.style.border = '2px solid black';
            img.style.backgroundColor = '#6bf870';
        } else if (pl == "two") {
            playerImgTwo.src = `./images/${GameDataBase.characterImg[cr]}.png`;
            if (cr === playerTwoDoublePick) {
                img.style.border = '2px solid #00000000';
                img.style.backgroundColor = '#6bf87000';
                playerTwoDoublePick = '';
                characterPlayerTwo = false
            }
            else {
                if (characterPlayerOne == GameDataBase.playersCharacter[cr]) {
                    return;
                }
                playerTwoDoublePick = cr;
                characterPlayerTwo = GameDataBase.playersCharacter[cr];
                GameDataBase.playerTwoCharacterIds.forEach((character) => {
                    character.style.border = '2px solid #00000000';
                    character.style.backgroundColor = '#6bf87000';
                })
                img.style.border = '2px solid black';
                img.style.backgroundColor = '#6bf870';
                needToPickPlayerTwo = false;
                GameDataBase.errorMessage.style.opacity = '0';
                GameDataBase.menuContainer.style.border = '4px solid black';
            }
        }
    }
    // board size pick function
    static changeBoard(row, newColumn, couples){
        GameDataBase.sizeBoardRow.forEach((x) => {
            x.style.backgroundColor = '#00000000';
        })
        row.style.backgroundColor = 'tomato';
        column = newColumn;
        amount = couples;
        /* boardY = newColumn;
        boardX = (couples*2) / newColumn; */
    }
    static selectedColor(row, box, colorId){
        GameDataBase.ColorRows.forEach((x) => {
            x.style.backgroundColor = '#00000000';
        })
        GameDataBase.ColorBoxs.forEach((x) => {
            x.style.border = '2px solid #00000000';
        })
        row.style.backgroundColor = 'tomato';
        box.style.border = '2px solid black';
        colorBox = colorId;
    }
    
    
    static galleryArrays() {
        for (let i = 1; i <= 21; i++) {
            natureArray.push(`nature/nature${i}.jpg`);
        }
        
        for (let i = 1; i <= 21; i++) {
            hapoelArray.push(`hapoelBeerSheva/hapoel${i}.jpg`);
        }
        
        for (let i = 1; i <= 21; i++) {
            unitedArray.push(`manUtd/manUtd${i}.png`);
        }
        
    }
    
    static cardsType(row, box, arrayType, imgOrSpan){ 
        GameDataBase.CardTypeGameRows.forEach((x) => {
            x.style.backgroundColor = '#00000000';
        })
        GameDataBase.CardTypeGameBoxs.forEach((x) => {
            x.style.border = '2px solid #00000000';
            x.style.backgroundColor = 'rgba(255, 99, 71, 0.258)';
        })
        row.style.backgroundColor = 'tomato';
        box.style.border = '2px solid black';
        box.style.backgroundColor = 'tomato';
        arrayCardType = arrayType;
        cardImg = imgOrSpan;
    }
    static modeGame(mode) {
        gameIsExclusive = mode;
        if (mode == true) {
            GameDataBase.exclusiveGame.style.background = "tomato";
            GameDataBase.classicGame.style.background = "#00000000";
            GameDataBase.timePlayerContainer.style.opacity = '1';
        } else {
            GameDataBase.classicGame.style.background = "tomato";
            GameDataBase.exclusiveGame.style.background = "#00000000";
            needToPickPlayerTwo = false
            GameDataBase.errorMessage.style.opacity = '0';
            GameDataBase.menuContainer.style.border = '4px solid black';
            GameDataBase.timePlayerContainer.style.opacity = '0';
        }
    }
}

MenuGame.galleryArrays()
GameDataBase.mediumBoard.style.backgroundColor = 'tomato';
GameDataBase.classicGame.style.backgroundColor = 'tomato';