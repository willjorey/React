import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {fetchOrgs} from '../firebase/services';
import {Navigation} from './navigation';
import AddOrgModal from './addOrg-Modal';
import '../css/organizations.css';

import {Link} from 'react-router-dom';

export class Organizations extends Component {
    constructor(props){
        super(props);
        this.state = {
            tournaments:[],
            onOrganization:{},
            orgs: [],
            showModal: false,
            showTourn: false,
        }
    }

    componentDidMount = () =>{
        let that = this;

        //Fetch all organizations and set to REDUX state organizations
        if(this.state.orgs.length === 0){
            console.log('fetched');
            fetchOrgs().then((snapshot) => {
                let list = [];
                for (let key in snapshot){
                    let temp = snapshot[key];
                    temp['key'] = key;
                    list.push(temp);
                }
                that.props.setOrganizations(list);
                that.setState({
                    orgs: that.props.organizations,
                });
            });; 

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

        <div id='container'>

            <AddOrgModal show={this.state.showModal} that={this}/>

                <div id='item-container'>
                    <table>
                        <thead>
                            <tr id='header'>
                                <th>#</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.orgs.map( (org, i) => 
                            <tr key={i}>
                                <td>{i}</td>
                                <td>
                                    <Link to={'/organizations/' + org.name} style={{textDecoration: 'none', color:'black'}} onClick={() =>{this.onOrgClick(org)}}>
                                        <div id="org">{org.name}</div>
                                    </Link>
                                </td>
                            </tr>
                            )}
                        </tbody>
                    </table>
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