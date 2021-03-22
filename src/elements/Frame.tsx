declare const React;

export class Frame {
  
  elements: any[] = [];

  addComponent(element) {
    this.elements.push(element);
  }

  build() {
    return <div className="frame">
      {this.elements}
    </div>;
  }
}