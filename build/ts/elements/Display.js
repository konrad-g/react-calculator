export class Display extends React.Component {
    render() {
        return React.createElement("div", { className: "display" }, this.props.value);
    }
}
