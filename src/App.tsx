import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Bands from "./pages/bands";
import Home from "./pages/home";

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/bands" element={<Bands/>}/>
          </Routes>
      </BrowserRouter>
  );
}


export default App;
