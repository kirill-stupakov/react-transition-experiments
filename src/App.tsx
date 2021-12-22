import React from "react";
import "./App.scss";

import HomePage from "./components/HomePage";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="App">
      <TopBar />
      <HomePage />
    </div>
  );
}

export default App;
