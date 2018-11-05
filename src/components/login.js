import React, { Component } from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions'; //Import your actions
import '../css/login.css';
import {firebase} from '../firebase/firebase';
import logo from '../logo.svg';


export class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            pass: '',
            error: '',
        }
        console.log(this.props);
    }

    setEmail = (event) =>{
        this.setState({
            email: event.target.value
        })
    };

    setPass = (event) =>{
        this.setState({
            pass: event.target.value
        })
    };

    onLogin = () =>{
        let email = this.state.email;
        let pass = this.state.pass;
        let that = this;
        firebase.auth().signInWithEmailAndPassword(email, pass).then(function(user){
            that.props.authenticate();
            that.props.history.push('/home')
            console.log(that.props);
        }).catch((error) => {
            if (error.code === 'auth/invalid-email')
                console.log(error.code)            
            if(error.code === 'auth/wrong-password')
                console.log(error.code)

            this.setState({
                error: error.code
            })
        });
    }
    
  render() {
    return (
      <div className='App'>
        <div className='Login'>
            <div className='form'>
                <img src={logo} className="App-logo" alt="logo" />
                <form id='login'>
                    <p>Email</p>
                    <input id='email' type='text' value={this.state.email} onChange={this.setEmail}/>
                    <br/>
                    <p>Password</p>
                    <input id='pass' type='text' value={this.state.pass} onChange={this.setPass}/>
                    <br/>
                </form>
                <button onClick={this.onLogin}>Login</button>

                <p style={{color: 'yellow', fontSize: '20px'}}>{this.state.error}</p>
            </div>
        </div>
      </div>
    );
  }
}

// The function takes data from the app current state,
// and insert/links it into the props of our component.
// This function makes Redux know that this component needs to be passed a piece of the state
function mapStateToProps(state, props) {
    return {
        authentication: state.loginReducer.authentication,
    }
}

// Doing this merges our actions into the component’s props,
// while wrapping them in dispatch() so that they immediately dispatch an Action.
// Just by doing this, we will have access to the actions defined in out actions file (action/Login.js)
function mapDispatchToProps(dispatch) {
    return bindActionCreators(Actions, dispatch);
}

//Connect everything
export default connect(mapStateToProps, mapDispatchToProps)(Login);