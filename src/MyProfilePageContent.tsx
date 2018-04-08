import * as React from "react";
import {withRouter} from "react-router-dom";
import {IUserData} from "./App";

interface IMyProfileProps {
  userData: IUserData;
  onProfileUpdate: () => void;
}

class MyProfilePageContent extends React.Component<IMyProfileProps, {}> {

  constructor(props) {
    super(props);
    this.onProfileUpdate = this.onProfileUpdate.bind(this);
  }

  private onProfileUpdate(e) {
    e.preventDefault();
    console.log(e);
    // @important This is where you reach the limit of prototyping without a router!
  }

  public render() {
    return (
      <div className="columns">
        <form id="profile-form">
          <div className="form-group">
            <label className="form-label" htmlFor="username">Username</label>
            <input className="form-input" type="text" id="username" placeholder="Your username" value={this.props.userData.username} />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">Email</label>
            <input className="form-input" type="text" id="email" placeholder="you@email.com" value={this.props.userData.email} />
          </div>

          <div className="form-group">
            <label className="form-label">Gender</label>
            <label className="form-radio">
              <input type="radio" name="gender" value="male" checked={this.props.userData.gender === "male"} />
              <i className="form-icon" /> Male
            </label>
            <label className="form-radio">
              <input type="radio" name="gender" value="female" checked={this.props.userData.gender === "female"} />
              <i className="form-icon" /> Female
            </label>
          </div>

          <div className="form-group">
            <button
              className={`btn btn-primary btn-lg ${this.props.userData.isSavingProfile ? `loading disabled` : ``}`}
              name="update"
              onClick={this.onProfileUpdate}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(MyProfilePageContent);
