import React from 'react';
import {Organizations} from '../components/organizations';

// setup file enzyme
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount, render } from 'enzyme';

configure({ adapter: new Adapter() });


const wrapper = shallow(<Organizations/>);

//ENZYZME TESTS
describe('Render Organizations', ()=>{
   // make our assertion and what we expect to happen 
  //  console.log(wrapper.debug());
  it('renders without crashing', () => {
    shallow(<Organizations/>);
  });

})
