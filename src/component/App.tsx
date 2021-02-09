import * as React from "react";
import SomeComponent from "./SomeComponent";
import {Messages} from "../a/Messages";

export default class App extends React.Component<{}, {}> {

  public render() {

    return (
        <div>
            <h1>App</h1>
          <Messages />
            {/*<SomeComponent />*/}
        </div>
    );
  }
}
