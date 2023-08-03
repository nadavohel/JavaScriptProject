const menuGame = document.getElementById('menuGame');
const snakeTypeId = document.getElementById('snakeTypeId');
const fruitTypeId = document.getElementById('fruitTypeId');
const fruitAmountId = document.getElementById('fruitAmountId');
const screenSizeId = document.getElementById('screenSizeId');
const wallGameId = document.getElementById('wallGameId');
const stopSnow = document.getElementById('stopSnow');

let movementFruit = 6;

let screenSize = ['Tiny', 15, 'Small', 20, 'Medium', 30 , 'Large', 40, 'Giant', 50];
let movementscreenSize = 2;
let wallGame = ['No Wall-Game', 'Amateur', 'Semi-pro', 'Professinal', 'WorldClass', 'legendary'];
let movementWallGame = 0;

let wallAndSize = [];

let fruitTypeArray = ['❤️', '🍊', '🍋', '🍑', '🍒', '🍓', '🫐', '🍎', '🍈', '🍇', '🍉', '🍰', '🍩', '🍨', '🧁', '🥩', '🥪', '🍟', '🍔', '🍕'];
let snakeStyle = [ "🔲","🔳","⭕","❌","🔶","🔷","🟧","🟥","🟧","🟨","🟩","🟦","🟢","🔵","🔴","🟠","🟡","🟢","🟤","🟫","🔴","🟥"]
let movementSnake = 12;

fruitTypeId.innerHTML = fruitTypeArray[movementFruit];
fruitAmountId.innerHTML = `Fruit On Screen: <b>${fruitAmount}<b/>`;
screenSizeId.innerHTML = `Board-Size: <b>${screenSize[movementscreenSize]}<b/>`;
wallGameId.innerHTML = `Wall-Game: <b>${wallGame[movementWallGame]}<b/>`;
snakeTypeId.innerHTML = `${snakeStyle[movementSnake]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}`;

function changBoardSize(movement) {
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
    screenSizeId.innerHTML = `Board-Size: <b>${screenSize[movementscreenSize]}<b/>`;
    if (movementWallGame > 0) {
        let allOfArratWallIndex = allOfArratWall.indexOf(`${movementWallGame}.${movementscreenSize}`);

        wallAndSize = allOfArratWallName[allOfArratWallIndex];
    }
    
}

function changSnakeType(movement) {
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
    headFeake.innerHTML = snakeStyle[movementSnake];
    snakeBody = snakeStyle[movementSnake + 1];
    snakeTypeId.innerHTML = `${snakeStyle[movementSnake]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}${snakeStyle[movementSnake + 1]}`;
}
function changWall(movement) {
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
        let allOfArratWallIndex = allOfArratWall.indexOf(`${movementWallGame}.${movementscreenSize}`);

        wallAndSize = allOfArratWallName[allOfArratWallIndex];
    }
    wallGameId.innerHTML = `Wall-Game: <b>${wallGame[movementWallGame]}<b/>`;
}

function changFruit(movement) {
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
    fruitTypeId.innerHTML = fruitTypeArray[movementFruit];
}

function changFruitAmount(movement) {
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
    fruitAmountId.innerHTML = `Fruit On Screen: <b>${fruitAmount}<b/>`;
}

function continueGame() {
    menuGame.style.visibility = "hidden";
    stopSnow.style.visibility = "hidden";
    updateBoard()
} 
const popup = document.getElementById('popup');
function popGoup() {
    popup.style.display = 'block';
    setTimeout(() => {
        location.reload();
    }, 3*1000);
}
