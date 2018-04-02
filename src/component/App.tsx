import * as React from "react";

interface ICardProps {
  imgSrc?: string;
  title: string;
  subtitle: string;
  body?: string;
  btnLabel: string;
  canPlay: boolean;
}

class CardSimple extends React.Component<ICardProps, {}> {

  public render() {
    return (
      <div className="card">
        <div className="card-header">
          <div className="card-title h5">{this.props.title}</div>
          <div className="card-subtitle text-gray">{this.props.subtitle}</div>
        </div>
        <div className="card-footer">
          <button className={`btn btn-primary ${!this.props.canPlay ? "disabled" : ""}`}>{this.props.btnLabel}</button>
        </div>
      </div>
    );
  }

}

class CardWithImage extends React.Component<ICardProps, {}> {

  public render() {
    return (
      <div className="card">
        <div className="card-image">
        <img src={this.props.imgSrc} className="img-responsive" />
        </div>
        <div className="card-header">
          <div className="card-title h5">{this.props.title}</div>
          <div className="card-subtitle text-gray">{this.props.subtitle}</div>
        </div>
        <div className="card-body">
          {this.props.body}
        </div>
        <div className="card-footer">
          <button className={`btn btn-primary ${!this.props.canPlay ? "disabled" : ""}`}>{this.props.btnLabel}</button>
        </div>
      </div>
    );
  }

}

interface ILeftMenuProps {
  onLogout: () => void;
  userData: IUserData;
}

