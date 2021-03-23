interface Props {
  symbol?: string;
}

export class ActionButton extends React.Component<Props> {

  render() {
    return <div className="action-button">{this.props.symbol ?? '||'}</div>;
  }
}