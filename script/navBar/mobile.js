const menuMobileId = document.getElementById('menuMobileId')
const menuMobileButtonOpen01 = document.getElementById('menuMobileButtonOpen01')
const menuMobileButtonOpen02 = document.getElementById('menuMobileButtonOpen02')
const menuMobileButtonOpen03 = document.getElementById('menuMobileButtonOpen03')
let open = true;
function openMenuMobile() {
    if (open == true) {
        menuMobileButtonOpen01.style.transform = 'rotate(45deg)'
        menuMobileButtonOpen02.style.display = 'none';
        menuMobileButtonOpen03.style.transform = 'rotate(-45deg)'
        menuMobileButtonOpen03.style.marginTop = '-5px';
        menuMobileId.style.top = '0px';
        open = false;
    } else {
        menuMobileButtonOpen01.style.transform = 'rotate(0deg)'
        menuMobileButtonOpen02.style.display = 'block';
        menuMobileButtonOpen03.style.transform = 'rotate(0deg)'
        menuMobileButtonOpen03.style.marginTop = '2px';
        menuMobileId.style.top = '-300px';
        open = true;
    }
}