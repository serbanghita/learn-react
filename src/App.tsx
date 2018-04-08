import * as React from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter} from "react-router-dom";
import AnonymousPageContent from "./AnonymousPageContent";
import HeaderLoginForm from "./HeaderLoginForm";
import LocalStorage from "./LocalStorage";
import LoggedInPageContent from "./LoggedInPageContent";
import {ISignupFormData} from "./SignupForm";

export interface IAppProps {
  title: string;
  titleColor: string;
}

export interface IAppState {
  userData: IUserData;
}

export interface IUserData {
  loginCounts: number;
  isSigningUp: boolean;
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  isSavingProfile: boolean;
  username: string;
  email: string;
  gender: "male" | "female";
  profilePic: string;
}

const DEFAULT_USER_DATA: IUserData = {
  loginCounts: 0,
  isSigningUp: false,
  isLoggingIn: false,
  isLoggedIn: false,
  isSavingProfile: false,
  username: "",
  email: "",
  gender: "male",
  profilePic: "img/avatar-4.png"
};

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      userData: {} as IUserData
    };
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
    this.onSignup = this.onSignup.bind(this);
  }

  public componentDidMount() {
    this.setState({userData: DEFAULT_USER_DATA});
  }

  private onSignup(formData: ISignupFormData) {
    // Intermediary state for the UI.
    this.setState((prevState: IAppState) => {
      return { userData: Object.assign({}, prevState.userData, { isSigningUp: true }) };
    }, () => LocalStorage.Instance.syncProfile(this.state.userData));

    // Simulate a signup XHR delay.
    setTimeout(() => {
      this.setState((prevState: IAppState) => {
        return {
          userData: Object.assign({}, prevState.userData, {
            username: formData.username,
            gender: formData.gender,
            isSigningUp: false,
            isLoggedIn: true
          })
        };
      }, () => LocalStorage.Instance.syncProfile(this.state.userData));
    }, 1000);
  }

  private onLogin(username: string, password: string) {
    // Intermediary state for the UI.
    this.setState((prevState: IAppState) => {
      return { userData: Object.assign({}, prevState.userData, { isLoggingIn: true }) };
    }, () => LocalStorage.Instance.syncProfile(this.state.userData));

    // Simulate a login XHR delay.
    setTimeout(() => {
      this.setState(((prevState: IAppState) => {
        let partialUserData;

        if (username === "test" && password === "test") {
          partialUserData = { isLoggedIn: true, isLoggingIn: false, username, loginCounts: ++prevState.userData.loginCounts };
        } else {
          partialUserData = { isLoggedIn: false, isLoggingIn: false };
        }

        return { userData: Object.assign({}, prevState.userData, partialUserData) };
      }), () => LocalStorage.Instance.syncProfile(this.state.userData));
    }, 1000);

  }

  private onLogout() {
    this.setState((prevState: IAppState) => {
      return { userData: Object.assign({}, prevState.userData, { isLoggingIn: false, isLoggedIn: false }) };
    });
  }

  public render() {
    const pStyle = {
      color: this.props.titleColor
    };

    return (
      <BrowserRouter>
        <div className="container grid-xl">
          <div className="columns">
            <div className="column col-6">
              <h1>{this.props.title} <small className="label">the catch phrase</small></h1>
            </div>
            <div className="column col-6">
              <HeaderLoginForm
                userData={this.state.userData}
                onLogin={this.onLogin}
              />
            </div>
          </div>
          <Route
            path="/"
            render={() => {
              return (
                this.state.userData.isLoggedIn ?
                <LoggedInPageContent userData={this.state.userData}/> :
                <AnonymousPageContent userData={this.state.userData} onSignup={this.onSignup}/>
              );
            }}
          />
        </div>
      </BrowserRouter>
    );
  }
}
