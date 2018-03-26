import * as React from "react";

export interface IAppProps {
    title: string;
}

export default class App extends React.Component<IAppProps, {}> {
    public render() {
        console.log("props.children", this.props.children);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Here is my content.</p>
            </div>
        );
    }
}