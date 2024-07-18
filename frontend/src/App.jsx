// App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Home from './Pages/Home';
import LoginDialog from './components/LoginDialog';
import DashBoard from './Pages/DashBoard';
// import MembersList from './components/MembersList/MemberList';
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
    <Router>
      <div className='App'>
        <NavBar />
        {/* <MembersList /> */}
        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard/>} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
