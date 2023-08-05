class MenuGame {

    static menuGameRun() {
    
        DataBase.fruitTypeId.innerHTML = fruitTypeArray[movementFruit];
        DataBase.fruitAmountId.innerHTML = `Fruit On Screen: <b>${fruitAmount}<b/>`;
        DataBase.screenSizeId.innerHTML = `Board-Size: <b>${screenSize[movementscreenSize]}<b/>`;
        DataBase.wallGameId.innerHTML = `Wall-Game: <b>${wallGame[movementWallGame]}<b/>`;
        DataBase.snakeTypeId.innerHTML = `${snakeStyle[movementSnake]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}`;
    }
    
    static changBoardSize(movement) {
        if (movement == "right") {
            if (movementscreenSize < (screenSize.length-2)) {
                movementscreenSize = movementscreenSize + 2;
            } else {
                movementscreenSize = 0;
            }
        } else if (movement == "left"){
            if (movementscreenSize > 0) {
                movementscreenSize = movementscreenSize - 2;
            } else {
                movementscreenSize = screenSize.length - 2;
            }
        }
        
        height = screenSize[movementscreenSize + 1];
        width = screenSize[movementscreenSize + 1];
        DataBase.screenSizeId.innerHTML = `Board-Size: <b>${screenSize[movementscreenSize]}<b/>`;
        if (movementWallGame > 0) {
            let allOfArrayWallIndex = Wall.allOfArrayWall.indexOf(`${movementWallGame}.${movementscreenSize}`);
    
            wallAndSize = Wall.allOfArratWallName[allOfArrayWallIndex];
        }
        
    }
    
    static changSnakeType(movement) {
        if (movement == "right") {
            if (movementSnake < (snakeStyle.length-2)) {
                movementSnake = movementSnake + 2;
            } else {
                movementSnake = 0;
            }
        } else if (movement == "left"){
            if (movementSnake > 0) {
                movementSnake = movementSnake - 2;
            } else {
                movementSnake = snakeStyle.length - 2;
            }
        }
        DataBase.headFeake.innerHTML = snakeStyle[movementSnake];
        snakeBody = snakeStyle[movementSnake + 1];
        DataBase.snakeTypeId.innerHTML = `${snakeStyle[movementSnake]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}`;
    }
    
    static changWall(movement) {
        if (movement == "right") {
            if (movementWallGame < (wallGame.length-1)) {
                movementWallGame ++;
            } else {
                movementWallGame = 0;
            }
        } else if (movement == "left"){
            if (movementWallGame > 0) {
                movementWallGame--;
            } else {
                movementWallGame = wallGame.length - 1;
            }
        }
        if (movementWallGame > 0) {
            let allOfArrayWallIndex = Wall.allOfArrayWall.indexOf(`${movementWallGame}.${movementscreenSize}`);
    
            wallAndSize = Wall.allOfArratWallName[allOfArrayWallIndex];
        }
        DataBase.wallGameId.innerHTML = `Wall-Game: <b>${wallGame[movementWallGame]}<b/>`;
    }
    
    static changFruit(movement) {
        if (movement == "right") {
            if (movementFruit < (fruitTypeArray.length-1)) {
                movementFruit ++;
            } else {
                movementFruit = 0;
            }
            fruitType = fruitTypeArray[movementFruit];
        } else if (movement == "left"){
            if (movementFruit > 0) {
                movementFruit--;
            } else {
                movementFruit = fruitTypeArray.length - 1;
            }
            fruitType = fruitTypeArray[movementFruit];
        }
        fruitType = fruitTypeArray[movementFruit];
        DataBase.fruitTypeId.innerHTML = fruitTypeArray[movementFruit];
    }
    
    static changFruitAmount(movement) {
        if (movement == "right") {
            if (fruitAmount < 6) {
                fruitAmount++;
            } else {
                fruitAmount = 1;
            }
        } else if (movement == "left") {
            if (fruitAmount > 1) {
                fruitAmount--;
            } else {
                fruitAmount = 6;
            }
        }
        DataBase.fruitAmountId.innerHTML = `Fruit On Screen: <b>${fruitAmount}<b/>`;
    }
    
    static continueGame() {
        DataBase.menuGame.style.visibility = "hidden";
        DataBase.stopSnow.style.visibility = "hidden";
        BoardGame.updateBoard()
    } 
}

MenuGame.menuGameRun();




