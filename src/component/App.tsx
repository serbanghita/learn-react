import * as React from "react";
import Feedback from "./Feedback";
import CurrencyConverter from "./CurrencyConverter";
import Tree from "./Tree";

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

  public render() {
    const pStyle = {
      color: this.state.titleColor
    };

    return (
        <div>
            <h1 style={pStyle}>{this.props.title}</h1>
            <p>A static description of my app.</p>
            <Feedback label="Send feedback"/>
            <CurrencyConverter />
            <Tree />
        </div>
    );
  }
}
