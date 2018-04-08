import * as React from "react";

export default class WelcomePageContent extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="columns">
        <div className="column col-12">
          <div className="panel">
            <div className="panel-header">
              <div className="panel-title">Welcome to our community!</div>
            </div>
            <div className="panel-body">
              <p>Donec in urna nec velit interdum ultricies ac vitae dolor. Praesent ex augue, convallis ut eros eu,
                iaculis porta libero. Nunc est nunc, dignissim eget leo eget, pretium pellentesque nisl.
                Duis a diam pharetra, elementum tortor eu, facilisis tellus. Integer in neque turpis.</p>

              <p>Cras tincidunt lacus scelerisque, elementum magna at, posuere nisl. Curabitur fringilla libero dolor,
                non lobortis nulla laoreet at. Donec quis maximus libero, at ornare justo. Sed semper, erat nec porta
                ultrices, libero mauris consequat enim, id pulvinar nisl leo vitae mi. In ac urna nunc. Donec tristique
                dui tellus. In fringilla augue quis vestibulum sollicitudin.</p>

              <p>Nulla cursus consectetur lorem, sed molestie eros tincidunt sit amet. Mauris pulvinar dolor
                condimentum, fermentum risus non, viverra sapien. Donec euismod tellus sit amet elit pellentesque
                hendrerit.</p>

              <p>Fusce molestie, mauris vitae porta eleifend, est nulla pharetra lorem, et commodo est eros ut justo.</p>

              <p>
                <button className="btn">Story</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
