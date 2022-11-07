import React, { useState } from 'react';
import sweetAlert from './api/apiFirebase/sweetAlert';
import { BrowserRouter } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setDataUser } from "./redux/userSlice";
import { setMisPeliculas } from './redux/alquiladasSlice';
import Router from './router/Router';
import { firebaseApp } from './api/apiFirebase/apiConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import apiFirestore from './api/apiFirebase/apiFirestore';

import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Login from './pages/Login';

const auth = getAuth(firebaseApp);

const App3 = () => {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState(false);

  onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase)
      setUsuario(usuarioFirebase)
    else
      setUsuario(null);
  });

  const setState = async (usuario) => {
    let dataUser = await apiFirestore.getDataUser(usuario);
    if(dataUser && dataUser.uid != '')
      dispatch( setDataUser({ email: dataUser.email, uid: dataUser.uid }) );
    dispatch( setMisPeliculas(dataUser.mispeliculas) );

    sweetAlert.showSignIn(dataUser);
  }

  if(usuario)
    setState(usuario);
  
  return (
    <>
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