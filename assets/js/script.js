class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
        this.previousOperandTextElement = previousOperandTextElement;
        this.currentOperandTextElement = currentOperandTextElement;
        this.clear();
    }
//clear function
    clear(){
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation - undefined;
    }
    
//delete
    delete(){

    }

    appendNumber(number){
        this.currentOperand = number;
    }

    chooseOperation(operation){

    }

    compute(){

    }

    getDisplayNumber(number){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand;
    }
}
    

const numberBtns = document.querySelectorAll("[data-number]");
const operationBtns = document.querySelectorAll("[data-operation]");
const equalBtn = document.querySelector("[data-equals]");
const deleteBtn = document.querySelector("[data-delete]");
const allClearBtn = document.querySelector("[data-all-clear]");
const previousOperand = document.querySelector("[data-previous-operand]");
const currentOperand = document.querySelector("[data-current-operand]");


const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement
);
numberBtns.forEach(button => {
    calculator.appendNumber(button.innerText);
    calculator.updateDisplay();
})