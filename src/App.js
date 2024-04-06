import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './login';
import Navbar from './navbar';
import Home from './home';
import RegisterPage from './register'; // Add this line


function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} /> {/* Add this line */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;