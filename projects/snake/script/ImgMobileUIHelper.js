class ImgMobileUIHelper {

    static printArrosMobileOnScreen() {
        for (let arrow of ImgMobileDataBase.allArrows) {
            arrowContainer.innerHTML += createMobilesArrows(arrow.ids, arrow.url, arrow.alt, arrow.direction);
        }
    }
}

ImgMobileUIHelper.printArrosMobileOnScreen();
