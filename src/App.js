// src/App.js
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import WelcomePage from './pages/welcome.js';
import LoginPage from './pages/loginpage.js';
import HomePage from './pages/homepage.js';
import ViewPage from './pages/viewpage.js';
import ReviewPage from './pages/reviewpage.js';
import InputPage from './pages/inputpage.js';
import AdminPage from './pages/adminpage.js';
import React from 'react';
import EditPage from './pages/editpage.js';
import HistoryPage from './pages/historypage.js';

function App() {
  return (
    <Router>
      <div className="h-fit font-inter">
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/view" element={<ViewPage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/edit" element={<EditPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
