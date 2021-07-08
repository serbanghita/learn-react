import * as React from "react";

export default class FieldLabel extends React.Component<{label: string}, {}> {

  constructor(props) {
    super(props);
  }

  render() {
    return <>
      <label>{this.props.label}</label>
      {this.props.children}
    </>
  }


}
