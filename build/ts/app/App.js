class App {
    start() {
        console.log("Start");
        ReactDOM.render(React.createElement("div", null, "First component"), document.getElementById("main"));
    }
}
const app = new App();
app.start();
export default app;
