// import React from 'react';
import { Component } from 'react';
import allEmployees from './allEmployees';
import Directory from './components/directory.jsx';

class App extends Component {
  render() {
    return(
      <Directory employees= { allEmployees }/> 
    )
  }
};

export default App;