class LeftMenu extends React.Component<ILeftMenuProps, {}> {

  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }

  private onLogout(e) {
    e.preventDefault();
    this.props.onLogout();
  }

  public render() {

    const userData = this.props.userData;

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
        <li className="menu-item">
          <div className="menu-badge">
            <label className="label label-primary">2</label>
          </div>
          <a href="#logout">My profile</a>
        </li>
        <li className="divider" data-content="Game" />
        <li className="menu-item">
          <a href="#index">Play!</a>
        </li>
        <li className="menu-item">
          <a href="#index">Tutorials</a>
        </li>
        <li className="menu-item">
          <a href="#index" className="active">
            Achievements
          </a>
        </li>
        <li className="menu-item">
          <a href="#index">
            Story
          </a>
        </li>
        <li className="divider" />
        <li className="menu-item">
          <a href="#logout" onClick={this.onLogout}>Logout</a>
        </li>
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

class HomePageContent extends React.Component<{}, {}> {
  public render() {

    const tutorialCardsData: ICardProps[] = [
      { title: "Moving", subtitle: "Number 0", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: true },
      { title: "Avoiding", subtitle: "Number 1", btnLabel: "Play", imgSrc: "img/macos-sierra-2.jpg", canPlay: false },
      { title: "Switching", subtitle: "Number 2", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Eating", subtitle: "Number 3", btnLabel: "Play", imgSrc: "img/osx-el-capitan-2.jpg", canPlay: false },
      { title: "Bomb", subtitle: "Number 4", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Boomerang", subtitle: "Number 5", btnLabel: "Play", imgSrc: "img/osx-yosemite.jpg", canPlay: false },
      { title: "Enemies", subtitle: "Number 6", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false }
    ];

    const tutorialCards = tutorialCardsData.map((card: ICardProps, index: number) => {
      return (
        <div className="column col-3" key={index}>
          <CardSimple title={card.title} subtitle={card.subtitle} btnLabel={card.btnLabel} imgSrc={card.imgSrc} canPlay={card.canPlay} />
        </div>
      );
    });

    const numberCardsData: ICardProps[] = [
      { title: "Zero", subtitle: "Number 0", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "One", subtitle: "Number 1", btnLabel: "Play", imgSrc: "img/macos-sierra-2.jpg", canPlay: false },
      { title: "Two", subtitle: "Number 2", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Three", subtitle: "Number 3", btnLabel: "Play", imgSrc: "img/osx-el-capitan-2.jpg", canPlay: false },
      { title: "Four", subtitle: "Number 4", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Five", subtitle: "Number 5", btnLabel: "Play", imgSrc: "img/osx-yosemite.jpg", canPlay: false },
      { title: "Six", subtitle: "Number 6", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Seven", subtitle: "Number 7", btnLabel: "Play", imgSrc: "img/osx-el-capitan-2.jpg", canPlay: false },
      { title: "Eight", subtitle: "Number 8", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Nine", subtitle: "Number 9", btnLabel: "Play", imgSrc: "img/macos-sierra-2.jpg", canPlay: false },
      { title: "Ten", subtitle: "Number 10", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Eleven", subtitle: "Number 11", btnLabel: "Play", imgSrc: "img/osx-el-capitan-2.jpg", canPlay: false }
    ];

    const numberCards = numberCardsData.map((card: ICardProps, index: number) => {
      return (
        <div className="column col-2" key={index}>
          <CardSimple title={card.title} subtitle={card.subtitle} btnLabel={card.btnLabel} imgSrc={card.imgSrc} canPlay={card.canPlay} />
        </div>
      );
    });

    const letterCardsData: ICardProps[] = [
      { title: "A", subtitle: "Letter A", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "B", subtitle: "Letter B", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "C", subtitle: "Letter C", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "D", subtitle: "Letter D", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "E", subtitle: "Letter E", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "F", subtitle: "Letter F", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "G", subtitle: "Letter G", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "H", subtitle: "Letter H", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "I", subtitle: "Letter I", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "J", subtitle: "Letter J", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "K", subtitle: "Letter K", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "L", subtitle: "Letter L", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "M", subtitle: "Letter M", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "N", subtitle: "Letter N", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "O", subtitle: "Letter O", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "P", subtitle: "Letter P", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Q", subtitle: "Letter Q", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "R", subtitle: "Letter R", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "S", subtitle: "Letter S", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "T", subtitle: "Letter T", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "U", subtitle: "Letter U", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "V", subtitle: "Letter V", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "W", subtitle: "Letter W", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "X", subtitle: "Letter X", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Y", subtitle: "Letter Y", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
      { title: "Z", subtitle: "Letter Z", btnLabel: "Play", imgSrc: "img/osx-el-capitan.jpg", canPlay: false },
    ];

    const letterCards = letterCardsData.map((card: ICardProps, index: number) => {
      return (
        <div className="column col-2" key={index}>
          <CardSimple key={index} title={card.title} subtitle={card.subtitle} btnLabel={card.btnLabel} imgSrc={card.imgSrc} canPlay={card.canPlay} />
        </div>
      );
    });

    const scenarioCardsData: ICardProps[] = [
      {
        title: "I'm hungry!",
        subtitle: "Eat 1000 food",
        body: "Sed aliquet sit amet est a cursus. Nullam tempus quam augue, eget aliquet libero tempus quis!",
        btnLabel: "Play",
        imgSrc: "img/osx-el-capitan.jpg",
        canPlay: true
      },
      {
        title: "It's rush hour!",
        subtitle: "Get all cristals in 100 seconds",
        body: "Morbi iaculis nunc urna, a aliquet ipsum viverra ut!",
        btnLabel: "Play",
        imgSrc: "img/osx-el-capitan-2.jpg",
        canPlay: true
      },
    ];

    const scenarioCards = scenarioCardsData.map((card: ICardProps, index: number) => {
      return (
        <div className="column col-4" key={index}>
          <CardWithImage key={index} title={card.title} subtitle={card.subtitle} btnLabel={card.btnLabel}
                         imgSrc={card.imgSrc} canPlay={card.canPlay} body={card.body} />
        </div>
      );
    });

    return (
      <div>
        <div className="divider text-center" data-content="Characters" />

        <div className="columns">
          <div className="column col-6">

            <div className="columns">
              <div className="column col-3">
                <figure className="avatar avatar-xl">
                  <img src="img/avatar-1.png" alt="..." />
                </figure>
              </div>
              <div className="column col-9">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel porta dolor.
                  Sed iaculis eros eu condimentum feugiat. Praesent suscipit, nulla vel iaculis varius,
                  velit justo rutrum sapien, sit amet ornare est purus sit amet eros. Proin a tortor tincidunt,
                  imperdiet eros vitae, vulputate risus. Sed aliquet sit amet est a cursus. Nullam tempus
                  quam augue, eget aliquet libero tempus quis. Nam enim nisl, eleifend at tortor vel,
                  facilisis elementum nulla. Sed tempor bibendum laoreet. Praesent facilisis porta ex,
                  quis lacinia nulla dapibus ut.
                </p>
              </div>
            </div>

          </div>
          <div className="column col-6">

            <div className="columns">
              <div className="column col-9">
                <p>
                  Phasellus suscipit lorem at augue venenatis dapibus. Sed non metus condimentum, mollis
                  ex a, egestas orci. Nullam justo ante, sodales ac metus ut, lobortis bibendum felis.
                  Vivamus fringilla mauris quam, eu tincidunt tellus congue vitae. Aliquam feugiat ante
                  sit amet nunc finibus venenatis. Fusce id justo mattis, tincidunt lectus eu, efficitur
                  lacus. Vestibulum et porttitor eros, et faucibus metus. Pellentesque sed nisl elit.
                  Maecenas lacinia ac mi nec egestas. Cras ut finibus lorem. Sed ultrices porta elementum.
                  Duis sed malesuada nisl, in hendrerit libero.
                </p>
              </div>
              <div className="column col-3">
                <figure className="avatar avatar-xl">
                  <img src="img/avatar-2.png" alt="..." />
                </figure>
              </div>

            </div>
          </div>
        </div>

        <div className="divider text-center" data-content="Story" />

        <p>Morbi iaculis nunc urna, a aliquet ipsum viverra ut. Phasellus eu massa nulla. Ut sit amet massa velit.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean
          fringilla lacus id nibh faucibus tincidunt. Aliquam sit amet lacus facilisis, iaculis nulla molestie,
          blandit urna. Maecenas quis leo ut dolor vehicula mollis.</p>
        <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Integer
          pretium gravida eleifend. Morbi at augue in tortor dapibus fermentum non a ante. Donec tempor hendrerit
          purus a hendrerit. Vivamus vitae efficitur mi. Sed pulvinar magna id turpis maximus fringilla.</p>
        <p>Phasellus lectus magna, mattis a consequat mollis, hendrerit laoreet nunc. Praesent dapibus mi a diam
          interdum, pretium pulvinar magna congue. In viverra ligula libero, sit amet euismod elit aliquet eget.</p>

        <div className="divider text-center" data-content="Tutorials" />

        <div className="columns cards">
          {tutorialCards}
        </div>

        <div className="divider text-center" data-content="Numbers" />

        <div className="columns cards">
          {numberCards}
        </div>

        <div className="divider text-center" data-content="Letters" />

        <div className="columns cards">
          {letterCards}
        </div>

        <div className="divider text-center" data-content="Scenarios" />

        <div className="columns cards">
          {scenarioCards}
        </div>
      </div>
    );
  }
}

interface IHeaderLoginFormProps {
  userData: IUserData;
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
            <input className="form-input" type="text" id="input-example-1u" placeholder="Username" ref={(el) => this.usernameInput = el as HTMLInputElement} />
            <input className="form-input" type="password" id="input-example-2p" placeholder="Password" ref={(el) => this.passwordInput = el as HTMLInputElement} />
            <button className={`btn btn-primary input-group-btn ${this.props.userData.isLoggingIn ? `loading disabled` : ``}`} onClick={this.onLogin}>Login <i className="form-icon icon icon-arrow-right" /></button>
          </div>
        </div>
      </form>
    );
  }
}

export interface IAppProps {
  title: string;
  titleColor: string;
}

export interface IAppState {
  userData: IUserData;
}

interface IUserData {
  isLoggingIn: boolean;
  isLoggedIn: boolean;
  username: string;
  email: string;
  gender: "male" | "female";
  profilePic: string;
}

export default class App extends React.Component<IAppProps, IAppState> {

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      userData: {} as IUserData
    };
    this.onLogin = this.onLogin.bind(this);
    this.onLogout = this.onLogout.bind(this);
  }

  public componentDidMount() {
    const userData: IUserData = {
      isLoggingIn: false,
      isLoggedIn: false,
      username: "",
      email: "",
      gender: "male",
      profilePic: "img/avatar-4.png"
    };
    this.setState({userData});
  }

  private onLogin(username: string, password: string) {
    // Intermediary state for the UI.
    this.setState((prevState: IAppState) => {
      const userData = Object.assign({}, prevState.userData, { isLoggingIn: true });
      return { userData };
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

        const userData = Object.assign({}, prevState.userData, partialUserData);

        return { userData };
      }));
    }, 1000);

  }

  private onLogout() {
    this.setState((prevState: IAppState) => {
      const userData = Object.assign({}, prevState.userData, { isLoggingIn: false, isLoggedIn: false });
      return { userData };
    });
  }

  public render() {
    const pStyle = {
      color: this.props.titleColor
    };

    const loggedInContent = (
      <div className="columns">
        <div className="column col-3">
          <LeftMenu userData={this.state.userData} onLogout={this.onLogout}/>
        </div>
        <div className="column col-9">
          <HomePageContent/>
        </div>
      </div>
    );

    const anonymousContent = (
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

    return (
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
          {this.state.userData.isLoggedIn ? loggedInContent : anonymousContent}
        </div>
    );
  }
}
