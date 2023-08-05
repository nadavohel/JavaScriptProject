let timerInterval = setInterval(() => {
    if (paused === false) {
        timer++;

        const date = new Date(timer * 1000);
        const m = date.getMinutes();
        const s = date.getSeconds();

        document.querySelector('.timer').innerHTML = `${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`;
    }
}, 1000);

window.addEventListener("keydown", ev => {
    ev.preventDefault();
    switch (ev.key) {
        case 'ArrowUp': Move.tryMmove('up'); break;
        case 'ArrowRight': Move.tryMmove('right'); break;
        case 'ArrowDown': Move.tryMmove('down'); break;
        case 'ArrowLeft': Move.tryMmove('left'); break;
        case ' ': GameManager.pause(); break;
    }
});
