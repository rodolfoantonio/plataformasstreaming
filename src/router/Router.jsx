import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Login';
import Catalogo from '../pages/Catalogo';
import MisPeliculas from './../pages/MisPeliculas';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Catalogo />} />
      <Route path='/plataformasstreaming' element={<Catalogo />} />
      <Route path='/catalogo' element={<Catalogo />} />
      <Route path='/mispeliculas' element={<MisPeliculas />} />
    </Routes>
  )
}

export default Router;