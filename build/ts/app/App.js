import { Calculator } from "../elements/Calculator.js";
class App {
    start() {
        ReactDOM.render(React.createElement(Calculator, null), document.getElementById("main"));
    }
}
const app = new App();
app.start();
export default app;
