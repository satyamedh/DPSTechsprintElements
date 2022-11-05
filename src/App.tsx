import React from 'react';
import './App.css';
import {CustomNavbar} from "./IHateNamingThings/CustomNavbar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <title></title> {/* TODO insert title */}
          <link href="https://fonts.cdnfonts.com/css/lemonmilk" rel="stylesheet"></link>
          <CustomNavbar />
      </header>
    </div>
  );
}


export default App;
