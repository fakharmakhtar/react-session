import React from 'react';
import ReactDOM from 'react-dom';
import Demo from './Demo';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: 'Hello World', subtitle: 'Subtitle' };
  }
  componentDidMount() {
    this.setState({
      title: 'Demo Component loaded'
    })
  }
  render() {
    return (
      <div className="App">
        <input value={this.state.title}
          onChange={event => {
            this.setState({ title: event.target.value });
          }}>
        </input>
        <Demo title={this.state.title} subtitle={this.state.subtitle} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);