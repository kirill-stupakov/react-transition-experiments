import React from 'react';
import './App.css';

import HomePage from "./components/HomePage";
import TopBar from "./components/TopBar";
import GridSelector from "./GridSelector/GridSelector";

function App() {
    const qw = new GridSelector([4, 7]);
  return (
    <div className="App">
        <TopBar/>
      <HomePage />
    </div>
  );
}

export default App;
