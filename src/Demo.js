import React, { Component } from 'react';

class Demo extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <br />
        <span>{this.props.subtitle}</span>
      </div>
    );
  }
}

export default Demo;