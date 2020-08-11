import React, { Component } from "react";

class Thumbnail extends Component {
  render() {
    const { size, src } = this.props;
    return <picture className={size} src={src} />;
  }
}

Thumbnail.defaultProps = {
  size: "sm",
  src: "http://[path-of-your-default-picture]"
};

export default Thumbnail;
