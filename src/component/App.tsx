import * as React from "react";

export interface IAppProps {
    title: string;
    titleColor: string;
}

export default class App extends React.Component<IAppProps, {}> {

  public render() {
    const pStyle = {
      color: this.props.titleColor
    };

    return (
        <div>
            <h1 style={pStyle}>{this.props.title}</h1>
            <p>A static description of my app.</p>
        </div>
    );
  }
}
