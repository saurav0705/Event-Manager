import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Register from './components/Register/Register';
import Admin from './components/Admin/Admin';
import UserDetails from './components/UserDetails/UserDetails';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/admin" component={Admin}/>
        <Route exact path="/user" component={UserDetails}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
