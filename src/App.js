
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  n="shivam"
  render() {
    return (
      <div>
       <Navbar/>
       <News pagesize={6} country={"us"} category={"sports"} />
      </div>
    )
  }
}




