
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
export default class App extends Component {
  n="shivam"
  render() {
    return (
      <div>
      
<Router>
<Navbar/>
<div className="container my-4">
<Routes>
  <Route exact path="/"
  element={
    <News pagesize={6} country={"us"} category={"general"} />
  }
 
  />
    <Route exact path="/buisness"
  element={
    <News pagesize={6} country={"us"} category={"business"} />
  }
  />
   <Route exact path="/entertainment"
  element={
    <News pagesize={6} country={"us"} category={"entertainment"} />
  }
  />
   <Route exact path="/health"
  element={
    <News pagesize={6} country={"us"} category={"health"} />
  }
  />
   <Route exact path="/science"
  element={
    <News pagesize={6} country={"us"} category={"science"} />
  }
  />
   <Route exact path="/sports"
  element={
    <News pagesize={6} country={"us"} category={"sports"} />
  }
  />
   <Route exact path="/technology"
  element={
    <News pagesize={6} country={"us"} category={"technology"} />
  }
  />
  
</Routes>
</div>
</Router>
      
      </div>
    )
  }
}




