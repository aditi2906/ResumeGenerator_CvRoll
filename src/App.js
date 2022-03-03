import React from "react";

import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import "./App.css";
import Homepage from "./containers/homepage";

function App() {
  return <div className="App">
  <Router>
    <Routes>
    <Route path="/" component={<Homepage/>} exact/>
      <Route exact path="/Resume" component={<Body/>} />
    </Routes>
  </Router>
    
  </div>;
}

export default App;
