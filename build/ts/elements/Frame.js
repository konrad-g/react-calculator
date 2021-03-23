export class Frame extends React.Component {
    render() {
        return React.createElement("div", { className: "frame" }, this.props.children);
    }
}
