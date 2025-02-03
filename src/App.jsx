import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import HomePage from './components/homepage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home-page" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
