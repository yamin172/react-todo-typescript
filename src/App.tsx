import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './Components/Todos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Contacts />
      </header>
    </div>
  );
}

export default App;
