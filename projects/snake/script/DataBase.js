class DataBase {
    static arrowContainer = document.getElementById('arrowContainer');
    
    static headFeake = document.getElementById('headTransition');
    static headContainer = document.getElementById('headContainer');
    static pauseContainer = document.getElementById('pauseContainer');
    static board = document.querySelector('.board');
    
    static menuGame = document.getElementById('menuGame');
    static snakeTypeId = document.getElementById('snakeTypeId');
    static fruitTypeId = document.getElementById('fruitTypeId');
    static fruitAmountId = document.getElementById('fruitAmountId');
    static screenSizeId = document.getElementById('screenSizeId');
    static wallGameId = document.getElementById('wallGameId');
    static stopSnow = document.getElementById('stopSnow');
    static popup = document.getElementById('popup');

    static speed10 = 0.15;
    static speed20 = 0.1;
    static speed30 = 0.07;
}

let screenWidth = window.innerWidth;
let mobile = window.matchMedia("(max-width: 470px)")

const rightBoundaries = [];
const leftBoundaries = [];

const snake = [5, 4, 3, 2, 1, 0];

let head = snake[0];
let isGameOver = false;
let direction = 'left';
let interval;
let random;
let calcHeadTop;
let calcHeadLeft;
let firstMove = true;
let speed = 0.2;
let timer = 0;
let paused = true;
let points = 0;
let fruitType = '🫐';
let snakeBody = "🔵";
let fruitAmount = 1;
let eatMyFruit = [];

let height = 20;
let width = 20;

let movementFruit = 6;

let screenSize = ['Tiny', 15, 'Small', 20, 'Medium', 30, 'Large', 40, 'Giant', 50];
let movementscreenSize = 2;
let wallGame = ['No Wall-Game', 'Amateur', 'Semi-pro', 'Professinal', 'WorldClass', 'legendary'];
let movementWallGame = 0;

let wallAndSize = [];

let fruitTypeArray = ['❤️', '🍊', '🍋', '🍑', '🍒', '🍓', '🫐', '🍎', '🍈', '🍇', '🍉', '🍰', '🍩', '🍨', '🧁', '🥩', '🥪', '🍟', '🍔', '🍕'];
let snakeStyle = ["🔲", "🔳", "⭕", "❌", "🔶", "🔷", "🟧", "🟥", "🟧", "🟨", "🟩", "🟦", "🟢", "🔵", "🔴", "🟠", "🟡", "🟢", "🟤", "🟫", "🔴", "🟥"]
let movementSnake = 12;