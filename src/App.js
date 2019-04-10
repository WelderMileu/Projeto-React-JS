import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="">
          <div className="card container col-lg-5 m-auto">
            <img src={logo} className="App-logo img-top" alt="logo" />
            <div className="card-body">
              <div className="card-header">
                <p>ReactJS</p>
              </div>
              <div className="card-text mt-3">
                <p className="text-muted"><strong>react-router-dom</strong></p>
              </div>
              <a href="#" className="card-link">Open File</a>
              <a href="#" className="card-link">Open Folder</a>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
