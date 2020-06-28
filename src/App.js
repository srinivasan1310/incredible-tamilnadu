import React from 'react';
import './App.css';
import Header from './components/header/header';
import './components/header/header.css'
import Footer from './components/footer/footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/home/home';
import Login from './components/login/login'
import Signup from './components/signup/signup'
import './components/footer/footer.css'

class App extends React.Component{
  render(){
    return(
      <Router>
              <Header/>
                <Switch>
                  <Route exact path="/" component = {Home}/>
                  <Route path="/Login" component = {Login}/>
                  <Route path="/Signup" component = {Signup}/>
                </Switch>
              <Footer/>
      </Router>
    )
  }
}



export default App;
