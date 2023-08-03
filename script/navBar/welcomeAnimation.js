// [element,iconOpacity, iconTimeout, callFunction, iconPosition];
let welcomeAnimationArray = [
    ["creatorContainerShow", 
        [theProjectName, 1, 0.05, ftheProjectName, 0], 
        [myKnowledge, 1, 0.5, fmyKnowledge, 0], 
        [myPersonalInformation, 1, 1, fmyPersonalInformation, 0]], 

    ["iconWelcomeShow", 
        [iconMainBar01, 1, 0.05, iconsGoDownOrUp, 4], 
        [iconMainBar02, 1, 0.4, iconsGoDownOrUp, 6], 
        [iconMainBar03, 1, 0.6, iconsGoDownOrUp, 2], 
        [iconMainBar04, 1, 0.7, iconsGoDownOrUp, 1.7], 
        [iconMainBar05, 1, 0.5, iconsGoDownOrUp, 1.15], 
        [iconMainBar06, 1, 0.1, iconsGoDownOrUp, 1.3], 
        [iconMainBar07, 1, 0.3, iconsGoDownOrUp, 1.5], 
        [iconMainBar08, 1, 0.2, iconsGoDownOrUp, 17.3], 
        [myprofilePic, 1, 0.05, iconsGoDownOrUp, 0]], 

    ["iconWelcomeHidden", 
        [iconMainBar01, 0, 0.05, iconsGoDownOrUp, 0], 
        [iconMainBar02, 0, 0.4, iconsGoDownOrUp, 0], 
        [iconMainBar03, 0, 0.6, iconsGoDownOrUp, 0], 
        [iconMainBar04, 0, 0.7, iconsGoDownOrUp, 0], 
        [iconMainBar05, 0, 0.5, iconsGoDownOrUp, 0], 
        [iconMainBar06, 0, 0.1, iconsGoDownOrUp, 0], 
        [iconMainBar07, 0, 0.3, iconsGoDownOrUp, 0], 
        [iconMainBar08, 0, 0.2, iconsGoDownOrUp, 0], 
        [myprofilePic, 0, 0.75, iconsGoDownOrUp, 0]], 

    ["creatorContainerMoveUp", 
        [theProjectName, 0, 0, moveTheProjectName, 0], 
        [myKnowledge, 0, 0.25, moveMyKnowledge, 0], 
        [myPersonalInformation, 0, 0.35, moveMyPersonalInformation, 0]], 

    ["backgroundColorOpicityChange", 
        [null, 4, 1.5, closeWelcomeDivContainer, 0]], 

    ["iconWelcomeBottonShow", 
        [iconMainBar01, 1, 0.1, iconsBottomShow, 4, 40, -270], 
        [iconMainBar02, 1, 0.5, iconsBottomShow, 4, 40, -210], 
        [iconMainBar03, 1, 0, iconsBottomShow, 4, 40, -150], 
        [iconMainBar04, 1, 0.7, iconsBottomShow, 4, 40, -90], 
        [iconMainBar05, 1, 0.3, iconsBottomShow, 4, 40, -30], 
        [iconMainBar06, 1, 0.6, iconsBottomShow, 4, 100, 30], 
        [iconMainBar07, 1, 0.2, iconsBottomShow, 4, 60, 150], 
        [iconMainBar08, 1, 0.4, iconsBottomShow, 1, 40, 230]],
    ["loadingRemoved", 
        [loadingToRemove, 6.5, loadingLogoRemove, loadingLogoRemoveOpacity]],
    ["releaseScreenToScrolling",
        [null, 4, releaseScreenScrolling]],
    ["closeWelcomeContainer",
        [null, 1.5, closeWelcomeScreenContainer]]
];
let creatorContainerShow = welcomeAnimationArray[0];
creatorContainerShow.shift();
let iconWelcomeShow = welcomeAnimationArray[1];
iconWelcomeShow.shift();
let iconWelcomeHidden = welcomeAnimationArray[2];
iconWelcomeHidden.shift();
let creatorContainerMoveUp = welcomeAnimationArray[3];
creatorContainerMoveUp.shift();
let backgroundColorOpicityChange = welcomeAnimationArray[4];
backgroundColorOpicityChange.shift();
let iconWelcomeBottonShow = welcomeAnimationArray[5];
iconWelcomeBottonShow.shift();
let loadingRemoved = welcomeAnimationArray[6];
loadingRemoved.shift();
let releaseScreenToScrolling = welcomeAnimationArray[7];
releaseScreenToScrolling.shift();
let closeWelcomeContainer = welcomeAnimationArray[8];
closeWelcomeContainer.shift();

