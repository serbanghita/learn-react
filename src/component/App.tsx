import * as React from "react";

export interface IAppProps {
    title: string;
    titleColor: string;
}

export interface IAppState {
  title: string,
  titleColor: string
}

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = {title: props.title, titleColor: props.titleColor};
  }

  public componentWillMount() {
    this.setState({titleColor: "yellow"}, () => {
      console.log("Set state in componentWillMount().");
    });
  }

  public componentDidMount() {
    this.setState({titleColor: "green"}, () => {
      console.log("Set state in componentDidMount().");
    });

    // For later.
    setTimeout(() => {
      this.setState({titleColor: this.props.titleColor}, () => {
        console.log("Set state in componentDidMount() - lazy");
      });
    }, 2500);
  }

  public render() {
    const pStyle = {
      color: this.state.titleColor
    };

    return (
        <div>
            <h1 style={pStyle}>{this.props.title}</h1>
            <p>A static description of my app.</p>
        </div>
    );
  }
}
