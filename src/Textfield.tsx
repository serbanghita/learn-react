import * as React from "react";
import {ThemeContext} from "./context";

export default class Textfield extends React.Component<{name: string, value?: string}, {}> {
  constructor(props) {
    super(props);
  }

  static contextType = ThemeContext;

  render() {
    console.log(this.context);
    return <>
      <input type="text" name={this.props.name} value={this.props.value} placeholder={this.context} />
    </>
  }
}
