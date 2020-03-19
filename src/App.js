import React from 'react';
import './App.css';
import HomepageImage from './components/HomepageImage';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <body>
        <HomepageImage />
        <p>
          My custom React webpage
        </p>
      </body>
    </div>
  );
}

export default App;
