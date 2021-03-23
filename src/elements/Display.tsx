interface Props {
  value: string;
}

export class Display extends React.Component<Props> {

  render() {
    return <div className="display">{this.props.value}</div>;
  }
}