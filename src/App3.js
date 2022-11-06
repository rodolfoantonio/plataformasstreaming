// This is a test from Ivan Vargas

import React, { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './router/Router';
import { firebaseApp } from './api/apiFirebase/apiConfig';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/Login';

const auth = getAuth(firebaseApp);

const App3 = () => {
  const [usuario, setUsuario] = useState(false);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase)
      setUsuario(usuarioFirebase)
    else
      setUsuario(null);
  });

  return (
    <>
    {console.log(usuario)}
      {usuario ? (
      <BrowserRouter>
        <Navbar />
          <Router />
        <Footer />
      </BrowserRouter>) :
      <Login />
      }
    </>
  );
}

export default App3;