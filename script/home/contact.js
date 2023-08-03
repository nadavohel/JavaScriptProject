const fNameIdForm = document.getElementById('fNameIdForm');
const lNameIdForm = document.getElementById('lNameIdForm');
const emailIdForm = document.getElementById('emailIdForm');
const numberIdForm = document.getElementById('numberIdForm');
const textareaIdForm = document.getElementById('textareaIdForm');
let flagForm = 0;
function sendMessage(){
    if (fNameIdForm.value.length < 3) {
        fNameIdForm.style.border = '2px solid red';
        if (flagForm > 0) {
            flagForm--;
        }
    } else {
        fNameIdForm.style.border = '2px solid green';
        flagForm++;
    }
    if (lNameIdForm.value.length < 3) {
        lNameIdForm.style.border = '2px solid red';
        if (flagForm > 0) {
            flagForm--;
        }
    } else {
        lNameIdForm.style.border = '2px solid green';
        flagForm++;
    }
    if ((emailIdForm.value.length > 2) && (emailIdForm.value.includes("@")) && (emailIdForm.value.includes("."))) {
        emailIdForm.style.border = '2px solid green';
        flagForm++;
    } else {
        emailIdForm.style.border = '2px solid red';
        if (flagForm > 0) {
            flagForm--;
        }
    }
    if (((numberIdForm.value.length >= 9) && (numberIdForm.value.length <= 10)) && (typeof +numberIdForm.value == 'number')) {
        numberIdForm.style.border = '2px solid green';
        flagForm++;
    } else {
        numberIdForm.style.border = '2px solid red';
        if (flagForm > 0) {
            flagForm--;
        }
    }
    if (textareaIdForm.value.length < 10) {
        textareaIdForm.style.border = '2px solid red';
        if (flagForm > 0) {
            flagForm--;
        }
    } else {
        textareaIdForm.style.border = '2px solid green';
        flagForm++;
    }
    if (flagForm === 5) {
        setTimeout(formChecked, 2 * 1000)
    }
    flagForm = 0;
}
function formChecked(){
    fNameIdForm.value = "";
    lNameIdForm.value = "";
    emailIdForm.value = "";
    numberIdForm.value = "";
    textareaIdForm.value = "";
    flagForm = 0;
}