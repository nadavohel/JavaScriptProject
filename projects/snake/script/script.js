let height = 20;
let width = 20;

const headContainer = document.getElementById('headContainer');
const headFeake = document.getElementById('headTransition');
const pauseContainer = document.getElementById('pauseContainer');

const snake = [5, 4, 3, 2, 1, 0];
let head = snake[0];

let isGameOver = false;
let direction = 'left';
let interval;
let random;
let calcHeadTop;
let calcHeadLeft;
let firstMove = true;
let speed = 0.2;
let timer = 0;
let paused = true;
let points = 0;
let fruitType = '🫐';
let snakeBody = "🔵";
let fruitAmount = 1;
let eatMyFruit = [];

const board = document.querySelector('.board');

const rightBoundaries = [];
const leftBoundaries = [];
function updateBoard() {
    /* headContainer.innerHTML = ''; */
    /* board.innerHTML = ''; */
    // גבולות ימין
    for (let i = 0; i < height; i++) {
        rightBoundaries.push(i * width - 1);
    }
    
    // גבולות שמאל
    for (let i = 1; i <= height; i++) {
        leftBoundaries.push((i * width));
    }
    
    createBoard()
}

function createBoard() {
    for (let i = 0; i < width * height; i++) {
        const div = document.createElement("div");
        board.appendChild(div);    
        div.innerHTML = i;
        if (wallAndSize.includes(i)) {
            div.style.backgroundColor = "white";
        }
    }
    board.style.gridTemplateColumns = `repeat(${width}, 1fr)`;

    const divHeadContainer = document.createElement("div");
    headContainer.appendChild(divHeadContainer);
    divHeadContainer.style.width = `${width*15}px`;
    divHeadContainer.style.height = `${height*15-15}px`;
    headContainer.style.visibility = "visible";
    color();
    setRandom();
}
let timerInterval = setInterval(() => {
    if (paused === false) {
        timer++;

        const date = new Date(timer * 1000);
        const m = date.getMinutes();
        const s = date.getSeconds();

        document.querySelector('.timer').innerHTML = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }
}, 1000);

function color() {
    
    const divs = board.querySelectorAll("div");
    
    
    if (direction === 'left') {
        headFeake.style.right = `${calcHeadLeft}px`;
        headFeake.style.width = `1px`;
        headFeake.style.height = `15px`;
    } else if (direction === 'right') {
        headFeake.style.right = `${calcHeadLeft + 15}px`;
        headFeake.style.width = `1px`;
        headFeake.style.height = `15px`;
    } else if (direction === 'up') {
        headFeake.style.top = `${calcHeadTop + 15}px`;
        headFeake.style.right = `${calcHeadLeft}px`;
        headFeake.style.height = `1px`;
        headFeake.style.width = `15px`;
        headFeake.style.marginTop = `15px`;
    } else if (direction === 'down') {
        headFeake.style.top = `${calcHeadTop-15}px`;
        headFeake.style.right = `${calcHeadLeft}px`;
        headFeake.style.height = `1px`;
        headFeake.style.width = `15px`;
        headFeake.style.marginTop = `-15px`;
    }
    divs.forEach(el => el.classList.remove('snake', 'head', 'up', 'right', 'down', 'left'));
    headFeake.classList.remove('up', 'right', 'down', 'left');
    divs.forEach(el => el.innerHTML = '');
    snake.forEach(num => divs[num].classList.add('snake'));
    
    divs[head].classList.add('head', direction);
    headFeake.classList.add('head', direction);
    
    for (let i = 1; i < snake.length; i++) {
        divs[snake[i]].innerHTML = '🟨'
        divs[snake[i]].innerHTML = snakeBody;
    }

    calcHeadTop = Math.floor(head / height);
    calcHeadTop = calcHeadTop * 15;
    
    calcHeadLeft = (((head - ((calcHeadTop / 15) * height)) * 15));
    
    
    headFeake.style.top = `${calcHeadTop}px`;
    headFeake.style.right = `${calcHeadLeft}px`;
    
    if (direction === 'left') {
        headFeake.style.width = `15px`;
    } else if (direction === 'right') {
        headFeake.style.width = `15px`;
    } else if (direction === 'up') {
        headFeake.style.top = `${calcHeadTop}px`;
        headFeake.style.height = `15px`;
        headFeake.style.marginTop = `0px`; 
    } else if (direction === 'down') {
        headFeake.style.top = `${calcHeadTop}px`;
        headFeake.style.height = `15px`;
        headFeake.style.marginTop = `0px`; 
    }

}

