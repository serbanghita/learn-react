import * as React from "react";

export interface IAppProps {
    title: string;
    titleColor: string;
}

export interface IAppState {
  title: string,
  titleColor: string
}

interface IFeedbackBtnProps {
  label: string;
}

interface IFeedbackBtnState {
  isOpened: boolean;
}

class FeedbackBtn extends React.Component<IFeedbackBtnProps, IFeedbackBtnState> {

  constructor(props) {
    super(props);
    this.state = {isOpened: false};
  }


  public render() {
    const handleBtnClick = () => {
      this.setState((oldState: IFeedbackBtnState, props: IFeedbackBtnProps) => {
        return {isOpened: !oldState.isOpened}
      });
    };

    return (
      <button onClick={handleBtnClick}>
        {this.props.label} <span>{this.state.isOpened ? "↓" : "[+]"}</span>
      </button>
    );
  }

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
            <FeedbackBtn label="Send feedback"/>
        </div>
    );
  }
}
