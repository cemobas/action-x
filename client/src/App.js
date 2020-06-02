import React from 'react';
import './App.css';
import Acts from './components/Acts';

function App() {
  return (
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper center-align">
          <a href="/" className="brand-logo">Acts</a>
        </div>
      </nav>
      <div className="row">
        Acts here!!!!
        <Acts />
      </div>
    </div>
  );
}

export default App;
