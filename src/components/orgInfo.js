import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {Navigation} from './navigation';
import AddTournModal from './addTourn-Modal';
import '../css/orgInfo.css';
import {Link} from 'react-router-dom';
export class OrgInfo extends Component {
    constructor(props){
        super(props);
        this.org = this.props.org;
        this.tournaments = this.org.Tournaments;
        this.state = {
            tournaments: [],
            showModal: false,
            name: '',
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
    

  render() {
    return (
      <div className='OrgInfo'>
        <Navigation/>
        <button id='add-btn' onClick={this.openModal}>+ Add Tournament</button>

        <div id='banner'>
                <h3>{this.org.name}</h3>
        </div>
        <div id='container'>

            <AddTournModal show={this.state.showModal} that={this}/>
            <div id='item-container'>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Start</th>
                            <th>End</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tournaments.map( (t, i) => 
                            <tr>
                                <td>{i}</td>
                                <td><Link id ='link' to={'/organizations/' + this.org.name + '/' + t.name}><div>{t.name}</div></Link></td>
                                <td><Link id ='link' to={'/organizations/' + this.org.name + '/' + t.name}><div>{t.date}</div></Link></td>
                                <td><Link id ='link' to={'/organizations/' + this.org.name + '/' + t.name}><div>{t.end}</div></Link></td>

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
        tournaments: state.orgReducer.tournaments,

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(OrgInfo);