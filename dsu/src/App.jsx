// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';
import SummarizePage from './pages/SummarizePage';
import QuizPage from './pages/QuizPage';
import DoubtPage from './pages/DoubtPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        {/* Define the routes for each page */}
        <Route path="/" element={<HomePage />} />
        <Route path="/learn" element={<LearnPage />} />
        <Route path="/summarize" element={<SummarizePage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/doubt" element={<DoubtPage />} />
      </Routes>
    </Router>
  );
}

export default App;
