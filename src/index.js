import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import BooksContainer from './containers/bookContainer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  console.log(store)
  return (
    <Provider store={store}>
      <div className='App'>
        <BooksContainer />
      </div>
    </Provider>
  )
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App/>, rootElement);
