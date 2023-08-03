class GameDataBase {
    // game
    static boardId = document.getElementById('boardId'); 
    // popup menu
    static popGameId = document.getElementById('popGameId'); // pop container
    static menuContainer = document.getElementById('menuContainer'); // main container
    // menu pages
    static menuGame = document.getElementById('menuGame'); // game page
    static playersMenu = document.getElementById('playersMenu'); // game players page menu
    static bordSizeMenu = document.getElementById('bordSizeMenu'); // game bord size page menu
    static colorCardGameMenu = document.getElementById('colorCardGameMenu'); // game color card page menu
    static typeCardGameMenu = document.getElementById('typeCardGameMenu'); // game type card page menu
    static gameTypeMenu = document.getElementById('gameTypeMenu'); // game type card page menu
    // game page Id
    static players = document.getElementById('players');
    static bordSize = document.getElementById('bordSize');
    static colorCardGame = document.getElementById('colorCardGame');
    static typeCardGame = document.getElementById('typeCardGame');
    static gameType = document.getElementById('gameType');
    static goPlayIdButton = document.getElementById('goPlayId');
    // game players page menu Id
    static onePlayerGame = document.getElementById('onePlayerGame');
    static playerOne = document.getElementById('playerOne');
    static playerOneBatMan = document.getElementById('playerOneBatMan');
    static playerOneCaptainAmerica = document.getElementById('playerOneCaptainAmerica');
    static playerOnespiderMan = document.getElementById('playerOnespiderMan');
    static playerOnesuperGirl = document.getElementById('playerOnesuperGirl');
    static playerOnesuperMan = document.getElementById('playerOnesuperMan');
    static playerOneThor = document.getElementById('playerOneThor');
    static playerOneCharacterIds = [playerOneBatMan, playerOneCaptainAmerica, playerOnespiderMan, playerOnesuperGirl, playerOnesuperMan, playerOneThor];
    
    static twoPlayerGame = document.getElementById('twoPlayerGame');
    static playerTwo = document.getElementById('playerTwo');
    static playerTwoBatMan = document.getElementById('playerTwoBatMan');
    static playerTwoCaptainAmerica = document.getElementById('playerTwoCaptainAmerica');
    static playerTwospiderMan = document.getElementById('playerTwospiderMan');
    static playerTwosuperGirl = document.getElementById('playerTwosuperGirl');
    static playerTwosuperMan = document.getElementById('playerTwosuperMan');
    static playerTwoThor = document.getElementById('playerTwoThor');
    static playerTwoCharacterIds = [playerTwoBatMan, playerTwoCaptainAmerica, playerTwospiderMan, playerTwosuperGirl, playerTwosuperMan, playerTwoThor];
    // game bord size page menu
    static tinyBoard = document.getElementById('tinyBoard');
    static smallBoard = document.getElementById('smallBoard');
    static mediumBoard = document.getElementById('mediumBoard');
    static largeBoard = document.getElementById('largeBoard');
    static hugeBoard = document.getElementById('hugeBoard');
    static giganticBoard = document.getElementById('giganticBoard');
    static sizeBoardRow = [tinyBoard, smallBoard, mediumBoard, largeBoard, hugeBoard, giganticBoard];
    // game color card page menu
    static tomato = document.getElementById('tomato');
    static yellowgreen = document.getElementById('yellowgreen');
    static steelblue = document.getElementById('steelblue');
    static sandybrown = document.getElementById('sandybrown');
    static crimson = document.getElementById('crimson');
    static deepskyblue = document.getElementById('deepskyblue');
    static darkorange = document.getElementById('darkorange');
    static yellow = document.getElementById('yellow');
    static ColorRows = [tomato, yellowgreen, steelblue, sandybrown, crimson, deepskyblue, darkorange, yellow];
    
    static tomatoBox = document.getElementById('tomatoBox');
    static yellowgreenBox = document.getElementById('yellowgreenBox');
    static steelblueBox = document.getElementById('steelblueBox');
    static sandybrownBox = document.getElementById('sandybrownBox');
    static crimsonBox = document.getElementById('crimsonBox');
    static deepskyblueBox = document.getElementById('deepskyblueBox');
    static darkorangeBox = document.getElementById('darkorangeBox');
    static yellowBox = document.getElementById('yellowBox');
    static ColorBoxs = [tomatoBox, yellowgreenBox, steelblueBox, sandybrownBox, crimsonBox, deepskyblueBox, darkorangeBox, yellowBox];
    // game type card page menu
    static numbersCard = document.getElementById('numbersCard');
    static hebrewCard = document.getElementById('hebrewCard');
    static englishCard = document.getElementById('englishCard');
    static emojiCard = document.getElementById('emojiCard');
    static natureCard = document.getElementById('natureCard');
    static hapoelBeerShevaCard = document.getElementById('hapoelBeerShevaCard');
    static manUtdCard = document.getElementById('manUtdCard');
    static CardTypeGameRows = [numbersCard, hebrewCard, englishCard, emojiCard, natureCard, hapoelBeerShevaCard, manUtdCard];
    
    static numbersCardImg = document.getElementById('numbersCardImg');
    static hebrewCardImg = document.getElementById('hebrewCardImg');
    static englishCardImg = document.getElementById('englishCardImg');
    static emojiCardImg = document.getElementById('emojiCardImg');
    static natureCardImg = document.getElementById('natureCardImg');
    static hapoelBeerShevaCardImg = document.getElementById('hapoelBeerShevaCardImg');
    static manUtdCardImg = document.getElementById('manUtdCardImg');
    static CardTypeGameBoxs = [numbersCardImg, hebrewCardImg, englishCardImg, emojiCardImg, natureCardImg, hapoelBeerShevaCardImg, manUtdCardImg];
    
    // game type card page menu
    static classicGame = document.getElementById('classicGame');
    static exclusiveGame = document.getElementById('exclusiveGame');
    
    // screen Game
    static screenContainer = document.getElementById('screenContainer');
    static playerImgOneContainer = document.getElementById('playerImgOneContainer');
    static playerImgTwoContainer = document.getElementById('playerImgTwoContainer');
    static nameTurn = document.getElementById('nameTurn');
    static resultsScreen = document.getElementById('resultsScreen');
    static playerImgOne = document.getElementById('playerImgOne');
    static playerImgTwo = document.getElementById('playerImgTwo');
    static buttonsContainer = document.getElementById('buttonsContainer');
    static playerOneTime = document.getElementById('playerOneTime');
    static playerTwoTime = document.getElementById('playerTwoTime');
    static errorMessage = document.getElementById('errorMessage');
    static timePlayerContainer = document.getElementById('timePlayerContainer');
    
    static playersCharacter = ["Batman", "Captain America", "Spiderman", "Supergirl", "Superman", "Thor"];
    static characterImg = ["batMan", "captainAmerica", "spiderMan", "superGirl", "superMan", "Thor"];
    static imojiArray = ["🤠", "😎", "🤣", "🤑", "🤓", "🤥", "🤭", "🫣", "🤡", "🤐", "😉", "😴", "🥶", "🤪", "🤨", "🤗", "😵‍💫", "😍", "🥴", "🤯", "🥰"];
    static board = document.querySelector(".board"); // board game

    static numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
    static lattersHebArray = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש"];
    static lattersEngArray = ["A", "B", 'C', "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"];
}
let gameIsExclusive = false;
let characterPlayerOne = GameDataBase.playersCharacter[0];
let characterPlayerTwo = false;
let cardImg = false;
let arrayCardType = GameDataBase.imojiArray;
let timerInterval
let amount = 12; // number of couples cards
let column = 6; // number of columns in the board
let arrayOfBoardCards = [];
let playerTwoDoublePick;
let whoIsFirst = true; // who's player is first in the game
let memoryFirst = false; // whos player start the game last time 

let attamps = 0; // מספר הניסיונות מתחיל באפס
let timer = 0; // טיימר
let colorBox = 'green'; 

let playerOneScore = 0;
let playerTwoScore = 0;
let playerOneScoreWin = 0;
let playerTwoScoreWin = 0;

let win = false;
let anotherTurn = false;

let playerOneTimer = 10;
let playerTwoTimer = 10;
let playersTimerA = 0;
let playersTimerB = 0;
let playerOneNewTime;
let playerTwoNewTime;

let MixEverythingCount = 10;
let MixEverythingBoard = [];

let needToPickPlayerTwo = false;

let natureArray = [];
let hapoelArray = [];
let unitedArray = [];

