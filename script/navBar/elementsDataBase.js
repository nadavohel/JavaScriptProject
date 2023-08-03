const theProjectName = document.getElementById('projectName');
const myKnowledge = document.getElementById('knowledge');
const myPersonalInformation = document.getElementById('personalInformation');
const myprofilePic = document.getElementById('profilePic');
const loadingToRemove = document.getElementById('loadingLogo');
const loading = document.querySelector('waviy');
const backgroundWelcome = document.getElementById('backgroundWelcome');
const welcomeScreen = document.getElementById('welcomeScreen');
const navigation = document.getElementById('nav');
const navigationContainer = document.getElementById('navMainBar');
const divBoxForIconsHover = document.getElementById('divBoxForIconsHover');
const navTabMain = document.getElementById('navIndexId');
const mainIndexId = document.getElementById('mainIndexId');
const NameOnBar = document.getElementById('changeNameOnBar');
const emojiNav01 = document.getElementById('emojiNav01');
const emojiNav02 = document.getElementById('emojiNav02');
const emojiNav03 = document.getElementById('emojiNav03');

//get screen information
let screenHeight = window.innerHeight;
let screenWidth = window.innerWidth;

// gets all ids form elements
const welcomeDivContainer = document.getElementById('welcomeDivContainer');
const creatorDivContainer = document.getElementById('creator-container');
const iconMainBar01 = document.getElementById('iconOnWelcomeScreenId01');
const iconMainBar02 = document.getElementById('iconOnWelcomeScreenId02');
const iconMainBar03 = document.getElementById('iconOnWelcomeScreenId03');
const iconMainBar04 = document.getElementById('iconOnWelcomeScreenId04');
const iconMainBar05 = document.getElementById('iconOnWelcomeScreenId05');
const iconMainBar06 = document.getElementById('iconOnWelcomeScreenId06');
const iconMainBar07 = document.getElementById('iconOnWelcomeScreenId07');
const iconMainBar08 = document.getElementById('iconOnWelcomeScreenId08');

// navigation bar elements
const indicator = document.querySelector(".nav-indicator");
const items = document.querySelectorAll(".nav-item");

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
} else {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
    }
}
let stopAllAnimations = false;