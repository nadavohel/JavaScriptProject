class HangmanDataBase {
    static wordDisplay = document.querySelector(".wordDisplay"); // latters container
    static guessesText = document.querySelector(".guessesText b"); // present the number of guesses
    static keyboardDiv = document.querySelector(".keyboard"); // all the buttons on the keyboard container
    static hangmanImage = document.querySelector(".hangmanBox img"); // present the hangman image 
    static gameModal = document.querySelector(".gameModal"); // end game modal and start a new game
    static playAgainBtn = this.gameModal.querySelector("button"); // keyboard latter button
    
    static subjects = WordList.questions;
    // Creating keyboard buttons and adding event listeners
    static hebrewLetters = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ל", "מ", "נ", "ס", "ע", "פ", "צ", "ק", "ר", "ש", "ת"];
    
    static changeSubject(subject) {
        this.subjects = subject;
        Hangman.getRandomWord();
    }
}