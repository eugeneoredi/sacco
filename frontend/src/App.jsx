// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import NavBar from './components/NavBar/NavBar';
import MembersList from './components/MembersList/MemberList';

function App() {

  // useEffect(() => {
  //   const api_url = "https://animated-happiness-67699xv6vwpf5xjx-8000.app.github.dev/api/mamebers";
  //   fetch(api_url,{
  //     credentials: 'same-origin'
  //   })
  //     .then((res) => res.json())
  //     .then((members) => {
  //       console.log(members);
  //     })
  // }, []);
  return (
    <>
      <h1>SACCO</h1>
      <MembersList/>
    </>

  );
}

export default App;
