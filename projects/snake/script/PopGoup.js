class PopGoup {

    static popGoupRun() {
        DataBase.popup.style.display = 'block';
        setTimeout(() => {
            location.reload();
        }, 3 * 1000);
    }
}

