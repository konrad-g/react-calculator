import { ActionButton } from "../elements/ActionButton.js";
import { Display } from "../elements/Display.js";
import { Frame } from "../elements/Frame.js";
import { Row } from "../elements/Row.js";
class App {
    start() {
        ReactDOM.render(React.createElement(Frame, null,
            React.createElement(Row, null,
                React.createElement(Display, null)),
            React.createElement(Row, null,
                React.createElement(ActionButton, null),
                React.createElement(ActionButton, null),
                React.createElement(ActionButton, { symbol: "C" }),
                React.createElement(ActionButton, { symbol: "<-" })),
            React.createElement(Row, null,
                React.createElement(ActionButton, { symbol: "7" }),
                React.createElement(ActionButton, { symbol: "8" }),
                React.createElement(ActionButton, { symbol: "9" }),
                React.createElement(ActionButton, { symbol: "x" })),
            React.createElement(Row, null,
                React.createElement(ActionButton, { symbol: "4" }),
                React.createElement(ActionButton, { symbol: "5" }),
                React.createElement(ActionButton, { symbol: "6" }),
                React.createElement(ActionButton, { symbol: "-" })),
            React.createElement(Row, null,
                React.createElement(ActionButton, { symbol: "1" }),
                React.createElement(ActionButton, { symbol: "2" }),
                React.createElement(ActionButton, { symbol: "3" }),
                React.createElement(ActionButton, { symbol: "+" })),
            React.createElement(Row, null,
                React.createElement(ActionButton, { symbol: "+-" }),
                React.createElement(ActionButton, { symbol: "0" }),
                React.createElement(ActionButton, { symbol: "," }),
                React.createElement(ActionButton, { symbol: "=" }))), document.getElementById("main"));
    }
}
const app = new App();
app.start();
export default app;
