class CalculatorDataBase {

    static buttonId0 = document.getElementById("buttonId0");
    static buttonId1 = document.getElementById("buttonId1");
    static buttonId2 = document.getElementById("buttonId2");
    static buttonId3 = document.getElementById("buttonId3");
    static buttonId4 = document.getElementById("buttonId4");
    static buttonId5 = document.getElementById("buttonId5");
    static buttonId6 = document.getElementById("buttonId6");
    static buttonId7 = document.getElementById("buttonId7");
    static buttonId8 = document.getElementById("buttonId8");
    static buttonId9 = document.getElementById("buttonId9");

    static buttons = [
        buttonId0, buttonId1, buttonId2, buttonId3, buttonId4, buttonId5, buttonId6, buttonId7, buttonId8, buttonId9, buttonIdPoint, buttonIdEqual, buttonIdDelete, buttonIddivide, buttonIdMinus, buttonIdPlus, buttonIddouble, buttonIdPercent, buttonIdParenthesisLeft, buttonIdParenthesisright, buttonIdEqual
    ];
    
    static buttonIdPoint = document.getElementById("buttonIdPoint");
    static buttonIdEqual = document.getElementById("buttonIdEqual");
    
    static buttonIddivide = document.getElementById("buttonIddivide");
    static buttonIdMinus = document.getElementById("buttonIdMinus");
    static buttonIdPlus = document.getElementById("buttonIdPlus");
    static buttonIddouble = document.getElementById("buttonIddouble");
    
    static buttonIdDelete = document.getElementById("buttonIdDelete");
    static buttonIdPercent = document.getElementById("buttonIdPercent");
    static buttonIdParenthesisLeft = document.getElementById("buttonIdParenthesisLeft");
    static buttonIdParenthesisright = document.getElementById("buttonIdParenthesisright");
    
    static res = document.getElementById("res");
    static button = document.querySelectorAll("button");
    static errorMassage = document.getElementById("errorMassage");
    
    static numberClick = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    static keyWeShoes = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", , "%", "(", ")", "+", "-", "*", "/", "=", "."];
    static keysMethod = ["(", ")", "+", "-", "*", "/", "=",];
    static keyArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "Enter", "Delete", "/", "-", "+", "*", "%", "(", ")", "="];
}
