import React from 'react';
import * as Actions from '../actions/index';
import reducer from '../reducers/index';
import Login from '../components/login';
import Default from '../components/default';

// setup file enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });

//REDUX
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from '../reducers';

const store = createStore(rootReducer);



// const wrapper = shallow(<Login store={store}/>);
const wrapper = mount(<Login store={store}/>);

//ENZYZME TESTS
describe('Render Login', ()=>{
   // make our assertion and what we expect to happen 
   console.log(wrapper.debug());
 it('should render without throwing an error', () => {
  expect(wrapper.find('#login').exists()).toBe(true)
  })
})

// REDUX TESTS
describe('Login reducer', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {}).profileReducer).toEqual({profile:{email:'My email'}})
    })
});