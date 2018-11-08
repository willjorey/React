import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {Navigation} from './navigation';
import Modal from 'react-modal';


export class OrgInfo extends Component {
    constructor(props){
        super(props);
        this.org = this.props.org;
        this.tournaments = this.org.Tournaments;
        this.state = {
            tournaments: [],
            org:{},
            showModal: false,
            name: '',
            url: '',
            msg:'',
        }
    }

    componentDidMount = () =>{
        let list = [];
        for(let key in this.tournaments){
            list.push(this.tournaments[key])
        };
        this.setState({
            tournaments:list
        })
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

  render() {
    return (
      <div className='OrgInfo'>
        <Navigation/>
        <button id='add-btn' onClick={this.openModal}>+ Add Tournament</button>
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
                    <button id='submit-btn'>Submit</button>

                    <p style={{color: 'yellow', fontSize:'20px', marginLeft: '16%'}}>{this.state.msg}</p>
                </div>

                <div id='btn-container'>
                    <button id='close-btn' onClick={this.closeModal}>Close</button>
                </div>

                </Modal>
            </div>
            <div id='item-container'>

                {this.state.tournaments.map( (t, i) =>  
                <div key={i}>
                        <p>{t.name} </p>
                </div>
                )}
                </div>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state, props) {
    return {
        org: state.orgReducer.org,
        organizations: state.orgReducer.organizations,
        tournaments: state.orgReducer.tournaments,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(OrgInfo);