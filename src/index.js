import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Animals, AnimalGame, Endangered, AboutUs} from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Animals />} />
      <Route path="/Animals" element={<Animals />} />
      <Route path="/AnimalGame" element={<AnimalGame />} />
      <Route path="/Endangered" element={<Endangered />} />
      <Route path="/AboutUs" element={<AboutUs />} />
    </Routes>
  </BrowserRouter>
);
