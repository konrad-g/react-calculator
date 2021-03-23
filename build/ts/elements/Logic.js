var Operation;
(function (Operation) {
    Operation[Operation["Add"] = 0] = "Add";
    Operation[Operation["Subtract"] = 1] = "Subtract";
    Operation[Operation["Multiply"] = 2] = "Multiply";
    Operation[Operation["Divide"] = 3] = "Divide";
})(Operation || (Operation = {}));
export class Logic {
    constructor() {
        this.firstValue = 0;
        this.secondValue = null;
        this.operation = null;
        this.display = '';
        this.updateDisplay = this.updateDisplay.bind(this);
        this.clear = this.clear.bind(this);
        this.generateRandom = this.generateRandom.bind(this);
        this.delCharacter = this.delCharacter.bind(this);
        this.onPress = this.onPress.bind(this);
        this.add = this.add.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divide = this.divide.bind(this);
        this.subtract = this.subtract.bind(this);
        this.negate = this.negate.bind(this);
        this.addDot = this.addDot.bind(this);
        this.calculate = this.calculate.bind(this);
    }
    onDisplayChanged(setDisplay) {
        this.setDisplay = setDisplay;
    }
    getSymbolFromOperation(operation) {
        if (operation === Operation.Add)
            return "+";
        if (operation === Operation.Subtract)
            return "-";
        if (operation === Operation.Multiply)
            return "x";
        if (operation === Operation.Divide)
            return "/";
        throw new Error("There is no symbol for this operation.");
    }
    updateDisplay() {
        try {
            this.display = this.firstValue.toString();
            console.log('this.operation ' + this.operation);
            if (this.operation !== null) {
                console.log("Updating display: " + this.getSymbolFromOperation(this.operation));
                const secondValueText = this.secondValue !== null ? this.secondValue.toString() : ' ';
                this.display = this.display + " " + this.getSymbolFromOperation(this.operation) + " " + secondValueText;
            }
            this.setDisplay(this.display);
        }
        catch (error) {
            this.setDisplay("ERR");
        }
    }
    clear() {
        this.firstValue = 0;
        this.secondValue = null;
        this.operation = null;
        this.updateDisplay();
    }
    generateRandom() {
        this.clear();
        const MAX_RANDOM = 100;
        const random = Math.round(Math.random() * MAX_RANDOM);
        this.firstValue = random;
        this.updateDisplay();
    }
    updateValue(initValue, value) {
        if (initValue === 0 || initValue === null) {
            return value;
        }
        return Number(initValue.toString() + value);
    }
    addDotToValue(initValue) {
        const valueString = initValue.toString();
        if (valueString.includes("."))
            return initValue;
        return Number(valueString + ".0");
    }
    deleteCharacter(initValue) {
        const direction = initValue > 0 ? 1 : -1;
        const valueString = Math.abs(initValue).toString();
        const SINGLE_DIGIT = 1;
        if (valueString.length === SINGLE_DIGIT)
            return 0;
        return direction * Number(valueString.substring(0, valueString.length - 1));
    }
    delCharacter() {
        const isFirstOperation = this.operation === null;
        if (isFirstOperation) {
            this.firstValue = this.deleteCharacter(this.firstValue);
        }
        else {
            this.secondValue = this.deleteCharacter(this.secondValue);
        }
        this.updateDisplay();
    }
    onPress(value) {
        const self = this;
        return () => {
            const isFirstOperation = self.operation === null;
            if (isFirstOperation) {
                self.firstValue = self.updateValue(self.firstValue, value);
            }
            else {
                self.secondValue = self.updateValue(self.secondValue, value);
            }
            self.updateDisplay();
        };
    }
    setOperator(operator) {
        const isFirstOperation = this.operation === null;
        if (!isFirstOperation && this.secondValue !== null) {
            this.calculate();
        }
        this.operation = operator;
        this.updateDisplay();
    }
    add() {
        this.setOperator(Operation.Add);
    }
    multiply() {
        this.setOperator(Operation.Multiply);
    }
    divide() {
        this.setOperator(Operation.Divide);
    }
    subtract() {
        this.setOperator(Operation.Subtract);
    }
    negate() {
        const isFirstOperation = this.operation === null;
        if (isFirstOperation) {
            this.firstValue = -this.firstValue;
        }
        else {
            this.secondValue = -this.secondValue;
        }
        this.updateDisplay();
    }
    addDot() {
        const isFirstOperation = this.operation === null;
        if (isFirstOperation) {
            this.firstValue = this.addDotToValue(this.firstValue);
        }
        else {
            this.secondValue = this.addDotToValue(this.secondValue);
        }
        this.updateDisplay();
    }
    getCalculationResult() {
        if (this.operation === null) {
            return this.firstValue;
        }
        if (this.operation === Operation.Add)
            return this.firstValue + this.secondValue;
        if (this.operation === Operation.Subtract)
            return this.firstValue - this.secondValue;
        if (this.operation === Operation.Multiply)
            return this.firstValue * this.secondValue;
        if (this.operation === Operation.Divide)
            return this.firstValue / this.secondValue;
    }
    calculate() {
        if (this.operation === null) {
            return;
        }
        const result = this.getCalculationResult();
        this.clear();
        this.firstValue = result;
        this.updateDisplay();
    }
}
