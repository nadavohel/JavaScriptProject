function handleIndicator(el) {
    items.forEach((item) => {
        item.classList.remove("is-active");
        item.removeAttribute("style");
    });

    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute("active-color");

    el.classList.add("is-active");
    el.style.color = el.getAttribute("active-color");
}

items.forEach((item, index) => {
    item.addEventListener("click", (e) => {
        handleIndicator(e.target);
    });
    item.classList.contains("is-active") && handleIndicator(item);
});


const navBar = document.getElementById('navMainBar');


// name on navigation bar change

function changeName(name) {
    NameOnBar.innerHTML = name;
}

if (screenWidth >= 1300) {
    changeName("nadavohello")
} else if (screenWidth > 1180) {
    changeName("nadavohel")
} else if (screenWidth > 1000) {
    changeName("nadav")
} else if (screenWidth > 900) {
    changeName("nadav")
    emojiNav01.style.display = "none";
} else if (screenWidth > 768) {
    changeName("nadav")
    emojiNav01.style.display = "none";
    emojiNav02.style.display = "none";
} 