// call function to start icons position and opacity
for (i = 0; i < 8; i++) {
    let iconPositionTop = iconWelcomeShow[i];
    displayNone(iconPositionTop[0], iconPositionTop[4]);
}

for (let i = 0; i < creatorContainerShow.length; i++) {
    let icon = creatorContainerShow[i];
    setTimeout(icon[3], icon[2] * 1000);
}
for (let i = 0; i < iconWelcomeShow.length; i++) {
    let icon = iconWelcomeShow[i];
    setTimeout(() => {
        iconsGoDownOrUp(icon[0], 1);
    }, (icon[2] + 0.5) * 1000);
}
for (let i = 0; i < iconWelcomeHidden.length; i++) {
    let icon = iconWelcomeHidden[i];
    setTimeout(() => {
        iconsGoDownOrUp(icon[0], 0);
    }, (icon[2] + 1.25) * 1000);
}
for (let i = 0; i < creatorContainerMoveUp.length; i++) {
    let icon = creatorContainerMoveUp[i];
    setTimeout(icon[3], (icon[2] + 2) * 1000);
}
for (let i = 0; i < backgroundColorOpicityChange.length; i++) {
    let icon = backgroundColorOpicityChange[i];
    setTimeout(icon[3], icon[2] * 1000);
}
for (let i = 0; i < iconWelcomeBottonShow.length; i++) {
    let icon = iconWelcomeBottonShow[i];
    setTimeout(() => {
        iconsMoveToBottom(icon[0], icon[5], icon[6]);
    }, (icon[2] + 2) * 1000);
    setTimeout(() => {
        iconsBottomShow(icon[0], icon[1], icon[5], icon[6]); 
    }, (icon[2] + 3) * 1000);
}
for (let i = 0; i < loadingRemoved.length; i++){
    let icon = loadingRemoved[i];
    setTimeout(icon[3], (icon[1]-2) * 1000);
    setTimeout(icon[2], icon[1] * 1000);
}
for (let i = 0; i < releaseScreenToScrolling.length; i++) {
    let icon = releaseScreenToScrolling[i];
    setTimeout(releaseScreenScrolling, icon[1] * 1000);
}
for (let i = 0; i < closeWelcomeContainer.length; i++) {
    let icon = closeWelcomeContainer[i];
    setTimeout(closeWelcomeScreenContainer, icon[1] * 1000);
}
// logo information go up
function ftheProjectName() {
    theProjectName.style.opacity = 1;
}
function fmyKnowledge() {
    myKnowledge.style.opacity = 1;
}
function fmyPersonalInformation() {
    myPersonalInformation.style.opacity = 1;
}
// logo information move up
function moveTheProjectName() {
    screenWidth = window.innerWidth; 
    theProjectName.style.top = `100px`;
    if (screenWidth > 1000) {
        theProjectName.style.left = ((screenWidth/2)-450) + "px";
    } else if (screenWidth > 768) {
        theProjectName.style.left = `10vw`;
    }
}
function moveMyKnowledge() {
    screenWidth = window.innerWidth; 
    myKnowledge.style.top = `104px`;
    myKnowledge.style.width = `700px`;
    if (screenWidth > 1000) {
        myKnowledge.style.left = ((screenWidth / 2) - 105) + "px";
    } else if (screenWidth > 768) {
        myKnowledge.style.left = ((screenWidth / 2) - 205) + "px";
        myKnowledge.style.top = `180px`;
    }
}

