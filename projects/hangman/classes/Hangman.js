class Hangman{
    
    static currentWord;
    static correctLetters; 
    static wrongGuessCount;
    static maxGuesses = 6; // number of guesses

    // starting newe game
    static resetGame = () => {
        // Ressetting game variables and UI elements
        this.correctLetters = []; // resetting the correct letters array
        this.wrongGuessCount = 0; // resetting the wrong guess count
        HangmanDataBase.hangmanImage.src = "images/hangman-0.svg"; // resetting the hangman image
        HangmanDataBase.guessesText.innerText = `${this.wrongGuessCount} / ${this.maxGuesses}`; // resetting the number of guesses on screen
        HangmanDataBase.wordDisplay.innerHTML = this.currentWord.split("").map(() => `<li class="letter"></li>`).join(""); // resetting the word display
        HangmanDataBase.keyboardDiv.querySelectorAll("button").forEach(btn => btn.disabled = false); // resetting the keyboard buttons
        HangmanDataBase.gameModal.classList.remove("show"); // removing all showed latters
        this.initGame(0, "-"); // checking if the word has the - character
    }

    // chosing a random word from the subjects array
    static getRandomWord = () => {
        const { word, hint } = HangmanDataBase.subjects[Math.floor(Math.random() * HangmanDataBase.subjects.length)];
        this.currentWord = word; // Making currentWord as random word
        document.querySelector(".hintText b").innerText = hint;
        this.resetGame(); // call the resetGame function
    }

    // if game is finishing then call the getRandomWord function
    static gameOver = (isVictory) => {
        // what happens if the user won the game or lost the game
        const modalText = isVictory ? `You found the word:` : 'The correct word was:';
        HangmanDataBase.gameModal.querySelector("img").src = `images/${isVictory ? 'victory' : 'lost'}.gif`; 
        HangmanDataBase.gameModal.querySelector("h4").innerText = isVictory ? 'Congrats!' : 'Game Over!';
        HangmanDataBase.gameModal.querySelector("p").innerHTML = `${modalText} <b>${this.currentWord}</b>`;
        HangmanDataBase.gameModal.classList.add("show");
    }

    static initGame = (button, clickedLetter) => {
        // Checking if clickedLetter is exist on the currentWord
        if (this.currentWord.includes(clickedLetter)) {
            // Showing all correct letters on the word display
            [...this.currentWord].forEach((letter, index) => {
                if (letter === clickedLetter) {
                    this.correctLetters.push(letter);
                    HangmanDataBase.wordDisplay.querySelectorAll("li")[index].innerText = letter;
                    HangmanDataBase.wordDisplay.querySelectorAll("li")[index].classList.add("guessed");
                }
            });
            if (clickedLetter == "-") {
                return;
            }
        } else {
            // If clicked letter doesn't exist then update the wrongGuessCount and hangman image
            this.wrongGuessCount++;
            HangmanDataBase.hangmanImage.src = `images/hangman-${this.wrongGuessCount}.svg`;
        }
        if (clickedLetter == "-") {
            return;
        }
        button.disabled = true; // Disabling the clicked button so user can't click again
        HangmanDataBase.guessesText.innerText = `${this.wrongGuessCount} / ${this.maxGuesses}`;
        // Treatment of final letters
        if (clickedLetter == "כ") {
            this.wrongGuessCount--;
            HangmanDataBase.hangmanImage.src = `images/hangman-${this.wrongGuessCount}.svg`;
            this.initGame(button, "ך");
        } else if (clickedLetter == "מ") {
            this.wrongGuessCount--;
            HangmanDataBase.hangmanImage.src = `images/hangman-${this.wrongGuessCount}.svg`;
            this.initGame(button, "ם");
        } else if (clickedLetter == "נ") {
            this.wrongGuessCount--;
            HangmanDataBase.hangmanImage.src = `images/hangman-${this.wrongGuessCount}.svg`;
            this.initGame(button, "ן");
        } else if (clickedLetter == "פ") {
            this.wrongGuessCount--;
            HangmanDataBase.hangmanImage.src = `images/hangman-${this.wrongGuessCount}.svg`;
            this.initGame(button, "ף");
        } else if (clickedLetter == "צ") {
            this.wrongGuessCount--;
            HangmanDataBase.hangmanImage.src = `images/hangman-${this.wrongGuessCount}.svg`;
            this.initGame(button, "ץ");
        } else {
            // Calling gameOver function if any of these condition meets
            if (this.wrongGuessCount === this.maxGuesses) return this.gameOver(false);
            if (this.correctLetters.length === this.currentWord.length) return this.gameOver(true);
        }
    }
}

const startPlay = new Hangman;