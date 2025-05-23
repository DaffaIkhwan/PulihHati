import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';
import './index.css';
import SafeSpace from './components/SafeSpace';
import Home from "./components/Home";
import Chatbot from './chatbot';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/app/*" element={<App />} />
        <Route path="/safespace" element={<SafeSpace />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/" element={<Home />} />
        {/* Redirect to SafeSpace as default route */}
        <Route path="*" element={<Navigate to="/safespace" replace />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
