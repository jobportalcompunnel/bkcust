import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from '../../Home/Home';
import Pages from '../../Pages/Pages';
class Header extends Component {
  render() {
    return (
	<div>
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
			  <div className="container">
				<a className="navbar-brand" href="#">Start Bootstrap</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
				  <span className="navbar-toggler-icon"></span>
				</button>
				
				<div className="collapse navbar-collapse" id="navbarResponsive">
				  <ul className="navbar-nav ml-auto">
					<li className="nav-item active">
					   <Link to={'/'}>Home</Link>
					</li>
					<li className="nav-item">
					  <Link to={'/about-us'}>About</Link>
					</li>
					<li className="nav-item">
					  <a className="nav-link" href="#">Services</a>
					</li>
					<li className="nav-item">
					  <a className="nav-link" href="#">Contact</a>
					</li>
				  </ul>
					
				
					
				</div>
				
				
			  </div>
			</nav>
			
			
			</div>
		);
	}
}
export default Header;