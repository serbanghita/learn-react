import * as React from "react";
import World from "./World";

export default class App extends React.Component<{}, {}> {

  public render() {

    const w = new World();
    w.addPlayer("a", {x: 100, y: 101}, 10, 100);
    w.addPlayer("b", {x: 200, y: 201}, 11, 100);
    w.run();

    return (
        <div>
            <h1>App</h1>
        </div>
    );
  }
}
