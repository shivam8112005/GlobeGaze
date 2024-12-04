
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
   {/* Without a unique key, React assumes that the component hasn't changed and does not reinitialize it,    */}
<Router>
<Navbar/>
<div className="container main">
<Routes>
  <Route exact path="/"
  element={
    <News key="latest" pagesize={6} country={"us"} category={"latest"} />
  }
 
  />
    <Route exact path="/business"
  element={
    <News key="business" pagesize={6} country={"us"} category={"business"} />
  }
  />
   <Route exact path="/entertainment"
  element={
    <News key="entertainment" pagesize={6} country={"us"} category={"entertainment"} />
  }
  />
   <Route exact path="/health"
  element={
    <News key="health" pagesize={6} country={"us"} category={"health"} />
  }
  />
   <Route exact path="/science"
  element={
    <News key="science" pagesize={6} country={"us"} category={"science"} />
  }
  />
   <Route exact path="/sports"
  element={
    <News key="sports" pagesize={6} country={"us"} category={"sport"} />
  }
  />
   <Route exact path="/technology"
  element={
    <News key="technology" pagesize={6} country={"us"} category={"technology"} />
  }
  />
  
</Routes>
</div>
</Router>
      
      </div>
    )
  }
}




