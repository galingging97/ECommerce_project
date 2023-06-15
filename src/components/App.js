import React from 'react';
import '../assets/css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Card, Cards2, Cards3, Cards4, Daftar, Login, Profil} from ".";

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Card/>}/>
          <Route path='/user' element={<Cards2/>}/>
          <Route path='/chart' element={<Cards3/>}/>
          <Route path='/whislist' element={<Cards4/>}/>
          <Route path='/daftar' element={<Daftar/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/profil' element={<Profil/>}/>
        </Routes>
    </Router>
  );
}

export default App;
