export class Frame extends React.Component {
    render() {
        return <div className="frame">
      {this.props.children}
    </div>;
    }
}
