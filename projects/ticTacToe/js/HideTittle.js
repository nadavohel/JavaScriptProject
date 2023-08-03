class HideTittle {
    // hide game tittle
    static hideTittle(x) {
        GameDataBase.tittle.style.display = "none";
    }
    // show game tittle
    static showTittle(x) {
        GameDataBase.tittle.style.display = "block";
    }
    // reduce game tittle
    static ReduceTitle(x) {
        GameDataBase.tittle.style.transition = "all 0.5s";
        GameDataBase.tittle.style.fontSize = "4em";
        GameDataBase.tittle.style.top = "120px";
    }
    // increase game tittle
    static IncreaseTitle(x) {
        GameDataBase.tittle.style.transition = "all 0.5s";
        GameDataBase.tittle.style.fontSize = "6em";
        GameDataBase.tittle.style.top = "70px";
    }
}