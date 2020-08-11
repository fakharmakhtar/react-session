import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import MovieItem from "./Components/MovieItem";
import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <MovieItem />
      </Fragment>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
