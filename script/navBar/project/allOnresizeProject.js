const footerMobile = document.getElementById('footerMobile');
const projectButtons = document.getElementById('projectButtons');

function allOnresize() {
    // function reportWindowSize() 
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    if (screenWidth > 1000) {
        mainIndexId.style.top = "306px";
    } else if (screenHeight > 768) {
        mainIndexId.style.top = "386px";
    }

    if (screenWidth < 769) {
        welcomeScreen.style.display = "none";
        navigationContainer.style.display = "none";
        mainIndexId.style.height = (screenHeight - 80) + "px";
        footerMobile.style.position = "absolute";
        footerMobile.style.bottom = "0px";
        projectButtons.style.bottom = "0px";
        projectButtons.style.position = "relative";

    } else {
        welcomeScreen.style.display = "block";
        navigationContainer.style.display = "block";
        mainIndexId.style.height = "950px";
        projectButtons.style.bottom = "20px";
        projectButtons.style.position = "absolute";
    }

    screenHeight = window.innerHeight;

    // function moveTheProjectName()
    theProjectName.style.top = `100px`;
    if (screenWidth > 1000) {
        theProjectName.style.left = ((screenWidth / 2) - 450) + "px";
    } else if (screenWidth > 768) {
        theProjectName.style.left = `10vw`;
    }
    //  function moveMyKnowledge()
    myKnowledge.style.top = `104px`;
    myKnowledge.style.width = `700px`;
    if (screenWidth > 1000) {
        myKnowledge.style.left = ((screenWidth / 2) - 105) + "px";
    } else if (screenWidth > 768) {
        myKnowledge.style.left = ((screenWidth / 2) - 205) + "px";
        myKnowledge.style.top = `180px`;
    }
    //  function moveMyPersonalInformation()
    myPersonalInformation.style.width = `700px`;
    myPersonalInformation.innerHTML = `Developed and designed: <span>Nadav Levi</span>`;
    if (screenWidth > 1000) {
        myPersonalInformation.style.left = ((screenWidth / 2) - 420) + "px";
        myPersonalInformation.style.top = `185px`;
    } else if (screenWidth > 768) {
        myPersonalInformation.style.left = `1vw`;
        myPersonalInformation.style.top = `255px`;
    }
    // function iconsFixScreenChange()
    for (let i = 0; i < iconWelcomeBottonShow.length; i++) {
        icon = iconWelcomeBottonShow[i];
        screenWidth = window.innerWidth;
        icon[0].style.left = (((screenWidth / 2) + icon[6]) + 'px');
    }
    if (screenWidth > 1230) {
        navigationContainer.style.width = '1230px';
        navigationContainer.style.left = ((screenWidth/2)-615) + 'px';
    } else {
        navigationContainer.style.width = (screenWidth) + 'px';
    }
    //  function closeWelcomeScreenContainer()
    if (screenWidth > 1000) {
        creatorDivContainer.style.height = '320px';
        welcomeDivContainer.style.height = '320px';
        navTabMain.style.height = '320px';
        backgroundWelcome.style.height = '700px';
        backgroundWelcome.style.marginTop = '-350px';
    } else if (screenWidth > 768) {
        creatorDivContainer.style.height = '400px';
        welcomeDivContainer.style.height = '400px';
        navTabMain.style.height = '400px';
        backgroundWelcome.style.height = '800px';
        backgroundWelcome.style.marginTop = '-400px';
    }
    // box for beffore and after to icons
    divBoxForIconsHover.style.left = (((screenWidth / 2) - 270) + 'px');

    // name on navigation bar change
    // function changeName(name)
    if (screenWidth >= 1300) {
        changeName("nadavohello")
    } else if (screenWidth > 1180) {
        changeName("nadavohel")
    } else if (screenWidth > 1000) {
        changeName("nadav")
        emojiNav01.style.display = "block";
        emojiNav02.style.display = "block";
    } else if (screenWidth > 900) {
        changeName("nadav")
        emojiNav01.style.display = "none";
        emojiNav02.style.display = "block";
    } else if (screenWidth > 800) {
        changeName("nadav")
        emojiNav02.style.display = "none";
    }
}

window.onresize = allOnresize;

stopAllAnimations = true;

if (screenWidth < 769) {
    mainIndexId.style.height = (screenHeight - 80) + "px";
    footerMobile.style.position = "absolute";
    footerMobile.style.bottom = "0px";
    projectButtons.style.position = "relative";
    projectButtons.style.bottom = "0px";

} else {
    mainIndexId.style.height = "950px";
    projectButtons.style.position = "absolute";
    projectButtons.style.bottom = "20px";
}
