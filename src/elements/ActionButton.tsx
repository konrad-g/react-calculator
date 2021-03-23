interface Props {
  symbol?: string;
  onClick?: () => void;
}

export class ActionButton extends React.Component<Props> {
  render() {
    const isEnabled = !!this.props.onClick;
    const isEnabledClass = isEnabled ? 'enabled' : '';
    const classes = `action-button ${isEnabledClass}`;
    return <div className={classes} onClick={this.props.onClick}>{this.props.symbol ?? ''}</div>;
  }
}