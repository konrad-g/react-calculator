export class ActionButton extends React.Component {
    render() {
        var _a;
        return <div className="action-button">{(_a = this.props.symbol) !== null && _a !== void 0 ? _a : '||'}</div>;
    }
}
