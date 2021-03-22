declare const React;

export class ActionButton {

  symbol: string;
  
  constructor(symbol: string) {
    this.symbol = symbol;
  }

  build() {
    return <div className="action-button">{this.symbol}</div>;
  }
}