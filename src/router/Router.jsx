import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalogo' element={<Catalogo />} />
    </Routes>
  )
}

export default Router;