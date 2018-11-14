import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import {Navigation} from './navigation';
import {fetchTournament_Key} from '../firebase/services';

export class TournInfo extends Component {
    constructor(props){
        super(props);
        this.org = this.props.org;
        this.tournaments = this.org.Tournaments;

        this.key = this.props.match.params.t_name;
        this.state = {
            tournaments: [],
            showModal: false,
            tournament: {}
        };
    };

    componentDidMount = () =>{
        let that = this;
        fetchTournament_Key(this.key).then((snapshot) => {
            that.setState({
                tournament: snapshot,
            })
        });
    }

  render() {
    return (
      <div className='TournInfo'>
        <Navigation/>
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
export default connect(mapStateToProps, mapDispatchToProps)(TournInfo);