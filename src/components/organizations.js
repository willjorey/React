import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {fetchOrgs} from '../firebase/services';
import {Navigation} from './navigation';

import '../css/organizations.css'

export class Organizations extends Component {
    constructor(props){
        super(props);
        this.state = {
            orgs: [],
        }
    }

    componentDidMount = () =>{
        fetchOrgs(this);
    }
    
  render() {
    return (
      <div className='Organizations'>
        <Navigation/>
        <h3 style={{color: 'white', fontSize:'30px'}}>Organizations</h3>
        <div id='item-container'>
                {this.state.orgs.map( (org, i) =>  
                <div>
                    <p id='item-name'>{org.name}</p>
                    <img width='400px' height='200px 'src={org.banner}/>
                </div>

                    )}
        </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Organizations);