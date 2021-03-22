declare const ReactDOM;
declare const React;

class App {

  start() {
    console.log("Start");
    ReactDOM.render(<div>First component</div>, document.getElementById("main"));
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
