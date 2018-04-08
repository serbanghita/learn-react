import * as React from "react";
import {IUserData} from "./App";
import SignupForm, {ISignupFormData} from "./SignupForm";

interface IAnonymousPageContentProps {
  userData: IUserData;
  onSignup: (formData: ISignupFormData) => void;
}

export default class AnonymousPageContent extends React.Component<IAnonymousPageContentProps, {}> {
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
          <SignupForm onSignup={this.props.onSignup} userData={this.props.userData} />
        </div>
      </div>
    );
  }

}
