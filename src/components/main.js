import React from 'react';
import { connect } from 'react-redux';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './login';
import Home from './home';
import Organizations from './organizations';
import AddOrganization from './addOrganization';


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
                <Router basename={process.env.PUBLIC_URL}>
                    <Switch>
                        <Route exact path="/" component={Login}/>
                        <PrivateRoute exact path='/home' component={Home} auth={this.props.authentication}/>
                        <PrivateRoute exact path="/organizations" component={Organizations} auth={this.props.authentication}/>
                        <Route exact path="/addOrg" component={AddOrganization}/>
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