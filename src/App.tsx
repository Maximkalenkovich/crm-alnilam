import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Sidebar from "./components/navbar/NavBar";


function App() {
  return (
    <div className="App">
      <Header />
        <Sidebar/>
    </div>
  );
}

export default App;
