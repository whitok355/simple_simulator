"use strict";

const page = new Page();
const route = new Route();
const calcResult = new CalcResult();
const division = new Division();
const multiplication = new Multiplication();
const addition = new Addition();
const subtraction = new Subtraction();
const checker = new Checker();
const emotion = new Emotion();
let example;
let divider;
let multiplier;
let summand;
let deductible;
document.querySelectorAll(".route__radion").forEach(element => element.addEventListener("click", startGame));

function checkInputValue(value){
    if(value < 2 || value > 9){
        return false;
    } else {
        return true
    }
}

function startGame(e){
    switch(e.target.id){
        case "division":
            divider = document.getElementById("divider").value;
            if(checkInputValue(divider)){
                page.removeEl("err");
                page.getGamePage("деления", divider);
            } else{
                page.renderErr("Вы ввели недопустимое значение. Необходимо ввести делитель от 2 до 9")
            }
            break;
        case "multiplication":
            multiplier =document.getElementById("multiplier").value;
            if(checkInputValue(multiplier)){
                page.removeEl("err");
                page.getGamePage("умножения", multiplier);
            } else{
                page.renderErr("Вы ввели недопустимое значение. Необходимо ввести множитель от 2 до 9")
            }
            
            break;
        case "addition":
            summand =document.getElementById("summand").value;
            if(checkInputValue(summand)){
                page.removeEl("err");
                page.getGamePage("сложение");
            } else{
                page.renderErr("Вы ввели недопустимое значение. Необходимо ввести слагаемое от 2 до 9")
            }
            break;
        case "subtraction":
            deductible =document.getElementById("deductible").value;
            if(checkInputValue(deductible)){
                page.removeEl("err");
                page.getGamePage("вычетание");
            } else{
                page.renderErr("Вы ввели недопустимое значение. Необходимо ввести вычитаемое от 2 до 9")
            }
            break;
    }

    route.setRoute(e.target.id);

    document.getElementById("close").addEventListener("click", exiteGame);
    document.getElementById("submit").addEventListener("click", resumeGame)

    page.changeEmotion(emotion.checkEmotion(calcResult.getRight(), calcResult.getWrong()));

    renderExample();

}
function exiteGame(e){
    e.preventDefault();
    page.getStartPage();
    calcResult.resetAll();
    route.setRoute(null);
}
function renderExample(){
    page.invisMsg();
    page.clearInput();
    switch(route.getRoute()){
        case "division":
            example = division.generateExample(divider);
            break;
        case "multiplication":
            example= multiplication.generateExample(multiplier);
            break;
        case "addition":
            example= addition.generateExample(summand);
            break;
        case "subtraction":
            example= subtraction.generateExample(deductible);
            break;
    }
    page.renderExample(example);
}

function resumeGame(e){
    e.preventDefault()
    const res = new Checker().checkAnswer(example);
    new CalcResult().calcResult(res);

    if(res){
        page.renderRightMsg();

        setTimeout(renderExample, 1500);
    } else{
        page.renderWrongMsg();
    }
    page.changeEmotion(emotion.checkEmotion(calcResult.getRight(), calcResult.getWrong()));
}







