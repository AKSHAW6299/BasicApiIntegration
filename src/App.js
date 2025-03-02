import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './views/Home';
import Fetchmethod from './views/Fetchmethod';
import UsingAxios from './views/UsingAxios';
import UsingAxiosInstance from './views/UsingAxiosInstance';
import ReactQueryLibrary from './views/ReactQueryLibrary';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetchmethod" element={<Fetchmethod />} />
        <Route path="/usingaxios" element={<UsingAxios />} />
        <Route path="/reactquerylibrary" element={<ReactQueryLibrary />} />
        <Route path="/usingaxiosinstance" element={<UsingAxiosInstance />} />
      </Routes>
    </Router>
  );
}

export default App;
