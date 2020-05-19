import React from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/register" component={RegistrationForm}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
