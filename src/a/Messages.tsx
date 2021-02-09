import * as React from "react";
import store from "./Store";

// 1. The state is not maintained inside the component.
// 2. forceUpdate() Forces an update. This should only be invoked when it is
// known with certainty that we are **not** in a DOM transaction.
export class Messages extends React.Component {
  componentDidMount() {
    console.log("Subscribed!");
    store.subscribe(() => {
      console.log("Update!");
      this.forceUpdate()
    });
  }

  render() {
    const messages = store.getState().messages;

    return (
      <div className='ui segment'>
        <MessageView messages={messages} />
        <MessageInput />
      </div>
    )
  }
}

class MessageInput extends React.Component {
  state = {
    value: '',
  }

  onChange = (e) => {
    this.setState({
      value: e.target.value,
    })
  };

  handleSubmit = () => {
    store.dispatch({
      type: 'ADD_MESSAGE',
      message: this.state.value,
    });
    this.setState({
      value: '',
    });
  };

  render() {
    return (
      <div className='ui input'>
        <input
          onChange={this.onChange}
          value={this.state.value}
          type='text'
        />
        <button
          onClick={this.handleSubmit}
          className='ui primary button'
          type='submit'
        >
          Submit
        </button>
      </div>
    );
  }
}


class MessageView extends React.Component<{ messages: string[] }, {}> {
  constructor(props) {
    super(props);
  }

  onDelete(index: number) {
    store.dispatch({
      type: 'DELETE_MESSAGE',
      index,
    });
  }

  render() {
    return (
      <>
        { this.props.messages.map((msg, index) => {
          return (
            <div key={index}>
              <pre>{msg}</pre>
              <a href="#" onClick={() => this.onDelete(index)}>Delete</a>
            </div>
          );
        })}
      </>
    );
  }
}
