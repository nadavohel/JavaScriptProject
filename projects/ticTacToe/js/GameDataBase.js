class GameDataBase {
    static gameCenter = document.getElementById('gameCenter'); // container for game center (#formeGame, #screenGameCenter)
    static formBox = document.getElementById('formeGame'); // box on the screen to input names and type of the game
    static screenGameCenter = document.getElementById('screenGameCenter'); // box on the screen to infomation
    static errorForme = document.getElementById('errorForme'); // box on the screen to inform the user that there is an error
    static playerOne = document.getElementById('namePlayerOne'); // player name on the screen
    static playerTwo = document.getElementById('namePlayerTwo'); // player name on the screen
    static classicGame = document.getElementById('classicGame'); // classic game mode radio button
    static exclusiveGame = document.getElementById('exclusiveGame'); // exclusive game mode radio button
    static onlineGame = document.getElementById('onlineGame'); // online Game game mode radio button
    static playSameNamesAgain = document.getElementById('playAnother'); // play another game with the same name
    static whoseTurn = document.getElementById('nameTurn'); // who's turn it is
    static popup = document.getElementById('popupWrapper'); // popup container
    static popupBox = document.getElementById('declarWinnerName'); // declar winner name popup
    static tittle = document.getElementById('gameTitle'); // tittle game
    static heartsBoxPlayerOne = document.getElementById('heartsBoxPlayerOne'); // hearts box container player one
    static heartsBoxPlayerTwo = document.getElementById('heartsBoxPlayerTwo'); // hearts box container Player Two
    // board game boxes
    static boxGame01 = document.getElementById('boxGame01');
    static boxGame02 = document.getElementById('boxGame02');
    static boxGame03 = document.getElementById('boxGame03');
    static boxGame04 = document.getElementById('boxGame04');
    static boxGame05 = document.getElementById('boxGame05');
    static boxGame06 = document.getElementById('boxGame06');
    static boxGame07 = document.getElementById('boxGame07');
    static boxGame08 = document.getElementById('boxGame08');
    static boxGame09 = document.getElementById('boxGame09');
    
    static gameBoxArray = ["game position array:", boxGame01, boxGame02, boxGame03, boxGame04, boxGame05, boxGame06, boxGame07, boxGame08, boxGame09]; // array of all game boxes
}

let namePlayerOne = ''; // name of player one
let namePlayerTwo = ''; // name of player two
let namePlayerOneCountWin = 0; // number of wins of player one
let namePlayerTwoCountWin = 0; // number of wins of player two
let playerScreenScore; // score of all games
let playerOneWin = true; // true if player one has won
let playersTurn = true; // whose turn it is
let playersTurnBefore = true; // who's turn it is last game
let thereIsAWinner = false; // true if there is a winner
/* let whoseStart = true; // true if the game is started */
let signPlayerOne = 'X'; // sign of player one on starting game
let signPlayerTwo = 'O'; // sign of player two on starting game
let gameCanStart = false; // true if the game can start
let countTurn = 0; // number of turns to check if there is not a winner when the board is filled
let isPlayerX = true; // whose turn it is
let win = 0; // flag if there is a winner
let countHeartPlayerOne = 3; // number of lives of player one
let countHeartPlayerTwo = 3; // number of lives of player two
let noHeart = '';
let oneHeart = "❤️"; // life of player, shortcut
let twoHeart = "❤️❤️"; // life of player, shortcut
let threeHeart = "❤️❤️❤️"; // life of player, shortcut
let fourHeart = "❤️❤️❤️❤️"; // life of player, shortcut
let flagEachGame;
let flagEatOtherPlayers = false; // flag if one player can eat other players
let signCheck = []; // sign om the cell
let flagStopGame = false; // flag to stop the game on settimeout

let check = [0, 0, 0, 0, 0, 0, 0, 0, 0] // board cell is empty or not
let hearts = [noHeart, oneHeart, twoHeart, threeHeart, fourHeart]; // array of all he

let bombPosition = null;
let heartPosition = null;
