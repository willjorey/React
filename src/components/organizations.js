import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {fetchOrgs} from '../firebase/services';
import {Navigation} from './navigation';
import AddOrgModal from './addOrg-Modal';
import '../css/organizations.css'

export class Organizations extends Component {
    constructor(props){
        super(props);
        this.state = {
            tournaments:[],
            onOrganization:{},
            orgs: [],
            showModal: false,
            showTourn: false,
            name: '',
            url: '',
            msg:'',
        }
    }

    componentDidMount = () =>{
        if(this.state.orgs.length === 0){
            console.log('fetched');
            fetchOrgs(this); 

        }else{
            this.setState({
                orgs: this.props.organizations
            })
        }
   
    }

    openModal = () =>{
        this.setState({
            showModal: true
        })
    };

    onOrgClick = (org) =>{
        this.props.setOrg(org);
        let tourn = org.Tournaments;
        let temp = [];
        for(let key in  tourn){
            temp.push(tourn[key]);
        }
        this.setState({
            onOrganization: org,
            tournaments: temp,
            showTourn: true,
        });
    };


  render() {
    return (
      <div className='Organizations'>
        <Navigation/>
        <button id='add-btn' onClick={this.openModal}>+ Add Organization</button>
        {this.state.showTourn&&<button id='add-btn' onClick={this.openModal}>+ Add Tournament</button>}
        <h3 style={{color: 'white', fontSize:'30px'}}>Organizations</h3>

        <div id='container'>

            <AddOrgModal show={this.state.showModal} that={this}/>
            
            <div id="columns">
                <div id='item-container'>
                    {this.state.orgs.map( (org, i) =>  
                    <div key={i}>
                        
                        <button id='org-btn' onClick={()=>{this.onOrgClick(org)}}>
                            <p><img src={org.banner} height='100px' width='200px' alt=''/> {org.name} </p>
                        </button>
                    </div>
                    )}
                </div>

                <div id='tournaments-container'>
                    { this.state.showTourn && <div>
                        {this.state.tournaments.map( (t, i) =>  
                        <div key={i} style={{padding: '10px'}}>
                                <div id='tourn-div'>
                                <p style={{fontSize:'20px'}}> {t.name} </p>
                                </div>
                        </div>
                        )}
                    </div>}
                </div>
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
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Organizations);