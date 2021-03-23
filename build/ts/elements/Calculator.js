import { ActionButton } from "./ActionButton.js";
import { Display } from "./Display.js";
import { Frame } from "./Frame.js";
import { Row } from "./Row.js";
export function Calculator(props) {
    return React.createElement(Frame, null,
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
            React.createElement(ActionButton, { symbol: "=" })));
}
