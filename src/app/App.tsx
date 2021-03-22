import { ActionButton } from "../elements/ActionButton.js";
import { Display } from "../elements/Display.js";
import { Frame } from "../elements/Frame.js";

declare const ReactDOM;
declare const React;

class App {

  start() {
    const frame = new Frame();
    const display = new Display()
    frame.addComponent(display.build());
    frame.addComponent(new ActionButton("").build());
    frame.addComponent(new ActionButton("").build());
    frame.addComponent(new ActionButton("C").build());
    frame.addComponent(new ActionButton("<-").build());
    frame.addComponent(new ActionButton("7").build());
    frame.addComponent(new ActionButton("8").build());
    frame.addComponent(new ActionButton("9").build());
    frame.addComponent(new ActionButton("x").build());
    frame.addComponent(new ActionButton("4").build());
    frame.addComponent(new ActionButton("5").build());
    frame.addComponent(new ActionButton("6").build());
    frame.addComponent(new ActionButton("-").build());
    frame.addComponent(new ActionButton("1").build());
    frame.addComponent(new ActionButton("2").build());
    frame.addComponent(new ActionButton("3").build());
    frame.addComponent(new ActionButton("+").build());
    frame.addComponent(new ActionButton("+-").build());
    frame.addComponent(new ActionButton("0").build());
    frame.addComponent(new ActionButton(",").build());
    frame.addComponent(new ActionButton("=").build());

    ReactDOM.render(frame.build(), document.getElementById("main"));
  }
}

const app = new App();
app.start();

export default app;

/*

UI:
Calculation
    C del
7 8 9 X
4 5 6 -
1 2 3 +
+- 0 , =

*/
