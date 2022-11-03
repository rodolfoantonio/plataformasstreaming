// This is a test from Ivan Vargas

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

import Home from './pages/Home';
import Catalogo from './pages/Catalogo';

import Router from './router/Router';

const App3 = () => {
  return (
    <BrowserRouter>
        <Navbar />
          <Router />
        <Footer />
    </BrowserRouter>
  );
}

export default App3;