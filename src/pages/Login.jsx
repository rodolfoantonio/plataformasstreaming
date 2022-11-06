import React, { useState } from 'react';
import { firebaseApp } from '../api/apiFirebase/apiConfig'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const auth = getAuth(firebaseApp);

const Catalogo = () => {
  const [registro, setRegistro] = useState(false);

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if(registro)
      await createUserWithEmailAndPassword(auth, email, password);
    else
      await signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center py-5">Plataforma de Streaming UNIR</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-7'>
          <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src="https://image.tmdb.org/t/p/original/y5Z0WesTjvn59jP6yo459eUsbli.jpg" className="t-image" alt="1" />
              </div>
              <div className="carousel-item">
                <img src="https://image.tmdb.org/t/p/original/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg" className="t-image" alt="2" />
              </div>
              <div className="carousel-item">
                <img src="https://image.tmdb.org/t/p/original/naNXYdBzTEb1KwOdi1RbBkM9Zv1.jpg" className="t-image" alt="3" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className='col-md-5'>
          <div className='mt-5 ms-5'>
            <h2>{registro ? 'Registrarse' : 'Iniciar Sesión'}</h2>
            <form onSubmit={handlerSubmit}>
              <div className='pt-5 mb-3'>
                <label className='form-label text-white'>Correo Electrónico</label>
                <input type='email' id='email' placeholder='Ingresar Correo Electrónico' className='form-control' required style={{width: '50%'}}></input>
              </div>
              <div className='mb-5'>
                <label className='form-label text-white'>Contraseña</label>
                <input type='password' id='password' placeholder='Ingresar Contraseña' className='form-control' required style={{width: '50%'}}></input>
              </div>
              <button className='btn btn-danger' type='submit'>
                {registro ? 'Registrarse' : 'Iniciar Sesión'}
              </button>
            </form>
            <div className='form-group'>
              <button className='btn btn-primary mt-4' onClick={ () => setRegistro(!registro) }>
                {registro ? 'Ya tienes una cuenta? Inicia sesión' : 'No tienes cuenta? Registrate'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Catalogo;

