import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import { Home, PhonebookPage } from 'pages'
import Menu from 'components/Menu'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Route exact path="/" component={Home} />
        <Route exact path="/phonebook" component={PhonebookPage} />
      </div>
    );
  }
}

export default App;
