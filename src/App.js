import React, { Component } from 'react';

import Login from './components/login'
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from './reducers';

const store = createStore(rootReducer);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Login/>
      </Provider>
    );
  }
}

export default App;
