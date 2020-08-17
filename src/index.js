import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MovieItem from './Components/MovieItem';
import data from './data.json';
import "./styles.css";

class App extends Component {
  render() {
    return (
      <div className='App'>
        {
          data.map((movie, index) => {
            return <MovieItem key={index} movie={movie}>
              
            </MovieItem>
          })
        }
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
