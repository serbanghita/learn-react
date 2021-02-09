import * as React from "react";
import Subject from "../observer_pattern/Subject";

export default class SomeComponent extends React.Component<{}, {}> {

  componentDidMount() {

  }

  onClick(e) {
    e.preventDefault();
    console.log(e);
  }

  public render() {

    return (
      <div>
        <a href="#" onClick={this.onClick}>Show error</a>
      </div>
    );
  }
}
