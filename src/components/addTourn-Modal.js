import React, { Component } from 'react';
import Modal from 'react-modal';
import {postTourn, updateOrg} from '../firebase/services';

import '../css/organizations.css'

export default class AddTournModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            name: '',
            msg:'',
        }
    };
    componentWillReceiveProps(newProps){
        console.log(newProps);
        this.setState({
            showModal: newProps.show,
        })
    }
    
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

    onSubmit = () =>{
        if(this.state.name !== ''){
            let date = new Date().toDateString();
            let obj = {};
            obj[date] = {'Gamekey': 'default'};
            postTourn(obj);
            obj = {};
            obj['date'] = date;
            obj['end'] = date;
            obj['name'] = this.state.name;
            updateOrg(this.props.that.org.key, obj);
    
            this.setState({
                msg: 'Tournament Created',
            })
        }else{
            this.setState({
                msg: 'Name: Field is Empty',
            })
        }

    }

  render() {
    return (
        <div>
            <Modal
            isOpen={this.state.showModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            className="Modal"
            style={{overlay:{backgroundColor: 'black'} }}
            >

            <div id='form-container'>
                <form>
                    <p style={{color:'white'}}>Name of Tournament</p>
                    <input placeholder='Houseleague' id='name-form'type='text' value={this.state.name} onChange={this.setName}/>
                </form>
                <button id='submit-btn' onClick={this.onSubmit}>Submit</button>

                <p style={{color: 'yellow', fontSize:'20px', marginLeft: '16%'}}>{this.state.msg}</p>
            </div>

            <div id='btn-container'>
                <button id='close-btn' onClick={this.closeModal}>Close</button>
            </div>

            </Modal>
        </div>
    );
  }
}
