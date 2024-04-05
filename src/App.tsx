import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';


import './App.css';

function App() {
  return (
    <>
      <header className="App-header">
        <nav>
        <ul className="Nav-list">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/movies">Movies</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          
        </ul>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  );
}

export default App;
