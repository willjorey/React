import React from 'react';
import * as Actions from '../actions/index';
import reducer from '../reducers/index';
import {Login} from '../components/login';
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

const wrapper = shallow(<Login/>);

//ENZYZME TESTS
describe('Render Login', ()=>{
   // make our assertion and what we expect to happen 
  //  console.log(wrapper.debug());
  it('renders without crashing', () => {
    shallow(<Login/>);
  });
 
  it('Renders JSX', () => {
    const email = <p>Email</p>;
    expect(wrapper.contains(email)).toBe(true);
  });

  it('Changes state of email', () =>{
    const input = wrapper.find('#email');
    input.simulate('click');
    input.simulate('change', {
      target: {value: 'billyreyes@rogers.com'}
    });
    expect(wrapper.state('email')).toEqual('billyreyes@rogers.com')
  });

  it('Changes state of Password', () =>{
    const input = wrapper.find('#pass');
    input.simulate('click');
    input.simulate('change', {
      target: {value: 'test123'}
    });
    expect(wrapper.state('pass')).toEqual('test123')
  });

})
