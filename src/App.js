import React, { Component } from 'react';
import Nav from './components/nav-bar.js';
import SideMenu from './components/side-menu.js';
import MainContent from './components/main-content.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
	<SideMenu />
	<MainContent />
      </div>
    );
  }
}

export default App;
