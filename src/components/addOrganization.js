import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {postOrg} from '../firebase/services';
import {Navigation} from './navigation';

export class AddOrganization extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
        }
    }

    setName = (event) => {
        this.setState({
            name: event.target.value,
        })
    };

    onSubmit = () =>{
        let obj = {name: this.state.name, banner: '', subscriptions: 0, Tournaments: {default:'test'}};
        postOrg(obj);
    };

  render() {
    return (
      <div className='AddOrganization'>
        <Navigation/>
        <h3>Add Organization</h3>
        <div style={{border: '1px solid white'}}>
        <form style={{padding:'10px'}}>
            <p>Name</p>
            <input id='name' type='text' value={this.state.name} onChange={this.setName}/>
        </form>
        <button style={{width:'150px'}} onClick={this.onSubmit}>Submit</button>
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
export default connect(mapStateToProps, mapDispatchToProps)(AddOrganization);