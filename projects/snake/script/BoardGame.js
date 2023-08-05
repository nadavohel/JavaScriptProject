class BoardGame {
    
    static updateBoard() {
        // גבולות ימין
        for (let i = 0; i < height; i++) {
            rightBoundaries.push(i * width - 1);
        }

        // גבולות שמאל
        for (let i = 1; i <= height; i++) {
            leftBoundaries.push((i * width));
        }

        this.createBoard()
    }

    static createBoard() {
        for (let i = 0; i < width * height; i++) {
            const div = document.createElement("div");
            DataBase.board.appendChild(div);
            div.innerHTML = i;
            if (wallAndSize.includes(i)) {
                div.style.backgroundColor = "white";
            }
        }
        DataBase.board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

        const divHeadContainer = document.createElement("div");
        DataBase.headContainer.appendChild(divHeadContainer);
        divHeadContainer.style.width = `${width * 15}px`;
        divHeadContainer.style.height = `${height * 15 - 15}px`;
        DataBase.headContainer.style.visibility = "visible";
        this.color();
        this.setRandom();
    }
    
    static color() {

        const divs = DataBase.board.querySelectorAll("div");

        if (direction === 'left') {
            DataBase.headFeake.style.right = `${calcHeadLeft}px`;
            DataBase.headFeake.style.width = `1px`;
            DataBase.headFeake.style.height = `15px`;
        } else if (direction === 'right') {
            DataBase.headFeake.style.right = `${calcHeadLeft + 15}px`;
            DataBase.headFeake.style.width = `1px`;
            DataBase.headFeake.style.height = `15px`;
        } else if (direction === 'up') {
            DataBase.headFeake.style.top = `${calcHeadTop + 15}px`;
            DataBase.headFeake.style.right = `${calcHeadLeft}px`;
            DataBase.headFeake.style.height = `1px`;
            DataBase.headFeake.style.width = `15px`;
            DataBase.headFeake.style.marginTop = `15px`;
        } else if (direction === 'down') {
            DataBase.headFeake.style.top = `${calcHeadTop - 15}px`;
            DataBase.headFeake.style.right = `${calcHeadLeft}px`;
            DataBase.headFeake.style.height = `1px`;
            DataBase.headFeake.style.width = `15px`;
            DataBase.headFeake.style.marginTop = `-15px`;
        }

        divs.forEach(el => el.classList.remove('snake', 'head', 'up', 'right', 'down', 'left'));
        DataBase.headFeake.classList.remove('up', 'right', 'down', 'left');
        divs.forEach(el => el.innerHTML = '');
        snake.forEach(num => divs[num].classList.add('snake'));

        divs[head].classList.add('head', direction);
        DataBase.headFeake.classList.add('head', direction);

        for (let i = 1; i < snake.length; i++) {
            divs[snake[i]].innerHTML = '🟨'
            divs[snake[i]].innerHTML = snakeBody;
        }

        calcHeadTop = Math.floor(head / height);
        calcHeadTop = calcHeadTop * 15;

        calcHeadLeft = (((head - ((calcHeadTop / 15) * height)) * 15));


        DataBase.headFeake.style.top = `${calcHeadTop}px`;
        DataBase.headFeake.style.right = `${calcHeadLeft}px`;

        if (direction === 'left') {
            DataBase.headFeake.style.width = `15px`;
        } else if (direction === 'right') {
            DataBase.headFeake.style.width = `15px`;
        } else if (direction === 'up') {
            DataBase.headFeake.style.top = `${calcHeadTop}px`;
            DataBase.headFeake.style.height = `15px`;
            DataBase.headFeake.style.marginTop = `0px`;
        } else if (direction === 'down') {
            DataBase.headFeake.style.top = `${calcHeadTop}px`;
            DataBase.headFeake.style.height = `15px`;
            DataBase.headFeake.style.marginTop = `0px`;
        }

    }

    static setRandom() {
        if (eatMyFruit.length == 0) {
            const divs = DataBase.board.querySelectorAll("div");
            divs.forEach(el => el.classList.remove('blueberry'));

            for (let i = 0; i < fruitAmount; i++) {
                random = Math.floor(Math.random() * (width * height));

                if (snake.includes(random)) {
                    i--;
                } else if (wallAndSize.includes(random)) {
                    i--;
                } else {
                    eatMyFruit.push(random);
                    divs[random].classList.add('blueberry');
                    divs[random].setAttribute('fruit', fruitType);
                }
            }
        }

    }
}
