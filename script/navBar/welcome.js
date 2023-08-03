// creator opicity when starting
theProjectName.style.opacity = 0;
myKnowledge.style.opacity = 0;
myPersonalInformation.style.opacity = 0;

/* navigationPosition() */
function reportWindowSize() {
    if (screenHeight >= 700) {
        creatorDivContainer.style.height = `${screenHeight}px`;
        welcomeDivContainer.style.height = `${screenHeight}px`;
        theProjectName.style.top = (screenHeight / 2 - 100) + "px";
        myKnowledge.style.top = (screenHeight / 2 - 20) + "px";
        myPersonalInformation.style.top = (screenHeight / 2 + 120) + "px";
        creatorDivContainer.style.width = `${screenWidth}px`;
        navTabMain.style.height = `${screenHeight}px`;
        if (stopAllAnimations == false){
            mainIndexId.style.top = `${screenHeight}px`;
        }
    } else {
        screenHeight = 700;
        creatorDivContainer.style.height = `${screenHeight}px`;
        welcomeDivContainer.style.height = `${screenHeight}px`;
        theProjectName.style.top = (screenHeight / 2 - 100) + "px";
        myKnowledge.style.top = (screenHeight / 2 - 20) + "px";
        myPersonalInformation.style.top = (screenHeight / 2 + 120) + "px";
        creatorDivContainer.style.width = `${screenWidth}px`;
        navTabMain.style.height = `${screenHeight}px`;
        if (stopAllAnimations == false) {
            mainIndexId.style.top = `${screenHeight}px`;
        }
    }
    if (screenWidth < 769) {
        welcomeScreen.style.display = "none";
        navigationContainer.style.display = "none";
    } 
    screenHeight = window.innerHeight;
}
reportWindowSize(); 
// width and height of elements and containers
welcomeDivContainer.style.backgroundColor = "#86A69D";
    creatorDivContainer.style.top = `0px`;
    creatorDivContainer.style.left = `0px`;
    theProjectName.style.left = `24vw`;
    myKnowledge.style.left = `40vw`;
    myPersonalInformation.style.left = `30vw`;
// background color change
function closeWelcomeDivContainer() {
    welcomeDivContainer.style.backgroundColor = "#f2c6c27b";
    if (stopAllAnimations == false) {
        welcomeDivContainer.style.transition = "all 3.5s";
        navTabMain.style.transition = "all 3.5s";
    }
}
// icons bootom fix when screen change
function iconsFixScreenChange() {
    for (let i = 0; i < iconWelcomeBottonShow.length; i++) {
        icon = iconWelcomeBottonShow[i];
        screenWidth = window.innerWidth;
        icon[0].style.left = (((screenWidth / 2) + icon[6]) + 'px');
    }
    screenWidth = window.innerWidth;
    navigationContainer.style.width = (screenWidth) + 'px';
}