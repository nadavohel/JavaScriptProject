function allOnresize() {

    // function reportWindowSize() 
    screenWidth = window.innerWidth;
    screenHeight = window.innerHeight;

    if (screenHeight >= 700) {
        creatorDivContainer.style.height = `${screenHeight}px`;
        welcomeDivContainer.style.height = `${screenHeight}px`;
        theProjectName.style.top = (screenHeight / 2 - 100) + "px";
        myKnowledge.style.top = (screenHeight / 2 - 20) + "px";
        myPersonalInformation.style.top = (screenHeight / 2 + 120) + "px";
        creatorDivContainer.style.width = `${screenWidth}px`;
        mainIndexId.style.top = `${screenHeight}px`;
    } else {
        screenHeight = 700;
        creatorDivContainer.style.height = `${screenHeight}px`;
        welcomeDivContainer.style.height = `${screenHeight}px`;
        theProjectName.style.top = (screenHeight / 2 - 100) + "px";
        myKnowledge.style.top = (screenHeight / 2 - 20) + "px";
        myPersonalInformation.style.top = (screenHeight / 2 + 120) + "px";
        creatorDivContainer.style.width = `${screenWidth}px`;
        mainIndexId.style.top = `${screenHeight}px`;
    }
    if (screenWidth < 769) {
        welcomeScreen.style.display = "none";
        navigationContainer.style.display = "none";
    } else {
        welcomeScreen.style.display = "block";
        navigationContainer.style.display = "block";
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
        mainIndexId.style.top = '306px';
    } else if (screenWidth > 768) {
        creatorDivContainer.style.height = '400px';
        welcomeDivContainer.style.height = '400px';
        navTabMain.style.height = '400px';
        backgroundWelcome.style.height = '800px';
        backgroundWelcome.style.marginTop = '-400px';
        mainIndexId.style.top = '386px';
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