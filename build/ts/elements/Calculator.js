import { ActionButton } from "./ActionButton.js";
import { Display } from "./Display.js";
import { Frame } from "./Frame.js";
import { Logic } from "./Logic.js";
import { Row } from "./Row.js";
export function Calculator(props) {
    const [display, setDisplay] = React.useState('HELLO');
    const logic = new Logic();
    logic.onDisplayChanged(setDisplay);
    return React.createElement(Frame, null,
        React.createElement(Row, null,
            React.createElement(Display, { value: display })),
        React.createElement(Row, null,
            React.createElement(ActionButton, { symbol: "Rnd", onClick: logic.generateRandom }),
            React.createElement(ActionButton, { symbol: "C", onClick: logic.clear }),
            React.createElement(ActionButton, { symbol: "<-", onClick: logic.delCharacter }),
            React.createElement(ActionButton, { symbol: "/", onClick: logic.divide })),
        React.createElement(Row, null,
            React.createElement(ActionButton, { symbol: "7", onClick: logic.onPress(7) }),
            React.createElement(ActionButton, { symbol: "8", onClick: logic.onPress(8) }),
            React.createElement(ActionButton, { symbol: "9", onClick: logic.onPress(9) }),
            React.createElement(ActionButton, { symbol: "x", onClick: logic.multiply })),
        React.createElement(Row, null,
            React.createElement(ActionButton, { symbol: "4", onClick: logic.onPress(4) }),
            React.createElement(ActionButton, { symbol: "5", onClick: logic.onPress(5) }),
            React.createElement(ActionButton, { symbol: "6", onClick: logic.onPress(6) }),
            React.createElement(ActionButton, { symbol: "-", onClick: logic.subtract })),
        React.createElement(Row, null,
            React.createElement(ActionButton, { symbol: "1", onClick: logic.onPress(1) }),
            React.createElement(ActionButton, { symbol: "2", onClick: logic.onPress(2) }),
            React.createElement(ActionButton, { symbol: "3", onClick: logic.onPress(3) }),
            React.createElement(ActionButton, { symbol: "+", onClick: logic.add })),
        React.createElement(Row, null,
            React.createElement(ActionButton, { symbol: "+-", onClick: logic.negate }),
            React.createElement(ActionButton, { symbol: "0", onClick: logic.onPress(0) }),
            React.createElement(ActionButton, { symbol: ".", onClick: logic.addDot }),
            React.createElement(ActionButton, { symbol: "=", onClick: logic.calculate })));
}