function moveMyPersonalInformation() {
    screenWidth = window.innerWidth; 
    myPersonalInformation.style.width = `700px`;
    myPersonalInformation.innerHTML = `Developed and designed: <span>Nadav Levi</span>`;
    if (screenWidth > 1000) {
        myPersonalInformation.style.left = ((screenWidth / 2) - 420) + "px";
        myPersonalInformation.style.top = `185px`;
    } else if (screenWidth > 768) {
        myPersonalInformation.style.left = `1vw`;
        myPersonalInformation.style.top = `255px`;
    }
}
// logo unformation start or hidden
function iconsGoDownOrUp(icon, iconOpacity) {
    icon.style.opacity = iconOpacity;
}

function iconsMoveToBottom(icon, iconWidth, iconLeft) {
    screenWidth = window.innerWidth;
    icon.style.width = '0px';
    icon.style.height = '0px';
    icon.style.left = ((((screenWidth / 2) + iconLeft) + iconWidth / 2) + 'px');
    icon.style.top = '';
    icon.style.bottom = '30px';
}

function iconsBottomShow(icon, iconOpacity, iconWidth, iconLeft) {
    icon.style.width = iconWidth + 'px';
    icon.style.height = '40px';
    icon.style.opacity = iconOpacity;
    icon.style.left = (((screenWidth / 2) + iconLeft) + 'px');
    icon.style.bottom = '10px';
}

// functions to start icon position and opacity
function displayNone(elem, position) {
    elem.style.opacity = 0;
    elem.style.top = screenHeight / position + "px";
}
function loadingLogoRemoveOpacity() {
    loadingToRemove.style.opacity = 0;
}
function loadingLogoRemove() {
    loadingToRemove.remove();
}
function releaseScreenScrolling() {
    document.body.style.overflow = 'visible';
    document.body.style.overflowX = 'hidden';
}
function closeWelcomeScreenContainer() {
    screenWidth = window.innerWidth; 
    if (screenWidth > 1000) {
        creatorDivContainer.style.height = '320px';
        welcomeDivContainer.style.height = '320px';
        navTabMain.style.height = '320px';
        backgroundWelcome.style.height = '700px';
        backgroundWelcome.style.marginTop = '-350px';
        mainIndexId.style.top = '306px';
    } else if (screenWidth > 768) {
        creatorDivContainer.style.height = '400px';
        welcomeDivContainer.style.height = '400px';
        navTabMain.style.height = '400px';
        backgroundWelcome.style.height = '800px';
        backgroundWelcome.style.marginTop = '-400px';
        mainIndexId.style.top = '386px';
    }
    
    welcomeScreen.style.position = 'fixed';
}

function navigationContainerBugfix() {
    if (screenWidth > 1230) {
        navigationContainer.style.width = '1230px';
        navigationContainer.style.left = ((screenWidth / 2) - 615) + 'px';
    } else {
        navigationContainer.style.width = (screenWidth) + 'px';
    }
}
navigationContainerBugfix()

divBoxForIconsHover.style.left = (((screenWidth / 2) - 270) + 'px');

// loading potision
if ((screenWidth > 768) && (screenWidth < 1100)) {
    setTimeout(() => {
        loadingToRemove.style.bottom = '40px';
    }, 2500);
}

function showNavBar() {
    navBar.style.visibility = "visible";
    navBar.style.opacity = "1";
    navBar.style.transition = "all 2s";
}

setTimeout(showNavBar, 2 * 1000);

/* 
divBoxForIconsHover.style.left = (((screenWidth / 2) + iconLeft) + 'px'); */
