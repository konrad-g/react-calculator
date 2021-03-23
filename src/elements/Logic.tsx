enum Operation {
  Add,
  Subtract,
  Multiply,
  Divide
}

export class Logic {

  private setDisplay: (value: string) => void;

  private firstValue: string = '0';
  private secondValue: string | null = null;
  private operation: Operation | null = null;
  private display: string = '';

  constructor() {
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

  onDisplayChanged(setDisplay: (value: string) => void) {
    this.setDisplay = setDisplay;
  }

  getSymbolFromOperation(operation: Operation) {
    if (operation === Operation.Add) return "+";
    if (operation === Operation.Subtract) return "-";
    if (operation === Operation.Multiply) return "x";
    if (operation === Operation.Divide) return "/";
    throw new Error("There is no symbol for this operation.")
  }

  updateDisplay() {
    try {
      this.display = this.firstValue;
      if (this.operation !== null) {
        const secondValueText = this.secondValue !== null ? this.secondValue : ' ';
        this.display = this.display + " " + this.getSymbolFromOperation(this.operation) + " " + secondValueText;
      }
      this.setDisplay(this.display);
    } catch (error) {
      this.setDisplay("ERR");
    }
  }

  clear() {
    this.firstValue = '0';
    this.secondValue = null;
    this.operation = null;
    this.updateDisplay();
  }

  generateRandom() {
    this.clear();
    const MAX_RANDOM = 100;
    const random = Math.round(Math.random() * MAX_RANDOM);
    this.firstValue = random.toString();
    this.updateDisplay();
  }

  isSingleDigit(value: string | null) {
    const SINGLE_DIGIT = 1;
    const SINGLE_DIGIT_NEGATIVE = 2;
    return value === null || value.length <= SINGLE_DIGIT || (value.length === SINGLE_DIGIT_NEGATIVE && value.includes('-'));
  }

  updateValue(initValue: string, value: number): string {
    if ((Number(initValue) === 0 && this.isSingleDigit(initValue)) || initValue === null) {
      return value.toString();
    }
    return initValue + value;
  }

  addDotToValue(value: string): string {
    if (value === null) return '0.';
    if (value.includes(".")) return value;
    return value + ".";
  }

  deleteCharacter(initValueText: string): string {
    if (this.isSingleDigit(initValueText)) {
      return '0';
    }
    return initValueText.substring(0, initValueText.length - 1);
  }

  delCharacter() {
    const isFirstOperation = this.operation === null;
    if (isFirstOperation) {
      this.firstValue = this.deleteCharacter(this.firstValue);
    } else {
      this.secondValue = this.deleteCharacter(this.secondValue);
    }
    this.updateDisplay();
  }

  onPress(value: number): () => void {
    const self = this;
    return () => {
      const isFirstOperation = self.operation === null;
      if (isFirstOperation) {
        self.firstValue = self.updateValue(self.firstValue, value);
      } else {
        self.secondValue = self.updateValue(self.secondValue, value);
      }
      self.updateDisplay();
    };
  }

  setOperator(operator: Operation) {
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
      this.firstValue = (-Number(this.firstValue)).toString();
    } else {
      this.secondValue = (-Number(this.secondValue)).toString();
    }
    this.updateDisplay();
  }

  addDot() {
    const isFirstOperation = this.operation === null;
    if (isFirstOperation) {
      this.firstValue = this.addDotToValue(this.firstValue);
    } else {
      this.secondValue = this.addDotToValue(this.secondValue);
    }
    this.updateDisplay();
  }

  getCalculationResult() {
    if (this.operation === null) {
      return this.firstValue;
    }
    const SAFETY_CALC = 100000;
    const firstValue = Number(this.firstValue) * SAFETY_CALC;
    const secondValue = Number(this.secondValue) * SAFETY_CALC;

    if (this.operation === Operation.Add) return (firstValue + secondValue) / SAFETY_CALC;
    if (this.operation === Operation.Subtract) return (firstValue - secondValue) / SAFETY_CALC;
    if (this.operation === Operation.Multiply) return (firstValue * secondValue) / SAFETY_CALC / SAFETY_CALC;
    if (this.operation === Operation.Divide) return (firstValue / secondValue) / SAFETY_CALC * SAFETY_CALC;
  }

  calculate() {
    if (this.operation === null) {
      return;
    }
    const result = this.getCalculationResult();
    this.clear();
    this.firstValue = result.toString();
    this.updateDisplay();
  }
}