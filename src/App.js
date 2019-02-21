import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Home } from 'pages'
import Menu from 'components/Menu'
import PhoneBookContainer from 'containers/PhoneBookContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Route exact path="/" component={Home} />
        <Route exact path="/phonebook" component={PhoneBookContainer} />
      </div>
    );
  }
}

export default App;
