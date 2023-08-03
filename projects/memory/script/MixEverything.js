class MixEverything {
    static MixEverything() {
        for (let i = 1; i <= (amount * 2); i++) {
            const a = document.getElementById(`boxit${i}`);
            MixEverythingBoard.push(a);
        }

        for (let i = 1; i <= (amount * 2); i++) {
            const rand = Math.floor(Math.random() * (MixEverythingBoard.length));
            MixEverythingBoard[rand].style.order = i;
            MixEverythingBoard.splice(rand, 1);
        }
        MixEverythingCount = 10;
    }
}