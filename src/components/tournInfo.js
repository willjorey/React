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

        this.startDate = new Date( this.tournament.date + 'EST');
        this.endDate = new Date( this.tournament.end + 'EST');

        this.state = {
            showModal: false,
            tournament: {},
            date: this.date,
            curr_games: [],
        };
    };

    componentDidMount = () =>{
        let that = this;
        fetchTournament_Key(this.key).then((snapshot) => {
            //Grab the current dates Games
            that.setState({
                tournament: snapshot,
            });
            let list = that.grabGames();
            that.setState({
                curr_games:list,
            })

        });
    };

    grabGames = ()=>{
        //Get games from the tournament state that holds only game date keys
        let games = this.state.tournament[this.date.toDateString()];
        let list = [];
        if (games !== null){
            for( let key in games){
                list.push(games[key])
            }
        };
        return list;
    }
    incr_date = () =>{
        //increment the Date and grab the games for that date
        this.date.setDate(this.date.getDate() + 1);
        let list = this.grabGames();
        this.setState({
            date: this.date,
            curr_games: list,

        })
        console.log(this.state.curr_games);

    }

    decr_date = () =>{
        //Decrement the Date and grab the games for that date
        this.date.setDate(this.date.getDate() - 1);
        let list = this.grabGames();
        this.setState({
            date: this.date,
            curr_games: list,

        })
    }

  render() {
    return (
      <div className='TournInfo'>
        <Navigation/>
        <h1>Start Date: {this.startDate.toDateString()}</h1>
        <h1>End Date: {this.endDate.toDateString()}</h1>

        <div id='button-bar'>
            <button>+ Add Game</button>
        </div>

        <div id='date-bar'>
            <button onClick={this.decr_date}>Left</button>
            <h1>{this.state.date.toDateString()}</h1>
            <button onClick={this.incr_date}>Right</button>
        </div>
        <div id='games-list'>
            {this.state.curr_games.map( (game,i) => 
                <div key={i}>
                    <p>{game.hName} VS {game.aName}</p>
                </div>
            )}
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