let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;
let preventFlag = false;
let changeToMobile = 0;
const mobileRemoveButton = document.getElementById('mobileRemoveButton');
let mobile = window.matchMedia("(max-width: 470px)")
class AllWebsiteOnresize {
    static allOnresize() {
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        if ((mobile.matches) || (window.innerWidth < 500)) {
            console.log(changeToMobile);
            GameDataBase.screenContainer.style.display = 'none';
            GameDataBase.popGameId.style.display = 'none';
            GameDataBase.timePlayerContainer.style.display = 'none';
            mobileRemoveButton.style.display = 'none';
            preventFlag = true;
            // modeGame
            gameIsExclusive = false;
            // cardsType
            arrayCardType = GameDataBase.imojiArray;
            cardImg = false;
            // selectedColor
            colorBox = 'tomato';
            // changeBoard
            column = 8;
            amount = 16;
            if (changeToMobile == 0) {
                changeToMobile = 1
            }
        } else {
            preventFlag = false;
        }

        if ((changeToMobile == 1)) {
            console.log(changeToMobile);
            PlayTheGame.playGame();
            changeToMobile = 2;
        }
    } 
    
}
/* AllWebsiteOnresize.allOnresize(); */

window.onresize = AllWebsiteOnresize.allOnresize;