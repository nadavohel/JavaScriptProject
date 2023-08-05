class Move {

    static tryMmove(dir) {
        if (isGameOver) {
            return;
        }
        if (paused === true) {
            DataBase.pauseContainer.style.display = 'none';
            paused = false;
        }
    
        const divs = DataBase.board.querySelectorAll("div");
    
        if (dir == 'up') {
            if (firstMove === false) {
                if ((direction == 'down') || (direction == 'up')) {
                    return;
                }
            }
            firstMove = false
            head -= width;
            if (!divs[head]) {
                head = head + (height * width);
            }
        } else if (dir == 'right') {
            if (firstMove === false) {
                if ((direction == 'left') || (direction == 'right')) {
                    return;
                }
            }
            firstMove = false

            head--;
            if (rightBoundaries.includes(head)) {
                head = head + width;
            }
        } else if (dir == 'down') {
            if (firstMove === false) {
                if ((direction == 'up') || (direction == 'down')) {
                    return;
                }
            }
            firstMove = false
    
            head += width;
            if (!divs[head]) {
                head = head - (height * width);
            }
        } else if (dir == 'left') {
            if (firstMove === false) {
                if ((direction == 'right') || (direction == 'left')) {
                    return;
                }
            }
            firstMove = false
    
            head++;
    
            if (leftBoundaries.includes(head)) {
                head = head - width;
    
            }
        }
    
        if (snake.includes(head)) {
            GameManager.gameOver();
            return;
        }
        if (wallAndSize.includes(head)) {
            GameManager.gameOver();
            return;
        }
    
        direction = dir;
        snake.unshift(head);
    
        if (eatMyFruit.includes(head)) {
            const audio = document.createElement('audio');
            audio.src = "Pebble.ogg";
            audio.volume = 0.2;
            audio.play();
            if (snake.length === 10) {
                speed = DataBase.speed10;
            } else if (snake.length === 20) {
                speed = DataBase.speed20;
            } else if (snake.length === 30) {
                speed = DataBase.speed30;
            }
            points = points + 10;
            document.querySelector(".counter").innerHTML = points;
    
            let index = eatMyFruit.indexOf(head);
            if (index !== -1) {
                eatMyFruit.splice(index, 1);
                const divs = DataBase.board.querySelectorAll("div");
                divs.forEach(el => el.classList.remove('blueberry'));
                for (let i = 0; i < eatMyFruit.length; i++) {
                    divs[eatMyFruit[i]].classList.add('blueberry');
                    divs[eatMyFruit[i]].setAttribute('fruit', fruitType);
                }
            }
            BoardGame.setRandom();
        } else {
            snake.pop();
        }
    
        BoardGame.color();
        GameManager.startAuto();
    }

    static move(dir) {
        if (isGameOver) {
            return;
        }
        if (paused === true) {
            paused = false;
        }
        const divs = DataBase.board.querySelectorAll("div");
    
        if (dir == 'up') {
            if (direction == 'down') {
                return;
            }
    
            head -= width;
    
            if (!divs[head]) {
                head = head + (height * width);
            }
        } else if (dir == 'right') {
            if (direction == 'left') {
                return;
            }
    
            head--;
    
            if (rightBoundaries.includes(head)) {
                head = head + width;
            }
        } else if (dir == 'down') {
            if (direction == 'up') {
                return;
            }
    
            head += width;
    
            if (!divs[head]) {
                head = head - (height * width);
            }
        } else if (dir == 'left') {
            if (direction == 'right') {
                return;
            }
    
            head++;
    
            if (leftBoundaries.includes(head)) {
                head = head - width;
            }
        }
    
        if (snake.includes(head)) {
            GameManager.gameOver();
            return;
        }
    
        if (wallAndSize.includes(head)) {
            GameManager.gameOver();
            return;
        }
    
    
        direction = dir;
        snake.unshift(head);
    
        if (eatMyFruit.includes(head)) {
            const audio = document.createElement('audio');
            audio.src = "Pebble.ogg";
            audio.volume = 0.2;
            audio.play();
            if (snake.length === 10) {
                speed = DataBase.speed10;
            } else if (snake.length === 20) {
                speed = DataBase.speed20;
            } else if (snake.length === 30) {
                speed = DataBase.speed30;
            }
            points = points + 10;
            document.querySelector(".counter").innerHTML = points;
    
            let index = eatMyFruit.indexOf(head);
            if (index !== -1) {
                eatMyFruit.splice(index, 1);
                const divs = DataBase.board.querySelectorAll("div");
                divs.forEach(el => el.classList.remove('blueberry'));
                for (let i = 0; i < eatMyFruit.length; i++) {
                    divs[eatMyFruit[i]].classList.add('blueberry');
                    divs[eatMyFruit[i]].setAttribute('fruit', fruitType);
                }
            }
            BoardGame.setRandom();
        } else {
            snake.pop();
        }
    
        BoardGame.color();
        GameManager.startAuto();
    }

    static moveByMobile(div) {
        switch (div.id) {
            case 'arrowRightMobile': this.tryMmove('right'); break;
            case 'arrowLeftMobile': this.tryMmove('left'); break;
            case 'arrowUpMobile': this.tryMmove('up'); break;
            case 'arrowDownMobile': this.tryMmove('down'); break;
        }
    }
}
