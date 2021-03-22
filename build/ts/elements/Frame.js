export class Frame {
    constructor() {
        this.elements = [];
    }
    addComponent(element) {
        this.elements.push(element);
    }
    build() {
        return React.createElement("div", { className: "frame" }, this.elements);
    }
}
