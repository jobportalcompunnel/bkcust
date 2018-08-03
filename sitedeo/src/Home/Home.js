import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Cards from './Cards';
import Banners from './Banners';
import Ticker from './Ticker';
import Pages from '../Pages/Pages';
class Home extends Component {
	
  render() {
    return (
	<div className="container">
	
      <Banners />
      <Ticker />
      <Cards />
	  
	  
    </div>
		);
	}
}
export default Home;