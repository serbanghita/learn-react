import * as React from "react";
import AppStorageData, {IAppStorageData, ICard, IMenuItem, IUser, IWallMsg} from "./Storage";

interface ICardProps {
  cardData: ICard;
}

class CardSimple extends React.Component<ICardProps, {}> {

  public render() {
    const cardData = this.props.cardData;

    return (
      <div className="card">
        <div className="card-header">
          <div className="card-title h5">{cardData.title}</div>
          <div className="card-subtitle text-gray">{cardData.subtitle}</div>
        </div>
        <div className="card-footer">
          <button className={`btn btn-primary ${!cardData.canBuy ? "disabled" : ""}`}>{cardData.btnLabel}</button>
        </div>
      </div>
    );
  }

}

class CardWithImage extends React.Component<ICardProps, {}> {

  public render() {
    const cardData = this.props.cardData;

    return (
      <div className="card">
        <div className="card-image">
        <img src={cardData.imgSrc} className="img-responsive" />
        </div>
        <div className="card-header">
          <div className="card-title h5">{cardData.title}</div>
          <div className="card-subtitle text-gray">{cardData.subtitle}</div>
        </div>
        <div className="card-body">
          {cardData.body}
        </div>
        <div className="card-footer">
          <button className={`btn btn-primary ${!cardData.canBuy ? "disabled" : ""}`}>{cardData.btnLabel}</button>
        </div>
      </div>
    );
  }

}

interface ILeftMenuProps {
  onLogout: () => void;
  userData: IUser;
  menuData: IMenuItem[];
}

class LeftMenu extends React.Component<ILeftMenuProps, {}> {

  constructor(props) {
    super(props);
    this.onNav = this.onNav.bind(this);
  }

  private onNav(e) {
    e.preventDefault();
    switch (e.target.dataset.id) {
      case "logout":
        this.props.onLogout();
        break;
    }
  }

  public render() {

    const userData = this.props.userData;
    const menuData = this.props.menuData;

    const menu = menuData.map((menuItemData, index) => {
      return (
        <li className="menu-item" key={index}>
          {menuItemData.notifications && <div className="menu-badge">
            <label className="label label-primary">{menuItemData.notifications}</label>
          </div>}
          <a data-id={menuItemData.id} href={menuItemData.link} className={menuItemData.selected ? "active" : ""} onClick={this.onNav}>
            {menuItemData.label}
          </a>
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
        {menu}
      </ul>
    );
  }
}

class SignupForm extends React.Component<{}, {}> {
  public render() {
    return (
      <form>
        <div className="form-group">
          <label className="form-label" htmlFor="input-example-1">Username</label>
          <input className="form-input" type="text" id="input-example-1" placeholder="Username" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="input-example-2">Password</label>
          <input className="form-input" type="password" id="input-example-2" placeholder="Password (at least 8 characters)" />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="input-example-3">Password again</label>
          <input className="form-input" type="password" id="input-example-3" placeholder="Confirm password" />
        </div>

        <div className="form-group">
          <label className="form-label">Gender</label>
          <label className="form-radio">
            <input type="radio" name="gender" defaultChecked={true} />
              <i className="form-icon" /> Male
          </label>
          <label className="form-radio">
            <input type="radio" name="gender" />
              <i className="form-icon" /> Female
          </label>
        </div>

        <div className="form-group">
          <label className="form-checkbox">
            <input type="checkbox" />
              <i className="form-icon" /> I agree with the <a href="#terms">Terms and Conditions</a>
          </label>
        </div>

        <div className="form-group">
          <button className="btn btn-primary btn-lg">Signup</button>
        </div>
      </form>
    );
  }
}

interface IHeaderLoginFormProps {
  userData: IUser;
  onLogin: (username: string, password: string) => void;
}

class HeaderLoginForm extends React.Component<IHeaderLoginFormProps, {}> {

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
            <input className="form-input" type="text" id="input-example-1u" placeholder="Username" defaultValue="test" ref={(el) => this.usernameInput = el as HTMLInputElement} />
            <input className="form-input" type="password" id="input-example-2p" placeholder="Password" defaultValue="test" ref={(el) => this.passwordInput = el as HTMLInputElement} />
            <button className={`btn btn-primary input-group-btn ${this.props.userData.isLoggingIn ? `loading disabled` : ``}`} onClick={this.onLogin}>Login <i className="form-icon icon icon-arrow-right" /></button>
          </div>
        </div>
      </form>
    );
  }
}

class AnonymousHomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="columns">
        <div className="column col-6">
          <p>Morbi aliquet tincidunt risus pretium imperdiet. Vestibulum vel semper arcu. Nulla vitae nibh tellus.
            Aenean laoreet vulputate mauris eu malesuada. Pellentesque eu est dui. Donec finibus tellus ut cursus
            maximus. Duis semper feugiat iaculis. Maecenas id purus sit amet lectus aliquet aliquet.
            Integer ac risus lectus.</p>
          <blockquote>
            <p>The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life. </p>
            <cite>- Bill Gates</cite>
          </blockquote>
          <p>Quisque faucibus, est et ultricies fermentum, risus ipsum
            viverra nunc, ut hendrerit felis massa eu odio. Vivamus mollis lacinia
            metus, eu elementum erat fringilla quis. Donec faucibus urna sed pharetra
            semper</p>

          <button className="btn">Learn more</button>
        </div>
        <div className="divider-vert" data-content="OR" />
        <div className="column col-3 col-mx-left">
          <SignupForm/>
        </div>
      </div>
    );
  }
}

