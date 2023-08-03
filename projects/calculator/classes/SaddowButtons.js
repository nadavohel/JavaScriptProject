class SaddowButtons {
    constructor(){
        for (let i = 0; i < CalculatorDataBase.button.length; i++) {
            CalculatorDataBase.button[i].style.boxShadow = `
                    -1px 1px 0px black,
                    -2px 2px 0px black,
                    -3px 3px 0px black,
                    -4px 4px 0px black
                `;
            CalculatorDataBase.button[i].style.transition = "all 0.5s";
        }
        
        window.addEventListener("keydown", ev => {
            ev.preventDefault();
            console.log(ev.key)
            let i = CalculatorDataBase.keyArray.indexOf(ev.key);
            CalculatorDataBase.buttons[i].style.boxShadow = `
                inset -1px 1px 2px rgba(0, 0, 0, 0.025),
                inset -2px 2px 3px rgba(0, 0, 0, 0.025),
                inset -3px 3px 3px rgba(0, 0, 0, 0.025),
                inset -4px 4px 3px rgba(0, 0, 0, 0.025)
            `;
            setTimeout(() => {
                CalculatorDataBase.buttons[i].style.boxShadow = `
                -1px 1px 2px black,
                -2px 2px 3px black,
                -3px 3px 3px black,
                -4px 4px 3px black
            `}, 0.3 * 1000);
            if (CalculatorDataBase.keyArray.includes(ev.key)) {
                ClickOnKey.main(ev.key);
            } else {
                return;
            }
        });
    }

    static mouseDown(a) {
        a.style.boxShadow = `
            inset -1px 1px 2px rgba(0, 0, 0, 0.025),
            inset -2px 2px 3px rgba(0, 0, 0, 0.025),
            inset -3px 3px 3px rgba(0, 0, 0, 0.025),
            inset -4px 4px 3px rgba(0, 0, 0, 0.025)
        `;
    }

    static mouseUp(a) {
        a.style.boxShadow = `
            -1px 1px 0px black,
            -2px 2px 0px black,
            -3px 3px 0px black,
            -4px 4px 0px black
        `;
    }
}


const saddowButtonsOnStart = new SaddowButtons;