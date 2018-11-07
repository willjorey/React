import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {Navigation} from './navigation';
import Modal from 'react-modal';

import {postOrg} from '../firebase/services';
import logo from '../logo.svg';


export class OrgInfo extends Component {
    constructor(props){
        super(props);
        this.org = this.props.organization
        this.state = {
            org:{},
            showModal: false,
            name: '',
            url: '',
            msg:'',
        }
    }

    openModal = () =>{
        this.setState({
            showModal: true
        })
    };
    
    closeModal = () =>{
        this.setState({
            showModal: false
        })
    };

    setName = (event) =>{
        this.setState({
            name: event.target.value
        })
    };

    setUrl = (event) =>{
        this.setState({
            url: event.target.value
        })
    };

    onSubmit = () =>{
        let obj = {name: this.state.name, banner: this.state.url, subscriptions: 0, Tournaments: {default:'test'}};
        if(this.state.name !== ''){
            postOrg(obj);
            this.setState({
               msg: 'Organization Added!',
           });
           this.state.orgs.push(obj);
        }else{
            this.setState({
                msg: 'Name: Field is Empty'
            })
        }

    }
  render() {
    return (
      <div className='OrgInfo'>
        <Navigation/>
        <button id='add-btn' onClick={this.openModal}>+ Add Game</button>
        <div id='container'>
            <h3 style={{color: 'white', fontSize:'30px'}}>{this.org.name}</h3>

            <div>
                <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
                contentLabel="Example Modal"
                className="Modal"
                style={{overlay:{backgroundColor: 'black', opacity: '0.8'} }}
                >

                <div id='form-container'>
                    <form>
                        <p style={{color:'white'}}>Name of Organization</p>
                        <input placeholder='NBA' id='name-form'type='text' value={this.state.name} onChange={this.setName}/>

                        <p style={{color:'white'}}>Logo Url</p>
                        <input placeholder='Optional' id='name-form'type='text' value={this.state.url} onChange={this.setUrl}/>
                    </form>
                    <button id='submit-btn' onClick={this.onSubmit}>Submit</button>

                    <p style={{color: 'yellow', fontSize:'20px', marginLeft: '16%'}}>{this.state.msg}</p>
                </div>

                <div id='btn-container'>
                    <button id='close-btn' onClick={this.closeModal}>Close</button>
                </div>

                </Modal>
            </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, props) {
    return {
        organization: state.orgReducer.org,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(OrgInfo);