import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {Navigation} from './navigation';
import AddTournModal from './addTourn-Modal';
import '../css/orgInfo.css';

export class OrgInfo extends Component {
    constructor(props){
        super(props);
        this.org = this.props.org;
        this.tournaments = this.org.Tournaments;
        this.state = {
            tournaments: [],
            showModal: false,
        }
    }

    componentDidMount = () =>{
        let list = [];
        for(let key in this.tournaments){
            this.tournaments[key]['key'] = key;
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
    
    onTournamentClick = (tourn) =>{
        this.props.setTournament(tourn);
    }

    onClickRow = (tourn) =>{
        console.log(this.state.tournaments)
        this.onTournamentClick(tourn);
        this.props.history.push('/organizations/' + this.org.name + '/' + tourn.key);
    }

  render() {
    return (
      <div className='OrgInfo'>
        <Navigation/>
        <button id='add-btn' onClick={this.openModal}>+ Add Tournament</button>

        <div id='banner'>
                <h3>{this.org.name}</h3>
        </div>
        <div id='container'>

            <AddTournModal show={this.state.showModal} orgKey={this.org.key} tournaments={this.state.tournaments} that={this}/>
            <div id='item-container'>
                <table className="table table-hover">
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
                            <tr key={i} onClick={() =>{this.onClickRow(t)}}>
                                <td>{i}</td>
                                <td><div>{t.name}</div></td>
                                <td><div>{t.date}</div></td>
                                <td><div>{t.end}</div></td>
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