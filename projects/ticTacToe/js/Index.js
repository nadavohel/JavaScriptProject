let screenWidth = window.innerWidth;
class Index {

    static allOnresize() {
        if (screenWidth < 470){
            location.reload();
        }
    }
}
// hide player hearts
GameDataBase.heartsBoxPlayerOne.style.opacity = 0;
GameDataBase.heartsBoxPlayerTwo.style.opacity = 0;

window.onresize = Index.allOnresize;