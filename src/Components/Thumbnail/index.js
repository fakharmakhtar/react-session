import React, { Component } from "react";

class Thumbnail extends Component {
  render() {
    const { src } = this.props;
    return <img src={src} width='100px' alt="movie" className="movieImage" />;
  }
}


Thumbnail.defaultProps = {
  size: "sm",
  src: "https://image.flaticon.com/icons/svg/3248/3248136.svg"
}

export default Thumbnail;
