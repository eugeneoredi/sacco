// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
import MembersList from './components/MembersList/MemberList';

function App() {
    return (
      <>
      <h1>SACCO</h1>
      <MembersList/>
      </>
        
    );
}

export default App;
