import React, { Component } from "react";

import "../../css/organisms/image.css";

export default class Image extends Component {
  state = {
    on: false,
  };

  toggle = () => {
    this.setState({
      on: !this.state.on,
    });
  };
  render() {
    return (
      <div>
        {this.state.on && (
          <div className="card-open">
            <h1>Bella raga</h1>
            <button onClick={this.toggle}>Show/Hide</button>
          </div>
        )}

        <button onClick={this.toggle}>Show/Hide</button>
      </div>
    );
  }
}
