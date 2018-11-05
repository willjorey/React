import React from "react";
import '../css/navigation.css'
import { NavLink } from 'react-router-dom';


export const Navigation = (props) => {
		return(
			<nav className="navbar navbar-default">
				<div className="container">
					<div className="navbar-header">
						<ul className="nav navbar-nav">
							<li><NavLink to="/home">Home</NavLink></li>
							<li><NavLink to="/home">Organizations</NavLink></li>
							<li><NavLink to="/home">Tournaments</NavLink></li>
						</ul>
					</div>
				</div>
			</nav>
			);
};
