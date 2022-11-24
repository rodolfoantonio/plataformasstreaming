import React, { useState, useEffect } from "react";
import sweetAlert from "./api/apiFirebase/sweetAlert";
import { BrowserRouter } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDataUser } from "./redux/userSlice";
import { setMisPeliculas } from "./redux/alquiladasSlice";
import Router from "./router/Router";

import { firebaseApp } from "./api/apiFirebase/apiConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import apiFirestore from "./api/apiFirebase/apiFirestore";

import { isLogged, getDataUser, obtenerPeliculasCatalogo, obtenerPeliculasAlquiladas } from "./api/apiSpring/apiSpring";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/Login";

const auth = getAuth(firebaseApp);

const App3 = () => {
  const dispatch = useDispatch();
  const [usuario, setUsuario] = useState(false);

  /* onAuthStateChanged(auth, (usuarioFirebase) => {
    if(usuarioFirebase)
      setUsuario(usuarioFirebase)
    else
      setUsuario(null);
  }); */
  
  useEffect(() => {

    let l = await isLogged();  
    console.log("use effect "+l);
  },[])

  if (isLogged()) {
    console.log("logueado");
    //setUsuario(getDataUser());
  } else {
    setUsuario(null);
  }

  const setState = (usuario) => {
    let dataUser =  await apiFirestore.getDataUser(usuario);
    if (dataUser /*&& dataUser.uid != ''*/) {
      dispatch(setDataUser({ email: dataUser.email, nombre:dataUser.nombre, role: dataUser.role}));

      let misPeliculas;
      if(dataUser.role=='ADMIN'){
        misPeliculas = obtenerPeliculasCatalogo();
      }else{
        misPeliculas = obtenerPeliculasAlquiladas();
      }

      dispatch(setMisPeliculas(misPeliculas));
    }

    sweetAlert.showSignIn(dataUser);
  };

  if (usuario) setState(usuario);

  return (
    <>
      {usuario ? (
        <BrowserRouter>
          <Navbar />
          <Router />
          <Footer />
        </BrowserRouter>
      ) : (
        <div>No estas logueado {/* <Login /> */}</div> 
      )}
    </>
  );
};

export default App3;
