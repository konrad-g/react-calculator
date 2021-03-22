export class ActionButton {
    constructor(symbol) {
        this.symbol = symbol;
    }
    build() {
        return React.createElement("div", { className: "action-button" }, this.symbol);
    }
}
