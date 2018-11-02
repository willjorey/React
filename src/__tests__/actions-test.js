import React from 'react';
import * as actions from '../actions/index';

//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';
// REDUX TESTS
describe('Actions test', () => {
    it('Change authentication to true', () => {
        const expectedAction = {type: actions.SET_AUTH};
        expect(actions.authenticate()).toEqual(expectedAction);
    })
});