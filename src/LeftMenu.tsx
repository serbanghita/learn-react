import * as React from "react";
import {Link, NavLink} from "react-router-dom";
import {IUserData} from "./App";

interface ILeftMenuProps {
  userData: IUserData;
}

export default class LeftMenu extends React.Component<ILeftMenuProps, {}> {

  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  private onLogout(e) {
    e.preventDefault();
    // this.props.onLogout();
  }

  public render() {

    const userData = this.props.userData;
    const menuData = [
      { name: "👋 Welcome", link: "/" },
      { name: "My profile", link: "/myprofile" },
      { name: "Tutorial", link: "/tutorial" },
      { name: "Numbers", link: "/numbers" },
      { name: "Adding", link: "/numbers/adding" },
      { name: "Subtracting", link: "/numbers/subtracting" },
      { name: "Multiplying", link: "/numbers/multiplying" },
      { name: "Dividing", link: "/numbers/dividing" },
      { name: "Letters", link: "/numbers/letters" },

      { name: "Achievements", link: "/achievements" },
      { name: "Story", link: "/story" },
      { name: "Credits", link: "/credits" },
    ];

    const links = menuData.map((menuItem, index: number) => {
        return (
          <li key={index} className="menu-item">
            <NavLink activeClassName="active" to={menuItem.link} exact={true}>{menuItem.name}</NavLink>
          </li>
        );
    });

    return (
      <ul className="menu">
        <li className="menu-item">
          <div className="tile tile-centered">
            <div className="tile-icon">
              <img src={userData.profilePic} className="avatar" alt="Avatar" />
            </div>
            <div className="tile-content">
              {userData.username}
            </div>
          </div>
        </li>
        <li className="divider" />
        {links}
        <li className="divider" />
        <li className="menu-item">
          <a href="#logout" onClick={this.onLogout}>Logout</a>
        </li>
      </ul>
    );
  }
}
;;
