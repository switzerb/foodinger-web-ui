import React from 'react';
import { Container } from '@material-ui/core'
import AppHeader from "./AppHeader";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <Container maxWidth="lg">
          <AppHeader />
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Container>
  );
}

export default App;