interface ILoggedInPageProps {
  wallData: IWallMsg[];
  userData: IUser;
  menuData: IMenuItem[];
  onLogout: () => void;
}

class LoggedInPage extends React.Component<ILoggedInPageProps, {}> {
  public render() {
    return (
      <div className="columns">
        <div className="column col-3">
          <LeftMenu userData={this.props.userData} menuData={this.props.menuData} onLogout={this.props.onLogout}/>
        </div>
        <div className="column col-9">
          <WallExample wallData={this.props.wallData}/>
        </div>
      </div>
    );
  }
}

class WelcomePage extends React.Component<{}, {}> {
  public render() {
    return (
      <div>
        <p>Mauris vestibulum, dolor eget ultricies volutpat, leo quam lacinia lectus, sit amet feugiat justo magna
          sed metus. Vivamus dignissim eros id diam vehicula, vehicula vestibulum mauris tempor. Aliquam malesuada
          nibh porttitor sem dictum volutpat. Nam mollis libero a lacus semper imperdiet.</p>

        <p>Vestibulum rhoncus diam ac velit interdum, cursus mollis ex pharetra. Pellentesque a purus ac odio semper
          consectetur sed quis odio. Nullam placerat tempus arcu, sed mollis ante blandit non. Quisque ac molestie
          mauris. Mauris ultricies metus et volutpat tristique. Maecenas sed vehicula ipsum.</p>

        <p>Ut finibus bibendum magna, eget tempor nisl dictum sit amet. Ut a quam ligula.</p>
        <div className="divider" />
        <div className="empty">
          <div className="empty-icon">
            <i className="icon icon-people" />
          </div>
          <p className="empty-title h5">You have no new messages</p>
          <p className="empty-subtitle">Click the button to start a conversation.</p>
          <div className="empty-action">
            <button className="btn btn-primary">Send a message</button>
          </div>
        </div>
      </div>
    );
  }
}

interface IWallMsgProp {
  wallMsgData: IWallMsg;
}

class WallMsg extends React.Component<IWallMsgProp, {}> {
  public render() {
    const wallMsgData = this.props.wallMsgData;

    const avatar = (
      wallMsgData.avatar ?
      <img src={wallMsgData.avatar} alt="Avatar" /> :
      <figure className="avatar" data-initial={wallMsgData.username.split(" ").map((w) => w[0]).join("")} />
    );

    return (
      <div className="tile">
        <div className="tile-icon">
          <figure className="avatar">
            {avatar}
          </figure>
        </div>
        <div className="tile-content">
          <p className="tile-title">{wallMsgData.username}</p>
          <p className="tile-subtitle">{wallMsgData.message}...</p>
        </div>
      </div>
    );
  }
}

interface IWallExampleProps {
  wallData: IWallMsg[];
}

class WallExample extends React.Component<IWallExampleProps, {}> {
  public render() {
    const wallData = this.props.wallData;

    const wallMsgs = wallData.map((wallMsgData, index) => {
      return <WallMsg key={index} wallMsgData={wallMsgData}/>;
    });

    return (
      <div className="panel">
        <div className="panel-header">
          <div className="panel-title h6">Your wall</div>
        </div>
        <div className="panel-body">
          {wallMsgs}
        </div>
        <div className="panel-footer">
          <div className="input-group">
            <input type="text" className="form-input" placeholder="Hello" />
              <button className="btn btn-primary input-group-btn">Send</button>
          </div>
        </div>
      </div>
    );
  }
}


export interface IAppProps {
  title: string;
  titleColor: string;
}

export interface IAppState extends IAppStorageData {

}

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = AppStorageData;
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  private onLogin(username: string, password: string) {
    // Intermediary state for the UI.
    this.setState((prevState: IAppState) => {
      const user = Object.assign({}, prevState.user, { isLoggingIn: true });
      return { user };
    });

    // Simulate a login XHR delay.
    setTimeout(() => {
      this.setState(((prevState: IAppState) => {
        let partialUserData;

        if (username === "test" && password === "test") {
          partialUserData = { isLoggedIn: true, isLoggingIn: false, username };
        } else {
          partialUserData = { isLoggedIn: false, isLoggingIn: false };
        }

        const user = Object.assign({}, prevState.user, partialUserData);

        return { user };
      }));
    }, 1000);

  }

  private onLogout() {
    this.setState((prevState: IAppState) => {
      const user = Object.assign({}, prevState.user, { isLoggingIn: false, isLoggedIn: false });
      return { user };
    });
  }

  public render() {
    const pStyle = {
      color: this.props.titleColor
    };

    const pageContent = (
      this.state.user.isLoggedIn ?
        (
          <LoggedInPage
            userData={this.state.user}
            wallData={this.state.wall}
            menuData={this.state.menu}
            onLogout={this.onLogout}
          />
        ) :
        <AnonymousHomePage />
    );

    return (
        <div className="container grid-xl">
          <div className="columns">
            <div className="column col-6">
              <h1>{this.props.title} <small className="label">the catch phrase</small></h1>
            </div>
            <div className="column col-6">
              <HeaderLoginForm userData={this.state.user} onLogin={this.onLogin} />
            </div>
          </div>
          {pageContent}
        </div>
    );
  }
}
