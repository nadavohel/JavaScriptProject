class ClickOnKey {
    static percentFlag = false;
    static calculator = "0";
    static calculatorArray;
    static firstNumber = false;
    static Parenthesisflag = 0;
    static ansKillResult = false;
    static ans = "0";
    static firstTime = true;
    static firstLetterIsZero = true;

    static main(dat) {
        console.log(dat);
        CalculatorDataBase.res.style.fontSize = "26px";
        if (this.calculator.length > 30) {
            CalculatorDataBase.res.style.fontSize = "16px";
        } else if (this.calculator.length > 18) {
            CalculatorDataBase.res.style.fontSize = "20px";
        }
        if (dat !== ")") {
            this.percentFlag = false;
        }
        if (this.calculator[this.calculator.length - 1] == ".") {
            if (CalculatorDataBase.numberClick.includes(dat) === false) {
                return;
            }
        }
        this.calculatorArray = this.calculator.split(' ');
        CalculatorDataBase.errorMassage.innerHTML = "";
        CalculatorDataBase.errorMassage.style.visibility = "hidden";
        if ((CalculatorDataBase.numberClick.includes(dat)) && (this.calculatorArray[this.calculatorArray.length - 2] == ")")) {
            this.calculator += " * ";
        }
        if ((CalculatorDataBase.numberClick.includes(dat)) && (this.calculatorArray[this.calculatorArray.length - 1] == "0")) { // בדיקה אם המספר מתחיל באפס
            this.calculatorArray.splice((this.calculatorArray.length - 1), 1);
            this.calculator = this.calculatorArray.join(" ");
            if ((CalculatorDataBase.keysMethod.includes(this.calculatorArray[this.calculatorArray.length - 1])) || (this.calculatorArray[this.calculatorArray.length - 1] == "%")) {
                this.calculator += " ";
            }
        } if (CalculatorDataBase.numberClick.includes(dat)) {
            if (this.calculator[this.calculator.length - 1] == "%") {
                CalculatorDataBase.errorMassage.style.visibility = "visible";
                CalculatorDataBase.errorMassage.innerHTML = "After a percentage must come an action";
                return;
            } else {
                this.calculator += dat;
            }

        } else if (CalculatorDataBase.keysMethod.includes(dat)) {

            if (dat == "(") {
                if (this.firstNumber === false) {
                    this.calculator = dat + " ";
                } else if ((CalculatorDataBase.numberClick.includes(this.calculator[this.calculator.length - 1])) || (this.calculator[this.calculator.length - 1] == "%")) {
                    this.calculator += " " + "*" + " " + dat + " ";
                } else if (CalculatorDataBase.keysMethod.includes(this.calculator[this.calculator.length - 2])) {
                    if (this.calculator[this.calculator.length - 2] === ")") {
                        this.calculator += "* ";
                    }
                    this.calculator += dat + " ";
                }
                this.Parenthesisflag = this.Parenthesisflag + 1; // ++
            } else if (dat == ")") {
                if (this.Parenthesisflag === 0) { // === 0
                    return;
                }
                if ((CalculatorDataBase.keysMethod.includes(this.calculator[this.calculator.length - 2])) && (dat !== ")")) {
                    return;
                }
                if ((CalculatorDataBase.numberClick.includes(this.calculatorArray[this.calculatorArray.length - 1])) || (this.calculatorArray[this.calculatorArray.length - 1].includes("."))) {
                    this.calculator += " " + dat + " ";
                    this.Parenthesisflag = this.Parenthesisflag - 1; // --
                } else if (this.percentFlag === true) {
                    this.calculator += " " + dat + " ";
                    this.percentFlag = false;
                    this.Parenthesisflag = this.Parenthesisflag - 1; // --
                } else if (dat === ")") {
                    this.calculator += dat + " ";
                    this.Parenthesisflag = this.Parenthesisflag - 1
                } else {
                    CalculatorDataBase.errorMassage.style.visibility = "visible";
                    CalculatorDataBase.errorMassage.innerHTML = "You must give a value inside the parentheses";
                    return;
                }
            } else {
                if (this.calculator[this.calculator.length - 2] === "(") {
                    return;
                } else if (
                    (this.calculator[this.calculator.length - 2] === "+") ||
                    (this.calculator[this.calculator.length - 2] === "-") ||
                    (this.calculator[this.calculator.length - 2] === "*") ||
                    (this.calculator[this.calculator.length - 2] === "/")
                ) {
                    this.calculator = this.calculator.slice(0, this.calculator.length - 2);
                    this.calculator += dat + " ";
                } else {
                    this.calculator += " " + dat + " ";
                }
            }

        } else if (dat === "%") {
            if (this.percentFlag === true) {
                return;
            }
            if (CalculatorDataBase.numberClick.includes(this.calculator[this.calculator.length - 1])) {
                this.calculator += "%";
                this.percentFlag = true;
            } else if (dat === ")") {
                this.percentFlag = true;
            } else {
                CalculatorDataBase.errorMassage.style.visibility = "visible";
                CalculatorDataBase.errorMassage.innerHTML = "Before a percentage must come a value!";
                return;
            }
        } else if (dat == ".") {
            if (CalculatorDataBase.numberClick.includes(this.calculator[this.calculator.length - 1])) {
                this.calculator += dat;
            }

        } else if (dat === "Ans") {
            if ((this.firstNumber === false) || (this.ansKillResult === true)) {
                this.calculator = this.ans;
                CalculatorDataBase.res.innerText = this.calculator;
            } else if (CalculatorDataBase.numberClick.includes(this.calculatorArray[this.calculatorArray.length - 1])) {
                CalculatorDataBase.errorMassage.style.visibility = "visible";
                CalculatorDataBase.errorMassage.innerHTML = "You must provide a percent value for this operation";
                return;
            } else if ((this.calculatorArray[this.calculatorArray.length - 2] == ")")) {
                this.calculator += " * " + this.ans;
            } else {
                this.calculator += this.ans;
                CalculatorDataBase.res.innerText += this.calculator;
            }
        }

        this.ansKillResult = false;
        this.firstNumber = true;
        // first time check
        if (this.firstTime == true) {
            // what happens if the first letter is zero or other keys
            if ((this.firstLetterIsZero == true) && (CalculatorDataBase.numberClick.includes(dat)) && (dat != "0")) {
                CalculatorDataBase.res.innerText = "";
            } else if (dat == "0") {
                return;
            }
            this.firstTime = false;
            this.firstLetterIsZero = false;
        }

        // erase button c
        if (dat == "Delete") { // Enter button
            this.erase();
        } else if (dat == "Enter") {
            if (this.Parenthesisflag > 0) { // >0
                CalculatorDataBase.errorMassage.style.visibility = "visible";
                CalculatorDataBase.errorMassage.innerHTML = "You must close the brackets"
                return;
            }
            this.calculator = this.calculator.replaceAll('%', '/100');
            this.calculator = `${eval(this.calculator)}`;
            CalculatorDataBase.res.style.fontSize = "26px";
            if (this.calculator.length > 30) {
                CalculatorDataBase.res.style.fontSize = "16px";
            } else if (this.calculator.length > 18) {
                CalculatorDataBase.res.style.fontSize = "20px";
            }
            CalculatorDataBase.res.innerText = eval(this.calculator);
            this.ans = this.calculator;
            this.ansKillResult = true;
        } else { // screen show if not e323lse
            CalculatorDataBase.res.innerText = this.calculator;
        }
    }

    static erase() {
        this.firstTime = true;
        this.firstLetterIsZero = true;
        this.calculator = "0";
        this.firstNumber = false;
        CalculatorDataBase.res.style.fontSize = "26px";
        if (this.calculator.length > 30) {
            CalculatorDataBase.res.style.fontSize = "16px";
        } else if (this.calculator.length > 18) {
            CalculatorDataBase.res.style.fontSize = "20px";
        }
        CalculatorDataBase.res.innerText = "0";
    }
}