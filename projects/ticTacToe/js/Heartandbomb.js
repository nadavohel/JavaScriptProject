class Heartandbomb {
    static puthBombAndHearts(){
        if ((gameCanStart === false) || (GameDataBase.classicGame.checked)) {
            return
        }
        let bomb = Math.floor(Math.random() * 9);
        let bombImg = document.createElement("img");
        bombImg.src = "images/bomb.png";
        GameDataBase.gameBoxArray[bomb+1].appendChild(bombImg);
        bombImg.style.width = "65px"; 
        bombImg.style.marginTop = "-20px";  
        bombImg.style.opacity = "0";
        let heart = Math.floor(Math.random() * 9);
        for (let i = 0; i < Infinity; i++){
            if (heart == bomb){
                heart = Math.floor(Math.random() * 9);
            } else {
                break;
            }
        }
        bombPosition = bomb;
        heartPosition = heart;
    } 

}

Heartandbomb.puthBombAndHearts();