
class GameManager {

    static gameOver() {
        isGameOver = true;
        clearInterval(interval);

        const audio = document.createElement('audio');
        audio.src = "Country_Blues.ogg";
        audio.volume = 0.1;
        audio.play();

        setTimeout(() => {
            PopGoup.popGoupRun()
        }, 200);
    }

    static startAuto() {
        clearInterval(interval);
        interval = setInterval(() => Move.move(direction), speed * 1000);
    }

    static pause(){
        if (paused === false) {
            clearInterval(interval);
            firstMove = true;
            paused = true;
            DataBase.pauseContainer.style.display = 'block';
        } else if (paused === true) {
            paused = false;
            Move.tryMmove(direction);
            DataBase.pauseContainer.style.display = 'none';
        }
    }
}

