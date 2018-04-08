import * as formToObject from "form_to_object";
import * as React from "react";
import {IUserData} from "./App";

export interface ISignupFormData {
  username: string;
  password: string;
  passwordAgain: string;
  gender: string;
  terms: string;
}

interface ISignupForm {
  onSignup: (formData: any) => void;
  userData: IUserData;
}
export default class SignupForm extends React.Component<ISignupForm, {}> {

  constructor(prop) {
    super(prop);
    this.onSignup = this.onSignup.bind(this);
  }

  private onSignup(e) {
    e.preventDefault();
    const formData = formToObject("signup-form");
    this.props.onSignup(formData);
  }

  public render() {
    return (
      <form id="signup-form">
        <div className="form-group">
          <label className="form-label" htmlFor="input-example-1">Username</label>
          <input className="form-input" type="text" name="username" id="input-example-1" placeholder="Username" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="input-example-2">Password</label>
          <input className="form-input" type="password" name="password" id="input-example-2" placeholder="Password (at least 8 characters)" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="input-example-3">Password again</label>
          <input className="form-input" type="password" name="passwordAgain" id="input-example-3" placeholder="Confirm password" />
        </div>

        <div className="form-group">
          <label className="form-label">Gender</label>
          <label className="form-radio">
            <input type="radio" name="gender" value="male" defaultChecked={true} />
            <i className="form-icon" /> Male
          </label>
          <label className="form-radio">
            <input type="radio" name="gender" value="female" />
            <i className="form-icon" /> Female
          </label>
        </div>

        <div className="form-group">
          <label className="form-checkbox">
            <input type="checkbox" name="terms" />
            <i className="form-icon" /> I agree with the <a href="#terms">Terms and Conditions</a>
          </label>
        </div>

        <div className="form-group">
          <button
            className={`btn btn-primary btn-lg ${this.props.userData.isSigningUp ? `loading disabled` : ``}`}
            name="signup"
            onClick={this.onSignup}
          >
            Signup
          </button>
        </div>
      </form>
    );
  }
}
