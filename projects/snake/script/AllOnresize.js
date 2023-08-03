let screenWidth = window.innerWidth;
let mobile = window.matchMedia("(max-width: 470px)")
class AllWebsiteOnresize {
    static allOnresize() {
        screenWidth = window.innerWidth;

        if (screenWidth < 600) {
            arrowContainer.style.opacity = 1;
        } else {
            arrowContainer.style.opacity = 0;
        }
    } 
    
}

window.onresize = AllWebsiteOnresize.allOnresize;