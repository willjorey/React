import React from 'react';
import * as Actions from '../actions/index';
import reducer from '../reducers/index';

describe('Login reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {}).profileReducer).toEqual({profile:{email:'My email'}})
    })
});