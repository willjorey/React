import React from 'react';
import * as actions from '../actions/index';
import reducer from '../reducers/index';

//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
// REDUX TESTS
describe('Login reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {}).loginReducer).toEqual({authentication:false})
    });
});