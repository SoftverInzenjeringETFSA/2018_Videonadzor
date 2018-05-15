import React, { Component } from 'react';
import LandingPage from './Components/LandingPage.js'
import DashBoard from './Components/DashBoard.js'
import './App.css';
import {BrowserRouter} from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <DashBoard />
      </ BrowserRouter>
    );
  }
}

export default App;
