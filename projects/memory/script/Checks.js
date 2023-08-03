class Checks {
    // בודקת עם יש התאמה
    static check() {

        if (win == true) {
            return
        }
        const cards = GameDataBase.board.querySelectorAll(".showing");
        if (cardImg == false) {
            // אם שתי קלפים חסופים
            if (cards.length == 2) {
                const first = cards[0];
                const last = cards[1];
                // תעלה את מספר הנסיונות
                document.querySelector(".counter").innerHTML = ++attamps;
                // אם קלף ראשון שווה לקלף שני
                if (first.textContent == last.textContent) {
                    // תסיר אותם
                    setTimeout(() => {
                        if (win == true) {
                            return
                        }
                        first.classList.remove("showing");
                        last.classList.remove("showing");

                        first.classList.add("hidden");
                        last.classList.add("hidden");

                        if (characterPlayerTwo != false) {
                            playersTimerA = 0;
                            playersTimerB = 0;
                            if (whoIsFirst) {
                                playerOneScore++;
                                if (playerTwoTimer < 15) {
                                    playerOneTimer++;
                                }
                            } else {
                                playerTwoScore++;
                                if (playerTwoTimer < 15) {
                                    playerTwoTimer++;
                                }
                            }
                            anotherTurn = true;
                            GameDataBase.resultsScreen.innerHTML = `${playerOneScore} - ${playerTwoScore}`;

                            if (gameIsExclusive) {
                                if (playerOneTimer > 9) {
                                    GameDataBase.playerOneTime.innerHTML = `00:${playerOneTimer}`;
                                } else {
                                    GameDataBase.playerOneTime.innerHTML = `00:0${playerOneTimer}`;
                                }
                                if (playerTwoTimer > 9) {
                                    GameDataBase.playerTwoTime.innerHTML = `00:${playerTwoTimer}`;
                                } else {
                                    GameDataBase.playerTwoTime.innerHTML = `00:0${playerTwoTimer}`;
                                }
                                GameDataBase.nameTurn.style.color = 'white';
                                GameDataBase.resultsScreen.style.color = 'white';
                            }
                        }
                        // תבדוק אם יש ניצחון
                        Checks.checkIsComplete();
                    }, 1000);
                } else {
                    // במידה ואין התאמה תהפוך אותם חזרה
                    setTimeout(() => {
                        first.classList.remove("showing");
                        last.classList.remove("showing");
                    }, 1500);
                    Checks.checkIsComplete();
                }
            }
        } else {
            // אם שתי קלפים חסופים
            if (cards.length == 4) {
                const firstone = cards[0];
                const firsttwo = cards[1];
                const lastone = cards[2];
                const lasttwo = cards[3];
                // תעלה את מספר הנסיונות
                document.querySelector(".counter").innerHTML = ++attamps;
                // אם קלף ראשון שווה לקלף שני
                if (firsttwo.src == lasttwo.src) {

                    // תסיר אותם
                    setTimeout(() => {
                        firstone.classList.remove("showing");
                        firsttwo.classList.remove("showing");
                        lastone.classList.remove("showing");
                        lasttwo.classList.remove("showing");

                        firstone.classList.add("hidden");
                        firsttwo.classList.add("hidden");
                        lastone.classList.add("hidden");
                        lasttwo.classList.add("hidden");

                        if (characterPlayerTwo != false) {
                            playersTimerA = 0;
                            playersTimerB = 0;
                            if (whoIsFirst) {
                                playerOneScore++;
                                if (playerTwoTimer < 15) {
                                    playerOneTimer++;
                                }
                            } else {
                                playerTwoScore++;
                                if (playerTwoTimer < 15) {
                                    playerTwoTimer++;
                                }
                            }
                            anotherTurn = true;
                            GameDataBase.resultsScreen.innerHTML = `${playerOneScore} - ${playerTwoScore}`;
                            if (gameIsExclusive) {
                                if (playerOneTimer > 9) {
                                    GameDataBase.playerOneTime.innerHTML = `00:${playerOneTimer}`;
                                } else {
                                    GameDataBase.playerOneTime.innerHTML = `00:0${playerOneTimer}`;
                                }
                                if (playerTwoTimer > 9) {
                                    GameDataBase.playerTwoTime.innerHTML = `00:${playerTwoTimer}`;
                                } else {
                                    GameDataBase.playerTwoTime.innerHTML = `00:0${playerTwoTimer}`;
                                }
                                GameDataBase.nameTurn.style.color = 'white';
                                GameDataBase.resultsScreen.style.color = 'white';
                            }
                        }
                        // תבדוק אם יש ניצחון
                        Checks.checkIsComplete();
                    }, 1000);
                } else {
                    // במידה ואין התאמה תהפוך אותם חזרה
                    setTimeout(() => {
                        firstone.classList.remove("showing");
                        firsttwo.classList.remove("showing");
                        lastone.classList.remove("showing");
                        lasttwo.classList.remove("showing");
                    }, 1500);
                    Checks.checkIsComplete();
                }
            }
        }

    }
    // אם סיימת קונפטי
    static checkIsComplete() {
        const cards = GameDataBase.board.querySelectorAll("div:not(.hidden)");

        if (!cards.length) {
            if (characterPlayerTwo != false) {
                win = true;
                if (playerOneScore > playerTwoScore) {
                    playerOneScoreWin++
                } else if (playerOneScore < playerTwoScore) {
                    playerTwoScoreWin++
                }
                GameDataBase.resultsScreen.innerHTML = `${playerOneScoreWin} - ${playerTwoScoreWin}`;
                GameDataBase.resultsScreen.style.width = '300px'
                GameDataBase.resultsScreen.style.right = '50%';
                GameDataBase.resultsScreen.style.left = '';
                GameDataBase.resultsScreen.style.transform = 'translate(50%)';
                GameDataBase.resultsScreen.style.fontSize = '6em';
                GameDataBase.resultsScreen.style.top = '60px';

                GameDataBase.playerImgOneContainer.style.opacity = '1';
                GameDataBase.playerImgTwoContainer.style.opacity = '1';
                GameDataBase.nameTurn.style.opacity = '0';
            }

            clearInterval(PlayTheGame.timerInterval);

            confetti({
                particleCount: 100,
                spread: 70,
                decay: 0.9,
                origin: { y: 0.6 }
            });
        }
        else {
            if (characterPlayerTwo != false) {
                playersTimerA = 0;
                playersTimerB = 0;
                if (anotherTurn == false) {
                    if (whoIsFirst) {
                        GameDataBase.playerImgOneContainer.style.opacity = '0';
                        GameDataBase.playerImgTwoContainer.style.opacity = '1';
                        GameDataBase.nameTurn.innerHTML = characterPlayerTwo;
                        GameDataBase.nameTurn.style.left = '';
                        GameDataBase.nameTurn.style.right = '0';
                        GameDataBase.resultsScreen.style.left = '';
                        GameDataBase.resultsScreen.style.right = '0';
                        if (gameIsExclusive) {
                            GameDataBase.playerOneTime.style.opacity = "0";
                            GameDataBase.playerTwoTime.style.opacity = "1";
                            if (playerOneTimer > 5) {
                                playerOneTimer--;
                            }
                        }
                    } else {
                        GameDataBase.playerImgOneContainer.style.opacity = '1';
                        GameDataBase.playerImgTwoContainer.style.opacity = '0';
                        GameDataBase.nameTurn.innerHTML = characterPlayerOne;
                        GameDataBase.nameTurn.style.left = '0';
                        GameDataBase.nameTurn.style.right = '';
                        GameDataBase.resultsScreen.style.left = '0';
                        GameDataBase.resultsScreen.style.right = '';
                        if (gameIsExclusive) {
                            GameDataBase.playerOneTime.style.opacity = "1";
                            GameDataBase.playerTwoTime.style.opacity = "0";
                            if (playerTwoTimer > 5) {
                                playerTwoTimer--;
                            }
                        }
                    }
                    GameDataBase.nameTurn.style.color = 'white';
                    GameDataBase.resultsScreen.style.color = 'white';
                }
                if (anotherTurn == false) {
                    whoIsFirst = !whoIsFirst;
                    if (MixEverythingCount == 0) {
                        MixEverything.MixEverything()
                    } else {
                        MixEverythingCount--;
                    }
                }
                anotherTurn = false

            }
        }
        if (gameIsExclusive) {
            if (playerOneTimer > 9) {
                GameDataBase.playerOneTime.innerHTML = `00:${playerOneTimer}`;
            } else {
                GameDataBase.playerOneTime.innerHTML = `00:0${playerOneTimer}`;
            }
            if (playerTwoTimer > 9) {
                GameDataBase.playerTwoTime.innerHTML = `00:${playerTwoTimer}`;
            } else {
                GameDataBase.playerTwoTime.innerHTML = `00:0${playerTwoTimer}`;
            }
        }

    }

}