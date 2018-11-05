import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './login';
import Home from './home';

const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={ (props)  => (
        rest.auth === true
        ? <Component {...props}/>
        : <Redirect to= '/'/>
    )}/>
)   

class Main extends React.Component{

	render() {
		return(
                <Router>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <PrivateRoute exact path='/home' component={Home} auth={this.props.authentication}/>
                    </Switch>
                </Router>
		);
	}
};


function mapStateToProps(state, props) {
    return {
        authentication: state.loginReducer.authentication,
    }
}

//Connect everything
export default connect(mapStateToProps)(Main);