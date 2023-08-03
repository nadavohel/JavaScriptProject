class Popup {
    // popup display block function
    static popupJump() {
        GameDataBase.popup.style.display = "block";
    }
    // Popup display none function
    static popupClose() {
        GameDataBase.popup.style.display = "none";
        // update score on screen
        playerScreenScore.innerHTML = `${namePlayerOneCountWin} - ${namePlayerTwoCountWin}`;
        // Reset hearts for each player
        countHeartPlayerOne = 3;
        countHeartPlayerTwo = 3;
        GameDataBase.heartsBoxPlayerOne.innerHTML = threeHeart;
        GameDataBase.heartsBoxPlayerTwo.innerHTML = threeHeart;
    }

}