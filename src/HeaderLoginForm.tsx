import * as React from "react";
import {IUserData} from "./App";

interface IHeaderLoginFormProps {
  userData: IUserData;
  onLogin: (username: string, password: string) => void;
}

export default class HeaderLoginForm extends React.Component<IHeaderLoginFormProps, {}> {

  private usernameInput: HTMLInputElement;
  private passwordInput: HTMLInputElement;

  constructor(props) {
    super(props);
    this.onLogin = this.onLogin.bind(this);
  }

  private onLogin(e) {
    e.preventDefault();
    this.props.onLogin(this.usernameInput.value, this.passwordInput.value);
  }

  public render() {

    if (this.props.userData.isLoggedIn) {
      return null;
    }

    return (
      <form className="form-horizontal">
        <div className="form-group">
          <div className="input-group input-inline">
            <input className="form-input" type="text" id="input-example-1u" placeholder="Username" value="test" ref={(el) => this.usernameInput = el as HTMLInputElement} />
            <input className="form-input" type="password" id="input-example-2p" placeholder="Password" value="test" ref={(el) => this.passwordInput = el as HTMLInputElement} />
            <button className={`btn btn-primary input-group-btn ${this.props.userData.isLoggingIn ? `loading disabled` : ``}`} onClick={this.onLogin}>Login <i className="form-icon icon icon-arrow-right" /></button>
          </div>
        </div>
      </form>
    );
  }
}
