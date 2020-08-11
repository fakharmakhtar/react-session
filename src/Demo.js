import React, { Component } from "react";

class Title extends Component {
  render() {
    return <h2>{this.props.title}</h2>;
  }
}

export default class Demo extends Component {
  constructor() {
    super();
    this.state = {
      title: "Ayy lmao"
    };
  }

  render() {
    return (
      <div>
        <Title title={this.state.title} />
        <input
          value={this.state.title}
          onChange={event => {
            this.setState({
              title: event.target.value
            });
          }}
        />
      </div>
    );
  }
}
