import React, { Component } from "react";

export default class PlaceAlbumPhotos extends Component {
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
      <div class={this.props.class}>
        {this.state.on && (
          <div className="card-open">
            <h1>Bella raga</h1>
            <button onClick={this.toggle}>Show/Hide</button>
          </div>
        )}
        <img src={this.props.path} onClick={this.toggle} />
      </div>
    );
  }
}
