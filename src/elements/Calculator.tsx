import { ActionButton } from "./ActionButton.js";
import { Display } from "./Display.js";
import { Frame } from "./Frame.js";
import { Row } from "./Row.js";

export function Calculator(props) {
  return <Frame>
  <Row>
    <Display />
  </Row>
  <Row>
    <ActionButton />
    <ActionButton />
    <ActionButton symbol="C" />
    <ActionButton symbol="<-" />
  </Row>
  <Row>
    <ActionButton symbol="7" />
    <ActionButton symbol="8" />
    <ActionButton symbol="9" />
    <ActionButton symbol="x" />
  </Row>
  <Row>
    <ActionButton symbol="4" />
    <ActionButton symbol="5" />
    <ActionButton symbol="6" />
    <ActionButton symbol="-" />
  </Row>
  <Row>
    <ActionButton symbol="1" />
    <ActionButton symbol="2" />
    <ActionButton symbol="3" />
    <ActionButton symbol="+" />
  </Row>
  <Row>
    <ActionButton symbol="+-" />
    <ActionButton symbol="0" />
    <ActionButton symbol="," />
    <ActionButton symbol="=" />
  </Row>
</Frame>;
}

/*

UI:
Calculation
    C del
7 8 9 X
4 5 6 -
1 2 3 +
+- 0 , =

*/
