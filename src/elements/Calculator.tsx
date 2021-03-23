import { ActionButton } from "./ActionButton.js";
import { Display } from "./Display.js";
import { Frame } from "./Frame.js";
import { Logic } from "./Logic.js";
import { Row } from "./Row.js";

export function Calculator(props) {

  const [display, setDisplay] = React.useState('HELLO');
  const logic = new Logic();
  logic.onDisplayChanged(setDisplay)

  return <Frame>
  <Row>
    <Display value={display} />
  </Row>
  <Row>
    <ActionButton symbol="Rnd" onClick={logic.generateRandom} />
    <ActionButton symbol="C" onClick={logic.clear} />
    <ActionButton symbol="<-" onClick={logic.delCharacter} />
    <ActionButton symbol="/" onClick={logic.divide} />
  </Row>
  <Row>
    <ActionButton symbol="7" onClick={logic.onPress(7)} />
    <ActionButton symbol="8" onClick={logic.onPress(8)} />
    <ActionButton symbol="9" onClick={logic.onPress(9)} />
    <ActionButton symbol="x" onClick={logic.multiply} />
  </Row>
  <Row>
    <ActionButton symbol="4" onClick={logic.onPress(4)} />
    <ActionButton symbol="5" onClick={logic.onPress(5)} />
    <ActionButton symbol="6" onClick={logic.onPress(6)} />
    <ActionButton symbol="-" onClick={logic.subtract} />
  </Row>
  <Row>
    <ActionButton symbol="1" onClick={logic.onPress(1)} />
    <ActionButton symbol="2" onClick={logic.onPress(2)} />
    <ActionButton symbol="3" onClick={logic.onPress(3)} />
    <ActionButton symbol="+" onClick={logic.add} />
  </Row>
  <Row>
    <ActionButton symbol="+-" onClick={logic.negate} />
    <ActionButton symbol="0" onClick={logic.onPress(0)} />
    <ActionButton symbol="." onClick={logic.addDot} />
    <ActionButton symbol="=" onClick={logic.calculate} />
  </Row>
</Frame>;
}
