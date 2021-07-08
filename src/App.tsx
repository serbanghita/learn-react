import * as React from "react";
import Form from "./Form";

export default class App extends React.Component<{}, {}> {

  public render() {

    return (
        <div>
            <h1>App</h1>
          <Form />
        </div>
    );
  }
}
