import * as React from "react";
import {Route, Switch} from "react-router";
import {BrowserRouter, withRouter} from "react-router-dom";
import {IUserData} from "./App";
import HomePageContent from "./HomePageContent";
import LeftMenu from "./LeftMenu";
import MyProfilePageContent from "./MyProfilePageContent";
import WelcomePageContent from "./WelcomePageContent";

interface ILoggedInPageContentProps {
  userData: IUserData;
}

class LoggedInPageContent extends React.Component<ILoggedInPageContentProps, {}> {

  public render() {
    return (
      <BrowserRouter>
        <div className="columns">
          <div className="column col-3">
            <LeftMenu userData={this.props.userData} />
          </div>
          <div className="column col-9">
            <Switch>
              <Route
                path="/"
                component={() => this.props.userData.loginCounts > 1 ? <HomePageContent/> : <WelcomePageContent/>}
                exact={true}
              />
              <Route
                path="/myprofile"
                component={() => <MyProfilePageContent userData={this.props.userData} onProfileUpdate={() => console.log(arguments)}/>}
                exact={true}
              />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

export default withRouter(LoggedInPageContent);
