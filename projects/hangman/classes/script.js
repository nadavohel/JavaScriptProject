for (let i = 0; i < HangmanDataBase.hebrewLetters.length; i++) {
    // Creating a button and adding the latters
    const button = document.createElement("button");
    button.innerText = HangmanDataBase.hebrewLetters[i];
    HangmanDataBase.keyboardDiv.appendChild(button);
    // creating an event listener for the button to call the initGame function whit data from the button
    button.addEventListener("click", (e) => Hangman.initGame(e.target, HangmanDataBase.hebrewLetters[i]));
}
// Calling the getRandomWord function on the first time
Hangman.getRandomWord();
// Adding event listeners to the playAgainBtn
HangmanDataBase.playAgainBtn.addEventListener("click", Hangman.getRandomWord);