export class ActionButton extends React.Component {
    render() {
        var _a;
        const isEnabled = !!this.props.onClick;
        const isEnabledClass = isEnabled ? 'enabled' : '';
        const classes = `action-button ${isEnabledClass}`;
        return React.createElement("div", { className: classes, onClick: this.props.onClick }, (_a = this.props.symbol) !== null && _a !== void 0 ? _a : '');
    }
}
