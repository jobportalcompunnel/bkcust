import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header/Header';
import Footer from './Layout/Footer/Footer';
import Home from './Home/Home';
import Pages from './Pages/Pages';

class App extends Component {
  render() {
    return (
	<div className="mainClass">
		<Router>
            <div>
               <Header />
               
               <Switch>
                  <Route exact path='/' component={Home} />
                  <Route exact path='/about-us' component={Pages} />
               </Switch>
            </div>
         </Router>
		<Footer />
		
    </div>
    );
  }
}

export default App;
