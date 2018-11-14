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
            date: '',
            end: '',
            START: null,
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

    setStartDate = (event) =>{
        let str = event.target.value;
        let d = new Date(str + ' EST');
        this.setState({
            date: event.target.value,
            START: d,
        });

    };

    setEndDate = (event) =>{
        this.setState({
            end: event.target.value,
        })
    };

    onSubmit = () =>{
        if(this.state.name !== '' && this.state.date !== '' && this.state.end !== ''){
            let date = this.state.START.toDateString();
            let obj = {};
            obj[date] = {'Gamekey': 'default'};
            //key value of new post
            let key = postTourn(obj);

            //Post new tournament under Organizations Collection
            obj = {};
            obj['date'] = this.state.date;
            obj['end'] = this.state.end;
            obj['name'] = this.state.name;
            updateOrg(this.props.orgKey, key, obj);
            let t = this.props.tournaments;
            t.push(obj);
            this.props.that.setState({
                tournaments: t
            })
            this.setState({
                msg: 'Tournament Created',
            })
        }else{
            this.setState({
                msg: 'A Field is Empty',
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

                    <p style={{color:'white'}}>Start Date</p>
                    <input placeholder='Houseleague' id='name-form'type='date' value={this.state.date} onChange={this.setStartDate}/>

                    <p style={{color:'white'}}>End Date</p>
                    <input placeholder='Houseleague' id='name-form'type='date' value={this.state.end} onChange={this.setEndDate}/>
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
