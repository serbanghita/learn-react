import * as React from "react";

export default class Select extends React.Component<{name: string, options: {label: string, value: string}[]}, {}> {
  constructor(props) {
    super(props);
  }

  render() {
    return <>
      <select name={this.props.name}>
        {this.props.options.map((option, index) => {
          return <option key={index} value={option.value}>{option.label}</option>
        })}
      </select>
    </>
  }
}
