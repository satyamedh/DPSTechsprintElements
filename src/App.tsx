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
                <Route path="/DPSTechsprintElements/" element={<Home/>}/>
                <Route path="/DPSTechsprintElements/home" element={<Home/>}/>
                <Route path="/DPSTechsprintElements/bands" element={<Bands/>}/>
                <Route path="/DPSTechsprintElements/tickets" element={<Tickets/>}/>
                <Route path="*" element={<L404/>}/>
          </Routes>
      </BrowserRouter>
  );
}


export default App;
