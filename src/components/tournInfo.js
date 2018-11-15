import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {Navigation} from './navigation';
import {fetchTournament_Key} from '../firebase/services';
import '../css/tournInfo.css';

export class TournInfo extends Component {
    constructor(props){
        super(props);
        this.key = this.props.match.params.t_name;
        this.tournament = this.props.tournament;
        this.date = new Date(this.tournament.date + 'EST');
        this.state = {
            tournaments: [],
            showModal: false,
            tournament: {},
            date: this.date,
        };
        console.log(this.props.tournament);
    };

    componentDidMount = () =>{
        let that = this;
        fetchTournament_Key(this.key).then((snapshot) => {
            that.setState({
                tournament: snapshot,
            });
        });
    };

    incr_date = () =>{
        this.date.setDate(this.date.getDate() + 1);
        this.setState({
            date: this.date,
        })
    }

    decr_date = () =>{
        this.date.setDate(this.date.getDate() - 1);
        this.setState({
            date: this.date,
        })
    }

  render() {
    return (
      <div className='TournInfo'>
        <Navigation/>
        <div id='date-bar'>
            <button onClick={this.decr_date}>Left</button>
            <h1>{this.state.date.toDateString()}</h1>
            <button onClick={this.incr_date}>Right</button>
        </div>
      </div>
    );  
  }
}


function mapStateToProps(state, props) {
    return {
        tournament: state.orgReducer.tourn,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(TournInfo);