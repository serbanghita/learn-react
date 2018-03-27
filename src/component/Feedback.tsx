import * as React from "react";

interface IFeedbackProps {
  label: string;
}

interface IFeedbackState {
  isOpened: boolean;
}

export default class Feedback extends React.Component<IFeedbackProps, IFeedbackState> {

  constructor(props) {
    super(props);
    this.state = {isOpened: false};
  }


  public render() {
    const handleBtnClick = () => {
      this.setState((oldState: IFeedbackState, props: IFeedbackProps) => {
        return {isOpened: !oldState.isOpened}
      });
    };

    const formRatings = [1, 2, 3, 4, 5].map((number) =>
      <span key={number.toString()}>
        <input type="radio" name="rating" value={number} />
        <label>{number}</label>
      </span>
    );

    const form = (
      <form>
        <fieldset>
          <legend>Feedback info</legend>
          <div>
            <label>Name</label> <br />
            <input type="text" name="name" placeholder="Your name" />
          </div>
          <div>
            <label>Message</label> <br />
            <textarea name="message" placeholder="Your message ..." />
          </div>
          <div>
            <label>Rate page</label> <br />
            {formRatings}
          </div>
          <div>
            <button>Send</button>
          </div>
        </fieldset>
      </form>
    );

    return (
      <div>
        <button onClick={handleBtnClick}>
          {this.props.label} <span>{this.state.isOpened ? "↓" : "[+]"}</span>
        </button>
        {this.state.isOpened ? form : ""}
      </div>
    );
  }

}
