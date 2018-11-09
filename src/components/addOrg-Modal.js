import React, { Component } from 'react';
import Modal from 'react-modal';
import {postOrg} from '../firebase/services';
import '../css/organizations.css'

export default class AddOrgModal extends Component {
    constructor(props){
        super(props);
        this.state = {
            showModal: false,
            showTourn: false,
            name: '',
            url: '',
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
        }else{
            this.setState({
                msg: 'Name: Field is Empty'
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
    );
  }
}
