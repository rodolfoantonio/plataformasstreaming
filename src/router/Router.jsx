import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Catalogo from '../pages/Catalogo';
import MisPeliculas from './../pages/MisPeliculas';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalogo' element={<Home />} />
      <Route path='/mispeliculas' element={<MisPeliculas />} />
    </Routes>
  )
}

export default Router;