const imgStart = document.getElementById('imgStart');
const imageGalleryRightMedium = document.getElementById('imageGalleryRightMedium');
const imageGalleryRight = document.getElementById('imageGalleryRight');
const imageGalleryRightSkew = document.getElementById('imageGalleryRightSkew');
const imageGalleryCenter = document.getElementById('imageGalleryCenter');
const imageGalleryLeftSkew = document.getElementById('imageGalleryLeftSkew');
const imageGalleryLeft = document.getElementById('imageGalleryLeft');
const imageGalleryLeftMedium = document.getElementById('imageGalleryLeftMedium');
const imgEnd = document.getElementById('imgEnd');
const carouselImages = [
    "./images/projects/toDoList/toDoList04.jpg", "./images/projects/memory/memory02.jpg", "./images/projects/mardiGras/mardiGras03.jpg", "./images/projects/toDoList/toDoList05.jpg", "./images/projects/calculator/calculator04.jpg", "./images/projects/gallery/gallery02.jpg", "./images/projects/gallery/gallery05.jpg", "./images/projects/hangman/hangman03.jpg", "./images/projects/memory/memory04.jpg", "./images/projects/shoppingCard/shoppingCard03.jpg", "./images/projects/snake/snake02.jpg", "./images/projects/tocTacToe/tocTacToe03.jpg", "./images/projects/toDoList/toDoList03.jpg", "./images/projects/toDoList/toDoList01.jpg"
];
const carouselIds = [
    imageGalleryRightMedium, imageGalleryRight, imageGalleryRightSkew, imageGalleryCenter, imageGalleryLeftSkew, imageGalleryLeft, imageGalleryLeftMedium
];

let carouselCount = 7;
let positionsImage01 = carouselImages[6];
let positionsImage02 = carouselImages[5];
let positionsImage03 = carouselImages[4];
let positionsImage04 = carouselImages[3];
let positionsImage05 = carouselImages[2];
let positionsImage06 = carouselImages[1];
let positionsImage07 = carouselImages[0];

carouselIds[6].src = positionsImage01;
carouselIds[5].src = positionsImage02;
carouselIds[4].src = positionsImage03;
carouselIds[2].src = positionsImage04;
carouselIds[3].src = positionsImage05;
carouselIds[1].src = positionsImage06;
carouselIds[0].src = positionsImage07;

function aa(){
    timerInterval = setInterval(() => {
        
        positionsImage07 = positionsImage06;
        positionsImage06 = positionsImage05;
        positionsImage05 = positionsImage04;
        positionsImage04 = positionsImage03;
        positionsImage03 = positionsImage02;
        positionsImage02 = positionsImage01;
        positionsImage01 = carouselImages[carouselCount];

        carouselIds[0].src = positionsImage01;
        carouselIds[1].src = positionsImage02;
        carouselIds[2].src = positionsImage03;
        carouselIds[3].src = positionsImage04;
        carouselIds[4].src = positionsImage05;
        carouselIds[5].src = positionsImage06;
        carouselIds[6].src = positionsImage07;

        carouselCount++;
        if (carouselCount == carouselImages.length){
            carouselCount=0;
        }
    }, 500);
}
aa();

function myStopFunction() {
    clearInterval(timerInterval);
}

function goRightPic() {
    let lastImage = carouselCount;
    if (carouselCount < 8) {
        lastImage = carouselImages.length - (8 - carouselCount)
    } else {
        lastImage = lastImage - 8; 
    }
    positionsImage01 = positionsImage02;
    positionsImage02 = positionsImage03;
    positionsImage03 = positionsImage04;
    positionsImage04 = positionsImage05;
    positionsImage05 = positionsImage06;
    positionsImage06 = positionsImage07;
    positionsImage07 = carouselImages[lastImage];

    carouselIds[0].src = positionsImage01;
    carouselIds[1].src = positionsImage02;
    carouselIds[2].src = positionsImage03;
    carouselIds[3].src = positionsImage04;
    carouselIds[4].src = positionsImage05;
    carouselIds[5].src = positionsImage06;
    carouselIds[6].src = positionsImage07;

    if (carouselCount>0) {
        carouselCount--;
    } else {
        carouselCount = carouselImages.length-1;
    }
}
function goLeftPic() {

    positionsImage07 = positionsImage06;
    positionsImage06 = positionsImage05;
    positionsImage05 = positionsImage04;
    positionsImage04 = positionsImage03;
    positionsImage03 = positionsImage02;
    positionsImage02 = positionsImage01;
    positionsImage01 = carouselImages[carouselCount];

    carouselIds[0].src = positionsImage01;
    carouselIds[1].src = positionsImage02;
    carouselIds[2].src = positionsImage03;
    carouselIds[3].src = positionsImage04;
    carouselIds[4].src = positionsImage05;
    carouselIds[5].src = positionsImage06;
    carouselIds[6].src = positionsImage07;

    carouselCount++;
    if (carouselCount == carouselImages.length) {
        carouselCount = 0;
    }

}