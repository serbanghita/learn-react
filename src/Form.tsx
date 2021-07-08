import * as React from "react";
import FieldLabel from "./FieldLabel";
import Textfield from "./Textfield";
import Select from "./Select";
import {ThemeContext} from "./context";

export default class Form extends React.Component<{}, {}> {

  public render() {

    return (
      <ThemeContext.Provider value="dark">
        <form>
          <FieldLabel label="First name">
            <Textfield name="firstName" />
          </FieldLabel>
          <FieldLabel label="Last name">
            <Textfield name="lastName" />
          </FieldLabel>
          <FieldLabel label="Ice cream flavor">
            <Select
              name="iceCream"
              options={[
                {label: 'Chocolate',value: 'chocolate'},
                {label: 'Vanilla',value: 'vanilla'},
                {label: 'Strawberry',value: 'strawberry'}
              ]}
            />
          </FieldLabel>
        </form>
      </ThemeContext.Provider>
    );
  }
}
