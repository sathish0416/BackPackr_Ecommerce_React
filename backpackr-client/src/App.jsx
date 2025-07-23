import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Home from './pages/Home';
// import other pages as you create them

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/home" element={<Home />} />
        {/* Add more routes here as you build more pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
