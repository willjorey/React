import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {Navigation} from './navigation';
import '../css/home.css';

export class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            orgs: [],
        }
    }

  render() {
    return (
      <div className='home' >
        <Navigation/>
      </div>
    );
  }
}


function mapStateToProps(state, props) {
    return {
        authentication: state.loginReducer.authentication,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Home);