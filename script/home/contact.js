const fNameIdForm = document.getElementById('fNameIdForm');
const lNameIdForm = document.getElementById('lNameIdForm');
const emailIdForm = document.getElementById('emailIdForm');
const numberIdForm = document.getElementById('numberIdForm');
const textareaIdForm = document.getElementById('textareaIdForm');
let flagForm = 0;
function sendMessage(){
    let nameValidation = /^([a-zA-Zא-ת]{3,12})$/;
    if (nameValidation.test(fNameIdForm.value)) {
        fNameIdForm.style.border = '2px solid green';
        flagForm++;
    } else {
        fNameIdForm.style.border = '2px solid red';
        if (flagForm > 0) {
            flagForm--;
        }
    }
    if (nameValidation.test(lNameIdForm.value)) {
        lNameIdForm.style.border = '2px solid green';
        flagForm++;
    } else {
        lNameIdForm.style.border = '2px solid red';
        if (flagForm > 0) {
            flagForm--;
        }
    }
    let emailValidation = /^([a-zA-Z0-9/.-]+)@([a-zA-Z0-9-]+)[/.]([a-z]{2,8})(.[a-z]{2,8})?$/;
    let emailValue = emailIdForm.value;
    if (emailValidation.test(emailValue)) {
        emailIdForm.style.border = '2px solid green';
        flagForm++;
    } else {
        emailIdForm.style.border = '2px solid red';
        if (flagForm > 0) {
            flagForm--;
        }
    }
    let numberValidation = /^([0-9-]{9,11})$/;
    if (numberValidation.test(numberIdForm.value)) {
        numberIdForm.style.border = '2px solid green';
        flagForm++;
    } else {
        numberIdForm.style.border = '2px solid red';
        if (flagForm > 0) {
            flagForm--;
        }
    }
    if (textareaIdForm.value.length < 20) {
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