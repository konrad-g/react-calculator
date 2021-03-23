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
        this.secondValue = 0;
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
            if (!!this.operation) {
                this.display = this.display + " " + this.getSymbolFromOperation(this.operation) + " " + this.secondValue.toString();
            }
            this.setDisplay(this.display);
        }
        catch (error) {
            this.setDisplay("ERR");
        }
    }
    clear() {
        this.firstValue = 0;
        this.secondValue = 0;
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
        if (initValue === 0) {
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
        const valueString = initValue.toString();
        const SINGLE_DIGIT = 1;
        if (valueString.length === SINGLE_DIGIT)
            return 0;
        return Number(valueString.substring(0, valueString.length - 1));
    }
    delCharacter() {
        const isFirstOperation = !this.operation;
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
            const isFirstOperation = !!self.operation;
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
        const isFirstOperation = !this.operation;
        if (!isFirstOperation) {
            this.calculate();
        }
        this.operation = operator;
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
        const isFirstOperation = !this.operation;
        if (isFirstOperation) {
            this.firstValue = -this.firstValue;
        }
        else {
            this.secondValue = -this.secondValue;
        }
        this.updateDisplay();
    }
    addDot() {
        const isFirstOperation = !this.operation;
        if (isFirstOperation) {
            this.firstValue = this.addDotToValue(this.firstValue);
        }
        else {
            this.secondValue = this.addDotToValue(this.secondValue);
        }
        this.updateDisplay();
    }
    getCalculationResult() {
        if (!this.operation) {
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
        if (!this.operation) {
            return;
        }
        const result = this.getCalculationResult();
        this.clear();
        this.firstValue = result;
        this.updateDisplay();
    }
}
