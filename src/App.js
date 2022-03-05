import React from "react";

import { BrowserRouter, Route, Routes, } from 'react-router-dom';
import "./App.css";
import Homepage from "./containers/homepage";
import Body from "./components/Body/Body";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return <div className="App">
  
  <BrowserRouter>
  <ScrollToTop/>
  <Routes>
 
  <Route path="/" element={<Homepage/>} />
  <Route path="/body" element={<Body/>} />
  </Routes>
  </BrowserRouter>

    
  </div>;
}

export default App;
