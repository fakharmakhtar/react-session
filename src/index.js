import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import MovieItem from './Components/MovieItem';
import data from './data.json';
import "./styles.css";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useRouteMatch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className='App'>
          <Link to='/'>Home</Link>
          <br />
          <br />
          <Switch>
            <Route path='/movies'>
              <Movies />
            </Route>
            <Route path=''>
              <Link to='/movies'>Movies</Link>
            </Route>

          </Switch>
        </div>
      </Router>
    );
  }
}

function Movies() {
  const { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route path='/movies/:id' render={({ match }) => {
          const id = parseInt(match.params.id);
          const movie = data.find(e => e.id === id);
          return <MovieItem movie={movie} />
        }} />
        <Route path={path}>
          {
            data.map((movie) => {
              return (
                <Fragment key={movie.id}>
                  <Link to={`/movies/${movie.id}`}>{movie.title}</Link><br />
                </Fragment>
              )
            })
          }
        </Route>
      </Switch>
    </div>
  )
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