window.addEventListener("keydown", ev => {
    ev.preventDefault();
    switch (ev.key) {
        case 'ArrowUp': tryMmove('up'); break;
        case 'ArrowRight': tryMmove('right'); break;
        case 'ArrowDown': tryMmove('down'); break;
        case 'ArrowLeft': tryMmove('left'); break;
        case ' ': pause(); break;
    }
});

function pause(){
    if (paused === false) {
        clearInterval(interval);
        firstMove = true;
        paused = true;
        pauseContainer.style.display = 'block';
    } else if (paused === true) {
        paused = false;
        tryMmove(direction);
        pauseContainer.style.display = 'none';
    }
}

function tryMmove(dir) {
    if (isGameOver) {
        return;
    }
    if (paused === true) {
        pauseContainer.style.display = 'none';
        paused = false;
    }

    const divs = board.querySelectorAll("div");

    if (dir == 'up') {
        if (firstMove === false) {
            if ((direction == 'down') || (direction == 'up')) {
                return;
            }
        }
        firstMove = false
        head -= width;
        if (!divs[head]) {
            head = head + (height*width);
        }
    } else if (dir == 'right')  {
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
        gameOver();
        return;
    }
    if (wallAndSize.includes(head)) {
        gameOver();
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
            speed = 0.15;
        } else if (snake.length === 20) {
            speed = 0.1;
        } else if (snake.length === 30) {
            speed = 0.07;
        }
        points = points + 10;
        document.querySelector(".counter").innerHTML = points;
        
        let index = eatMyFruit.indexOf(head); 
        if (index !== -1) {
            eatMyFruit.splice(index, 1);
            const divs = board.querySelectorAll("div");
            divs.forEach(el => el.classList.remove('blueberry'));
            for (let i = 0; i < eatMyFruit.length; i++){
                divs[eatMyFruit[i]].classList.add('blueberry');
                divs[eatMyFruit[i]].setAttribute('fruit', fruitType);
            }
        }
        setRandom();
    } else {
        snake.pop();
    }
    
    color();
    startAuto();
}

function startAuto() {
    clearInterval(interval);
    interval = setInterval(() => move(direction), speed * 1000);
}

function setRandom() {
    if (eatMyFruit.length == 0) {
        const divs = board.querySelectorAll("div");
        divs.forEach(el => el.classList.remove('blueberry'));
        /* divs.forEach(el => el.classList.remove('blueberry')); */
        
        for (let i = 0; i < fruitAmount; i++) {
            random = Math.floor(Math.random() * (width * height));
            
            if (snake.includes(random)) {
                i--;
            } else if (wallAndSize.includes(random)) {
                i--;
            } else {
                eatMyFruit.push(random);
                divs[random].classList.add('blueberry');
                divs[random].setAttribute('fruit' , fruitType);
            }
        }
    } 
    
}
function gameOver() {
    isGameOver = true;
    clearInterval(interval);

const audio = document.createElement('audio');
audio.src = "Country_Blues.ogg";
audio.volume = 0.1;
audio.play();

    setTimeout(() => {
        popGoup()
    }, 200);
}

function move(dir) {
    if (isGameOver) {
        return;
    }
    if (paused === true) {
        paused = false;
    }
    const divs = board.querySelectorAll("div");

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
            head = head-width;
        }
    }

    if (snake.includes(head)) {
        gameOver();
        return;
    } 

    if (wallAndSize.includes(head)) {
        gameOver();
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
            speed = 0.15;
        } else if (snake.length === 20) {
            speed = 0.1;
        } else if (snake.length === 30) {
            speed = 0.07;
        }
        points = points + 10;
        document.querySelector(".counter").innerHTML = points;

        let index = eatMyFruit.indexOf(head);
        if (index !== -1) {
            eatMyFruit.splice(index, 1);
            const divs = board.querySelectorAll("div");
            divs.forEach(el => el.classList.remove('blueberry'));
            for (let i = 0; i < eatMyFruit.length; i++) {
                divs[eatMyFruit[i]].classList.add('blueberry');
                divs[eatMyFruit[i]].setAttribute('fruit', fruitType);
            }
        }
        setRandom();
    } else {
        snake.pop();
    }

    color();
    startAuto();
}


function moveByMobile(div) {
    switch (div.id) {
        case 'arrowRightMobile': tryMmove('right'); break;
        case 'arrowLeftMobile': tryMmove('left'); break;
        case 'arrowUpMobile': tryMmove('up'); break;
        case 'arrowDownMobile': tryMmove('down'); break;
    }
}
