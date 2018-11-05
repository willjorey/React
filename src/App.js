import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Main from './components/main';

import rootReducer from './reducers';

const store = createStore(rootReducer);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

export default App;
