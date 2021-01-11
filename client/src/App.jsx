import React from 'react';
import allEmployees from './allEmployees';
import Directory from './components/directory.jsx';

function App() {
  return (
    <div className="App">
      <Directory employees = {allEmployees}/>
    </div>
  );
}

export default App;
