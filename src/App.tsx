import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Bands from "./pages/bands";
import Home from "./pages/home";
import Tickets from "./pages/tickets";
import L404 from "./pages/404";

function App() {
  return (
      <BrowserRouter>
          <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/bands" element={<Bands/>}/>
                <Route path="/tickets" element={<Tickets/>}/>
                <Route path="*" element={<L404/>}/>
          </Routes>
      </BrowserRouter>
  );
}


export default App;
