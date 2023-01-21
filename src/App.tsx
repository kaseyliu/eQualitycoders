import React from 'react';
import './App.css';
import NavBar from './components/navbar/navbar';
import Home from './pages/homepage/homepage';


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home/>
    </div>
  );
}

export default App;
