
class AllWebsiteOnresize {
    static allOnresize() {
        screenWidth = window.innerWidth;

        if (screenWidth < 600) {
            DataBase.arrowContainer.style.opacity = 1;
        } else {
            DataBase.arrowContainer.style.opacity = 1;
        }
    } 
    
}

window.onresize = AllWebsiteOnresize.allOnresize;